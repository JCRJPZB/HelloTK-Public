import { _decorator, Node, Label } from 'cc';
import { ItemMgr } from '../Items/ItemMgr';
import { Functions } from '../Tools/Functions';
import { Generator } from '../Tools/Generator';
import { Subscribe } from '../Tools/Subscribe';
import { StageMgr } from '../UI/StageScene/StageMgr';
import { UIBase } from '../UI/UIBase';
const { ccclass, property } = _decorator;

@ccclass('BattleResult')
export class BattleResult extends UIBase {

    private victory: Node | undefined;
    private defeat: Node | undefined;
    private abandon: Node | undefined;
    private goals_root: Node | undefined;
    private reward_root: Node | undefined;
    private stage_data: any = null;

    protected onInit(params: any) {
        this.stage_data = params[0];
        this.victory = this.getNode("Victory"); // 胜利界面节点
        this.defeat = this.getNode("Defeat"); // 失败界面节点
        this.abandon = this.getNode("Abandon"); // 放弃作战界面节点
        this.goals_root = this.getNode("Goals_Content"); // “目标”根节点
        this.reward_root = this.getNode("Rewards_Content"); // 战利品根节点
        this.addClickEvent("Return_Btn", () => {
            Subscribe.trigger("load scene", "Expedition", StageMgr.getInstance().curr_scene); // 返回选关界面
        });
        this.addClickEvent("Again_Btn", () => {
            Subscribe.trigger("load scene", "BattleField", this.stage_data);
        });
    }

    protected onOpen(params: any) {
        if (!this.defeat || !this.victory || !this.abandon) {
            Subscribe.trigger("log err", "Result node can't be null!");
            return;
        }
        this.abandon.active = this.victory.active = this.defeat.active = false; // 初始化三个界面的显示状态
        if (params[1]) { // 显示放弃战斗结算界面
            this.abandon.active = true; return;
        }
        if (!params[2]) { // 显示战斗失败结算画面
            Subscribe.trigger("stage failed", this.stage_data["stage_id"]);
            this.defeat.active = true; return;
        }

        this.victory.active = true; // 显示战斗胜利结算画面
        let conf = StageMgr.getInstance().getStageConfById(this.stage_data["stage_id"]); // 根据关卡名读取当前关卡配置
        let gen = Generator.getInstance(); // 预制体实例化生成器
        this.setGoalNode(gen, params[3]); // 放置关卡三星目标条件
        this.setRewardsNode(conf); // 放置掉落物
        Subscribe.trigger("stage clear", this.stage_data["stage_id"]); // 发射通关关卡消息
    }

    private setGoalNode(gen: Generator, goal_flags: boolean[]) {
        let goal_strs = StageMgr.getInstance().getStageGoal(this.stage_data["stage_id"]); // 获取三星目标条件文本
        for (let i = 0; i < goal_strs.length && i < goal_flags.length; i++) { // 循环摆放
            if (this.goals_root) {
                let goal_node = gen.generator(this.goals_root, "Stage_Goal"); // 实例化文本及标识预制体
                if (goal_node) {
                    let goal_lbl = goal_node.getComponent(Label);
                    if (goal_lbl) { goal_lbl.string = goal_strs[i]; } // 设置文本
                    let disable = goal_node.getChildByName("Point_Disable"); // 根据是否完成目标修改标识
                    let enable = goal_node.getChildByName("Point_Enable");
                    if (disable && enable) { [disable.active, enable.active] = [!goal_flags[i], goal_flags[i]]; }
                }
            }
        }
    }

    private setRewardsNode(conf: any) {
        conf["items"].forEach((item: any) => {
            if (conf["clear"] && item["is_once"]) {
                return;
            }
            if (this.reward_root) {
                if (item["p"] < 1) { // 根据概率判断是否掉落该物品
                    let isGet = Functions.probToVal([item["p"], 1 - item["p"]], [true, false]);
                    if (!isGet) { return; } // 没有则跳过
                }
                let num = 0;
                if (item["max"] > 1) { // 最大掉落数大于1则显示掉落数
                    if (item["max"] == item["min"]) { num = item["max"] } // 最大等于最小则直接显示掉落数
                    else { num = Functions.randomInSec(item["max"], item["min"]); } // 否则则随机从区间内取值
                } else {
                    num = 1;
                }
                ItemMgr.getInstance().getItemNode(item["id"], this.reward_root, num);
            }
        });
    }
}
