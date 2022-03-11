System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, Subscribe, UIMgr, _dec, _class, _crd, ccclass, property, StartScene;

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../UI/UIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66392uVKzNLs4yndOLi/Uwh", "StartScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartScene", StartScene = (_dec = ccclass('StartScene'), _dec(_class = class StartScene extends Component {
        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("game start", this.name, this.init, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("login success", this.name, () => {
            ; //
          });
        }

        init() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).getInstance();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("UI manager ready", this.name, (scene_name, num, data) => {
            if (scene_name === "StartScene") {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("open UI", "StartPage", "Page");
              var loading_lbl = find("/Canvas/UIRoot/AlertRoot/Loading");

              if (loading_lbl) {
                loading_lbl.destroy();
              }
            }
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("change scene", "StartScene", 1, null);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StartScene.js.map