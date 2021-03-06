System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Sprite, ItemMgr, Functions, Generator, ImgMgr, Subscribe, UIBase, StageMgr, _dec, _class, _temp, _crd, ccclass, property, StagePage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfItemMgr(extras) {
    _reporterNs.report("ItemMgr", "../../Items/ItemMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "../../Tools/ImgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStageMgr(extras) {
    _reporterNs.report("StageMgr", "./StageMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ItemMgr = _unresolved_2.ItemMgr;
    }, function (_unresolved_3) {
      Functions = _unresolved_3.Functions;
    }, function (_unresolved_4) {
      Generator = _unresolved_4.Generator;
    }, function (_unresolved_5) {
      ImgMgr = _unresolved_5.ImgMgr;
    }, function (_unresolved_6) {
      Subscribe = _unresolved_6.Subscribe;
    }, function (_unresolved_7) {
      UIBase = _unresolved_7.UIBase;
    }, function (_unresolved_8) {
      StageMgr = _unresolved_8.StageMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67b52U0rI5LPKJ1AGuKoawR", "StagePage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StagePage", StagePage = (_dec = ccclass('StagePage'), _dec(_class = (_temp = class StagePage extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "stage_name", void 0);

          _defineProperty(this, "description", void 0);

          _defineProperty(this, "goal", []);

          _defineProperty(this, "reward_item_root", void 0);

          _defineProperty(this, "reward_items", []);

          _defineProperty(this, "start_btn", void 0);

          _defineProperty(this, "curr_stage_id", "");
        }

        onInit(stageName) {
          this.addClickEvent("ReturnBtn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("load scene", "Main", null);
          });
          this.addClickEvent("Inventory", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("open UI", "Inventory");
          });
          this.addClickEvent("Formation_Btn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("open UI", "Formation");
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change select stage", this.name, this.changeSelect, this); // ????????????????????????

          this.stage_name = this.getComp("StageName_Label", "Label");
          this.description = this.getComp("Description_Content", "Label");

          for (var i = 1; i <= 3; i++) {
            var goal_temp = this.getComp("Goal_" + i.toString(), "Label");

            if (goal_temp) {
              this.goal.push(goal_temp);
            }
          }

          this.reward_item_root = this.getNode("Reward_Content");
          this.start_btn = this.getNode("Start_Btn");
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("generator stage ui", stageName, this.getNode("StageUI_Root"));
        }

        changeSelect(data) {
          var stage_id = data["stage_id"]; // ???????????????????????????????????????

          if (this.curr_stage_id === stage_id) {
            return;
          }

          this.curr_stage_id = stage_id;
          var conf = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageConfById(stage_id);

          if (this.stage_name) {
            this.stage_name.string = conf["name"];
          } // ???????????????????????????


          if (this.description) {
            this.description.string = conf["description"];
          }

          var goal_strs = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageGoal(conf["id"]); // ??????????????????

          if (this.goal.length >= goal_strs.length) {
            for (var i = 0; i < this.goal.length; i++) {
              if (i < goal_strs.length) {
                this.goal[i].string = goal_strs[i];
              }
            }
          }

          var gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // ???????????????????????????

          this.setItemList(conf["items"], gen); // ??????????????????

          if (this.start_btn) {
            // ??????????????????
            this.start_btn.off("click");
            this.start_btn.on("click", () => {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("load scene", "BattleField", data); // ??????????????????
            });
          }
        }

        setItemList(items_conf, gen) {
          var itemMgr = (_crd && ItemMgr === void 0 ? (_reportPossibleCrUseOfItemMgr({
            error: Error()
          }), ItemMgr) : ItemMgr).getInstance(); // ???????????????

          for (var i = 0; i < items_conf.length; i++) {
            if (this.reward_item_root) {
              var portrait = null;

              if (this.reward_items.length <= i) {
                // ??????????????????????????????????????????????????????
                portrait = gen.generator(this.reward_item_root, "ItemPortrait"); // ?????????????????????????????????

                if (portrait) {
                  this.reward_items.push(portrait);
                } // ??????????????????

              } else {
                // ????????????????????????
                portrait = this.reward_items[i];
              }

              if (portrait) {
                this.initItem(items_conf[i], portrait, itemMgr);
              } // ???????????????

            }
          }

          while (this.reward_items.length > items_conf.length) {
            var _this$reward_items$po;

            (_this$reward_items$po = this.reward_items.pop()) === null || _this$reward_items$po === void 0 ? void 0 : _this$reward_items$po.destroy();
          } // ??????????????????????????????????????????????????????????????????

        }

        initItem(conf, node, itemMgr) {
          var _node$getChildByName;

          var sf = node.getComponent(Sprite); // ????????????????????????????????????

          var img_name = itemMgr.getItemConf(conf["id"])["img"]; // ??????????????????????????????

          if (img_name && sf) {
            sf.spriteFrame = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
              error: Error()
            }), ImgMgr) : ImgMgr).getInstance().getImg(img_name); // ????????????????????????????????????
          }

          var num = (_node$getChildByName = node.getChildByName("Num")) === null || _node$getChildByName === void 0 ? void 0 : _node$getChildByName.getComponent(Label); // ????????????Label

          if (num) {
            if (conf["max"] > 1) {
              // ?????????????????????1?????????????????????
              if (conf["max"] == conf["min"]) {
                // ??????????????????????????????????????????????????????
                num.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                  error: Error()
                }), Functions) : Functions).numToChar(conf["max"]);
              } else {
                // ?????????????????????
                num.string = "???" + (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                  error: Error()
                }), Functions) : Functions).numToChar(Math.floor((conf["max"] + conf["min"]) / 2));
              }
            }
          }

          var first = node.getChildByName("First"); // ??????????????????

          if (first && conf["is_once"]) {
            first.active = true;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StagePage.js.map