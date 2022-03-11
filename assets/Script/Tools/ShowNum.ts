import { _decorator, Component, Node, Sprite, SpriteAtlas, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ShowNum')
export class ShowNum extends Component {
    @property(SpriteAtlas)
    sprAtlas: SpriteAtlas | null = null;

    private _poolArr: Array<any> = [];

    onLoad() {

    }

    // public loadTexture( texturePath:string = "res/game/laba_haiyang.png",callBack:Function = null ) :void {
    // this._callBack = callBack;
    // let self = this;

    // if(self._sprAtlas){
    //     self._callBack();
    // }else{
    //     cc.loader.loadRes(texturePath, cc.SpriteAtlas, function (err, atlas:cc.SpriteAtlas) {
    //         self._sprAtlas = atlas;
    //         self._callBack();
    //     })
    // }
    // }

    public getNodeFromPool(index: number): Node {
        let numNode: Node;
        let numSpr: Sprite;
        if (this._poolArr.length == 0 || (index + 1) > this._poolArr.length) {
            numNode = new Node();
            numSpr = numNode.addComponent(Sprite);
            this._poolArr.push(numNode);
        }

        numNode = this._poolArr[index];
        if (numNode && numNode.parent) {
            numNode.parent.removeChild(numNode);
        }
        return numNode;
    }

    public showNumber(num: number, frameName: string = "num2-"): void {
        if (this.sprAtlas == null) return;

        this.removeReset();

        let numArr: string[] = num.toString().split("");
        let numNode: Node;
        let numSpr: Sprite;

        for (let i: number = 0; i < numArr.length; i++) {
            numNode = this.getNodeFromPool(i);
            this.node.addChild(numNode);
            let sp = numNode.getComponent(Sprite);
            if (!sp) { return; }
            numSpr = sp;
            let s: string = numArr[i];
            numSpr.spriteFrame = this.sprAtlas.getSpriteFrame(frameName + s);
            let pos = numNode.getPosition();
            if (!numSpr.spriteFrame) { return; }
            numNode.setPosition(new Vec3((numSpr.spriteFrame?.rect.width + 2) * i, pos.y, pos.z));
        }
    }

    private removeReset(): void {
        this.node.removeAllChildren();
    }
}
