import { _decorator, Component, Node, Label } from 'cc';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('MailTitle')
export class MailTitle extends Component {

    private title_lbl: Label | null | undefined = null;
    private isUnRead: Node | null = null;
    private hasAnnex: Node | null = null;

    init(info: any, callback: CallableFunction) {
        Subscribe.listen("read mail", info["mail_id"], (id: string) => {
            if (this.isUnRead && id == info["mail_id"]) { this.isUnRead.active = false; }
        });
        Subscribe.listen("collect annex", info["mail_id"], (id: string) => {
            if (this.hasAnnex && id == info["mail_id"]) { this.hasAnnex.active = false; }
        });
        this.title_lbl = this.node.getChildByName("Label")?.getComponent(Label);
        this.isUnRead = this.node.getChildByName("IsUnRead");
        this.hasAnnex = this.node.getChildByName("HasAnnex");
        if (this.title_lbl) { this.title_lbl.string = info["mail_title"]; }
        if (this.isUnRead) { this.isUnRead.active = info["isUnRead"]; }
        if (this.hasAnnex && info["hasAnnex"]) {this.hasAnnex.active = !info["collected"]; }
        this.node.on("click", () => {
            if (this.isUnRead) { this.isUnRead.active = false; }
            callback();
        });
    }
}
