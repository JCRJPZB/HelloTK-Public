import { _decorator, Node } from 'cc';
import { PlayerMgr } from '../../../Player/PlayerMgr';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
const { ccclass, property } = _decorator;

@ccclass('League')
export class League extends UIBase {

    private playerMgr: PlayerMgr | null = null;

    protected onInit() {
        this.addClickEvent("Return", () => {
            Subscribe.trigger("go back page");
        });
    }

    protected onOpen() {
        if (!this.playerMgr) {
            this.playerMgr = PlayerMgr.getInstance();
        }
        let league_id = this.playerMgr.getPlayerInfo("league_id");
        if (!league_id) {
            Subscribe.trigger("open UI", "LeagueList", "Window");
        } else {
            Subscribe.trigger("open UI", "LeagueInfo", "Window");
        }
    }
}
