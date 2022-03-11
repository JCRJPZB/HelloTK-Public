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
          this.victory = this.getNode("Victory"); // 胜利界面节点

          this.defeat = this.getNode("Defeat"); // 失败界面节点

          this.abandon = this.getNode("Abandon"); // 放弃作战界面节点

          this.goals_root = this.getNode("Goals_Content"); // “目标”根节点

          this.reward_root = this.getNode("Rewards_Content"); // 战利品根节点

          this.addClickEvent("Return_Btn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("load scene", "Expedition", (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
              error: Error()
            }), StageMgr) : StageMgr).getInstance().curr_scene); // 返回选关界面
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

          this.abandon.active = this.victory.active = this.defeat.active = false; // 初始化三个界面的显示状态

          if (params[1]) {
            // 显示放弃战斗结算界面
            this.abandon.active = true;
            return;
          }

          if (!params[2]) {
            // 显示战斗失败结算画面
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("stage failed", this.stage_data["stage_id"]);
            this.defeat.active = true;
            return;
          }

          this.victory.active = true; // 显示战斗胜利结算画面

          var conf = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageConfById(this.stage_data["stage_id"]); // 根据关卡名读取当前关卡配置

          var gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // 预制体实例化生成器

          this.setGoalNode(gen, params[3]); // 放置关卡三星目标条件

          this.setRewardsNode(conf); // 放置掉落物

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("stage clear", this.stage_data["stage_id"]); // 发射通关关卡消息
        }

        setGoalNode(gen, goal_flags) {
          var goal_strs = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageGoal(this.stage_data["stage_id"]); // 获取三星目标条件文本

          for (var i = 0; i < goal_strs.length && i < goal_flags.length; i++) {
            // 循环摆放
            if (this.goals_root) {
              var goal_node = gen.generator(this.goals_root, "Stage_Goal"); // 实例化文本及标识预制体

              if (goal_node) {
                var goal_lbl = goal_node.getComponent(Label);

                if (goal_lbl) {
                  goal_lbl.string = goal_strs[i];
                } // 设置文本


                var disable = goal_node.getChildByName("Point_Disable"); // 根据是否完成目标修改标识

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
                // 根据概率判断是否掉落该物品
                var isGet = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                  error: Error()
                }), Functions) : Functions).probToVal([item["p"], 1 - item["p"]], [true, false]);

                if (!isGet) {
                  return;
                } // 没有则跳过

              }

              var num = 0;

              if (item["max"] > 1) {
                // 最大掉落数大于1则显示掉落数
                if (item["max"] == item["min"]) {
                  num = item["max"];
                } // 最大等于最小则直接显示掉落数
                else {
                    num = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                      error: Error()
                    }), Functions) : Functions).randomInSec(item["max"], item["min"]);
                  } // 否则则随机从区间内取值

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