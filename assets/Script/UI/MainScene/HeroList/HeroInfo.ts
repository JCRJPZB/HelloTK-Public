import { _decorator, Node, Label } from 'cc';
import { UIBase } from '../../UIBase';
const { ccclass, property } = _decorator;
 
@ccclass('HeroInfo')
export class HeroInfo extends UIBase {
    // Main attribute
    private brave_lbl: Label | null | undefined = null;
    private lead_lbl: Label | null | undefined = null;
    private wisdom_lbl: Label | null | undefined = null;
    private politics_lbl: Label | null | undefined = null;

    // Secondary attribute
    private hit_lbl: Label | null | undefined = null;
    private critical_lbl: Label | null | undefined = null;
    private criDmg_lbl: Label | null | undefined = null;
    private block_lbl: Label | null | undefined = null;
    private dodge_lbl: Label | null | undefined = null;
    private charge_lbl: Label | null | undefined = null;
    private population_lbl: Label | null | undefined = null;
    private Efficiency_lbl: Label | null | undefined = null;
    private armor_lbl: Label | null | undefined = null;

    // EXP
    private level_lbl: Label | null | undefined = null;
    // private 
}
