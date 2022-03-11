System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Subscribe, MD5, _dec, _class, _crd, ccclass, property, LoginMsg;

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../Tools/Configure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMD(extras) {
    _reporterNs.report("MD5", "./MD5", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      MD5 = _unresolved_4.MD5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1baf6txLnhNJIGGwD6DATCN", "LoginMsg", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginMsg", LoginMsg = (_dec = ccclass('LoginMsg'), _dec(_class = class LoginMsg extends Component {
        onLoad() {
          // console.log(Date.parse("2021-9-8 8:38"))
          // this.node.on("settings loaded", () => {
          //     // this.parseMsg("user_pzb", 1631061480000, "web", "d71148d40d2936ba917b8fa636f33fee");
          //     this.login("user_pzb", "rj162pzb", 1631061480000, "web", "");
          // });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("settings loaded", this.node.uuid, () => {// this.parseMsg("user_pzb", 1631061480000, "web", "d71148d40d2936ba917b8fa636f33fee");
            // this.login("user_pzb", "rj162pzb", 1631061480000, "web", "");
          });
        }

        static login_test() {
          return true;
        }

        login(userId, pw, datetime, platform, others) {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("login success", "");
          var pwCode = (_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
            error: Error()
          }), MD5) : MD5).md5(pw);
          var loginJson = JSON.parse("{}");
          loginJson["userId"] = userId;
          loginJson["pwCode"] = pwCode;
          loginJson["datetime"] = datetime.toString();
          loginJson["platform"] = platform;
          loginJson["others"] = others;
          console.log(JSON.stringify(loginJson));
          console.log((_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
            error: Error()
          }), MD5) : MD5).md5(JSON.stringify(loginJson)));
        }

        parseMsg(userId, datetime, platform, token, others) {
          var key = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("base")["VerifyKey"];

          if (!key) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert err", "Can't get the verify key!");
            return;
          }

          var verifyCode = (_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
            error: Error()
          }), MD5) : MD5).md5(userId + datetime.toString() + platform + others + key);
          console.log(verifyCode);

          if (verifyCode === token) {
            ; // 验证成功，允许登录

            console.log("Success.");
          } else {
            ; // 验证失败，不允许登录

            console.log("Failed.");
          }
        }

      }) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoginMsg.js.map