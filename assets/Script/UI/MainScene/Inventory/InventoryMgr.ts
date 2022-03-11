import { _decorator, Component, Node } from 'cc';
import { ItemMgr } from '../../../Items/ItemMgr';
import { Functions } from '../../../Tools/Functions';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('InventoryMgr')
export class InventoryMgr extends Component {

    private static ist: InventoryMgr;
    private itemMgr: ItemMgr | null = null;
    private item_types_id: any[] = [];

    private inventory_data: any = {
        "resources": [],
        "spirit": [],
        "equipment": [],
        "tool": []
    };

    // ###############################################
    private test_data: any = {
        "resources": [
            {
                "id": "Diamond",
                "num": 1500
            },
            {
                "id": "Gold",
                "num": 1000000
            }
        ],
        "spirit": [],
        "equipment": [],
        "tool": [
            {
                "id": "GiftBox",
                "num": 2
            }
        ]
    };
    // ###############################################

    private constructor(name: string) {
        super(name);
        this.inventory_data = this.getInventoryData();
        this.itemMgr = ItemMgr.getInstance();
        this.item_types_id = this.itemMgr.getItemTypes();
        Subscribe.listen("collect item", this.name, this.changeItemNum, this);
        Subscribe.listen("use item", this.name, this.changeItemNum, this);
    }

    public static getInstance() {
        if (!InventoryMgr.ist) { InventoryMgr.ist = new InventoryMgr("InventoryMgr"); }
        return InventoryMgr.ist;
    }

    private getInventoryData() {
        // ########################
        return this.test_data; // #
        // ########################
    }

    public getInventoryByType(type_name: string) {
        if (type_name === "all") {
            let items: any[] = [];
            this.item_types_id.forEach(id => {
                if (id["type_id"] === "all") { return; }
                items = items.concat(this.inventory_data[id["type_id"]]);
            });
            return items;
        }
        return this.inventory_data[type_name];
    }

    private changeItemNum(id: string, num: number) {
        if (!this.itemMgr) { Subscribe.trigger("log err", "InventoryMgr init failed"); return; }
        let item = this.itemMgr.getItemConf(id);
        if (item) {
            let item_list: any[] = this.inventory_data[item["type_id"]];
            let find_flag: boolean = false;
            let idx = 0, res = 0;
            item_list.forEach(item => {
                if (item["id"] === id) {
                    res = item["num"] = Functions.normalize(item["num"] + num, 0, null);
                    idx = item_list.indexOf(item);
                    find_flag = true;
                }
            });
            if (!find_flag && num > 0) {
                item_list.push({ "id": id, "num": num });
            }
            if (find_flag && idx > -1 && res <= 0) {
                item_list = item_list.slice(idx, idx);
            }
            this.inventory_data[item["type_id"]] = item_list;
        }
        Subscribe.trigger("change item num");
    }
}
