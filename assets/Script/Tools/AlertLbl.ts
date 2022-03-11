import { _decorator, Component, Node, Label, Vec3, tween, v3 } from 'cc';
import { Generator } from './Generator';
const { ccclass, property } = _decorator;

@ccclass('AlertLbl')
export class AlertLbl extends Component {

    private static ins: AlertLbl;
    private gen: Generator | null = null;

    private constructor(name: string) {
        super(name);
        this.gen = Generator.getInstance();
    }

    public static getInstance() {
        if (!AlertLbl.ins) { AlertLbl.ins = new AlertLbl("AlertLbl"); }
        return AlertLbl.ins;
    }

    public alert(content: string, parent: Node, pos: Vec3) {
        if (!this.gen) { this.gen = Generator.getInstance(); }
        let lbl_node = this.gen.generator(parent, "Alert_Label", pos);
        let lbl = lbl_node?.getComponent(Label);
        if (lbl) { lbl.string = content; }
        tween(lbl_node)
            .by(1, { position: v3(0, 150, 0) }, { easing: "fade" })
            .call(() => { lbl_node?.destroy(); })
            .start();
    }
}
