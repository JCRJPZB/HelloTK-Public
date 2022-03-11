import { _decorator, Node, Label } from 'cc';
import { InventoryMgr } from './InventoryMgr';
import { Subscribe } from '../../../Tools/Subscribe';
import { ItemMgr } from '../../../Items/ItemMgr';
import { Generator } from '../../../Tools/Generator';
import { UIBase } from '../../UIBase';
const { ccclass, property } = _decorator;

@ccclass('Inventory')
export class Inventory extends UIBase {

    private inventoryMgr: InventoryMgr | null = null;
    private itemMgr: ItemMgr | null = null;
    private gen: Generator | null = null;

    private category_root: Node | undefined;
    private item_root: Node | undefined;
    private item_browser_root: Node | undefined;

    private currType: string = "all";

    onInit() {
        Subscribe.listen("collect item", this.name, this.changeItemNum, this);
        Subscribe.listen("change item num", this.name, this.changeItemNum, this);
        this.inventoryMgr = InventoryMgr.getInstance();
        this.itemMgr = ItemMgr.getInstance();
        this.gen = Generator.getInstance();
        this.addClickEvent("Return", () => {
            Subscribe.trigger("go back page");
        }, this);

        this.category_root = this.getNode("Category_Root");
        this.item_root = this.getNode("Item_Root");
        this.item_browser_root = this.getNode("Item_Browser_Root");

        this.setCategroy();
    }

    onOpen() {
        this.refreshItems("all");
    }

    onClose() {
        if (this.item_browser_root) { this.item_browser_root.removeAllChildren(); }
        if (this.item_root) { this.item_root.removeAllChildren(); }
    }

    private setCategroy() {
        if (!this.itemMgr) { Subscribe.trigger("log err", "Inventory init failed!"); return; }
        let itemTypes = this.itemMgr.getItemTypes();
        itemTypes.forEach(type => {
            if (!this.gen) { this.gen = Generator.getInstance(); }
            if (this.category_root) {
                let category_node = this.gen.generator(this.category_root, "Inventory_Category");
                category_node?.on("click", () => { this.refreshItems(type["type_id"]); });
                let category_name_lbl = category_node?.getChildByName("Name")?.getComponent(Label);
                if (category_name_lbl) { category_name_lbl.string = type["type_name"]; }
            }
        });
    }

    private refreshItems(type: string) {
        this.currType = type;
        if (this.item_browser_root) { this.item_browser_root.removeAllChildren(); }
        if (this.item_root) { this.item_root.removeAllChildren(); }
        let items: any[] = this.inventoryMgr?.getInventoryByType(type);
        if (items && items.length >= 0) {
            items.forEach(item => {
                if (this.itemMgr && this.item_root && this.item_browser_root) {
                    this.itemMgr.getItemNode(item["id"], this.item_root, item["num"], this.item_browser_root);
                }
            });
        }
    }

    private changeItemNum() {
        if (this.node.active) {
            this.refreshItems(this.currType);
        }
    }

    onDestroy() {
        Subscribe.remove("collect item", this.name);
        Subscribe.remove("use item", this.name);
    }
}
