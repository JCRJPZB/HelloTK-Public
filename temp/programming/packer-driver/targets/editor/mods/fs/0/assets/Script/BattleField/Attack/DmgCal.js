System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, DmgCal;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../../Tools/Configure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfo(extras) {
    _reporterNs.report("Info", "./Info", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae7b0kAXPZM9qNLD2yuk0Jy", "DmgCal", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DmgCal", DmgCal = (_dec = ccclass('DmgCal'), _dec(_class = (_temp = _class2 = class DmgCal extends Component {
        // private static skill_gain: number = 0;
        // private static crt_gain: number = 0;
        // private static form_gain: number = 0;
        // private static other_gain: number = 0;
        // private static blk_reduce: number = 0;
        // private static skill_reduce: number = 0;
        // private static form_reduce: number = 0;
        // private static other_reduce: number = 0;
        onLoad() {
          // find("/SafeArea")?.on("settings loaded", DmgCal.init, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("settings loaded", this.name, DmgCal.init, this);
        }

        static init() {
          let settings = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("soldier")["common"];
          DmgCal.max_dmg_ratio = settings["max_dmg_ratio"];
          DmgCal.min_dmg_ratio = settings["min_dmg_ratio"];
          DmgCal.base_cri_dmg_rate = settings["base_cri_dmg_rate"];
          DmgCal.base_blk_dmg_rate = settings["base_blk_dmg_rate"];
        }

        static calculate(atker, defer) {
          // ###########################################
          // 本地测试阶段，暂时简单按减法计算伤害
          let atk = atker.getConf("atk");
          let def = defer.getConf("def");
          return atk - def; // ###########################################
        }

        static max(a, b) {
          return a > b ? a : b;
        }

        static min(a, b) {
          return a > b ? b : a;
        }

      }, _defineProperty(_class2, "max_dmg_ratio", 0), _defineProperty(_class2, "min_dmg_ratio", 0), _defineProperty(_class2, "base_cri_dmg_rate", 0), _defineProperty(_class2, "base_blk_dmg_rate", 0), _defineProperty(_class2, "attr_diff", 0), _defineProperty(_class2, "counter", 0), _defineProperty(_class2, "tech_diff", 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DmgCal.js.map