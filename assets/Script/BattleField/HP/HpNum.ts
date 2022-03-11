import { _decorator, Component, Node, find, Label, Camera } from 'cc';
import { Functions } from '../../Tools/Functions';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('HpNum')
export class HpNum extends Component {
    // private soliders: Node[] = [];
    private lbl: Label = new Label(); // 进度条
    private curHp: number = 0; // 当前血量
    private camp: string = ""; // 阵营

    onLoad() {
        let lbl = this.getComponent(Label);
        if (!lbl) { Subscribe.trigger("print err", "Node doesn't have component named \'Label\'!"); return; }
        this.lbl = lbl;
    }

    init(hp: number, target: Node, camp: string) { // 血量，血量跟随的3D物体，阵营
        if (!this.lbl) { Subscribe.trigger("log err", "Label hasn't initialized!"); return; }
        this.curHp = hp;
        this.lbl.string = Functions.numToStr(this.curHp); // 数字转字符串并设置
        this.camp = camp;
        let camera = find("/Main Camera")?.getComponent(Camera); // 主摄像机
        this.scheduleOnce(() => {
            if (!camera) { Subscribe.trigger("log err", "Can't find camera!"); return; }
            Functions.UIFllow3DNode(this.node, camera, target); // 防止节点位置未初始化，间隔短暂时间后修正一次位置
        }, 0.1);
    }

    changeHp(value: number) { // 血量变化
        let rest = this.curHp + value;
        this.curHp = rest > 0 ? rest : 0;
        this.lbl.string = Functions.numToStr(this.curHp);
        return rest;
    }

    // 获取当前血量所属单位的阵营
    getCamp() { return this.camp; }
}
