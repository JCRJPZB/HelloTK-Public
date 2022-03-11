import { _decorator, Component, Node, ParticleSystem } from 'cc';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('Info')
export class Info extends Component {

    private __id: string = ""; // 角色ID
    private __atkEff: ParticleSystem | null | undefined; // 攻击特效
    private __hitEff: ParticleSystem | null | undefined; // 受击特效
    private __camp: string = ""; // 阵营
    private __conf: any; // 配置

    onLoad() { }

    init(id: string, camp: string, conf: any) {
        this.__id = id;
        this.__camp = camp;
        this.__conf = conf;
        let atkEff__name = this.__conf["atkEff"];
        this.__atkEff = this.node.getChildByName(atkEff__name)?.getComponent(ParticleSystem);
        let hitEff__name = this.__conf["hitEff"];
        this.__hitEff = this.node.getChildByName(hitEff__name)?.getComponent(ParticleSystem);
        if (!this.__atkEff) { Subscribe.trigger("log err", "Can't find child or component!"); return; }
    }

    public get id(): string { return this.__id; }

    public get atkEff(): ParticleSystem | null | undefined { return this.__atkEff; }

    public get hitEff(): ParticleSystem | null | undefined { return this.__hitEff; }

    public get camp(): string { return this.__camp; }

    public getConf(arg: string): any { return this.__conf[arg]; }

}
