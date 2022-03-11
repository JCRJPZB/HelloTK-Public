import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { ImgMgr } from '../../../Tools/ImgMgr';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('HeroListPortrait')
export class HeroListPortrait extends Component {

    private imgMgr: ImgMgr | null = null;
    private sp: Sprite | null | undefined = null;
    private name_lbl: Label | null | undefined = null;
    private isSelect: Node | null = null;

    init(data: any) {
        this.imgMgr = ImgMgr.getInstance();
        this.sp = this.node.getChildByName("Sprite")?.getComponent(Sprite);
        this.name_lbl = this.node.getChildByName("Label")?.getComponent(Label);
        this.isSelect = this.node.getChildByName("IsSelect");

        if (this.sp) { this.sp.spriteFrame = this.imgMgr.getImg(data["hero_id"]); }
        if (this.name_lbl) { this.name_lbl.string = data["name"]; }
        if (this.isSelect) { this.isSelect.active = false; }

        this.node.on("click", () => {
            if (this.isSelect?.active === true) { return; }
            Subscribe.trigger("change check hero in list", data["id"]);
        });
        Subscribe.listen("change check hero in list", this.node.uuid, (id: string) => {
            if (this.isSelect) {
                if (id != data["id"]) { this.isSelect.active = false; }
                else { this.isSelect.active = true; }
            }
        });
    }

}
