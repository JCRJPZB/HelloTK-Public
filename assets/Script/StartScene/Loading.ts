import { _decorator, Component, Node, Label } from 'cc';
import { SceneMgr } from '../Tools/SceneMgr';
import { Subscribe } from '../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('Loading')
export class Loading extends Component {

    private start_btn: Node | null = null;
    private load_lbl: Label | null | undefined = null;
    private login_window: Node | null = null;

    // ###### 临时测试用 ######
    private test_enemy: any = { // 武将配置
        "heros": [
            {
                "id": "CaoCao_ally",
                "name": "曹操",
                "hero_id": "CaoCao",
                "prefab": "General",
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
                "prefab": "General",
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
                "prefab": "General",
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
                "prefab": "General",
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
                "prefab": "General",
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
                "prefab": "General",
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
            "id": "crescent",
            "name": "偃月阵",
            "pos_idxs": [1, 2, 3, 5, 6],
            "introduce": "提高暴击率",
            "ids_idxs": [
                { "id": "CaoCao_ally", "idx": 0 },
                { "id": "LiuBei_ally", "idx": 1 },
                { "id": "SunQuan_ally", "idx": 2 },
                { "id": "LvBu_ally", "idx": 3 },
                { "id": "ZhugeLiang_ally", "idx": 4 }
            ]
        }
    }
    // #######################

    onLoad() { // 本地测试阶段，后续服务端配合重写
        this.start_btn = this.node.getChildByName("StartBtn");
        this.load_lbl = this.node.getChildByName("Loading")?.getComponent(Label);
        this.login_window = this.node.getChildByName("Login_window");
        if (!this.start_btn || !this.load_lbl || !this.login_window) { return; }
        this.load_lbl.node.active = true;
        this.login_window.active = false;
        this.start_btn.active = false;

        this.start_btn.on("click", () => { // Select BattleField
            Subscribe.trigger("load scene", "Main", "test_player");
        });

        Subscribe.listen("login success", this.name, () => {
            if (!this.start_btn) { return; }
            this.start_btn.active = true;
        });
    }
}
