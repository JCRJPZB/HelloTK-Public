import { _decorator, Component, Node } from 'cc';
import { PlayerMgr } from '../../Player/PlayerMgr';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends Component {

    private playerMgr: PlayerMgr | null = null;
    private load_times: number = 0;

    // ##########################################
    private data = {}
    // ##########################################

    onLoad() {
        Subscribe.listen("UI manager ready", this.name, (scene_name: string, num: number, data: any) => {
            if (scene_name === "Main") {
                this.load_times = num;
                Subscribe.trigger("open UI", "MainPage", "Page");
                if (this.load_times === 1) {
                    Subscribe.trigger("open UI", "Mail", "Page");
                }
            }
        });
        Subscribe.listen("show Expedition", this.name, () => {
            Subscribe.trigger("load scene", "Expedition", "main");
        });
        this.playerMgr = PlayerMgr.getInstance();
    }
}
