import { _decorator, Component } from 'cc';
import { Functions } from '../../Tools/Functions';
import { Subscribe } from '../../Tools/Subscribe';
import { HpMgr } from '../HP/HpMgr';
import { DmgCal } from './DmgCal';
import { Info } from './Info';
const { ccclass, property } = _decorator;

@ccclass('AtkMgr')
export class AtkMgr extends Component {

    private allies: Info[] = []; // 友方武将数组
    private enemies: Info[] = []; // 敌方
    private all: Info[] = []; // 穿插合并后的数组

    onLoad() {
        Subscribe.listen("battle is ready", this.name, this.start_battle, this); // 等待战斗场景初始化完成
        Subscribe.listen("hero die", this.name, (hero: Info) => { // 武将（敌人）阵亡
            // ###############################################
            if (hero.camp === this.allies[0].camp) { // 如果是友方
                Functions.del(this.allies, hero);
            }
            else { // 敌方
                Functions.del(this.enemies, hero);
                Subscribe.trigger("defeat enemy");
                Subscribe.trigger("defeat " + hero.getConf("category"));
            }
            // 测试阶段因为数据都保存在本地，故需要做这个判断
            Functions.del(this.all, hero); // 整体数组也要删除
            // ###############################################
            hero.node.destroy(); // 销毁阵亡的武将节点
        });
        Subscribe.listen("battle interrupted", this.name, () => { // 战斗被中止
            Subscribe.remove("hero die", this.name); // 移除监听
            this.unscheduleAllCallbacks(); // 移除所有计时器
        });
    }

    private start_battle(allies: Info[], enemies: Info[]) {
        this.allies = allies; // 初始化战斗双方数据
        this.enemies = enemies;

        // ############################################################################
        // 测试阶段在本地做轮流攻击，采用合并数组的方式实现
        this.all = Functions.alternate(this.allies, this.enemies); // 交替穿插合并敌我武将
        let count = -1;

        // 本地测试
        this.schedule(() => {
            if (this.allies.length < 1 || this.enemies.length < 1) { // 任意一方人数归零则战斗结束
                this.unscheduleAllCallbacks(); // 战斗结束解除计时器
                Subscribe.trigger("battle decided", false, this.allies.length > this.enemies.length, [true, true, true]); // 分出胜负
                return;
            }
            count = (count + 1) % this.all.length; // 根据长度以及上一位发起攻击的角色下标决定当前发起攻击的角色下标
            this.attack(this.all[count]); // 调用攻击方法
        }, 1.5);
        // ############################################################
    }

    private attack(hero: Info) {
        let target: Info, target_Eff;
        let hp = HpMgr.getInstance(); // 血量管理

        if (hero.camp === this.allies[0].camp) { target = this.enemies[0]; } // 寻找攻击对象，测试阶段默认对方数组第一个
        else { target = this.allies[0]; }

        let dmg = DmgCal.calculate(hero, target); // 计算伤害
        hp.changeHp(target.id, -dmg); // 造成伤害

        let atkEff = hero.atkEff; // 攻击特效
        target_Eff = target.hitEff; // 受击特效
        if (!atkEff || !target_Eff) { return; }
        atkEff.play(); // 播放特效
        target_Eff.play();
    }

    // private find_target(hero: Info, troops: Info[]) { // 测试阶段暂不考虑寻敌

    // }
}
