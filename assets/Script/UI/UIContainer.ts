import { _decorator, Component, Node, Button, Label, Sprite, EditBox, ProgressBar } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
const { ccclass, property } = _decorator;

let comTypes: any = {
    'Button': Button,
    'Label': Label,
    'Sprite': Sprite,
    'EditBox': EditBox,
    "ProgressBar": ProgressBar
}

@ccclass('UIContainer')
export class UIContainer extends Component {

    public mapNode: Map<string, Node> = new Map();
    public mapBtn: Map<string, Button> = new Map();
    public mapLabel: Map<string, Label> = new Map();
    public mapSprite: Map<string, Sprite> = new Map();
    public mapEditBox: Map<string, EditBox> = new Map();
    public mapProgressBar: Map<string, ProgressBar> = new Map();
    private compCache: any = null;

    constructor() {
        super();
        this.compCache = {
            'Button': this.mapBtn,
            'Label': this.mapLabel,
            'Sprite': this.mapSprite,
            'EditBox': this.mapEditBox,
            "ProgressBar": this.mapProgressBar
        }
    }

    public getNode(key: string) {
        return this.mapNode.get(key);
    }

    public getComp(key: string, type: string) {
        let mapCom = this.compCache[type];
        if (!mapCom) {
            Subscribe.trigger("log err", "Can't find ui type named \'" + type + "\'.");
            return null;
        }
        return mapCom.get(key);
    }

    public find(rootN: Node) {
        if (!rootN) {
            Subscribe.trigger("log err", "Node is null or undefined!");
            return;
        }
        let name = rootN.name;
        this.mapNode.set(name, rootN);
        //要把该节点下到所有组件初始化到相应到Map中
        for (let key in this.compCache) {
            //组件类型
            let ComType = comTypes[key];
            //获取组件
            let Comp = rootN.getComponent(ComType);
            if (Comp) {
                //取组件到容器如:this.mapBtn
                let mapComp = this.compCache[key];
                //将组件存到相应到组件map中
                mapComp.set(name, Comp);
            }
        }
        let arrChild = rootN.children;
        for (let node of arrChild) {
            this.find(node);
        }
    }
}
