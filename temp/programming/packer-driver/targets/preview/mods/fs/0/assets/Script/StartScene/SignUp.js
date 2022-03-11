System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, LoginMsg, Subscribe, UIBase, _dec, _class, _temp, _crd, ccclass, property, SignUp;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLoginMsg(extras) {
    _reporterNs.report("LoginMsg", "../NetWork/LoginMsg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../UI/UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      LoginMsg = _unresolved_2.LoginMsg;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      UIBase = _unresolved_4.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0521djfz5hPkpHOEwNXbvWb", "SignUp", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SignUp", SignUp = (_dec = ccclass('SignUp'), _dec(_class = (_temp = class SignUp extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ac_ed_box", null);

          _defineProperty(this, "pw_ed_bix", null);
        }

        onInit() {
          this.ac_ed_box = this.getComp("Ac_ed_box", "EditBox");
          this.pw_ed_bix = this.getComp("Pw_ed_box", "EditBox");
          this.addClickEvent("Login_Btn", () => {
            if (!this.ac_ed_box || !this.pw_ed_bix) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "严重错误！请检查各节点名称！");
              return;
            }

            this.login(this.ac_ed_box.string, this.pw_ed_bix.string);
          });
          this.addClickEvent("Regist_Btn", () => {});
        }

        login(ac, pw) {
          // #####################################
          if ((_crd && LoginMsg === void 0 ? (_reportPossibleCrUseOfLoginMsg({
            error: Error()
          }), LoginMsg) : LoginMsg).login_test()) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("login success");
            this.node.active = false;
          } // #####################################

        }

        regist() {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SignUp.js.map