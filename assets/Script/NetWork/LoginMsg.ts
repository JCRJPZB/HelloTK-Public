import { _decorator, Component } from 'cc';
import { Configure } from '../Tools/Configure';
import { Subscribe } from '../Tools/Subscribe';
import { MD5 } from './MD5';
const { ccclass, property } = _decorator;

@ccclass('LoginMsg')
export class LoginMsg extends Component {

    onLoad() {
        // console.log(Date.parse("2021-9-8 8:38"))
        // this.node.on("settings loaded", () => {
        //     // this.parseMsg("user_pzb", 1631061480000, "web", "d71148d40d2936ba917b8fa636f33fee");
        //     this.login("user_pzb", "rj162pzb", 1631061480000, "web", "");
        // });
        Subscribe.listen("settings loaded", this.node.uuid, () => {
            // this.parseMsg("user_pzb", 1631061480000, "web", "d71148d40d2936ba917b8fa636f33fee");
            // this.login("user_pzb", "rj162pzb", 1631061480000, "web", "");
        });
    }

    public static login_test() { return true; }

    login(userId: string, pw: string, datetime: number, platform: string, others?: any) {
        Subscribe.trigger("login success", "");
        let pwCode = MD5.md5(pw);
        let loginJson = JSON.parse("{}");
        loginJson["userId"] = userId;
        loginJson["pwCode"] = pwCode;
        loginJson["datetime"] = datetime.toString();
        loginJson["platform"] = platform;
        loginJson["others"] = others;
        console.log(JSON.stringify(loginJson))
        console.log(MD5.md5(JSON.stringify(loginJson)))
    }

    parseMsg(userId: string, datetime: number, platform: string, token: string, others?: any) {
        let key = Configure.getConfigure("base")["VerifyKey"];
        if (!key) { Subscribe.trigger("alert err", "Can't get the verify key!"); return; }
        let verifyCode = MD5.md5(userId + datetime.toString() + platform + others + key);
        console.log(verifyCode)
        if (verifyCode === token) {
            ; // 验证成功，允许登录
            console.log("Success.")
        } else {
            ; // 验证失败，不允许登录
            console.log("Failed.")
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
