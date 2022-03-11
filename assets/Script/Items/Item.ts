import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { Functions } from '../Tools/Functions';
import { Generator } from '../Tools/Generator';
import { ImgMgr } from '../Tools/ImgMgr';
import { ItemBrowser } from './ItemBrowser';
const { ccclass, property } = _decorator;

@ccclass('Item')
export class Item extends Component {

    private imgMgr: ImgMgr | null = null;
    private gen: Generator | null = null;

    private bg: Sprite | null | undefined = null;
    private sp: Sprite | null | undefined = null;
    private num_lbl: Label | null | undefined = null;

    private data: any = {
        "type_id": "",
        "sub_type_id": "",
        "id": "",
        "img": "",
        "name": "",
        "describe": "",
        "rare": "",
        "access": null,
        "able_to_use": false,
        "max_num_once": 0,
        "num": 0
    }

    onLoad() {
        this.gen = Generator.getInstance();
    }

    init(conf: any, item_num: number, browser_root?: Node) {
        this.data = conf;
        // 无单次使用上限
        if (this.data["max_num_once"] === -1) { this.data["max_num_once"] = Number.MAX_SAFE_INTEGER; }

        this.bg = this.node.getChildByName("Bg")?.getComponent(Sprite);
        this.sp = this.node.getChildByName("Sprite")?.getComponent(Sprite);
        this.num_lbl = this.node.getChildByName("Num")?.getComponent(Label);

        this.data["num"] = item_num;
        this.imgMgr = ImgMgr.getInstance();
        let bg_spf = this.imgMgr.getImg("Item_Bg_" + this.data["rare"]);
        let sp_spf = this.imgMgr.getImg(this.data["img"]);
        if (this.bg && this.sp && this.num_lbl && bg_spf && sp_spf) {
            this.bg.spriteFrame = bg_spf;
            this.sp.spriteFrame = sp_spf;
            this.num_lbl.string = Functions.numToStr(this.data["num"]);
        }
        if (browser_root) { this.node.on("click", () => { this.createBrowser(browser_root); }); }
    }

    private createBrowser(parent: Node) {
        if (!this.gen) { this.gen = Generator.getInstance(); }
        let browser = this.gen.generator(parent, "Item_Browser");
        if (!browser) { return; }
        let ctrl = browser.getComponent(ItemBrowser);
        ctrl?.init(this.data);
    }
}
