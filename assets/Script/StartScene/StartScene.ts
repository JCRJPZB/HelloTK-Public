import { _decorator, Component, Node, find, } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
import { UIMgr } from '../UI/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('StartScene')
export class StartScene extends Component {
    onLoad() {
        Subscribe.listen("game start", this.name, this.init, this);
        Subscribe.listen("login success", this.name, () => {
            ; //
        });
    }

    private init() {
        UIMgr.getInstance();
        Subscribe.listen("UI manager ready", this.name, (scene_name: string, num: number, data: any) => {
            if (scene_name === "StartScene") {
                Subscribe.trigger("open UI", "StartPage", "Page");
                let loading_lbl = find("/Canvas/UIRoot/AlertRoot/Loading");
                if (loading_lbl) { loading_lbl.destroy(); }
            }
        });
        Subscribe.trigger("change scene", "StartScene", 1, null);
    }
}
