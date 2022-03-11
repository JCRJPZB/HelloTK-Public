import { _decorator, Component } from 'cc';
import { Configure } from '../../Tools/Configure';
import { Subscribe } from '../../Tools/Subscribe';
import { Info } from './Info';
const { ccclass, property } = _decorator;

@ccclass('DmgCal')
export class DmgCal extends Component {

    private static max_dmg_ratio: number = 0;
    private static min_dmg_ratio: number = 0;
    private static base_cri_dmg_rate: number = 0;
    private static base_blk_dmg_rate: number = 0;

    private static attr_diff: number = 0;
    private static counter: number = 0;
    private static tech_diff: number = 0;

    // private static skill_gain: number = 0;
    // private static crt_gain: number = 0;
    // private static form_gain: number = 0;
    // private static other_gain: number = 0;

    // private static blk_reduce: number = 0;
    // private static skill_reduce: number = 0;
    // private static form_reduce: number = 0;
    // private static other_reduce: number = 0;

    onLoad() {
        // find("/SafeArea")?.on("settings loaded", DmgCal.init, this);
        Subscribe.listen("settings loaded", this.name, DmgCal.init, this);
    }

    public static init() {
        let settings = Configure.getConfigure("soldier")["common"];
        DmgCal.max_dmg_ratio = settings["max_dmg_ratio"];
        DmgCal.min_dmg_ratio = settings["min_dmg_ratio"];
        DmgCal.base_cri_dmg_rate = settings["base_cri_dmg_rate"];
        DmgCal.base_blk_dmg_rate = settings["base_blk_dmg_rate"];
    }

    public static calculate(atker: Info, defer: Info): number  {
        // ###########################################
        // 本地测试阶段，暂时简单按减法计算伤害
        let atk = atker.getConf("atk");
        let def = defer.getConf("def");
        return atk - def;
        // ###########################################
    }

    private static max(a: number, b: number) { return a > b ? a : b; }

    private static min(a: number, b: number) { return a > b ? b : a; }

}
