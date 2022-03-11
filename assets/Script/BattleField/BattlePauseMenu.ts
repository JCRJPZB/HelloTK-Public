import { _decorator, Node } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
import { UIBase } from '../UI/UIBase';
const { ccclass, property } = _decorator;
 
@ccclass('BattlePauseMenu')
export class BattlePauseMenu extends UIBase {
    
    protected onInit() {
        this.addClickEvent("Confirm", () => {
            this.node.active = false; // 隐藏暂停窗口
            Subscribe.trigger("resume"); // 继续
            Subscribe.trigger("battle interrupted", true, false, []); // 中途结束战斗，没有任何奖励和消耗
        });
        this.addClickEvent("Resume", () => {
            this.node.active = false; // 隐藏暂停窗口
            Subscribe.trigger("resume"); // 继续
        });
    }
}
