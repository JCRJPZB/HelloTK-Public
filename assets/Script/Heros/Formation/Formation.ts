import { _decorator, Node, v3, Sprite, Label, Button, find } from 'cc';
import { Configure } from '../../Tools/Configure';
import { Functions } from '../../Tools/Functions';
import { Generator } from '../../Tools/Generator';
import { ImgMgr } from '../../Tools/ImgMgr';
import { Subscribe } from '../../Tools/Subscribe';
import { UIBase } from '../../UI/UIBase';
import { HerosMgr } from '../HerosMgr';
import { FormationBar } from './FormationBar';
import { HeroPortrait } from './HeroPortrait';
const { ccclass, property } = _decorator;

@ccclass('Formation')
export class Formation extends UIBase {

    private troop_conf: any; // 队伍配置及数据
    private formation_conf: any; // 编队配置及数据
    private hero_map: Map<string, Node> = new Map(); // 武将节点Map
    private max_selection: number = 0; // 编队最大人数
    private selected_hero_ids: string[] = []; // 被选中的武将id数组

    private hero_root: Node | undefined; // 武将根节点
    private alert_root: Node | undefined; // 提示Label根节点

    private portrait_root: Node | undefined; // 阵型摆放武将头像的根节点
    private portraits: Node[] = []; // 阵型摆放的武将头像节点数组
    private formation_name: Label | undefined; // 阵型名称Label

    private bar_root: Node | undefined; // 阵型栏根节点
    private curr_formation_id: string = ""; // 当前阵型ID
    private formation_ctrl_map: Map<string, FormationBar> = new Map(); // 阵型脚本map
    private formation_conf_map: Map<string, any> = new Map(); // 阵型配置map

    private gen: Generator | null = null; // 预制体对象实例化生成器

    private sort_map: Map<string, Function> = new Map(); // 排序方法Map
    private sort_type: string = "str"; // 当前排序方式

    private heros_conf_map: Map<string, any> = new Map(); // 武将属性配置Map
    private ids_sp: string[] = []; // 星标武将id，排在前面
    private ids_nm: string[] = []; // 普通武将id，排在后面
    private ids: string[] = []; // 所有武将id

    protected onInit() {
        this.gen = Generator.getInstance();
        this.hero_root = this.getNode("Hero_Content"); // 武将根节点
        this.portrait_root = this.getNode("Portrait_Root"); // 阵型摆放武将头像的根节点
        this.formation_name = this.getComp("Formation_Name", "Label"); // 阵型名称Label
        this.bar_root = this.getNode("Formation_Content"); // 阵型栏根节点
        this.alert_root = this.getNode("Alert_Root"); // 提示信息的根节点
        this.troop_conf = HerosMgr.getInstance().getTroops(); // 队伍数据配置
        this.formation_conf = this.troop_conf["formation"]; // 阵型配置
        if (this.formation_name) { this.formation_name.string = this.formation_conf["name"]; }

        this.max_selection = this.formation_conf["pos_idxs"].length; // 最大可编入武将数量
        if (!this.portrait_root) { return; }
        for (let i = 0; i < this.max_selection; i++) { // 生成武将头像
            let portrait = this.gen.generator(this.portrait_root, "Hero_portrait");
            if (portrait) this.portraits.push(portrait); // 存入数组
        }

        this.curr_formation_id = this.formation_conf["id"]; // 保存当前阵型id
        this.setFormationBar(); // 初始化阵型选择栏

        this.addClickEvent("FinishBtn", this.finishEvent, this);
        Subscribe.listen("changeSpHero", this.name, this.changeSpHero, this); // 监听取消/设为常用消息
        Subscribe.listen("change hero selected", this.name, this.changeSelected, this); // 监听切换武将选中状态消息
        Subscribe.listen("change formation", this.name, this.changeFormation, this); // 监听切换阵型消息
        this.sort_map = new Map([ // 排序方法Map
            ["str", this.sortStr.bind(this)]
        ]);
        this.sort_type = "str"; // 初始设为默认的方法
        this.setHero(); // 摆放武将
    }

    protected onOpen() { // 每次打开编队界面都刷新编队状态
        this.troop_conf = HerosMgr.getInstance().getTroops(); // 队伍数据配置
        this.formation_conf = this.troop_conf["formation"]; // 阵型配置
        if (this.formation_name) { this.formation_name.string = this.formation_conf["name"]; }
        this.max_selection = this.formation_conf["pos_idxs"].length; // 最大可编入武将数量
        this.curr_formation_id = this.formation_conf["id"]; // 保存当前阵型id
        this.updateFormation(true, true);
    }

