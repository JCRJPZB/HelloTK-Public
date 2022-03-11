System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Subscribe, HpMgr, _dec, _class, _temp, _crd, ccclass, property, BattleScene;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHpMgr(extras) {
    _reporterNs.report("HpMgr", "./HP/HpMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }, function (_unresolved_3) {
      HpMgr = _unresolved_3.HpMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54e71vfKQ1IIbuA3T8+rFtL", "BattleScene", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleScene", BattleScene = (_dec = ccclass('BattleScene'), _dec(_class = (_temp = class BattleScene extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "stage_data", null);

          _defineProperty(this, "load_times", 0);
        }

        onLoad() {
          (_crd && HpMgr === void 0 ? (_reportPossibleCrUseOfHpMgr({
            error: Error()
          }), HpMgr) : HpMgr).getInstance();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("battle decided", this.name, this.battle_over, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("battle interrupted", this.name, this.battle_over, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("UI manager ready", this.name, (scene_name, num, data) => {
            if (scene_name === "BattleField") {
              this.load_times = num;
              this.stage_data = data; // 关卡数据及配置

              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("open UI", "BattlePage", "Page");
            }
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("Hp manager is ready", this.name, () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("prepare battle", this.stage_data);
          });
        }

        battle_over(isAbandon, isWin, goal_flags) {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("open UI", "BattleResult", "Window", [this.stage_data, isAbandon, isWin, goal_flags]);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleScene.js.map