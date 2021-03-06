System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, UITransform, Size, ItemMgr, Functions, Generator, ImgMgr, Subscribe, StageMgr, _dec, _class, _temp, _crd, ccclass, property, StageDetails;

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

  function _reportPossibleCrUseOfStageMgr(extras) {
    _reporterNs.report("StageMgr", "./StageMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
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
      StageMgr = _unresolved_7.StageMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "435146EAlxHWr0n56mHp8Zn", "StageDetails", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StageDetails", StageDetails = (_dec = ccclass('StageDetails'), _dec(_class = (_temp = class StageDetails extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "stage_name", null);

          _defineProperty(this, "description", null);

          _defineProperty(this, "goal", []);

          _defineProperty(this, "reward_item_root", null);

          _defineProperty(this, "reward_items", []);

          _defineProperty(this, "start_btn", null);
        }

        onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2;

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change select stage", this.name, this.changeSelect, this); // ????????????????????????

          this.stage_name = (_this$node$getChildBy = this.node.getChildByPath("StageName/Label")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Label);
          this.description = (_this$node$getChildBy2 = this.node.getChildByPath("Description/view/content")) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(Label);

          for (var i = 1; i <= 3; i++) {
            var _this$node$getChildBy3;

            var goal_temp = (_this$node$getChildBy3 = this.node.getChildByPath("Goal/Lbl_Root/Goal_" + i.toString())) === null || _this$node$getChildBy3 === void 0 ? void 0 : _this$node$getChildBy3.getComponent(Label);

            if (goal_temp) {
              this.goal.push(goal_temp);
            }
          }

          this.reward_item_root = this.node.getChildByPath("Reward/Items/view/content");
          this.start_btn = this.node.getChildByName("Start_Btn");
        }

        changeSelect(data) {
          var conf = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageConfById(data["id"]); // ???????????????????????????????????????

          if (this.stage_name) {
            this.stage_name.string = conf["name"];
          } // ???????????????????????????


          if (this.description) {
            this.description.string = conf["description"];
          }

          var goal_strs = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance().getStageGoal(data["idx"]); // ??????????????????

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
            this.start_btn.on("click", () => {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("load scene", "BattleField", data); // ??????????????????
            });
          }
        }

        setItemList(items_conf, gen) {
          var _this$reward_item_roo, _this$reward_item_roo2;

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
                this.initItem(items_conf[i], portrait, i, itemMgr);
              } // ???????????????

            }
          }

          while (this.reward_items.length > items_conf.length) {
            var _this$reward_items$po;

            (_this$reward_items$po = this.reward_items.pop()) === null || _this$reward_items$po === void 0 ? void 0 : _this$reward_items$po.destroy();
          } // ??????????????????????????????????????????????????????????????????


          (_this$reward_item_roo = this.reward_item_root) === null || _this$reward_item_roo === void 0 ? void 0 : (_this$reward_item_roo2 = _this$reward_item_roo.getComponent(UITransform)) === null || _this$reward_item_roo2 === void 0 ? void 0 : _this$reward_item_roo2.setContentSize(new Size(items_conf.length * 150, 150)); // ???????????????????????????
        }

        initItem(conf, node, idx, itemMgr) {
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

          node.setPosition(idx * 125 + 75, 0, 0); // ?????????????????????
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StageDetails.js.map