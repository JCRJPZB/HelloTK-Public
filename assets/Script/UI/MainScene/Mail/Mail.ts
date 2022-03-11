import { _decorator, Node, Label, find, v3 } from 'cc';
import { ItemMgr } from '../../../Items/ItemMgr';
import { Generator } from '../../../Tools/Generator';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
import { MailMgr } from './MailMgr';
import { MailTitle } from './MailTitle';
const { ccclass, property } = _decorator;

@ccclass('Mail')
export class Mail extends UIBase {

    private gen: Generator | null = null;

    private mail_list: string[] = [];
    private mail_map: Map<string, any> = new Map();
    private currMail: any;

    private mail_title_root: Node | undefined;
    private mail_sender: Label | null | undefined = null;
    private text_content: Label | null | undefined = null;
    private mail_annex_root: Node | undefined;
    private collect_btn: Node | undefined;
    private collected: Node | undefined;

    private alert_Lbl_Root: Node | undefined;

    protected onInit() {
        this.addBtnEvent();

        this.gen = Generator.getInstance();

        this.mail_title_root = this.getNode("Title_Content");
        this.mail_sender = this.getComp("Sender", "Label");
        this.text_content = this.getComp("Text_Content", "Label");
        this.mail_annex_root = this.getNode("Annex_Content");
        this.collect_btn = this.getNode("Collect");
        this.collected = this.getNode("Collected");

        this.alert_Lbl_Root = this.getNode("Alert_Lbl_Root");
    }

    protected onOpen() {
        this.refreshMail();
    }

    private addBtnEvent() {
        this.addClickEvent("Quit", this.hide, this);
        this.addClickEvent("Return", this.hide, this);
        this.addClickEvent("AllRead", this.allRead, this);
        this.addClickEvent("Collect", this.collect_item, this);
    }

    private refreshMail() {
        if (!this.gen) { this.gen = Generator.getInstance(); }
        if (this.mail_title_root) {
            let list = MailMgr.getInstance().getMailList();
            if (list.length > this.mail_list.length) {
                for (let i = this.mail_list.length; i < list.length; i++) {
                    this.mail_list.push(list[i]["mail_id"]);
                    this.mail_map.set(list[i]["mail_id"], list[i]);
                    let new_title = this.gen.generator(this.mail_title_root, "Mail_Title");
                    let ctrl = new_title?.getComponent(MailTitle);
                    if (ctrl) { ctrl.init(list[i], () => { this.readMail(list[i]["mail_id"]) }); }
                }
            }
            this.readMail(this.mail_list[0]);
        }
    }

    private readMail(mail_id: string) {
        if (this.mail_sender && this.text_content) {
            let mail = this.mail_map.get(mail_id);
            if (mail) {
                this.currMail = mail;
                this.mail_sender.string = "From: " + mail["sender"];
                this.text_content.string = mail["text_content"];
                this.mail_annex_root?.removeAllChildren();
                mail["mail_annex"].forEach((annex: any) => {
                    if (!this.mail_annex_root) { return; }
                    ItemMgr.getInstance().getItemNode(annex["item_id"], this.mail_annex_root, annex["num"]);
                });
                if (this.collect_btn && this.collected) {
                    if (mail["hasAnnex"] && !mail["collected"]) {
                        this.collect_btn.active = true;
                        this.collected.active = false;
                    }
                    else {
                        this.collect_btn.active = false;
                        this.collected.active = true;
                    }
                }
                Subscribe.trigger("read mail", mail["mail_id"]);
            }
        }
    }

    private allRead() { }

    private collect_item() {
        // ########################################################################
        if (this.currMail["hasAnnex"] && !this.currMail["collected"] && this.currMail["mail_annex"].length > 0) {
            this.currMail["mail_annex"].forEach((annex: any) => {
                Subscribe.trigger("collect item", annex["item_id"], annex["num"]);
            });
        }
        // ########################################################################
        // 由于网络等因素导致的领取失败需要考虑
        if (this.collect_btn) {
            if (this.alert_Lbl_Root) {
                Subscribe.trigger("alert UI", "领取成功！!", this.alert_Lbl_Root); // 显示提示Label
            }
            this.collect_btn.active = false;
            if (this.collected) { this.collected.active = true; }
        }
        Subscribe.trigger("collect annex", this.currMail["mail_id"]);
    }

    private hide() {
        Subscribe.trigger("go back page");
    }

}
