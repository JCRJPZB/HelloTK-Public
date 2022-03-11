System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, tween, Functions, Subscribe, UIBase, _dec, _class, _temp, _crd, ccclass, property, BattlePage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../Tools/Functions", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Functions = _unresolved_2.Functions;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      UIBase = _unresolved_4.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f32bFQOSlBZJo53MK7W3cw", "BattlePage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePage", BattlePage = (_dec = ccclass('BattlePage'), _dec(_class = (_temp = class BattlePage extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "hpBar_root", void 0);

          _defineProperty(this, "ally_bar", void 0);

          _defineProperty(this, "enemy_bar", void 0);

          _defineProperty(this, "ally_lbl", void 0);

          _defineProperty(this, "enemy_lbl", void 0);

          _defineProperty(this, "ally_max_hp", 0);

          _defineProperty(this, "ally_cur_hp", 0);

          _defineProperty(this, "enemy_max_hp", 0);

          _defineProperty(this, "enemy_cur_hp", 0);
        }

        onInit() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("battle set total hp", this.name, this.set_hp, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("battle change total hp", this.name, this.changeHp, this);
          this.addClickEvent("PauseBtn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("open UI", "BattlePauseMenu", "Window");
          }); // this.ally_protrait = this.getComp("AllyProtrait", "Sprite");
          // this.enemy_protrait = this.getComp("EnemyProtrait", "Sprite");

          this.ally_bar = this.getComp("Ally", "ProgressBar");
          this.enemy_bar = this.getComp("Enemy", "ProgressBar");
          this.ally_lbl = this.getComp("AllyLabel", "Label");
          this.enemy_lbl = this.getComp("EnemyLabel", "Label");
          this.hpBar_root = this.getNode("HpBars");

          if (!this.hpBar_root) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find hp bar root");
          } else {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("set hp bar root", this.hpBar_root);
          }
        }

        set_hp(num, camp) {
          // 初始化血量
          if (camp === "ally") {
            this.ally_max_hp = this.ally_cur_hp = num;

            if (this.ally_bar) {
              this.ally_bar.progress = 1;
            }
          } else if (camp === "enemy") {
            this.enemy_max_hp = this.enemy_cur_hp = num;

            if (this.enemy_bar) {
              this.enemy_bar.progress = 1;
            }
          }

          this.updateHp();
        }

        changeHp(val, camp) {
          if (camp === "ally") {
            this.ally_cur_hp += val;

            if (this.ally_bar) {
              tween(this.ally_bar) // 缓动执行血量变化
              .to(0.2, {
                progress: this.ally_cur_hp / this.ally_max_hp
              }, {
                easing: "sineInOut"
              }).start();
            }
          } else if (camp === "enemy") {
            this.enemy_cur_hp += val;

            if (this.enemy_bar) {
              tween(this.enemy_bar).to(0.2, {
                progress: this.enemy_cur_hp / this.enemy_max_hp
              }, {
                easing: "sineInOut"
              }).start();
            }
          }

          this.updateHp();
        }

        updateHp() {
          // 更新血量
          if (!this.ally_lbl || !this.enemy_lbl) {
            return;
          }

          this.ally_lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).numToStr(this.ally_cur_hp) + " / " + (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).numToStr(this.ally_max_hp);
          this.enemy_lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).numToStr(this.enemy_cur_hp) + " / " + (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).numToStr(this.enemy_max_hp);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattlePage.js.map