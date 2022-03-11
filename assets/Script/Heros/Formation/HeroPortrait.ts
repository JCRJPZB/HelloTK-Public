import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { ImgMgr } from '../../Tools/ImgMgr';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('HeroPortrait')
export class HeroPortrait extends Component {

    private id: string = ""; // 当前武将id
    private unselected: Node | null = null; // 未被选中时的边框节点
    private selected: Node | null = null; // 被选中时的边框节点
    private select_trigger: Node | null = null; // 选中触发器
    private is_select: boolean = false; // 是否被编队选中标志
    private portrait: Sprite | null | undefined = null; // 武将头像精灵组件
    private name_lbl: Label | null | undefined = null; // 武将名称Label
    private lv_lbl: Label | null | undefined = null; // 武将等级Label
    private sp_trigger: Node | null = null; // 设为/取消常用触发器
    private sp_disable: Node | null | undefined = null; // 非常用
    private sp_enable: Node | null | undefined = null; // 常用
    private is_sp: boolean = false; // 是否是常用标志

    onLoad() { // 获取组件、节点
        this.unselected = this.node.getChildByName("Border_unselected");
        this.selected = this.node.getChildByName("Border_selected");
        this.select_trigger = this.node.getChildByName("Select_trigger");
        this.portrait = this.node.getChildByName("Portrait")?.getComponent(Sprite);
        this.name_lbl = this.node.getChildByName("Name")?.getComponent(Label);
        this.lv_lbl = this.node.getChildByName("Lv_Label")?.getComponent(Label);
        this.sp_trigger = this.node.getChildByName("Sp_trigger");
        this.sp_disable = this.sp_trigger?.getChildByName("Sp_disable");
        this.sp_enable = this.sp_trigger?.getChildByName("Sp_enable");
    }

    init(conf: any) {
        this.id = conf["id"]; // 设置id
        this.is_select = conf["is_select"]; // 获取被编队选中状态
        if (this.selected && this.unselected) { this.selected.active = this.is_select; this.unselected.active = !this.is_select; }
        if (this.select_trigger) {
            this.select_trigger.on("click", () => { // 触发选中，发射选中消息
                Subscribe.trigger("change hero selected", this.id, this.is_select, this.changeSelected.bind(this));
            });
        }

        if (this.name_lbl) { this.name_lbl.string = conf["name"]; } // 显示武将名称
        if (this.lv_lbl) { this.lv_lbl.string = "Lv." + conf["level"]; } // 显示武将等级
        this.is_sp = conf["is_sp"]; // 设置常用状态
        if (this.sp_disable && this.sp_enable && this.sp_trigger) {
            this.sp_trigger.on("click", this.changeSphero, this); // 触发取消/设为常用，发射消息
            this.sp_disable.active = !this.is_sp; // 修改常用标记
            this.sp_enable.active = this.is_sp;
        }
        if (this.portrait) this.portrait.spriteFrame = ImgMgr.getInstance().getImg(conf["hero_id"]); // 显示武将头像
    }

    changeSelected() { // 修改被编队选中的状态
        if (this.selected && this.unselected) {
            this.is_select = !this.is_select;
            this.selected.active = this.is_select;
            this.unselected.active = !this.is_select;
        }
    }

    changeSphero() { // 修改常用状态
        if (this.sp_disable && this.sp_enable) {
            this.is_sp = !this.is_sp;
            this.sp_disable.active = !this.is_sp;
            this.sp_enable.active = this.is_sp;
            Subscribe.trigger("changeSpHero", this.id, this.is_sp);
        }
    }
}
