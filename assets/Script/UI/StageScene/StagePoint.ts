import { _decorator, Component, Node, Label, find, Camera, Material, MeshRenderer, v3, tween, Vec3 } from 'cc';
import { MonsterMgr } from '../../BattleField/Monster/MonsterMgr';
import { Functions } from '../../Tools/Functions';
import { Generator } from '../../Tools/Generator';
import { ResMgr } from '../../Tools/ResMgr';
import { Subscribe } from '../../Tools/Subscribe';
import { StageMgr } from './StageMgr';
const { ccclass, property } = _decorator;

@ccclass('StagePoint')
export class StagePoint extends Component {
    private ui_target: Node | null = null; // 要跟随的3D物体
    private ui_node: Node | null = null; // UI节点
    private text: Label | null = null; // 关卡标题
    private camera: Camera | null | undefined = null; // 主摄像头
    private meshR: MeshRenderer | null = null; // 材质管理
    private enable_mtr: Material | null = null; // 可用状态材质
    private disable_mtr: Material | null = null; // 禁用状态材质
    private select_mtr: Material | null = null; // 选中状态材质
    private isEnabled: boolean = false; // 可用状态标识
    private slt_flag: boolean = false; // 被选中标识
    private data: any = null; // 关卡内怪物的配置

    onLoad() {
        this.meshR = this.node.getComponent(MeshRenderer); // 获取材质管理器
        ResMgr.loadRes("Material", "/Stage/Stage_enable", Material, (res: Material) => { // 加载可用状态材质
            this.enable_mtr = res;
            if (this.isEnabled) {
                this.meshR?.setMaterial(this.enable_mtr, 0);
            }
        });
        ResMgr.loadRes("Material", "/Stage/Stage_disable", Material, (res: Material) => { // 加载禁用状态材质
            this.disable_mtr = res;
        });
        ResMgr.loadRes("Material", "/Stage/Stage_selected", Material, (res: Material) => { // 加载选中状态材质
            this.select_mtr = res;
        });
        Subscribe.listen("touch_start" + this.node.uuid, this.node.uuid, () => { // 触摸开始事件
            if (!this.isEnabled) { return; }
            this.slt_flag = true;
            this.meshR?.setMaterial(this.select_mtr, 0); // 将材质改为被选中
        });
        Subscribe.listen("touch_end" + this.node.uuid, this.node.uuid, () => { // 触摸结束事件(触点在自身)
            if (this.isEnabled && this.slt_flag) { // 只有当可用且触摸标识在自身时才响应
                this.changeSelect();
            }
        });
        Subscribe.listen("touch_end", this.node.uuid, () => { // 触摸结束事件
            if (this.isEnabled && this.slt_flag) {
                this.slt_flag = false;
                this.meshR?.setMaterial(this.enable_mtr, 0); // 恢复到选中状态材质
            }
        });
    }

    init(uiParent: Node, conf: any) {
        Subscribe.listen("stage available " + conf["id"], this.uuid, this.changeState, this);
        this.ui_target = this.node.getChildByName("UITarget"); // UI跟随的节点（3D)
        this.camera = find("/Main Camera")?.getComponent(Camera); // 主摄像机
        let pos = v3(conf["pos"][0], conf["pos"][1], conf["pos"][2]); // 摆放
        this.node.setPosition(pos);
        let gen = Generator.getInstance(); // 预制体生成器
        this.ui_node = gen.generator(uiParent, "Stage_UI"); // 生成UI节点
        if (this.ui_target && this.ui_node) {
            let label = this.ui_node.getChildByName("Label");
            if (label) { this.text = label.getComponent(Label); }
            if (this.text) { this.text.string = conf["name"]; } // 设置关卡名称
            let mstMgr = MonsterMgr.getInstance(); // 怪物管理器
            let mst_conf: any[] = [];
            conf["monsters"].forEach((mst: any) => { // 获取关卡内的怪物配置
                mst_conf.push(mstMgr.getMonsterAttr(mst));
            });
            let mst_pos_idxs: any[] = [];
            for (let i = 0; i < mst_conf.length; i++) { mst_pos_idxs.push({ "id": mst_conf[i]["id"], "idx": i }); } // 生成配置
            this.data = { // 生成数据
                "stage_id": conf["id"],
                "formation": { "id": "monster", "name": "怪物", "ids_idxs": mst_pos_idxs, "pos_idxs": [0, 1, 2, 3, 4, 5, 6, 7, 8] },
                "heros": mst_conf
            };
            if (conf["available"]) { // 若已通关或解锁则改为可用状态
                this.ui_node.on("click", this.changeSelect, this);
                this.isEnabled = true;
                if (conf["id"] === StageMgr.getInstance().getLastStageId()) { // 此处初始化了进入选关界面以后显示哪个关卡
                    this.changeSelect();
                }
            }
        }
    }

    private changeSelect() { // 改变选中关卡
        let x = this.node.getPosition().x + 10;
        if (this.camera) {
            let camera_pos = this.camera.node.getPosition();
            let camera_tween = tween(this.camera.node) // 缓动移动摄像头到关卡位置
                .to(1, { position: v3(x, camera_pos.y, camera_pos.z) }, { easing: "sineInOut" })
                .call(() => { Subscribe.remove("touch screen start", this.name); }) // 缓动结束后移除监听
                .start();
            Subscribe.listen("touch screen start", this.name, () => { // 监听触摸事件
                camera_tween.stop(); // 移动过程中有触摸事件则终止缓动
                Subscribe.remove("touch screen start", this.name); // 终止后移除监听
            }, this);
        }
        Subscribe.trigger("change select stage", this.data);
    }

    private changeState(available: boolean) {
        if (available) {
            this.meshR?.setMaterial(this.enable_mtr, 0);
        } else {
            this.meshR?.setMaterial(this.disable_mtr, 0);
        }
    }

    update() {
        if (this.ui_target && this.camera && this.ui_node) {
            Functions.UIFllow3DNode(this.ui_node, this.camera, this.ui_target); // 跟随3D节点
        }
    }
}
