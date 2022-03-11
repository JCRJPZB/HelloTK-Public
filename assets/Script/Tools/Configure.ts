import { _decorator, Component, JsonAsset, game } from 'cc';
import { ResMgr } from './ResMgr';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('Configure')
export class Configure extends Component {

    private static setting_dict: Map<string, any> = new Map();
    private static loaded: boolean = false;

    onLoad() {
        Subscribe.listen("resources loaded", this.name, Configure.init, this);
        game.addPersistRootNode(this.node);
    }

    private static init() {
        ResMgr.loadDir("resources", "/config", JsonAsset, (res: JsonAsset[]) => { // 加载全部配置文件
            if (!res || res.length < 1) { Subscribe.trigger("alert err", "未知错误，配置未能成功加载！"); return; }
            res.forEach(json => {Configure.setting_dict.set(json.name, json.json); }); // 存
            Configure.loaded = true; // 更改标志
            Subscribe.trigger("settings loaded"); // 配置加载完毕, 发射消息
        });
    }

    public static getConfigure(mod_name: string) {
        if (!Configure.loaded) { // 若设置尚未加载完毕
            Subscribe.trigger("alert err", "Settings: \'" + mod_name + "\' have not been loaded yet!");
            return null;
        }
        if (Configure.setting_dict.size < 1) {
            Subscribe.trigger("alert err", "Configure: \'" + mod_name + "\' have not been loaded yet!");
            return null;
        }
        if (!Configure.setting_dict.get(mod_name)) { // 如果没有找到参数对应的设置
            Subscribe.trigger("alert err", "Configure don't have this part: " + mod_name + ".");
            return null;
        }
        return Configure.setting_dict.get(mod_name);
    }
}