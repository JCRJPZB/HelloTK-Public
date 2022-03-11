import { _decorator, Component, Node, Vec3 } from 'cc';
import { Configure } from '../Tools/Configure';
import { Generator } from '../Tools/Generator';
import { ImgMgr } from '../Tools/ImgMgr';
import { Subscribe } from '../Tools/Subscribe';
import { Item } from './Item';
const { ccclass, property } = _decorator;

@ccclass('ItemMgr')
export class ItemMgr extends Component {

    private static ist: ItemMgr | null = null;
    private conf: any;
    private item_types: any[] = [];
    private conf_map: Map<string, any> = new Map();
    private imgMgr: ImgMgr | null = null;
    private gen: Generator | null = null;

    private constructor(name: string) {
        super(name);
        this.conf = Configure.getConfigure("items");
        if (this.conf) {
            this.item_types = this.conf["types"];
            this.conf["items"].forEach((item: any) => {
                this.conf_map.set(item["id"], item);
            });
        }
        this.imgMgr = ImgMgr.getInstance();
        this.gen = Generator.getInstance();
        Subscribe.listen("try use item", this.name, this.tryUseItem, this);
    }

    public static getInstance() {
        if (!ItemMgr.ist) { ItemMgr.ist = new ItemMgr("ItemMgr"); }
        return ItemMgr.ist;
    }

    // 获取物品类别
    public getItemTypes() { return this.item_types; }


    public getItemConf(id: string) { // 获取物品信息
        if (!this.conf_map.has(id)) { return null; }
        return this.conf_map.get(id);
    }

    public getItemNode(id: string, parent: Node, item_num: number, browser_root?: Node, pos?: Vec3) {
        let conf = this.getItemConf(id);
        if (!this.gen) { this.gen = Generator.getInstance(); }
        if (conf && this.imgMgr) {
            let node = this.gen.generator(parent, "Item", pos);
            if (!node) { Subscribe.trigger("log err", "Can't find prefab: Item"); return; }
            let ctrl = node.getComponent(Item);
            ctrl?.init(conf, item_num, browser_root);
            return node;
        }
        Subscribe.trigger("log err", "ItemMgr initalized failed!");
        return null;
    }

    private tryUseItem(id: string, num: number, item_browser_root: Node, callback: Function) {
        // root 是用来放提示框的
        // ##################
        callback(true); // 后续需要加上使用物品的提示，以及若不能使用物品的提示
        // ##################
    }
}