import { _decorator, Component, Node, find } from 'cc';
import { Generator } from '../../Tools/Generator';
import { Subscribe } from '../../Tools/Subscribe';
import { StageMgr } from './StageMgr';
import { StagePoint } from './StagePoint';
const { ccclass, property } = _decorator;

@ccclass('StageMaker')
export class StageMaker extends Component {

    private mgr: StageMgr | null = null;
    private conf: any;

    onLoad() {
        Subscribe.listen("generator stage ui", this.name, this.generatorStageUI, this);
    }

    private generatorStageUI(scene_name: string, ui_root: Node) {
        this.mgr = StageMgr.getInstance();
        this.mgr.curr_scene = scene_name; // 更新关卡名
        let stage_root = find("/SafeArea/Stage_Root");
        let gen = Generator.getInstance();
        // 后续需要考虑多种副本，先将主线副本DEMO完成
        // #########################################################
        this.conf = this.mgr.getSceneConf(); // 读取关卡配置
        this.conf["stages"].forEach((stage: any) => { // 根据配置生成关卡地图
            if (!stage_root || !ui_root) { Subscribe.trigger("log err", "Can'f find root!"); return; }
            // let pos = v3(stage["pos"][0], stage["pos"][1], stage["pos"][2]); // 获取当前生成的关卡的摆放位置
            let new_stage = gen.generator(stage_root, "Stage_model"); // 生成当前关卡
            let stage_ctrl = new_stage?.getComponent(StagePoint); // 获取脚本
            if (stage_ctrl) {
                stage_ctrl.init(ui_root, stage); // 初始化
            }
        });
        // #########################################################
    }
}
