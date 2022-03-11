import { _decorator, Component, Node, Camera, geometry, find, EventTouch, PhysicsSystem, Vec3, v3, Input, input } from 'cc';
import { Configure } from './Configure';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;
const { Ray } = geometry;

@ccclass('MoveCamera')
export class MoveCamera extends Component {

    private static ist: MoveCamera;

    private conf: any; // 各个场景拖动摄像头的配置
    private curr_conf: any; // 当前场景拖动摄像头的配置
    private camera: Camera | null = null; // 当前场景的摄像头
    private ray = new Ray(); // 检测碰撞用的射线
    private max_x: number = 0; // 边界
    private min_x: number = 0;
    private max_z: number = 0;
    private min_z: number = 0;
    private pos: Vec3 = new Vec3(); // 摄像头当前位置
    private touch_dist: number = 0; // 双指在屏幕上触点之间的距离
    private scale: number = 1; // 当前缩放比例
    private max_scale: number = 1; // 最大缩放比例
    private min_scale: number = 1; // 最小缩放比例
    private safe_area: Node | null = null; // 整个3D场景的父节点(缩放用，但私以为这么做不是一个好方案)

    private constructor(name: string) {
        super(name);
        this.conf = Configure.getConfigure("base")["camera_move"]; // 读取配置文件

        Subscribe.listen("start load scene", this.name, this.disableMove, this);
        Subscribe.listen("change scene", this.name, this.changeScene, this); // 监听切换场景消息
        Subscribe.listen("continue move camera", this.name, this.enableMove, this);
        Subscribe.listen("stop move camera", this.name, this.disableMove, this);
        this.changeScene("StartScene", 1, null); // 第一次进入游戏
    }

    public static getInstance() { // 获取单例
        if (!MoveCamera.ist) { MoveCamera.ist = new MoveCamera("MoveCamera"); }
        return MoveCamera.ist;
    }

    private enableMove() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this); // 注册触摸事件
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private disableMove() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this); // 取消注册触摸事件
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    private changeScene(scene_name: string, num: number, data: any) {
        this.curr_conf = this.conf[scene_name]; // 根据场景名称更改当前配置
        if(!this.curr_conf) {
            Subscribe.trigger("log err", "Can't find configure named \'" + scene_name + "\'.");
            return;
        }
        if (this.curr_conf["enable"]) { this.enableMove(); }
        else { this.disableMove(); }
        this.max_x = this.curr_conf["max_x"];
        this.min_x = this.curr_conf["min_x"];
        this.max_z = this.curr_conf["max_z"];
        this.min_z = this.curr_conf["min_z"];
        this.scale = 1;
        this.max_scale = this.curr_conf["max_scale"];
        this.min_scale = this.curr_conf["min_scale"];
        let camera_node = find("Main Camera"); // 更换到新场景的摄像头
        if (!camera_node) { Subscribe.trigger("log err", "Can't find Main Camera!"); return; }
        this.camera = camera_node.getComponent(Camera); // 获取摄像头控件
        this.safe_area = find("SafeArea"); // 获取整个3D场景的父节点
    }

    private onTouchStart(e: EventTouch) {
        if (!this.curr_conf || !this.curr_conf["enable"] || !this.camera) { return; } // 未配置该场景或未使用移动摄像头功能
        let t_num = e.getAllTouches().length; // 获取手指数量
        if (t_num === 1) { // 一根手指则为移动模式
            if (this.curr_conf["ray_cast"]) { this.rayCast(e, "start"); } // 检测射线碰撞，以 触发点击事件
            Subscribe.trigger("touch screen start"); // 发射触摸屏幕事件
        }
        else if (t_num === 2) { // 两根手指则为缩放模式
            // 在触摸开始的时候记录两手指在屏幕上触点间的距离
            this.touch_dist = e.getAllTouches()[0].getLocation().subtract(e.getAllTouches()[1].getLocation()).length();
        }
    }

    private onTouchMove(e: EventTouch) {
        if (!this.curr_conf || !this.curr_conf["enable"] || !this.camera) { return; } // 未配置该场景或未使用移动摄像头功能
        let t_num = e.getAllTouches().length; // 获取手指数量
        if (t_num === 2) {
            let touchs = e.getAllTouches(); // 获取触点
            let dist: number = touchs[0].getLocation().subtract(touchs[1].getLocation()).length(); // 计算距离
            this.scaleScene(dist / this.touch_dist); // 计算缩放比例并调用缩放方法
            this.touch_dist = dist; // 更新当前缩放比例
        } else if (t_num === 1) {
            this.camera.node.getPosition(this.pos); // 获取初始位置
            let temp_x = this.pos.x - e.getDeltaX() * 0.1; // 根据位移量计算摄像机的位移
            let temp_z = this.pos.z + e.getDeltaY() * 0.1;
            this.pos.x = temp_x > this.max_x ? this.max_x : (temp_x < this.min_x ? this.min_x : temp_x); // 边缘检测
            this.pos.z = temp_z > this.max_z ? this.max_z : (temp_z < this.min_z ? this.min_z : temp_z);
            this.camera.node.setPosition(this.pos); // 应用位移
        }
    }

    private onTouchEnd(e: EventTouch) {
        if (!this.curr_conf || !this.curr_conf["enable"] || !this.camera) { return; } // 未配置该场景或未使用移动摄像头功能
        if (this.curr_conf["ray_cast"]) { this.rayCast(e, "end"); }
        let t_num = e.getAllTouches().length;
        if (t_num <= 1)
            Subscribe.trigger("touch screen end");
    }

    private rayCast(e: EventTouch, type: string) { // 射线检测
        if (!this.camera) { return; }
        this.camera.screenPointToRay(e.getLocationX(), e.getLocationY(), this.ray); // 发出射线
        if (PhysicsSystem.instance.raycast(this.ray)) { // 检测碰撞
            let res = PhysicsSystem.instance.raycastResults; // 获得检测结果
            if (res.length <= 0) { return; }
            Subscribe.trigger("touch_" + type + res[0].collider.node.uuid); // 发射结果
            Subscribe.trigger("touch_" + type);
        }
    }

    private scaleScene(rate: number) {
        if (!this.safe_area) { return; }
        let curr_scale = this.scale; // 保存当前比例
        this.scale *= rate; // 缩放
        this.scale = this.scale < this.min_scale ? this.min_scale : this.scale; // 边界检测
        this.scale = this.scale > this.max_scale ? this.max_scale : this.scale;
        if (this.scale != curr_scale * rate) { rate = this.scale / curr_scale; } // 约束
        this.safe_area.setScale(v3(this.scale, this.scale, this.scale)); // 应用缩放
    }
}
