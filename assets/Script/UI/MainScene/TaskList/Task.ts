import { _decorator, Node, Label, ProgressBar, AffineTransform } from 'cc';
import { UIBase } from '../../UIBase';
const { ccclass, property } = _decorator;
 
@ccclass('Task')
export class Task extends UIBase {

    private describe_lbl: Label | undefined;
    private progressBar: ProgressBar | undefined;
    private reward_root: Node | undefined;

    public init_task(conf: any) {
    }

}
