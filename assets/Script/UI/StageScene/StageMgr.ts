import { _decorator, Component, Node } from 'cc';
import { Configure } from '../../Tools/Configure';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('StageMgr')
export class StageMgr extends Component {

    private static ist: StageMgr;
    private static curr_scene: string = "";
    private conf: any;
    private data: any;
    private scene_map: Map<string, any> = new Map();
    private stage_map: Map<string, any> = new Map();
    private goals_str: any;

    // #################################
    private test_stage_data: any = {
        "main": {
            "last_stage": "main_1",
            "stages": [
                {
                    "id": "main_1",
                    "clear": false,
                    "available": true
                },
                {
                    "id": "main_2",
                    "clear": false,
                    "available": false
                },
                {
                    "id": "main_3",
                    "clear": false,
                    "available": false
                },
                {
                    "id": "main_4",
                    "clear": false,
                    "available": false
                },
                {
                    "id": "main_5",
                    "clear": false,
                    "available": false
                }
            ]
        }
    };
    // #################################

    private constructor(name: string) {
        super(name);
        this.data = this.getStageData();
        this.conf = Configure.getConfigure("stage");
        if (this.conf) { // 初始化时读取关卡配置
            this.conf["scenes"].forEach((scene: any) => {
                this.scene_map.set(scene["id"], scene);
                if (!scene["stages"] || !scene["stages"].length) {
                    return;
                }
                scene["stages"].forEach((stage: any) => {
                    this.stage_map.set(stage["id"], stage);
                });
                this.mergeData2Conf(scene);
            });
        }
        this.goals_str = this.conf["goals"];
        Subscribe.listen("stage clear", this.name, this.changeStageState, this);
    }

    public static getInstance() {
        if (!StageMgr.ist) { StageMgr.ist = new StageMgr("StageMgr"); }
        return StageMgr.ist;
    }

    private getStageData() {
        // #######################
        return this.test_stage_data;
        // #######################
    }

    // 获取关卡配置
    public getSceneConf() {
        return this.scene_map.get(this.curr_scene);
    }

    // 获取通关记录中的最后一关
    public getLastStageId() {
        return this.scene_map.get(this.curr_scene)["last_stage"];
    }

    public getStageConfById(stage_id: string) {
        return this.stage_map.get(stage_id);
    }

    public getStageGoal(id: string): string[] { // 获取关卡三星目标条件
        let stage_conf = this.stage_map.get(id);
        let goal_strs: string[] = []
        stage_conf["goal"].forEach((goal_conf: any) => {
            let [goal, num] = goal_conf.split(":");
            goal_strs.push(this.goals_str[goal].replace(this.goals_str["replacement"], num.toString()));
        });
        return goal_strs;
    }

    private changeStageState(stage_id: string) {
        let stage_conf = this.stage_map.get(stage_id);
        if (!stage_conf["clear"]) {
            stage_conf["clear"] = true;
            let scene = this.scene_map.get(stage_conf["scene"]);
            let next = stage_conf["next"];
            if (next && scene) {
                let next_stage = this.stage_map.get(next);
                if (next_stage) {
                    next_stage["available"] = true;
                    Subscribe.trigger("stage available " + next, true);
                }
                scene["last_stage"] = next;
            }
        }
    }

    private mergeData2Conf(conf: any) { // 合并玩家数据至关卡配置
        let data = this.data[conf["id"]];
        if (data) {
            conf["last_stage"] = data["last_stage"];
            data["stages"].forEach((stage_data: any) => {
                let id = stage_data["id"];
                let stage_conf = this.stage_map.get(id);
                if (!id || !stage_conf) {
                    return;
                }
                for (let key in stage_data) {
                    stage_conf[key] = stage_data[key];
                }
            });
        }
        return conf;
    }

    // 设置当前关卡名
    set curr_scene(scene_name: string) {
        StageMgr.curr_scene = scene_name;
    }

    get curr_scene() {
        return StageMgr.curr_scene;
    }
}
