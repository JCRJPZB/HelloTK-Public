import { _decorator, Component, EventTouch, geometry, Camera, PhysicsSystem, find, input, Input } from 'cc';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;
const { Ray } = geometry;

@ccclass('TouchScreen')
export class TouchScreen extends Component {

    private touchRay = new Ray();
    private mainCamera: Camera | null = null;

    // ###
    private touch_flag: string = "";

    onLoad() {
        Subscribe.listen("change scene", this.name, (scene_name: string, num: number, ...arg: any[]) => {
            let camera_node = find("Main Camera");
            if (camera_node) { this.mainCamera = camera_node.getComponent(Camera); }
            else { this.mainCamera = null; Subscribe.trigger("log err", "Can't find camera node!"); }
        });
        input.on(Input.EventType.TOUCH_START, (e) => { this.touch(e, "start"); }, this);
        input.on(Input.EventType.TOUCH_MOVE, (e) => { this.touch(e, "move"); }, this);
        input.on(Input.EventType.TOUCH_END, (e) => { this.touch(e, "end"); }, this);
        input.on(Input.EventType.TOUCH_CANCEL, (e) => { this.touch(e, "end"); }, this);
    }

    touch(e: EventTouch, type: string) {
        if (!this.mainCamera) {
            Subscribe.trigger("t_" + type + "_2d", e);
            return;
        }
        this.mainCamera.screenPointToRay(e.getLocationX(), e.getLocationY(), this.touchRay);
        if (PhysicsSystem.instance.raycast(this.touchRay)) {
            let res = PhysicsSystem.instance.raycastResults;
            if (res.length <= 0) { return; }
            let uuid = res[0].collider.node.uuid;
            Subscribe.trigger("t_" + type + uuid, e);
        }
    }
}
