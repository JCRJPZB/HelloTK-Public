import { _decorator, Node } from 'cc';
import { Functions } from '../../../Tools/Functions';
import { Generator } from '../../../Tools/Generator';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
import { LeagueJoin } from './LeagueJoin';
import { LeagueMgr } from './LeagueMgr';
const { ccclass, property } = _decorator;

@ccclass('LeagueList')
export class LeagueList extends UIBase {

    private list_root: Node | undefined;
    private leagueMgr: LeagueMgr | undefined;
    private gen: Generator | undefined;

    protected onInit() {
        this.leagueMgr = LeagueMgr.getInstance();
        this.gen = Generator.getInstance();
        this.list_root = this.getNode("List_Content");
        Subscribe.listen("player join league", this.name, (league_id: string, pid: string) => {
            Subscribe.trigger("close UI", "LeagueList", "Window");
        });
    }

    protected onOpen() {
        this.refreshList();
    }

    private refreshList() {
        if (!this.leagueMgr) {
            this.leagueMgr = LeagueMgr.getInstance();
        }
        let league_list = this.leagueMgr.getLeagueList();
        if (!league_list || league_list.length < 1) {
            Subscribe.trigger("log err", "Get league list failed!");
        }
        this.list_root?.removeAllChildren();
        let display_list = Functions.randomFromArray(league_list, 10);
        display_list.forEach(league => {
            if (!this.gen || !this.list_root) {
                this.gen = Generator.getInstance();
                this.list_root = this.getNode("List_Content");
            }
            if (!this.list_root) {
                Subscribe.trigger("log err", "Can't find node named \'List_Content\'.");
                return;
            }
            let league_node = this.gen.generator(this.list_root, "League_Join");
            let ctrl = league_node?.getComponent(LeagueJoin);
            if (!ctrl) {
                Subscribe.trigger("log err", "Can't find comp named \'LeagueJoin\'.");
                return;
            }
            ctrl.init(league);
        });
    }
}
