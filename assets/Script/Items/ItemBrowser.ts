import { _decorator, Component, Node, Label, Sprite } from 'cc';
import { Functions } from '../Tools/Functions';
import { Generator } from '../Tools/Generator';
import { ImgMgr } from '../Tools/ImgMgr';
import { Subscribe } from '../Tools/Subscribe';
import { Item } from './Item';
const { ccclass, property } = _decorator;

@ccclass('ItemBrowser')
export class ItemBrowser extends Component {

    private imgMgr: ImgMgr | null = null;
    private gen: Generator | null = null;

    private data: any = null;

    private blockInput: Node | null = null;
    private quit_btn: Node | null = null;
    private return_btn: Node | null = null;
    private use_btn: Node | null = null;

    private item_bg: Sprite | null | undefined = null;
    private item_sp: Sprite | null | undefined = null;
    private item_name_lbl: Label | null | undefined = null;
    private item_num_lbl: Label | null | undefined = null;
    private item_num: number = 0;

    private describe: Label | null | undefined = null;
    private access_root: Node | null = null;

    private use_UI_node: Node | null = null;
    private use_UI_confirm: Node | null = null;
    private use_UI_cancel: Node | null = null;
    private use_UI_quit: Node | null = null;
    private use_item_node: Node | null = null;
    private use_item_name: Label | null | undefined = null;
    private use_item_describe: Label | null | undefined = null;
    private use_item_reduce_btn: Node | null = null;
    private use_item_reduce_disable_btn: Node | null = null;
    private use_item_num_lbl: Label | null | undefined = null;
    private use_item_add_btn: Node | null = null;
    private use_item_add_disable_btn: Node | null = null;
    private use_item_max_btn: Node | null = null;
    private use_item_num: number = 0;

    onLoad() {
        this.imgMgr = ImgMgr.getInstance();
        this.gen = Generator.getInstance();

        this.quit_btn = this.node.getChildByName("Quit_Btn");
        this.return_btn = this.node.getChildByPath("Btn_Root/Quit_Btn");
        this.blockInput = this.node.getChildByName("BlockInput");
        this.use_btn = this.node.getChildByPath("Btn_Root/Use_Btn");
        this.item_bg = this.node.getChildByPath("Item/Bg")?.getComponent(Sprite);
        this.item_sp = this.node.getChildByPath("Item/Sprite")?.getComponent(Sprite);
        this.item_name_lbl = this.node.getChildByPath("Item/Name")?.getComponent(Label);
        this.item_num_lbl = this.node.getChildByPath("Item/Number")?.getComponent(Label);

        this.describe = this.node.getChildByName("Describe")?.getComponent(Label);
        this.access_root = this.node.getChildByPath("AccessView/view/content");

        this.use_UI_node = this.node.getChildByName("UseUI");
        if (this.use_UI_node) {
            this.use_UI_confirm = this.use_UI_node.getChildByPath("Btns/Confirm");
            this.use_UI_cancel = this.use_UI_node.getChildByPath("Btns/Cancel");
            this.use_UI_quit = this.use_UI_node.getChildByName("BlockInput");
            this.use_item_node = this.use_UI_node.getChildByName("Item");
            this.use_item_name = this.use_UI_node.getChildByName("Name")?.getComponent(Label);
            this.use_item_describe = this.use_UI_node.getChildByName("Describe")?.getComponent(Label);
            this.use_item_reduce_btn = this.use_UI_node.getChildByPath("Layout/Reduce");
            this.use_item_reduce_disable_btn = this.use_UI_node.getChildByPath("Layout/Reduce_disable");
            this.use_item_num_lbl = this.use_UI_node.getChildByPath("Layout/Num_Lbl")?.getComponent(Label);
            this.use_item_add_btn = this.use_UI_node.getChildByPath("Layout/Add");
            this.use_item_add_disable_btn = this.use_UI_node.getChildByPath("Layout/Add_disable");
            this.use_item_max_btn = this.use_UI_node.getChildByPath("Layout/Max");
            this.use_UI_node.active = false;
        } else { Subscribe.trigger("log err", "ItemBrowser init failed!"); }
    }

