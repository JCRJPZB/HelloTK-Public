import { _decorator, Component, Node, Sprite, Label, v3 } from 'cc';
import { PlayerMgr } from '../../../Player/PlayerMgr';
import { ImgMgr } from '../../../Tools/ImgMgr';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('LeagueJoin')
export class LeagueJoin extends Component {

    private league_id: string = "";

    private conf: any = null;

    private flag: Sprite | null | undefined;
    private league_name: Label | null | undefined;
    private describe: Label | null | undefined;
    private member: Label | null | undefined;
    private join_btn: Node | null = null;

    onLoad() {
        let layout = this.node.getChildByName("Join_Layout");
        if (!layout) {
            Subscribe.trigger("log err", "Can't find node named \'Join_Layout\'");
            return;
        }
        this.flag = layout.getChildByPath("Join_Flag")?.getComponent(Sprite);
        this.league_name = layout.getChildByPath("Join_Name")?.getComponent(Label);
        this.describe = layout.getChildByPath("Join_Describe")?.getComponent(Label);
        this.member = layout.getChildByPath("Join_Member")?.getComponent(Label);
        this.join_btn = layout.getChildByPath("Join_Btn");
        this.join_btn?.on("click", () => {
            if (this.conf && this.conf["num_of_member"] < this.conf["max_member"]) {
                PlayerMgr.getInstance().joinLeague(this.league_id);
                Subscribe.trigger("open UI", "LeagueInfo", "Window");
            } else if (this.conf && this.join_btn) {
                Subscribe.trigger("alert UI", "该联盟已满员！", this.join_btn, v3(-50, 0, 0));
            }
        });
    }

    public init(conf: any) {
        this.conf = conf;
        this.league_id = conf["league_id"];
        if (!this.flag || !this.league_name || !this.describe || !this.member || !this.join_btn) {
            Subscribe.trigger("log err", "Node has not been inited yet!");
        }
        if (this.flag) {
            this.flag.spriteFrame = ImgMgr.getInstance().getImg(conf["flag"]);
            if (!this.flag.spriteFrame) {
                Subscribe.trigger("log err", "Can't find image named \'" + conf["flag"] + "\'");
            }
        }
        if (this.league_name) {
            this.league_name.string = conf["league_name"];
        }
        if (this.describe) {
            this.describe.string = conf["describe"];
        }
        if (this.member) {
            this.member.string = conf["num_of_member"].toString() + "/" + conf["max_member"].toString();
        }
    }
}
