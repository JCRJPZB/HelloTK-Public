System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, UIBase, _dec, _class, _temp, _crd, ccclass, property, HeroInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      _cclegacy._RF.push({}, "c3c3d+htOhBPbxQnwvA1VBg", "HeroInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroInfo", HeroInfo = (_dec = ccclass('HeroInfo'), _dec(_class = (_temp = class HeroInfo extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "brave_lbl", null);

          _defineProperty(this, "lead_lbl", null);

          _defineProperty(this, "wisdom_lbl", null);

          _defineProperty(this, "politics_lbl", null);

          _defineProperty(this, "hit_lbl", null);

          _defineProperty(this, "critical_lbl", null);

          _defineProperty(this, "criDmg_lbl", null);

          _defineProperty(this, "block_lbl", null);

          _defineProperty(this, "dodge_lbl", null);

          _defineProperty(this, "charge_lbl", null);

          _defineProperty(this, "population_lbl", null);

          _defineProperty(this, "Efficiency_lbl", null);

          _defineProperty(this, "armor_lbl", null);

          _defineProperty(this, "level_lbl", null);
        } // private 


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HeroInfo.js.map