    private finishEvent(e: Button | null) { // 隐藏编队界面
        if (this.selected_hero_ids.length > 0) {
            let ids_idxs: any[] = [];
            for (let i = 0; i < this.selected_hero_ids.length; i++) {
                ids_idxs.push({ "id": this.selected_hero_ids[i], "idx": i }); // 收集阵型编队信息
            }
            this.formation_conf["ids_idxs"] = ids_idxs; // 并将数据添加至配置中(对应上面的覆盖时丢失的数据)
            this.troop_conf["formation"] = this.formation_conf; // 更新
            Subscribe.trigger("update troop", this.troop_conf); // 并将新配置发射出去
            Subscribe.trigger("go back page"); // 返回上一个页面
            return; // 若编队中有人则不触发提醒
        }
        if (e && this.hero_map.size > 0 && this.alert_root) { // 若编队空无一人则不退出，提醒玩家
            Subscribe.trigger("alert UI", "请至少选择一位武将!", this.alert_root, e.node.getPosition());
        }
    }

    private setFormationBar() {
        let conf = Configure.getConfigure("hero")["common"]["formation"]; // 读取编队配置
        if (!this.bar_root || !this.gen) { return; }
        for (let i = 0; i < conf.length; i++) { // 放置阵型栏
            if (conf[i]["id"] === "monster") { continue; }
            this.formation_conf_map.set(conf[i]["id"], conf[i]); // 保存阵型配置
            let node = this.gen.generator(this.bar_root, "Formation_Bar", v3(0, (i * -130) - 75, 0)); // 生成阵型
            let ctrl = node?.getComponent(FormationBar); // 获取阵型栏脚本
            if (ctrl) {
                ctrl.init(conf[i], this.curr_formation_id); // 初始化
                this.formation_ctrl_map.set(conf[i]["id"], ctrl); // 保存阵型栏脚本
            }
        }
    }

    private changeFormation(id: string) { // 切换阵型
        this.formation_ctrl_map.get(this.curr_formation_id)?.changeState(false); // 更新旧阵型状态为disable
        this.formation_ctrl_map.get(id)?.changeState(true); // 更新新阵型状态为enable
        this.curr_formation_id = id; // 更新当前阵型id
        this.formation_conf = this.formation_conf_map.get(id); // 覆盖当前的阵型配置(注意：此操作会丢失阵型中的武将信息，需要补充回去)
        this.updateFormation(false, true); // 更新阵型
    }

    private setHero() { // 摆放武将
        for (let i = 0; i < this.troop_conf["heros"].length; i++) {
            this.troop_conf["heros"][i]["idx"] = i; // 设置好idx，后面修改heros_conf_map时用的上
            this.heros_conf_map.set(this.troop_conf["heros"][i]["id"], this.troop_conf["heros"][i]); // 武将配置map
            if (this.troop_conf["heros"][i]["is_sp"]) { this.ids_sp.push(this.troop_conf["heros"][i]["id"]); } // 保存常用武将
            else { this.ids_nm.push(this.troop_conf["heros"][i]["id"]); } // 保存非常用武将
            // 保存被编入编队的武将id
            if (this.troop_conf["heros"][i]["is_select"]) { this.selected_hero_ids.push(this.troop_conf["heros"][i]["id"]); }
        }
        this.sortStr(); // 根据名称顺序排序
        for (let i = 0; i < this.ids.length; i++) { // 新建武将并放入面板
            if (!this.hero_root || !this.gen) { return; }
            let hero_portrait = this.gen.generator(this.hero_root, "Hero_2D");
            if (hero_portrait) {
                hero_portrait.getComponent(HeroPortrait)?.init(this.heros_conf_map.get(this.ids[i])); // 初始化
                this.hero_map.set(this.ids[i], hero_portrait); // 保存节点
            }
        }
    }

