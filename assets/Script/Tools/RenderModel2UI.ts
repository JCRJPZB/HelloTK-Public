import { _decorator, Component, Node, Camera, Sprite, RenderTexture, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestRender')
export class TestRender extends Component {

    @property(Camera)
    public camera!: Camera;

    @property(Sprite)
    public target!: Sprite;

    private model!: Node;

    update() {
        this.updateModelState();
    }

    updateModelState() {
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
