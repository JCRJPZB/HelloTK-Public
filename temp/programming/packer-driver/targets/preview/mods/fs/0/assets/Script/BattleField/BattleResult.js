System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, ItemMgr, Functions, Generator, Subscribe, StageMgr, UIBase, _dec, _class, _temp, _crd, ccclass, property, BattleResult;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfItemMgr(extras) {
    _reporterNs.report("ItemMgr", "../Items/ItemMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStageMgr(extras) {
    _reporterNs.report("StageMgr", "../UI/StageScene/StageMgr", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ItemMgr = _unresolved_2.ItemMgr;
    }, function (_unresolved_3) {
      Functions = _unresolved_3.Functions;
    }, function (_unresolved_4) {
      Generator = _unresolved_4.Generator;
    }, function (_unresolved_5) {
      Subscribe = _unresolved_5.Subscribe;
    }, function (_unresolved_6) {
      StageMgr = _unresolved_6.StageMgr;
    }, function (_unresolved_7) {
      UIBase = _unresolved_7.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "887744eZhlNDrmq5lxcQAKb", "BattleResult", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleResult", BattleResult = (_dec = ccclass('BattleResult'), _dec(_class = (_temp = class BattleResult extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "victory", void 0);

          _defineProperty(this, "defeat", void 0);

          _defineProperty(this, "abandon", void 0);

          _defineProperty(this, "goals_root", void 0);

          _defineProperty(this, "reward_root", void 0);

          _defineProperty(this, "stage_data", null);
        }

        onInit(params) {
          this.stage_data = params[0];
          this.victory = this.getNode("Victory"); // ??????????????????

          this.defeat = this.getNode("Defeat"); // ??????????????????

          this.abandon = this.getNode("Abandon"); // ????????????????????????

          this.goals_root = this.getNode("Goals_Content"); // ?????????????????????

          this.reward_root = this.getNode("Rewards_Content"); // ??????????????????

          this.addClickEvent("Return_Btn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("load scene", "Expedition", (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
              error: Error()
            }), StageMgr) : StageMgr).getInstance().curr_scene); // ??????????????????
          });
          this.addClickEvent("Again_Btn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("load scene", "BattleField", this.stage_data);
          });
        }

        onOpen(params) {
          if (!this.defeat || !this.victory || !this.abandon) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Result node can't be null!");
            return;
          }

          this.abandon.active = this.victory.active = this.defeat.active = false; // ????????????????????????????????????

          if (params[1]) {
            // ??????????????????????????????
            this.abandon.active = true;
            return;
          }

          if (!params[2]) {
            // ??????????????????????????????
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("stage failed", this.stage_data["stage_id"]);
            this.defeat.active = true;
            return;
          }

          this.victory.active = true; // ??????????????????????????????

          var conf = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageConfById(this.stage_data["stage_id"]); // ???????????????????????????????????????

          var gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // ???????????????????????????

          this.setGoalNode(gen, params[3]); // ??????????????????????????????

          this.setRewardsNode(conf); // ???????????????

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("stage clear", this.stage_data["stage_id"]); // ????????????????????????
        }

        setGoalNode(gen, goal_flags) {
          var goal_strs = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageGoal(this.stage_data["stage_id"]); // ??????????????????????????????

          for (var i = 0; i < goal_strs.length && i < goal_flags.length; i++) {
            // ????????????
            if (this.goals_root) {
              var goal_node = gen.generator(this.goals_root, "Stage_Goal"); // ?????????????????????????????????

              if (goal_node) {
                var goal_lbl = goal_node.getComponent(Label);

                if (goal_lbl) {
                  goal_lbl.string = goal_strs[i];
                } // ????????????


                var disable = goal_node.getChildByName("Point_Disable"); // ????????????????????????????????????

                var enable = goal_node.getChildByName("Point_Enable");

                if (disable && enable) {
                  [disable.active, enable.active] = [!goal_flags[i], goal_flags[i]];
                }
              }
            }
          }
        }

        setRewardsNode(conf) {
          conf["items"].forEach(item => {
            if (conf["clear"] && item["is_once"]) {
              return;
            }

            if (this.reward_root) {
              if (item["p"] < 1) {
                // ???????????????????????????????????????
                var isGet = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                  error: Error()
                }), Functions) : Functions).probToVal([item["p"], 1 - item["p"]], [true, false]);

                if (!isGet) {
                  return;
                } // ???????????????

              }

              var num = 0;

              if (item["max"] > 1) {
                // ?????????????????????1??????????????????
                if (item["max"] == item["min"]) {
                  num = item["max"];
                } // ??????????????????????????????????????????
                else {
                    num = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                      error: Error()
                    }), Functions) : Functions).randomInSec(item["max"], item["min"]);
                  } // ?????????????????????????????????

              } else {
                num = 1;
              }

              (_crd && ItemMgr === void 0 ? (_reportPossibleCrUseOfItemMgr({
                error: Error()
              }), ItemMgr) : ItemMgr).getInstance().getItemNode(item["id"], this.reward_root, num);
            }
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleResult.js.map