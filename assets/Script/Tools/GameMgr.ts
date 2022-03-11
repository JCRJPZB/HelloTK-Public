import { _decorator, Component, Node, director } from 'cc';
import { InventoryMgr } from '../UI/MainScene/Inventory/InventoryMgr';
import { Generator } from './Generator';
import { ImgMgr } from './ImgMgr';
import { MoveCamera } from './MoveCamera';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('GameMgr')
export class GameMgr extends Component {

    private is_img_ready: boolean = false;
    private is_gen_ready: boolean = false;

    onLoad() {
        Subscribe.listen("bundle loaded", this.name, () => {
            // #############################
            Generator.getInstance();    // #
            MoveCamera.getInstance();   // #
            ImgMgr.getInstance();       // #
            InventoryMgr.getInstance(); // #
            // #############################
        });
        Subscribe.listen("ImgMgr ready", this.name, () => {
            this.is_img_ready = true;
            if (this.is_gen_ready){
                Subscribe.trigger("game start");
            }
        }, this);
        Subscribe.listen("Generator ready", this.name, () => {
            this.is_gen_ready = true;
            if (this.is_img_ready){
                Subscribe.trigger("game start");
            }
        });
        Subscribe.listen("pause", this.name, () => { director.pause(); }); // 暂停游戏
        Subscribe.listen("resume", this.name, () => { director.resume(); }); // 恢复游戏
    }
}