    private changeSelected(id: string, is_select: boolean, call_back: Function) {
        if (!is_select) { // 如果传过来是未被选中说明即将被选中
            if (this.selected_hero_ids.length >= this.max_selection) { // 如果选中的武将数量大于等于最大编入人数
                let canvas_pos = find("Canvas")?.worldPosition; // 计算提示Label显示的位置
                let portrait_pos = this.hero_map.get(id)?.worldPosition;
                if (canvas_pos && portrait_pos && this.alert_root) {
                    let pos = v3(portrait_pos).subtract(canvas_pos);
                    Subscribe.trigger("alert UI", "编队武将数量已达上限!", this.alert_root, pos);
                }
                return; // 已达上限，所以不做操作直接返回
            }
            this.selected_hero_ids.push(id); // 若未达到上限，则添加武将至编队
            this.troop_conf["heros"][this.heros_conf_map.get(id)["idx"]]["is_select"] = true; // 修改被选中标记
        } else {
            if (this.selected_hero_ids.length <= 0) { return; } // 若已无被选中的武将则直接返回（正常来说这个判断不会为true）
            let idx = this.selected_hero_ids.indexOf(id); // 将取消选中的武将从编队中移除
            this.selected_hero_ids.splice(idx, 1);
            this.troop_conf["heros"][this.heros_conf_map.get(id)["idx"]]["is_select"] = false; // 修改被选中标记
        }
        call_back(); // 调用修改编队回调
        this.updateFormation(true, false); // 更新编队信息
    }

    private updateFormation(update_hero: boolean, udpate_pos: boolean) { // 更新编队信息
        if (!this.portrait_root || !this.selected_hero_ids || !this.formation_conf) { return; }
        if (this.portraits.length < this.selected_hero_ids.length) { // 如果选中的武将多于当前阵型人数，则说明出现问题
            Subscribe.trigger("log err", "Length of selected heros out of range!");
        }
        if (update_hero) { // 更新武将头像图片
            for (let i = 0; i < this.portraits.length; i++) {
                let portrait_sp = this.portraits[i].getComponent(Sprite); // 获取头像精灵组件
                if (!portrait_sp) { continue; }
                // 若此时选中武将已配置完成，则剩余的置空
                if (i >= this.selected_hero_ids.length) { portrait_sp.spriteFrame = null; continue; }
                // 反之则更新头像图片
                let hero_id = this.heros_conf_map.get(this.selected_hero_ids[i])["hero_id"];
                // 注意一件事，id和hero_id是不一样的，一个是当前这个武将的id，一个是武将配置中的武将id，即一个是每个玩家不一样一个是所有该武将都一样
                portrait_sp.spriteFrame = ImgMgr.getInstance().getImg(hero_id); // 根据配置设置精灵组件贴图
            }
        }
        if (udpate_pos) { // 更新武将头像位置
            let pos_idxs = this.formation_conf["pos_idxs"]; // 获取阵型位置配置
            let prePos = Configure.getConfigure("hero")["common"]["prePos"]; // 获取武将头像位置配置
            for (let i = 0; i < this.portraits.length; i++) {
                let idx = prePos["pos"][pos_idxs[i]];
                let pos = v3(idx[0] * prePos["2d_dist"], idx[1] * prePos["2d_dist"], 0); // 计算头像位置
                this.portraits[i].setPosition(pos); // 设置位置
            }
            if (this.formation_name) { this.formation_name.string = this.formation_conf["name"]; } // 更新阵型名称
        }
    }

    private changeSpHero(id: string, isAdd: boolean) { // 设为/取消常用
        let idx = this.heros_conf_map.get(id)["idx"];
        this.troop_conf["heros"][idx]["is_sp"] = isAdd; // 同步更新配置
        let add_ids: string[], del_ids: string[] = [];
        if (isAdd) { [add_ids, del_ids] = [this.ids_sp, this.ids_nm]; } // 从一个数组中移除并添加至另一个数组
        else { [add_ids, del_ids] = [this.ids_nm, this.ids_sp]; }
        let del_idx = del_ids.indexOf(id);
        del_ids.splice(del_idx, 1); // 删除
        add_ids.push(id); // 添加
        this.updateOder(); // 更新武将顺序
    }

    private updateOder() {
        let sort_func = this.sort_map.get(this.sort_type);
        if (sort_func) { sort_func(); } // 根据设置找到指定排序方法并调用
        if (this.hero_root) {
            this.hero_root.removeAllChildren(); // 清空武将节点
            this.ids.forEach(id => { // 按照顺序重新摆放
                let node = this.hero_map.get(id)
                if (node && this.hero_root) {
                    node.parent = this.hero_root;
                }
            });
        }
    }

    private sortStr() { // 按照字符顺序排序
        Functions.sortStr(this.ids_sp, 0, this.ids_sp.length - 1, 0);
        Functions.sortStr(this.ids_nm, 0, this.ids_nm.length - 1, 0);
        this.ids = this.ids_sp.concat(this.ids_nm);
    }
}
