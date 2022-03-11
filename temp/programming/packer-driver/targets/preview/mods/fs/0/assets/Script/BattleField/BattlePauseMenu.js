System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Subscribe, UIBase, _dec, _class, _crd, ccclass, property, BattlePauseMenu;

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
      Subscribe = _unresolved_2.Subscribe;
    }, function (_unresolved_3) {
      UIBase = _unresolved_3.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e1c8GI3QhCnbM/YZHMOMVS", "BattlePauseMenu", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePauseMenu", BattlePauseMenu = (_dec = ccclass('BattlePauseMenu'), _dec(_class = class BattlePauseMenu extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        onInit() {
          this.addClickEvent("Confirm", () => {
            this.node.active = false; // 隐藏暂停窗口

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("resume"); // 继续

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("battle interrupted", true, false, []); // 中途结束战斗，没有任何奖励和消耗
          });
          this.addClickEvent("Resume", () => {
            this.node.active = false; // 隐藏暂停窗口

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("resume"); // 继续
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattlePauseMenu.js.map