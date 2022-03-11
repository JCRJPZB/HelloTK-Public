System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, UIBase, _dec, _class, _crd, ccclass, property, HeroSpirit;

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28396MUtKdE3rA02/W6xC33", "HeroSpirit", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroSpirit", HeroSpirit = (_dec = ccclass('HeroSpirit'), _dec(_class = class HeroSpirit extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {//
      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HeroSpirit.js.map