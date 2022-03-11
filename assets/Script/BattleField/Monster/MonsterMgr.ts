import { _decorator, Component, Node } from 'cc';
import { Configure } from '../../Tools/Configure';
import { Functions } from '../../Tools/Functions';
const { ccclass, property } = _decorator;

@ccclass('MonsterMgr')
export class MonsterMgr extends Component {

    private static ist: MonsterMgr;
    private conf: any;
    private conf_map: Map<string, any> = new Map();

    private constructor(name: string) {
        super(name);
        this.conf = Configure.getConfigure("monsters");
        if (this.conf) {
            this.conf["monsters"].forEach((mst: any) => { // 初始化时读取怪物配置
                this.conf_map.set(mst["id"], mst);
            });
        }
    }

    public static getInstance() {
        if (!MonsterMgr.ist) { MonsterMgr.ist = new MonsterMgr("MonsterMgr"); }
        return MonsterMgr.ist;
    }

    public getMonsterAttr(data: any) {
        let conf = Functions.deepCopy(this.conf_map.get(data["mst_id"]));
        if (!conf) { return null;}
        conf["hp"] = conf["base_hp"] + data["lv"] * conf["grow_rate"]["hp"]; // 根据实际关卡数据以及配置计算怪物数值
        conf["atk"] = conf["base_atk"] + data["lv"] * conf["grow_rate"]["atk"];
        conf["def"] = conf["base_def"] + data["lv"] * conf["grow_rate"]["def"];
        conf["pos"] = JSON.parse(JSON.stringify(data["pos"]));
        conf["id"] = JSON.parse(JSON.stringify(data["id"])); // 注意怪物的种类ID与实际场上怪物的ID之区别
        return conf;
    }
}
