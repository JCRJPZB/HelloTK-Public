import { _decorator, Node, ProgressBar, Label, tween } from 'cc';
import { Functions } from '../Tools/Functions';
import { Subscribe } from '../Tools/Subscribe';
import { UIBase } from '../UI/UIBase';
const { ccclass, property } = _decorator;
 
@ccclass('BattlePage')
export class BattlePage extends UIBase {

    private hpBar_root: Node | undefined;
    // private ally_protrait: Sprite | undefined;
    // private enemy_protrait: Sprite | undefined;
    private ally_bar: ProgressBar | undefined;
    private enemy_bar: ProgressBar | undefined;
    private ally_lbl: Label | undefined;
    private enemy_lbl: Label | undefined;

    private ally_max_hp: number = 0;
    private ally_cur_hp: number = 0;
    private enemy_max_hp: number = 0;
    private enemy_cur_hp: number = 0;

    protected onInit() {
        Subscribe.listen("battle set total hp", this.name, this.set_hp, this);
        Subscribe.listen("battle change total hp", this.name, this.changeHp, this);
        this.addClickEvent("PauseBtn", () => {
            Subscribe.trigger("open UI", "BattlePauseMenu", "Window");
        });
        // this.ally_protrait = this.getComp("AllyProtrait", "Sprite");
        // this.enemy_protrait = this.getComp("EnemyProtrait", "Sprite");
        this.ally_bar = this.getComp("Ally", "ProgressBar");
        this.enemy_bar = this.getComp("Enemy", "ProgressBar");
        this.ally_lbl = this.getComp("AllyLabel", "Label");
        this.enemy_lbl = this.getComp("EnemyLabel", "Label");
        this.hpBar_root = this.getNode("HpBars");
        if (!this.hpBar_root) {
            Subscribe.trigger("log err", "Can't find hp bar root");
        } else {
            Subscribe.trigger("set hp bar root", this.hpBar_root);
        }
    }

    private set_hp(num: number, camp: string) { // 初始化血量
        if (camp === "ally") {
            this.ally_max_hp = this.ally_cur_hp = num;
            if (this.ally_bar) { this.ally_bar.progress = 1; }
        } else if (camp === "enemy") {
            this.enemy_max_hp = this.enemy_cur_hp = num;
            if (this.enemy_bar) { this.enemy_bar.progress = 1; }
        }
        this.updateHp();
    }

    private changeHp(val: number, camp: string) {
        if (camp === "ally") {
            this.ally_cur_hp += val;
            if (this.ally_bar) {
                tween(this.ally_bar) // 缓动执行血量变化
                    .to(0.2, { progress: this.ally_cur_hp / this.ally_max_hp }, { easing: "sineInOut" })
                    .start();
            }
        } else if (camp === "enemy") {
            this.enemy_cur_hp += val;
            if (this.enemy_bar) {
                tween(this.enemy_bar)
                    .to(0.2, { progress: this.enemy_cur_hp / this.enemy_max_hp }, { easing: "sineInOut" })
                    .start();
            }
        }
        this.updateHp();
    }

    private updateHp() { // 更新血量
        if (!this.ally_lbl || !this.enemy_lbl) { return; }
        this.ally_lbl.string = Functions.numToStr(this.ally_cur_hp) + " / " + Functions.numToStr(this.ally_max_hp);
        this.enemy_lbl.string = Functions.numToStr(this.enemy_cur_hp) + " / " + Functions.numToStr(this.enemy_max_hp);
    }
}
