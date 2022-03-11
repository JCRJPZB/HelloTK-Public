import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
import { HpMgr } from './HP/HpMgr';
const { ccclass, property } = _decorator;

@ccclass('BattleScene')
export class BattleScene extends Component {

    private stage_data: any = null;
    private load_times: number = 0;

    onLoad() {
        HpMgr.getInstance();
        Subscribe.listen("battle decided", this.name, this.battle_over, this);
        Subscribe.listen("battle interrupted", this.name, this.battle_over, this);
        Subscribe.listen("UI manager ready", this.name, (scene_name: string, num: number, data: any) => {
            if (scene_name === "BattleField") {
                this.load_times = num;
                this.stage_data = data; // 关卡数据及配置
                Subscribe.trigger("open UI", "BattlePage", "Page");
            }
        });
        Subscribe.listen("Hp manager is ready", this.name, () => {
            Subscribe.trigger("prepare battle", this.stage_data);
        });
    }

    private battle_over(isAbandon: boolean, isWin: boolean, goal_flags: boolean[]) {
        Subscribe.trigger("open UI", "BattleResult", "Window", [this.stage_data, isAbandon, isWin, goal_flags]);
    }
}
