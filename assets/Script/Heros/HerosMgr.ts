import { _decorator, Component, Node } from 'cc';
import { Configure } from '../Tools/Configure';
import { Subscribe } from '../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('HerosMgr')
export class HerosMgr extends Component {

    private static instance: HerosMgr;

    private common: any;
    private hero_conf: Map<string, any> = new Map();
    private hero_data: Map<string, any> = new Map();
    private hero_list: string[] = [];

    // ##################################
    private troop: any = { // 武将配置
        "heros": [
            {
                "id": "CaoCao_ally",
                "name": "曹操",
                "hero_id": "CaoCao",
                "prefab": "General_002",
                "level": 60,
                "hp": 1800,
                "atk": 6000,
                "def": 80,
                "atkEff": "default_atk_particle",
                "hitEff": "default_hit_particle",
                "skill_name": "default",
                "skillEff": "default_skill_particle",
                "arms": "Cavalry_Lv1",
                "is_sp": false,
                "is_select": true,
                "idx": 0
            },
            {
                "id": "LiuBei_ally",
                "name": "刘备",
                "hero_id": "LiuBei",
                "prefab": "General_002",
                "level": 60,
                "hp": 1200,
                "atk": 8000,
                "def": 50,
                "atkEff": "default_atk_particle",
                "hitEff": "default_hit_particle",
                "skill_name": "default",
                "skillEff": "default_skill_particle",
                "arms": "Archer_Lv1",
                "is_sp": false,
                "is_select": true,
                "idx": 1
            },
            {
                "id": "SunQuan_ally",
                "name": "孙权",
                "hero_id": "SunQuan",
                "prefab": "General_002",
                "level": 60,
                "hp": 2400,
                "atk": 5500,
                "def": 100,
                "atkEff": "default_atk_particle",
                "hitEff": "default_hit_particle",
                "skill_name": "default",
                "skillEff": "default_skill_particle",
                "arms": "Infantry_Lv1",
                "is_sp": false,
                "is_select": true,
                "idx": 2
            },
            {
                "id": "LvBu_ally",
                "hero_id": "LvBu",
                "name": "吕布",
                "prefab": "General_001",
                "level": 60,
                "hp": 2800,
                "atk": 5500,
                "def": 100,
                "atkEff": "default_atk_particle",
                "hitEff": "default_hit_particle",
                "skill_name": "default",
                "skillEff": "default_skill_particle",
                "arms": "Infantry_Lv1",
                "is_sp": true,
                "is_select": true,
                "idx": 3
            },
            {
                "id": "ZhugeLiang_ally",
                "name": "诸葛亮",
                "hero_id": "ZhugeLiang",
                "prefab": "General_001",
                "level": 60,
                "hp": 1500,
                "atk": 7000,
                "def": 80,
                "atkEff": "default_atk_particle",
                "hitEff": "default_hit_particle",
                "skill_name": "default",
                "skillEff": "default_skill_particle",
                "arms": "Cavalry_Lv1",
                "is_sp": false,
                "is_select": true,
                "idx": 4
            },
            {
                "id": "ZhouYu_ally",
                "name": "周瑜",
                "hero_id": "ZhouYu",
                "prefab": "General_001",
                "level": 60,
                "hp": 1500,
                "atk": 7000,
                "def": 80,
                "atkEff": "default_atk_particle",
                "hitEff": "default_hit_particle",
                "skill_name": "default",
                "skillEff": "default_skill_particle",
                "arms": "Cavalry_Lv1",
                "is_sp": false,
                "is_select": false,
                "idx": 5
            }
        ],
        "formation": { // 阵型
            "id": "snake",
            "name": "长蛇阵",
            "pos_idxs": [0, 1, 4, 5, 8],
            "introduce": "增加部队普通攻击能力",
            "ids_idxs": [
                { "id": "CaoCao_ally", "idx": 0 },
                { "id": "LiuBei_ally", "idx": 1 },
                { "id": "SunQuan_ally", "idx": 2 },
                { "id": "LvBu_ally", "idx": 3 },
                { "id": "ZhugeLiang_ally", "idx": 4 }
            ]
        }
    };
    // ##################################

    private constructor(name: string) {
        super(name);
        let settings = Configure.getConfigure("hero");
        this.common = settings["common"];
        for (let i = 0; i < settings["hero"].length; i++) {
            this.hero_conf.set(settings["hero"][i]["id"], settings["hero"][i]);
        }
        // #############################
        let data = this.getTroops();// # 仍需修改，配合FormationMgr中的内容对应修改
        // #############################
        data["heros"].forEach((hero: any) => {
            this.hero_data.set(hero["id"], hero);
            this.hero_list.push(hero["id"]);
        });
        Subscribe.listen("update troop", this.name, (troop_conf: any) => { this.troop = troop_conf; });
    }

    public static getInstance(): HerosMgr {
        if (!HerosMgr.instance) {
            HerosMgr.instance = new HerosMgr("HerosMgr");
        }
        return HerosMgr.instance;
    }

    public getTroops() {
        // #######################
        return this.troop;
        // #######################
    }

    public getHeroList() { return this.hero_list; }

    public getHeroConfById(id: string) {
        if (!this.hero_conf.has(id)) { return null; }
        return this.hero_conf.get(id);
    }

    public getHeroDataById(id: string) {
        if (!this.hero_data.has(id)) { return null; }
        return this.hero_data.get(id);
    }

    public updateHeroData(data: any) {
        if (!this.hero_data.has(data["id"])) { return; }
        this.hero_data.set(data["id"], data);
    }
}
