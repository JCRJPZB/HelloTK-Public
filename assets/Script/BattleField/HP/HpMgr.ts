import { _decorator, Component, Node } from 'cc';
import { Generator } from '../../Tools/Generator';
import { Subscribe } from '../../Tools/Subscribe';
import { Info } from '../Attack/Info';
import { HpNum } from './HpNum';
const { ccclass, property } = _decorator;

@ccclass('HpMgr')
export class HpMgr extends Component {

    // 血量管理

    private static ist: HpMgr | null = null; // 单例
    private gen: Generator | null = null; // 生成器
    private static num_root: Node | null = null; // 血条根节点
    private num_map: Map<string, HpNum> = new Map(); // 血条哈希表
    private hero_map: Map<string, Info> = new Map(); // Info哈希表

    private constructor(name: string) { // 初始化
        super(name);
        this.gen = Generator.getInstance();
        Subscribe.listen("change hp", this.name, this.changeHp, this);
        Subscribe.listen("set hp bar root", this.name, (hpBar_root: Node) => {
            HpMgr.num_root = hpBar_root;
            Subscribe.trigger("Hp manager is ready");
        });
    }

    public static getInstance() { // 获取单例
        if (!HpMgr.ist) { HpMgr.ist = new HpMgr("HpMgr"); }
        return HpMgr.ist;
    }

    public reset() { // 清除数据(为重复进入战斗界面做准备)
        this.num_map.clear();
    }

    public genHpNum(hero: Info, camp: string) { // 生成血条
        if (!this.gen) { this.gen = Generator.getInstance(); }
        if (!HpMgr.num_root) {
            Subscribe.trigger("log err", "Hp bar root is undefined!");
            return;
        }
        let new_hpBar = this.gen.generator(HpMgr.num_root, "HpNum"); // 实例化，父节点为血条根节点
        let num_ctrl = new_hpBar?.getComponent(HpNum); // 获得血量的脚本组件
        if (!num_ctrl) { Subscribe.trigger("log err", "Component doesn't exist!"); return; }
        num_ctrl.init(hero.getConf("hp"), hero.node, camp); // 传参初始化
        this.num_map.set(hero.id, num_ctrl); // 存
        this.hero_map.set(hero.id, hero); // 存
    }

    public init_total_hp(conf: any, camp: string) { // 根据配置统计血量
        let heros = conf["heros"];
        let total = 0;
        heros.forEach((hero: any) => { total += hero["hp"]; }); // 累加
        Subscribe.trigger("battle set total hp", total, camp);
    }

    public changeHp(id: string, value: number) { // 血量变化
        let bar = this.num_map.get(id); // 获取发生变化的对象
        if (!bar) {
            Subscribe.trigger("log err", "Can't find " + id + "'s hp bar!");
            return;
        }
        let rest = bar.changeHp(value); // 应用变化
        if (rest <= 0) { this.heroDie(id); value -= rest; } // 武将死亡 || 减去溢出的伤害(用以正确计算总血量的变化)
        Subscribe.trigger("battle change total hp", value, bar.getCamp());
    }

    public heroDie(id: string) { // 武将阵亡
        this.scheduleOnce(() => {
            Subscribe.trigger("hero die", this.hero_map.get(id)); // 发射消息
            let hpNum = this.num_map.get(id); // 获取对应的血量节点并将其从父节点移除
            if (hpNum) { hpNum.node.parent = null; }
            this.num_map.delete(id); // 根据ID删除对应的键值
            this.hero_map.delete(id);
        }, 1);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }
}
