import { _decorator, Component, Node, find, Vec3, Label, tween, v3 } from 'cc';
import { Configure } from '../Tools/Configure';
import { Generator } from '../Tools/Generator';
import { Subscribe } from '../Tools/Subscribe';
import { UIBase } from './UIBase';
const { ccclass, property } = _decorator;

@ccclass('UIMgr')
export class UIMgr extends Component {

    private static ist: UIMgr;

    private _sceneName: string = "";
    private _root_UI: Node | null = null;
    private _currentPage: string = "";
    private _mapLayer: Map<string, Node> = new Map();
    private _UIConf: any = null;
    private _stackPageName: string[] = [];
    private _UIMap: Map<string, UIBase> = new Map();
    private _PageMap: Map<string, UIBase> = new Map();
    private gen: Generator | null = null;

    private constructor(name: string) {
        super(name);
        this._UIConf = Configure.getConfigure("ui");
        // this._reset();
        Subscribe.listen("change scene", this.name, this._reset, this);
        Subscribe.listen("open UI", this.name, this.openUI, this);
        Subscribe.listen("close UI", this.name, this.closeUI, this);
        Subscribe.listen("alert UI", this.name, this.alert, this);
        Subscribe.listen("go back page", this.name, this.goBackPage, this);
    }

    public static getInstance() {
        if (!UIMgr.ist) {
            UIMgr.ist = new UIMgr("UIMgr");
        }
        return UIMgr.ist;
    }

    private _reset(scene_name: string, num: number, data: any) {
        this._sceneName = scene_name;
        this._currentPage = "";
        this._stackPageName = [];
        this._UIMap.clear();
        this._PageMap.clear();
        this._mapLayer.clear();
        let rootPath = this._UIConf["root"];
        let typeArr = this._UIConf["types"];
        if (!typeArr || typeArr.length < 1) {
            Subscribe.trigger("log err", "Get type array failed!");
            return;
        }
        this._root_UI = find(rootPath);
        if (!this._root_UI) {
            Subscribe.trigger("log err", "Get UI root failed!");
            return;
        }
        typeArr.forEach((type: any) => {
            let node = this._root_UI?.getChildByName(type["node_name"]);
            if (node) {
                this._mapLayer.set(type["type_name"], node);
            } else {
                Subscribe.trigger("log err", "Failed to find node named \'" + type["node_name"] + "\' !");
            }
        });
        Subscribe.trigger("UI manager ready", scene_name, num, data);
    }

    private openUI(strName: string, layer?: string, params?: any) {
        let ui: UIBase | null | undefined = this._UIMap.get(strName);
        layer = layer || "Page";
        if (layer === "Page") {
            this._destoryAllUI();
            this.openPage(strName);
            ui = this._PageMap.get(strName);
        }
        if (!ui) {
            let layer_node = this._mapLayer.get(layer);
            if (!layer_node) {
                Subscribe.trigger("alert err", "找不到该界面：" + strName);
                return;
            }
            let ui_node = Generator.getInstance().generator(layer_node, strName);
            if (!ui_node) {
                Subscribe.trigger("alert err", "生成界面失败：" + strName);
                return;
            }
            ui = ui_node.getComponent(UIBase);
            if (!ui) {
                Subscribe.trigger("log err", strName + " has no comp named \'UIBase\'.");
                return;
            }
            ui._strName = strName;
            ui.init(params);
            if (layer === "Page") {
                this._PageMap.set(strName, ui);
            } else {
                this._UIMap.set(strName, ui);
            }
        }
        ui.open(params);
    }

    private openPage(pageName: string) {
        if (this._currentPage === pageName) {
            return;
        }
        if (this._currentPage) {
            this._stackPageName.push(this._currentPage);
        }
        if (this._currentPage && this._stackPageName.length > 1) { // 最底层的页面不会关闭
            this._PageMap.get(this._currentPage)?.close(null);
        }
        if (this._stackPageName.length > 0) {
            Subscribe.trigger("stop move camera");
        }
        this._currentPage = pageName;
    }

    public closeUI(strName: string, layer?: string, params?: any) {
        if (!layer) {
            layer = "Window";
        }
        let ui = this._UIMap.get(strName);
        if (layer === "Page") {
            ui = this._PageMap.get(strName);
        }
        if (!ui) {
            return;
        }
        ui.close(params);
    }

    private _destoryAllUI() {
        this._UIMap.forEach((ui, key) => {
            ui.node.destroy();
        });
        this._UIMap.clear();
    }

    private goBackPage() {
        let length = this._stackPageName.length;
        if (length < 1) {
            return;
        }
        if (this._currentPage) {
            this._PageMap.get(this._currentPage)?.close(null);
            this._currentPage = "";
        }
        this._destoryAllUI();
        let prePage = this._stackPageName.pop();
        if (!prePage) {
            return;
        }
        this.openPage(prePage);
        if (this._stackPageName.length < 1) {
            Subscribe.trigger("continue move camera");
        }
    }

    private alert(content: string, parent: Node, pos?: Vec3) {
        if (!this.gen) {
            this.gen = Generator.getInstance();
        }
        let lbl_node = this.gen.generator(parent, "Alert_Label", pos);
        let lbl = lbl_node?.getComponent(Label);
        if (lbl) { lbl.string = content; }
        tween(lbl_node)
            .by(1, { position: v3(0, 150, 0) }, { easing: "fade" })
            .call(() => { lbl_node?.destroy(); })
            .start();
    }
}
