import { _decorator, Node, Label, Sprite } from 'cc';
import { ItemMgr } from '../../Items/ItemMgr';
import { Functions } from '../../Tools/Functions';
import { Generator } from '../../Tools/Generator';
import { ImgMgr } from '../../Tools/ImgMgr';
import { Subscribe } from '../../Tools/Subscribe';
import { UIBase } from '../UIBase';
import { StageMgr } from './StageMgr';
const { ccclass, property } = _decorator;
 
@ccclass('StagePage')
export class StagePage extends UIBase {

    private stage_name: Label | undefined;
    private description: Label | undefined;
    private goal: Label[] = [];
    private reward_item_root: Node | undefined;
    private reward_items: Node[] = [];
    private start_btn: Node | undefined;
    private curr_stage_id: string = "";

    protected onInit(stageName: string) {
        this.addClickEvent("ReturnBtn", () => {
            Subscribe.trigger("load scene", "Main", null);
        });
        this.addClickEvent("Inventory", () => {
            Subscribe.trigger("open UI", "Inventory");
        });this.addClickEvent("Formation_Btn", () => {
            Subscribe.trigger("open UI", "Formation");
        });

        Subscribe.listen("change select stage", this.name, this.changeSelect, this); // 监听切换关卡事件
        this.stage_name = this.getComp("StageName_Label", "Label");
        this.description = this.getComp("Description_Content", "Label");
        for (let i = 1; i <= 3; i++) {
            let goal_temp = this.getComp("Goal_" + i.toString(), "Label");
            if (goal_temp) { this.goal.push(goal_temp); }
        }
        this.reward_item_root = this.getNode("Reward_Content");
        this.start_btn = this.getNode("Start_Btn");

        Subscribe.trigger("generator stage ui", stageName, this.getNode("StageUI_Root"));
    }

    private changeSelect(data: any) {
        let stage_id = data["stage_id"]; // 根据关卡名读取当前关卡配置
        if (this.curr_stage_id === stage_id) {
            return;
        }
        this.curr_stage_id = stage_id;
        let conf = StageMgr.getInstance().getStageConfById(stage_id);
        if (this.stage_name) { this.stage_name.string = conf["name"]; } // 修改关卡名标签内容
        if (this.description) { this.description.string = conf["description"]; }
        let goal_strs = StageMgr.getInstance().getStageGoal(conf["id"]); // 获取三星条件
        if (this.goal.length >= goal_strs.length) {
            for (let i = 0; i < this.goal.length; i++) {
                if (i < goal_strs.length) { this.goal[i].string = goal_strs[i]; }
            }
        }

        let gen = Generator.getInstance(); // 预制件实例化生成器
        this.setItemList(conf["items"], gen); // 设置掉落清单

        if (this.start_btn) { // 点击确认按钮
            this.start_btn.off("click");
            this.start_btn.on("click", () => {
                Subscribe.trigger("load scene", "BattleField", data); // 进入战斗场景
            });
        }
    }

    private setItemList(items_conf: any, gen: Generator) {
        let itemMgr = ItemMgr.getInstance(); // 物品管理器
        for (let i = 0; i < items_conf.length; i++) {
            if (this.reward_item_root) {
                let portrait: Node | null = null;
                if (this.reward_items.length <= i) { // 如果现有的物品节点数量不够则生成新的
                    portrait = gen.generator(this.reward_item_root, "ItemPortrait"); // 实例化掉落物图片预制件
                    if (portrait) { this.reward_items.push(portrait); } // 把新的放进去
                } else { // 反之则使用已有的
                    portrait = this.reward_items[i];
                }
                if (portrait) { this.initItem(items_conf[i], portrait, itemMgr); } // 初始化物品
            }
        }
        while (this.reward_items.length > items_conf.length) { this.reward_items.pop()?.destroy(); } // 如果现有的比需要的物品节点多，则将多余的删除
    }

    private initItem(conf: any, node: Node, itemMgr: ItemMgr) {
        let sf = node.getComponent(Sprite); // 获得掉落物图片的精灵组件
        let img_name = itemMgr.getItemConf(conf["id"])["img"]; // 获取配置中的贴图路径
        if (img_name && sf) {
            sf.spriteFrame = ImgMgr.getInstance().getImg(img_name); // 根据配置设置精灵组件贴图
        }
        let num = node.getChildByName("Num")?.getComponent(Label); // 物品数量Label
        if (num) {
            if (conf["max"] > 1) { // 最大掉落数大于1则显示掉落区间
                if (conf["max"] == conf["min"]) { // 最大掉落数等于最小掉落数则显示掉落数
                    num.string = Functions.numToChar(conf["max"]);
                } else { // 否则显示平均值
                    num.string = "约" + Functions.numToChar(Math.floor((conf["max"] + conf["min"]) / 2));
                }
            }
        }
        let first = node.getChildByName("First"); // 首通奖励标志
        if (first && conf["is_once"]) {
            first.active = true;
        }
    }
}
