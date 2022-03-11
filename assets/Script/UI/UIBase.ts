import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
import { UIContainer } from './UIContainer';
const { ccclass, property } = _decorator;

@ccclass('UIBase')
export class UIBase extends Component {

    public _strName: string = '';
    protected _ui: UIContainer = new UIContainer();
    // protected _arrWatcher: Watcher[] = [];

    public init(params?: any) {
        this._strName = this.node.name;
        this._ui.find(this.node);
        this.onInit(params);
    }

    public open(params?: any) {
        if (!this.node.active) {
            this.node.active = true;
        }
        this.onOpen(params);
    }

    public close(params?: any) {
        if (this.node.active) {
            this.node.active = false;
        }
        this.onClose(params);
    }

    public getNode(name: string) {
        return this._ui.getNode(name);
    }

    public getComp(name: string, type: string) {
        return this._ui.getComp(name, type);
    }

    public addClickEvent(nodeName: string, cb: Function, target?: unknown) {
        let btnNode = this.getNode(nodeName);
        if (!btnNode) {
            Subscribe.trigger("log err", "Can't find node named \'" + nodeName + "\' at page \'" + this._strName + "\'.");
            return;
        }
        btnNode.on("click", cb, target);
    }

    // public bindCb(func: Function, params?: any) { if (params && params.length === 1) { params = params[0]; }}

    // public bindComp(name: string, type: string) { }

    protected onInit(params?: any) {
        ; //
    }

    protected onOpen(params?: any) {
        ; //
    }

    protected onClose(params?: any) {
        ; //
    }

    // protected onDestroy(params: any) {
    //     ; //
    // }
}