    public init(data: any) {
        this.data = data;
        this.item_num = this.data["num"];
        if (this.item_name_lbl && this.describe && this.item_num_lbl) {
            this.item_name_lbl.string = this.data["name"];
            this.describe.string = this.data["describe"];
            this.item_num_lbl.string = Functions.numToStr(this.item_num);
        }
        if (this.item_bg && this.item_sp && this.imgMgr) {
            this.item_bg.spriteFrame = this.imgMgr.getImg("Item_Bg_" + this.data["rare"]);
            this.item_sp.spriteFrame = this.imgMgr.getImg(this.data["img"]);
        }
        if (this.data["access"]) { // 生成item来源Label
            this.data["access"].forEach((access: string) => {
                if (!this.access_root || !this.gen) { Subscribe.trigger("log err", "ItemBrowser init failed!"); return; }
                let new_access = this.gen.generator(this.access_root, "Item_Access");
                let access_name_lbl = new_access?.getChildByName("Name")?.getComponent(Label);
                if (access_name_lbl) { access_name_lbl.string = access; }
            });
        }
        this.quit_btn?.on("click", () => { this.node.destroy(); });
        this.return_btn?.on("click", () => { this.node.destroy(); });
        this.blockInput?.on("click", () => { this.node.destroy(); });
        if (this.data["able_to_use"]) { // 可以使用的item添加使用按钮及其回调事件
            this.use_btn!.active = true;
            this.use_btn?.on("click", () => { this.openUseUI(); });
        } else { this.use_btn!.active = false; }
        if (this.use_UI_node) { this.use_UI_node.active = false; }
        this.genUseUI();
    }

    private genUseUI() {
        if (!this.use_UI_node) { Subscribe.trigger("log err", "ItemBrowser init failed!"); return; }
        this.use_item_node?.getComponent(Item)?.init(this.data, this.item_num);
        if (this.use_item_name) { this.use_item_name.string = this.data["name"]; }
        if (this.use_item_describe) { this.use_item_describe.string = this.data["describe"]; }
        if (this.use_item_num_lbl) { this.use_item_num_lbl.string = "1"; }
        this.use_item_num = 1;
        this.use_item_reduce_btn?.on("click", () => {
            if (this.use_item_num > 1) { this.use_item_num--; }
            this.refreshUseNum();
        });
        this.use_item_add_btn?.on("click", () => {
            if (this.use_item_num < this.item_num && this.use_item_num + 1 <= this.data["max_num_once"]) {
                this.use_item_num++;
            }
            this.refreshUseNum();
        });
        this.use_item_max_btn?.on("click", () => {
            this.use_item_num = this.item_num > this.data["max_num_once"] ? this.data["max_num_once"] : this.item_num;
            this.refreshUseNum();
        });
        this.use_UI_quit?.on("click", this.hideUseUI, this);
        this.use_UI_cancel?.on("click", this.hideUseUI, this);
        this.use_UI_confirm?.on("click", () => {
            Subscribe.trigger("try use item", this.data["id"], -this.use_item_num, this.node.parent, this.useItem.bind(this));
        });
        this.refreshUseNum();
    }

    private openUseUI() {
        if (!this.use_UI_node) { Subscribe.trigger("log err", "ItemBrowser init failed!"); return; }
        this.use_UI_node.active = true;
    }

    private refreshUseNum() {
        this.use_item_num = Functions.normalize(this.use_item_num, 1, this.item_num);
        if (this.use_item_num_lbl) {
            this.use_item_num_lbl.string = Functions.numToStr(this.use_item_num);
        }
        if (this.use_item_reduce_btn && this.use_item_reduce_disable_btn) {
            this.use_item_reduce_btn.active = this.use_item_num > 1;
            this.use_item_reduce_disable_btn.active = this.use_item_num <= 1;
        }
        if (this.use_item_add_btn && this.use_item_add_disable_btn) {
            let flag = this.use_item_num < this.item_num && this.use_item_num < this.data["max_num_once"];
            this.use_item_add_btn.active = flag;
            this.use_item_add_disable_btn.active = !flag;
        }
    }

    private useItem(ifUse: boolean) {
        this.hideUseUI();
        if (!ifUse) { return; }
        this.use_item_num = Functions.normalize(this.use_item_num, 1, this.item_num);
        Subscribe.trigger("use item", this.data["id"], -this.use_item_num);
        this.item_num -= this.use_item_num;
        if (this.item_num_lbl) { this.item_num_lbl.string = Functions.numToStr(this.item_num); }
        this.use_item_num = 1;
        this.refreshUseNum();
    }

    private hideUseUI() {
        if (this.use_UI_node) { this.use_UI_node.active = false; }
    }
}
