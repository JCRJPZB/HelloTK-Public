import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('PlayerMgr')
export class PlayerMgr extends Component {

    private static ist: PlayerMgr;

    private player_info: any = null;
    private player_list: any = [];
    private player_map: Map<string, any> = new Map();

    // #############################################
    private test_data_player_info: any = {
        "pid": "22389299",
        "pname": "紫冰",
        "league_id": null, //"1000001",
        "items": ["10001", "10002", "10003"]
    };

    private test_data_player_list: any = [
        {
            "pid": "22389299",
            "pname": "紫冰",
            "league_id": "1000001",
            "items": ["10001", "10002", "10003"]
        },
        {
            "pid": "36279225",
            "pname": "测试账号",
            "league_id": null,
            "items": []
        },
        {
            "pid": "10000001",
            "pname": "《HelloTK》官方",
            "league_id": "1000001",
            "items": []
        }
    ]
    // #############################################

    private constructor(name: string) {
        super(name);
        this.player_info = this.getPlayer();
        this.player_list = this.getPlayerList();
        this.player_list.forEach((player: any) => { this.player_map.set(player["pid"], player); });
    }

    public static getInstance() {
        if (!PlayerMgr.ist) { PlayerMgr.ist = new PlayerMgr("PlayerMgr"); }
        return PlayerMgr.ist;
    }

    public getPlayerAllInfo() {
        return this.player_info;
    }

    public getPlayerInfo(info_id: string) {
        return this.player_info[info_id];
    }

    public getPlayerAllInfoById(pid: string) {
        if (!this.player_map.has(pid)) { return null; }
        return this.player_map.get(pid);
    }

    public getPlayerInfoById(pid: string, info: string) {
        if (!this.player_map.has(pid)) { return null; }
        return this.player_map.get(pid)[info];
    }

    public leaveLeague() {
        if (!this.player_info["league_id"]) {
            return;
        }
        Subscribe.trigger("player leave league", this.player_info["league_id"], this.player_info["pid"]);
        this.player_info["league_id"] = null;
        this.updateInfo();
    }

    public joinLeague(league_id: string) {
        if (this.player_info["league_id"]) {
            Subscribe.trigger("log err", "已加入其它联盟!");
            return;
        }
        this.player_info["league_id"] = league_id;
        this.updateInfo();
        Subscribe.trigger("player join league", league_id, this.player_info["pid"]);
    }

    private updateInfo() {
        // #########################
        //     上传更新玩家信息     #
        // #########################
    }

    private getPlayerList() {
        // ####################################
        return this.test_data_player_list; // #
        // ####################################
    }

    private getPlayer() {
        // ####################################
        return this.test_data_player_info; // #
        // ####################################
    }
}
