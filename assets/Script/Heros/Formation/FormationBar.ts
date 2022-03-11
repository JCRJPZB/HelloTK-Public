import { _decorator, Component, Node, Label } from 'cc';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('FormationBar')
export class FormationBar extends Component {

    private name_lbl: Label | null | undefined = null; // 阵型名Label
    private intro_lbl: Label | null | undefined = null; // 阵型介绍Label
    private trigger: Node | null = null; // 点击触发器节点
    private point_dis: Node | null = null; // 未激活时的标记节点
    private point_en: Node | null = null; // 激活时的标记节点
    private isEnable: boolean = false; // 是否激活flag

    onLoad() { // 获取各个组件
        this.name_lbl = this.node.getChildByPath("Mask/Layout/Name")?.getComponent(Label);
        this.intro_lbl = this.node.getChildByPath("Mask/Layout/Introduce")?.getComponent(Label);
        this.trigger = this.node.getChildByName("Trigger");
        this.point_dis = this.node.getChildByName("Disable");
        this.point_en = this.node.getChildByName("Enable");
    }

    init(data: any, curr_id: string) {
        if (this.name_lbl) { this.name_lbl.string = data["name"] + "："; } // 更新名称
        if (this.intro_lbl) { this.intro_lbl.string = data["introduce"]; } // 更新简介
        if (this.trigger && this.point_dis && this.point_en) { // 点击事件
            this.trigger.on("click", () => { if (!this.isEnable) Subscribe.trigger("change formation", data["id"]); });
            this.point_dis.active = true; // 初始化标记点状态
            this.point_en.active = false;
            if (data["id"] == curr_id) { // 根据玩家数据判断是否当前选中
                this.point_en.active = true; // 是当前选中则修改标记点状态
                this.point_dis.active = false;
                this.isEnable = true;
            }
        }
    }

    changeState(isEnable: boolean) { // 修改选中状态
        if (this.point_dis && this.point_en) {
            this.point_dis.active = !isEnable;
            this.point_en.active = isEnable;
            this.isEnable = isEnable;
        }
    }
}
