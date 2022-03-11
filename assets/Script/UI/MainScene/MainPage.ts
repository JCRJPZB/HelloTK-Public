import { _decorator, Node } from 'cc';
import { Subscribe } from '../../Tools/Subscribe';
import { UIBase } from '../UIBase';
const { ccclass, property } = _decorator;

@ccclass('MainPage')
export class MainPage extends UIBase {

    protected onInit() {
        this.addBtnEvent();
    }

    private addBtnEvent() {
        let root = this.getNode("Option_Btns_Root");
        if (!root) {
            Subscribe.trigger("log err", "Can't find node named \'Btns_Root\' !");
        } else {
            let btns = root.children;
            btns.forEach(btn => {
                if (btn.name === "Expedition") {
                    this.addClickEvent(btn.name, () => {
                        Subscribe.trigger("show Expedition");
                    });
                    return;
                }
                this.addClickEvent(btn.name, () => {
                    Subscribe.trigger("open UI", btn.name, "Page");
                });
            });
        }
        this.addClickEvent("WorldMap", () => {
            Subscribe.trigger("open UI", "WorldMap", "Page");
        });
    }
}
