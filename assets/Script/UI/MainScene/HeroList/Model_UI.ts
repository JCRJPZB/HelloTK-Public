import { _decorator, Component, Node, Camera, Sprite, RenderTexture, SpriteFrame } from 'cc';
import { Generator } from '../../../Tools/Generator';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('Model_UI')
export class Model_UI extends Component {

    private camera: Camera | null | undefined = null;
    private model: Node | null = null;
    private target: Sprite | null = null;
    private gen: Generator | null = null;

    onLoad() {
        Subscribe.listen("set model UI targetTexture", this.name, (t: Sprite) => {
            this.target = t;
        });
        this.node.active = false;
        this.camera = this.node.getChildByName("Camera")?.getComponent(Camera);
        this.gen = Generator.getInstance();
        Subscribe.listen("show hero model", this.name, this.show, this);
        Subscribe.listen("change curr hero model", this.name, this.changeHero, this);
    }

    private show() {
        this.node.active = true;
    }

    private changeHero(prefab_name: string) {
        if (this.model) { this.model.destroy(); this.model = null; }
        if (!this.gen) { this.gen = Generator.getInstance(); }
        this.model = this.gen.generator(this.node, prefab_name);
        this.updateUI();
    }

    private updateUI() {
        if (!this.camera || !this.target) { return; }
        const renderTexture = new RenderTexture();
        renderTexture.reset({
            width: 600,
            height: 800
        });

        this.camera.targetTexture = renderTexture;
        const spriteFrame = new SpriteFrame();
        spriteFrame.texture = renderTexture;
        this.target.spriteFrame = spriteFrame;
    }
}
