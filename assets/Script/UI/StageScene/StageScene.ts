import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('StageScene')
export class StageScene extends Component {
    onLoad() {
        Subscribe.listen("UI manager ready", this.name, (scene_name: string, num: number, data: any) => {
            if (scene_name === "Expedition") {
                Subscribe.trigger("open UI", "StagePage", "Page", data);
            }
        });
    }
}
