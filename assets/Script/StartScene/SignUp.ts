import { _decorator, Node, EditBox, Sprite } from 'cc';
import { LoginMsg } from '../NetWork/LoginMsg';
import { ImgMgr } from '../Tools/ImgMgr';
import { Subscribe } from '../Tools/Subscribe';
import { UIBase } from '../UI/UIBase';
const { ccclass, property } = _decorator;

@ccclass('SignUp')
export class SignUp extends UIBase {

    private ac_ed_box: EditBox | null | undefined = null;
    private pw_ed_bix: EditBox | null | undefined = null;

    protected onInit() {
        this.ac_ed_box = this.getComp("Ac_ed_box", "EditBox");
        this.pw_ed_bix = this.getComp("Pw_ed_box", "EditBox");
        this.addClickEvent("Login_Btn", () => {
            if (!this.ac_ed_box || !this.pw_ed_bix) {
                Subscribe.trigger("alert err", "严重错误！请检查各节点名称！");
                return;
            }
            this.login(this.ac_ed_box.string, this.pw_ed_bix.string);
        });
        this.addClickEvent("Regist_Btn", () => {
        });
    }

    private login(ac: string, pw: string) {
        // #####################################
        if (LoginMsg.login_test()) {
            Subscribe.trigger("login success");
            this.node.active = false;
        }
        // #####################################
    }

    private regist() { }

}
