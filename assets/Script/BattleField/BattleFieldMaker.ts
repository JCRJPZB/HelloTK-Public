import { _decorator, Component, Node, find, Vec3, v3 } from 'cc';
import { HerosMgr } from '../Heros/HerosMgr';
import { HpMgr } from './HP/HpMgr';
import { Generator } from '../Tools/Generator';
import { Subscribe } from '../Tools/Subscribe';
import { Info } from './Attack/Info';
import { Configure } from '../Tools/Configure';
const { ccclass, property } = _decorator;

@ccclass('BattleFieldMaker')
export class BattleFieldMaker extends Component {

    private allies: Info[] = [];
    private enemies: Info[] = [];

    onLoad() {
        Subscribe.listen("prepare battle", this.name, this.prepare, this);
    }

    private prepare(enemy_conf: any) {
        let army_node = find("/SafeArea/Armies"); // 队伍父节点
        let ally_node = army_node?.getChildByName("Allies"); // 友方队伍父节点
        let enemy_node = army_node?.getChildByName("Enemies"); // 敌方队伍父节点
        if (!ally_node || !enemy_node) {
            Subscribe.trigger("print err", "Can't find armies nodes.");
            return;
        }

        let mgr = HerosMgr.getInstance(); // 武将Mgr
        let gen = Generator.getInstance(); // 预制体实例化生成器
        let ally_conf = mgr.getTroops(); // 获取友方阵容
        let prePos = Configure.getConfigure("hero")["common"]["prePos"]; // 获取预先设定好的位置

        this.genArmies(ally_node, ally_conf, gen, prePos, "ally"); // 生成友方队伍
        this.genArmies(enemy_node, enemy_conf, gen, prePos, "enemy"); // 生成敌方队伍

        Subscribe.trigger("battle is ready", this.allies, this.enemies); // 生成完毕，开始战斗
    }

    private genArmies(parent: Node, conf: any, gen: Generator, prePos: any, camp: string) {
        let hp = HpMgr.getInstance();
        let conf_map: Map<string, any> = new Map();
        conf["heros"].forEach((hero: any) => {
            conf_map.set(hero["id"], hero);
        });
        let hero_ids = conf["formation"]["ids_idxs"]; // id对应位置下标配置
        let pos_idxs = conf["formation"]["pos_idxs"]; // 位置下标数组
        if (hero_ids.length <= pos_idxs.length) {
            for (let i = 0; i < hero_ids.length; i++) {
                let hero_conf = conf_map.get(hero_ids[i]["id"]); // 获取武将配置
                let pos_idx = pos_idxs[hero_ids[i]["idx"]]; // 获取位置配置的下标
                let pos = prePos["pos"][pos_idx]; // 获取位置配置
                let pos_vec: Vec3 = new Vec3(pos[0] * prePos["3d_dist"], 0, pos[1] * prePos["3d_dist"]);
                let hero_node = gen.generator(parent, "Hero_3D", pos_vec); // 实例化武将节点
                if (!hero_node) { return; }

                gen.generator(hero_node, hero_conf["atkEff"], v3(0, 10, 0)); // 生成攻击特效
                gen.generator(hero_node, hero_conf["hitEff"], v3(0, 10, 0)); // 生成受击特效
                gen.generator(hero_node, hero_conf["arms"]); // 实例化队伍

                let info = hero_node.getComponent(Info); // Info对象，用于存储武将/怪物的属性及其他配置
                if (!info) {
                    Subscribe.trigger("log err", "Can't find component!");
                    return;
                }
                if (camp === "ally") { // 分阵营放置Info对象
                    info.init(hero_conf["id"], camp, hero_conf);
                    this.allies.push(info);
                } else if (camp === "enemy") {
                    info.init(hero_conf["id"], camp, hero_conf);
                    this.enemies.push(info);
                }
                hp.genHpNum(info, camp); // 添加血量显示
            }
        }
        hp.init_total_hp(conf, camp); // 总血量显示
    }
}
