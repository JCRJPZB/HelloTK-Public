import { _decorator, Component, director, ProgressBar, find } from 'cc';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('SceneMgr')
export class SceneMgr extends Component {

    private static ist: SceneMgr | null = null;

    private pb: ProgressBar | null | undefined = null; // 加载进度条
    private scene_load_count: Map<string, number> = new Map();

    private constructor(name: string) {
        super(name);
        Subscribe.listen("load scene", this.name ,this.loadScene, this);
    }

    public static getInstance(): SceneMgr {
        if (!SceneMgr.ist) {
            SceneMgr.ist = new SceneMgr("SceneMgr");
        }
        return SceneMgr.ist;
    }

    private loadScene(scene_name: string, data: any) {
        Subscribe.trigger("start load scene");
        director.loadScene("Loading", () => { // 先进入加载场景以做过渡
            this.pb = find("/Canvas/ProgressBar")?.getComponent(ProgressBar);
            this.loadStart(scene_name, data);
        });
    }

    private loadStart(scene_name: string, data: any) {
        try {
            director.preloadScene(scene_name, (completeCount: number, totalcount: number, item: any) => {
                // 预加载，同时根据加载进度更新进度条
                let ratio = completeCount / totalcount;
                if (!this.pb) { Subscribe.trigger("log err", "Load progress bar failed!"); return; }
                this.pb.progress = ratio;
            }, () => { director.loadScene(scene_name, () => { this.loadComplete(data); }); }); // 加载完成回调
        } catch (e) {
            Subscribe.trigger("log err", "Can't find scene named: " + scene_name);
            this.returnToStart();
        }
    }

    private loadComplete(data: any) {
        let scene_name = director.getScene()?.name;
        if (!scene_name) {
            Subscribe.trigger("log err", "Load scene error!");
            this.returnToStart();
            return;
        }
        let num = this.scene_load_count.get(scene_name); // 保存场景加载次数
        if (num) { this.scene_load_count.set(scene_name, ++num); }
        else { this.scene_load_count.set(scene_name, 1); }
        Subscribe.trigger("change scene", scene_name, num ? num : 1, data); // 发射加载完成消息
    }

    private returnToStart() {
        this.loadScene("StartScene", null);
    }
}
