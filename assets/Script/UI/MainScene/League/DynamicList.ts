import { _decorator, Node, Label, EditBox } from 'cc';
import { Generator } from '../../../Tools/Generator';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
import { LeagueMgr } from './LeagueMgr';
const { ccclass, property } = _decorator;

@ccclass('DynamicList')
export class DynamicList extends UIBase {

    private gen: Generator | null = null;
    private leagueMgr: LeagueMgr | null = null;

    private dynamic_page_map: Map<number, Node> = new Map();

    private view_root: Node | undefined;
    private page_num_box: EditBox | undefined;
    private page_num: number = 0;
    private max_page: number = 0;
    private current_page: Node | undefined;

    protected onInit(league_id: string) {
        Subscribe.listen("refresh dynamics", this.name, this.refreshDynamics, this);

        this.gen = Generator.getInstance();
        this.leagueMgr = LeagueMgr.getInstance();

        this.view_root = this.getNode("Dynamic_View");
        this.page_num_box = this.getComp("PageNum", "EditBox");
        this.page_num = 1;

        this.addClickEvent("PreBtn", () => { this.turnToPage(-1, false); }, this);
        this.addClickEvent("NextBtn", () => { this.turnToPage(-1, true); }, this);
        if (this.page_num_box) {
            this.page_num_box.string = "1/1";
            this.page_num_box.node.on("editing-did-ended", (box: EditBox) => {
                let page_num = Number(box.string);
                if (!isNaN(page_num)) { this.turnToPage(page_num, false); }
                box.string = this.page_num.toString() + "/" + this.max_page.toString();
            }, this);
        }
    }

    protected onOpen(league_id: string) {
        this.refreshDynamics(league_id);
    }

    private refreshDynamics(league_id: string) {
        if (!this.leagueMgr || !this.gen || !this.view_root) { Subscribe.trigger("log err", "Init failed!"); return; }
        this.view_root.removeAllChildren();
        this.dynamic_page_map.clear();
        let dynamics = this.leagueMgr.getLeagueDynamicsById(league_id)["dynamics"];
        let new_page: Node | null = null;
        for (let i = 0; i < dynamics.length; i++) {
            if (i % 8 == 0) { // 一页8条动态
                new_page = this.gen.generator(this.view_root, "Dynamics");
                if (new_page && i / 8 > 0) { new_page.active = false; } // 除了第一页都失活，实现默认显示第一页
                if (!new_page) { break; }
                this.dynamic_page_map.set(Math.floor(i / 8) + 1, new_page); // 根据页码保存
            }
            if (!new_page) { break; }
            this.createDynamic(new_page, dynamics[i]);
        }
        if (this.dynamic_page_map.size > 0) {
            let first_page = this.dynamic_page_map.get(1);
            if (first_page) { this.current_page = first_page; }
        } else {
            new_page = this.gen.generator(this.view_root, "Dynamics");
            if (new_page) {
                this.dynamic_page_map.set(1, new_page);
                this.current_page = new_page;
            }
        }
        if (this.page_num_box) {
            this.max_page = this.dynamic_page_map.size;
            this.max_page = this.max_page > 0 ? this.max_page : 1;
            this.page_num = 1;
            this.page_num_box.string = this.page_num.toString() + "/" + this.max_page.toString();
        }
    }

    createDynamic(parent: Node, info: any) {
        if (!this.gen) { this.gen = Generator.getInstance(); }
        let new_dynamic = this.gen.generator(parent, "League_Dynamic");
        if (!new_dynamic) { return; }
        let content = new_dynamic.getChildByPath("Mask/Content")?.getComponent(Label);
        let time = new_dynamic.getChildByName("Timestamp")?.getComponent(Label);
        if (!content || !time) { return; }
        content.string = info["content"];
        time.string = info["time"];
    }

    turnToPage(page_num: number, isNext: boolean) {
        if (page_num > 0) {
            if (page_num === this.page_num) { return; }
            page_num = page_num > this.max_page ? this.max_page : page_num;
        } else if (isNext) {
            if (this.page_num >= this.max_page) { return; }
            page_num = this.page_num + 1;
        } else {
            if (this.page_num <= 1) { return; }
            page_num = this.page_num - 1;
        }
        let page = this.dynamic_page_map.get(page_num);
        if (!page) { return; }
        this.page_num = page_num;
        if (this.page_num_box) { this.page_num_box.string = this.page_num.toString() + "/" + this.max_page.toString(); }
        if (this.current_page) { this.current_page.active = false; }
        this.current_page = page;
        this.current_page.active = true;
        return;
    }
}
