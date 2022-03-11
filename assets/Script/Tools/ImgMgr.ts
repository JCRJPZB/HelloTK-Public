import { _decorator, Component, Node, SpriteFrame } from 'cc';
import { ResMgr } from './ResMgr';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('ImgMgr')
export class ImgMgr extends Component {

    private spf_map: Map<string, SpriteFrame> = new Map();
    private static ist: ImgMgr | null = null;

    public static getInstance(): ImgMgr {
        if (!ImgMgr.ist) { ImgMgr.ist = new ImgMgr("ImgMgr"); }
        return ImgMgr.ist;
    }

    private constructor(name: string) {
        super(name);
        ResMgr.loadDir("Texture", "/", SpriteFrame, (spfs: SpriteFrame[]) => { // 加载全部预制体
            if (spfs.length < 1) { Subscribe.trigger("alert err", "No SpriteFrame "); return; }
            spfs.forEach(spf => { this.spf_map.set(spf.name, spf); }); // 用图片名作key，写配置需注意重名
            Subscribe.trigger("ImgMgr ready");
        });
    }

    public getImg(name: string) { // 获取图片
        let spf = this.spf_map.get(name);
        if (spf) { return spf; }
        return null;
    }
}
