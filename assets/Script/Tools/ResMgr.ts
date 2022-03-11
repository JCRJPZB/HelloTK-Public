import { _decorator, Component, Node, Asset, resources, assetManager, AssetManager } from 'cc';
import { Configure } from './Configure';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('ResMgr')
export class ResMgr extends Component {

    private static bundle_map: Map<string, AssetManager.Bundle> = new Map<string, AssetManager.Bundle>();

    onLoad() {
        try { resources.preloadDir("/"); }
        catch (e) { Subscribe.trigger("print err", <string>e); return; }
        ResMgr.bundle_map.set("resources", resources); // 将内置资源bundle放入map
        Subscribe.trigger("resources loaded");
        Subscribe.listen("settings loaded", this.name, ResMgr.loadBundle, this);
    }

    private static loadBundle() {
        // ############# 远程的bundle需要给出服务器访问文件夹的地址 ########
        let list = Configure.getConfigure("bundle_list")["bundles"];
        if (!list) { Subscribe.trigger("alert err", "未知错误!"); return; }
        let rest = list.length;
        list.forEach((name: string) => {
            assetManager.loadBundle(name, (err: Error | null, bundle: AssetManager.Bundle) => {
                if (err) { Subscribe.trigger("print err", err.message); return; }
                ResMgr.bundle_map.set(name, bundle);
                if (--rest < 1) { Subscribe.trigger("bundle loaded"); }
            });
        });
    }

    public static loadRes(bundle_name: string, path: string, type: typeof Asset, callBack: CallableFunction, param?: any) { // 加载资源
        let bundle = ResMgr.bundle_map.get(bundle_name);
        if (!bundle) { Subscribe.trigger("print err", "Bundle not found: " + bundle_name); return; }
        bundle.load(path, type, null, (err: Error | null, res: Asset) => {
            if (err) { Subscribe.trigger("log err", err.message); callBack(null, param); return; }
            callBack(res, param);
        });
    }

    public static loadDir(bundle_name: string, path: string, type: typeof Asset, callBack: CallableFunction, param?: any) { // 加载文件夹
        let bundle = ResMgr.bundle_map.get(bundle_name);
        if (!bundle) { Subscribe.trigger("print err", "Bundle not found: " + bundle_name); return; }
        bundle.loadDir(path, type, (err: Error | null, res: Asset[]) => {
            if (err) { Subscribe.trigger("log err", err.message); callBack(null, param); return; }
            callBack(res, param);
        });
    }

    public static preLoad(bundle_name: string, path: string, type: typeof Asset) { // 预加载
        let bundle = ResMgr.bundle_map.get(bundle_name);
        if (!bundle) { Subscribe.trigger("log err", "Bundle not found: " + bundle_name); return; }
        bundle.preload(path, type);
    }
}
