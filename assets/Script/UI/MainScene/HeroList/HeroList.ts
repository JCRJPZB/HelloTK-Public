import { _decorator, Node, Sprite, Label } from 'cc';
import { HerosMgr } from '../../../Heros/HerosMgr';
import { Generator } from '../../../Tools/Generator';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
import { HeroListPortrait } from './HeroListPortrait';
const { ccclass, property } = _decorator;

@ccclass('HeroList')
export class HeroList extends UIBase {

    private gen: Generator | null = null;
    private herosMgr: HerosMgr | null = null;
    private hero_id_list: string[] = [];
    private hero_data: Map<string, any> = new Map();

    private heroList_protrait_root: Node | undefined;
    private curr_hero_name_Lbl: Label | undefined;

    private curr_panel: string = "";

    // 留待后续版本跟进
    // ######################################
    private story_btn: Node | undefined;
    private story_Node: Node | undefined;
    // private story_bg: Sprite | undefined;
    // ######################################

    private targetTexture: Sprite | undefined;

    onInit() {
        this.gen = Generator.getInstance();
        this.herosMgr = HerosMgr.getInstance();
        this.hero_id_list = this.herosMgr.getHeroList();
        this.hero_id_list.forEach(id => { this.hero_data.set(id, this.herosMgr!.getHeroDataById(id)); });

        this.addClickEvent("Return", () => {
            Subscribe.trigger("go back page");
        }, this);

        this.heroList_protrait_root = this.getNode("List_Content");
        this.curr_hero_name_Lbl = this.getComp("Hero_Name", "Label");

        this.addClickEvent("Info_Btn", () => { this.changePane("HeroInfo"); });
        this.addClickEvent("Equip_Btn", () => { this.changePane("HeroEquip"); });
        this.addClickEvent("Spirit_Btn", () => { this.changePane("HeroSpirit"); });

        this.targetTexture = this.getComp("ModelUI", "Sprite");
    }

    onOpen() {
        if (this.targetTexture) {
            Subscribe.trigger("set model UI targetTexture", this.targetTexture);
            Subscribe.trigger("show hero model");
        }
        this.fillList();
        this.curr_panel = "";
        this.changePane("HeroInfo");
    }

    onClose() {
        if (this.curr_panel) {
            Subscribe.trigger("close UI", this.curr_panel, "Window");
        }
    }

    private fillList() {
        this.heroList_protrait_root?.removeAllChildren();
        this.hero_id_list.forEach(id => {
            if (!this.gen) { this.gen = Generator.getInstance(); }
            if (!this.heroList_protrait_root) { return; }
            let node = this.gen.generator(this.heroList_protrait_root, "HeroList_Portrait");
            let ctrl = node?.getComponent(HeroListPortrait);
            ctrl?.init(this.hero_data.get(id));
        });
        Subscribe.listen("change check hero in list", this.name, this.changeCurrHero, this);
        Subscribe.trigger("change check hero in list", this.hero_id_list[0]);
    }

    private changeCurrHero(id: string) {
        let name = this.hero_data.get(id)["name"];
        let prefab_name = this.hero_data.get(id)["prefab"];
        if (this.curr_hero_name_Lbl) { this.curr_hero_name_Lbl.string = name; }
        Subscribe.trigger("change curr hero model", prefab_name);
    }

    private changePane(panel_name: string) {
        if (this.curr_panel != "") {
            Subscribe.trigger("close UI", this.curr_panel, "Window");
        }
        Subscribe.trigger("open UI", panel_name, "Window");
        this.curr_panel = panel_name;
    }
}
