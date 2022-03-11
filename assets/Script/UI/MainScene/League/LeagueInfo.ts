import { _decorator, Node, Label, Sprite, EditBox } from 'cc';
import { PlayerMgr } from '../../../Player/PlayerMgr';
import { ImgMgr } from '../../../Tools/ImgMgr';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
import { LeagueMgr } from './LeagueMgr';
const { ccclass, property } = _decorator;

@ccclass('LeagueInfo')
export class LeagueInfo extends UIBase {

    private leagueMgr: LeagueMgr | null = null;
    private playerMgr: PlayerMgr | null = null;

    private league_id: string = "";

    private league_name: Label | null | undefined = null;
    private lord: Label | null | undefined = null;
    private lord_pid: string = "";
    private land: Label | null | undefined = null;
    private numOfMember: Label | null | undefined = null;
    private league_flag: Sprite | null | undefined = null;
    private describe_box: EditBox | null | undefined = null;
    private describe_lbl: Label | null | undefined = null;

    protected onInit() {
        this.addBtnEvent();
        
        Subscribe.listen("refresh league info", this.name, this.refreshInfo, this);

        this.leagueMgr = LeagueMgr.getInstance();
        this.playerMgr = PlayerMgr.getInstance();
        this.league_name = this.getComp("Name", "Label");
        this.lord = this.getComp("Lord", "Label");
        this.land = this.getComp("Land", "Label");
        this.numOfMember = this.getComp("NumOfMember", "Label");
        this.league_flag = this.getComp("Detail_Flag", "Sprite");
        this.describe_box = this.getComp("Describe_Editor", "EditBox");
        this.describe_lbl = this.getComp("Describe_Label", "Label");

        this.describe_box?.node.on("editing-did-ended", this.changeDescribe, this);
    }

    protected onOpen() {
        if (!this.playerMgr) {
            this.playerMgr = PlayerMgr.getInstance();
        }
        Subscribe.trigger("open UI", "DynamicList", "Window", this.playerMgr.getPlayerInfo("league_id"));
        this.refreshInfo(this.playerMgr.getPlayerInfo("league_id"));
        let pid = this.playerMgr.getPlayerInfo("pid");
        if (pid === this.lord_pid && this.describe_lbl && this.describe_box) {
            this.describe_box.node.active = true;
            this.describe_lbl.node.active = false;
        }
    }

    protected onClose() {
        Subscribe.trigger("close UI", "DynamicList", "Window");
    }

    private refreshInfo(league_id: string) {
        if (!this.leagueMgr) {
            this.leagueMgr = LeagueMgr.getInstance();
        }
        let info = this.leagueMgr.getLeagueInfoById(league_id);

        this.league_id = league_id;
        if (this.league_name && info["league_name"]) { this.league_name.string = info["league_name"]; }
        if (this.lord && info["lord_name"]) { this.lord.string = info["lord_name"]; }
        this.lord_pid = info["lord_pid"];
        if (this.land && info["land"]) { this.land.string = info["land"]; }
        if (this.numOfMember && info["num_of_member"] && info["max_member"]) {
            let num_of_member = info["num_of_member"] + '/' + info["max_member"];
            this.numOfMember.string = num_of_member;
        }
        if (this.league_flag && info["flag"]) {
            let spf = ImgMgr.getInstance().getImg(info["flag"]);
            if (spf) { this.league_flag.spriteFrame = spf; }
        }
        if (this.describe_box && info["describe"]) { this.describe_box.string = info["describe"]; }
        if (this.describe_lbl && info["describe"]) { this.describe_lbl.string = info["describe"]; }
        Subscribe.trigger("refresh dynamics", this.league_id);
    }

    private changeDescribe(box: EditBox) {
        // ########################
        // 将新的联盟描述上传到服务器
        // ########################
    }

    private addBtnEvent() {
        this.addClickEvent("Shop", this.shop, this);
        this.addClickEvent("Tasks", this.tasks, this);
        this.addClickEvent("Battle", this.battle, this);
        this.addClickEvent("Member", this.member, this);
        this.addClickEvent("Contribution", this.contribution, this);
        this.addClickEvent("Leave", this.leaveLeague, this);
    }

    private shop() {
        console.log("shop");
    }
    private tasks() {
        console.log("tasks");
    }
    private battle() {
        console.log("battle");
    }
    private member() {
        console.log("member");
    }
    private contribution() {
        console.log("contribution");
    }
    private leaveLeague() {
        PlayerMgr.getInstance().leaveLeague();
        Subscribe.trigger("close UI", "LeagueInfo", "Window");
        Subscribe.trigger("open UI", "LeagueList", "Window");
    }
}
