import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('MailMgr')
export class MailMgr extends Component {

    private static ist: MailMgr;

    private mail_list: any[] = [];
    private mail_id_list: string[] = [];
    private mail_map: Map<string, any> = new Map();

    // ############################################################
    private test_data_mail_list: any[] = [
        {
            "mail_id": "001",
            "mail_title": "登录奖励",
            "sender": "官方",
            "text_content": "领主大人，这是您今日的登录奖励~",
            "mail_annex": [
                { "item_id": "Diamond", "num": 50 },
                { "item_id": "Gold", "num": 100000 },
                { "item_id": "GiftBox", "num": 10 }
            ],
            "isUnRead": true,
            "hasAnnex": true,
            "collected": false
        },
        {
            "mail_id": "002",
            "mail_title": "维护补偿",
            "sender": "官方",
            "text_content": "领主大人，本次服务器维护已结束，发放补偿如下：",
            "mail_annex": [
                { "item_id": "Diamond", "num": 200 },
                { "item_id": "Gold", "num": 100000 },
                { "item_id": "Energy", "num": 50 }
            ],
            "isUnRead": true,
            "hasAnnex": true,
            "collected": false
        }
    ]
    // ############################################################

    private constructor(name: string) {
        super(name);
        this.mail_list = this.getMails();
        this.mail_list.forEach(mail => {
            this.mail_id_list.push(mail["mail_id"]);
            this.mail_map.set(mail["mail_id"], mail);
        });
        Subscribe.listen("read mail", this.name, this.readMial, this);
        Subscribe.listen("collect annex", this.name, this.collectAnnex, this);
    }

    public static getInstance() {
        if (!MailMgr.ist) { MailMgr.ist = new MailMgr("MailMgr"); }
        return MailMgr.ist;
    }

    public getMailList() {
        return this.mail_list;
    }

    public addMail(mail: any) {
        this.mail_list.push(mail);
        this.mail_id_list.push(mail["mail_id"]);
        this.mail_map.set(mail["mail_id"], mail);
    }

    public removeMail(id: string) {
        let idx = this.mail_id_list.indexOf(id);
        this.mail_map.delete(id);
        this.mail_list.slice(idx, idx);
        this.mail_id_list.slice(idx, idx);
    }

    private readMial(id: string) {
        let mail = this.mail_map.get(id);
        if (mail && mail["isUnRead"]) {
            mail["isUnRead"] = false;
            this.updateMail();
        }
    }

    private collectAnnex(id: string) {
        let mail = this.mail_map.get(id);
        if (mail && mail["hasAnnex"] && !mail["collected"]) {
            mail["collected"] = true;
            this.updateMail();
        }
    }

    public updateMail() {
        // ################
        // 存储新的玩家邮件状态
        // ################
    }

    public reciveNewMail(mail: any) {
        if (mail["mail_id"] && mail["mail_title"] && mail["sender"] && mail["mail_content"]) { this.mail_list.push(mail); }
        // ##################################
        // Update mail message?
        // ##################################
    }

    private getMails() {
        // ##################################
        return this.test_data_mail_list; // #
        // ##################################
    }
}
