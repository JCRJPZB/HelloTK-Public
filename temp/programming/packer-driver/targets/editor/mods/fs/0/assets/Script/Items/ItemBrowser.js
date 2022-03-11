System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, Functions, Generator, ImgMgr, Subscribe, Item, _dec, _class, _temp, _crd, ccclass, property, ItemBrowser;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "../Tools/ImgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Functions = _unresolved_2.Functions;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      ImgMgr = _unresolved_4.ImgMgr;
    }, function (_unresolved_5) {
      Subscribe = _unresolved_5.Subscribe;
    }, function (_unresolved_6) {
      Item = _unresolved_6.Item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51ab4b+lC5NLIjn0pUoay4Z", "ItemBrowser", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemBrowser", ItemBrowser = (_dec = ccclass('ItemBrowser'), _dec(_class = (_temp = class ItemBrowser extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "imgMgr", null);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "data", null);

          _defineProperty(this, "blockInput", null);

          _defineProperty(this, "quit_btn", null);

          _defineProperty(this, "return_btn", null);

          _defineProperty(this, "use_btn", null);

          _defineProperty(this, "item_bg", null);

          _defineProperty(this, "item_sp", null);

          _defineProperty(this, "item_name_lbl", null);

          _defineProperty(this, "item_num_lbl", null);

          _defineProperty(this, "item_num", 0);

          _defineProperty(this, "describe", null);

          _defineProperty(this, "access_root", null);

          _defineProperty(this, "use_UI_node", null);

          _defineProperty(this, "use_UI_confirm", null);

          _defineProperty(this, "use_UI_cancel", null);

          _defineProperty(this, "use_UI_quit", null);

          _defineProperty(this, "use_item_node", null);

          _defineProperty(this, "use_item_name", null);

          _defineProperty(this, "use_item_describe", null);

          _defineProperty(this, "use_item_reduce_btn", null);

          _defineProperty(this, "use_item_reduce_disable_btn", null);

          _defineProperty(this, "use_item_num_lbl", null);

          _defineProperty(this, "use_item_add_btn", null);

          _defineProperty(this, "use_item_add_disable_btn", null);

          _defineProperty(this, "use_item_max_btn", null);

          _defineProperty(this, "use_item_num", 0);
        }

        onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2, _this$node$getChildBy3, _this$node$getChildBy4, _this$node$getChildBy5;

          this.imgMgr = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
            error: Error()
          }), ImgMgr) : ImgMgr).getInstance();
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.quit_btn = this.node.getChildByName("Quit_Btn");
          this.return_btn = this.node.getChildByPath("Btn_Root/Quit_Btn");
          this.blockInput = this.node.getChildByName("BlockInput");
          this.use_btn = this.node.getChildByPath("Btn_Root/Use_Btn");
          this.item_bg = (_this$node$getChildBy = this.node.getChildByPath("Item/Bg")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Sprite);
          this.item_sp = (_this$node$getChildBy2 = this.node.getChildByPath("Item/Sprite")) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(Sprite);
          this.item_name_lbl = (_this$node$getChildBy3 = this.node.getChildByPath("Item/Name")) === null || _this$node$getChildBy3 === void 0 ? void 0 : _this$node$getChildBy3.getComponent(Label);
          this.item_num_lbl = (_this$node$getChildBy4 = this.node.getChildByPath("Item/Number")) === null || _this$node$getChildBy4 === void 0 ? void 0 : _this$node$getChildBy4.getComponent(Label);
          this.describe = (_this$node$getChildBy5 = this.node.getChildByName("Describe")) === null || _this$node$getChildBy5 === void 0 ? void 0 : _this$node$getChildBy5.getComponent(Label);
          this.access_root = this.node.getChildByPath("AccessView/view/content");
          this.use_UI_node = this.node.getChildByName("UseUI");

          if (this.use_UI_node) {
            var _this$use_UI_node$get, _this$use_UI_node$get2, _this$use_UI_node$get3;

            this.use_UI_confirm = this.use_UI_node.getChildByPath("Btns/Confirm");
            this.use_UI_cancel = this.use_UI_node.getChildByPath("Btns/Cancel");
            this.use_UI_quit = this.use_UI_node.getChildByName("BlockInput");
            this.use_item_node = this.use_UI_node.getChildByName("Item");
            this.use_item_name = (_this$use_UI_node$get = this.use_UI_node.getChildByName("Name")) === null || _this$use_UI_node$get === void 0 ? void 0 : _this$use_UI_node$get.getComponent(Label);
            this.use_item_describe = (_this$use_UI_node$get2 = this.use_UI_node.getChildByName("Describe")) === null || _this$use_UI_node$get2 === void 0 ? void 0 : _this$use_UI_node$get2.getComponent(Label);
            this.use_item_reduce_btn = this.use_UI_node.getChildByPath("Layout/Reduce");
            this.use_item_reduce_disable_btn = this.use_UI_node.getChildByPath("Layout/Reduce_disable");
            this.use_item_num_lbl = (_this$use_UI_node$get3 = this.use_UI_node.getChildByPath("Layout/Num_Lbl")) === null || _this$use_UI_node$get3 === void 0 ? void 0 : _this$use_UI_node$get3.getComponent(Label);
            this.use_item_add_btn = this.use_UI_node.getChildByPath("Layout/Add");
            this.use_item_add_disable_btn = this.use_UI_node.getChildByPath("Layout/Add_disable");
            this.use_item_max_btn = this.use_UI_node.getChildByPath("Layout/Max");
            this.use_UI_node.active = false;
          } else {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "ItemBrowser init failed!");
          }
        }

        init(data) {
          var _this$quit_btn, _this$return_btn, _this$blockInput;

          this.data = data;
          this.item_num = this.data["num"];

          if (this.item_name_lbl && this.describe && this.item_num_lbl) {
            this.item_name_lbl.string = this.data["name"];
            this.describe.string = this.data["describe"];
            this.item_num_lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).numToStr(this.item_num);
          }

          if (this.item_bg && this.item_sp && this.imgMgr) {
            this.item_bg.spriteFrame = this.imgMgr.getImg("Item_Bg_" + this.data["rare"]);
            this.item_sp.spriteFrame = this.imgMgr.getImg(this.data["img"]);
          }

          if (this.data["access"]) {
            // 生成item来源Label
            this.data["access"].forEach(access => {
              var _new_access$getChildB;

              if (!this.access_root || !this.gen) {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("log err", "ItemBrowser init failed!");
                return;
              }

              let new_access = this.gen.generator(this.access_root, "Item_Access");
              let access_name_lbl = new_access === null || new_access === void 0 ? void 0 : (_new_access$getChildB = new_access.getChildByName("Name")) === null || _new_access$getChildB === void 0 ? void 0 : _new_access$getChildB.getComponent(Label);

              if (access_name_lbl) {
                access_name_lbl.string = access;
              }
            });
          }

          (_this$quit_btn = this.quit_btn) === null || _this$quit_btn === void 0 ? void 0 : _this$quit_btn.on("click", () => {
            this.node.destroy();
          });
          (_this$return_btn = this.return_btn) === null || _this$return_btn === void 0 ? void 0 : _this$return_btn.on("click", () => {
            this.node.destroy();
          });
          (_this$blockInput = this.blockInput) === null || _this$blockInput === void 0 ? void 0 : _this$blockInput.on("click", () => {
            this.node.destroy();
          });

          if (this.data["able_to_use"]) {
            var _this$use_btn;

            // 可以使用的item添加使用按钮及其回调事件
            this.use_btn.active = true;
            (_this$use_btn = this.use_btn) === null || _this$use_btn === void 0 ? void 0 : _this$use_btn.on("click", () => {
              this.openUseUI();
            });
          } else {
            this.use_btn.active = false;
          }

          if (this.use_UI_node) {
            this.use_UI_node.active = false;
          }

          this.genUseUI();
        }

        genUseUI() {
          var _this$use_item_node, _this$use_item_node$g, _this$use_item_reduce, _this$use_item_add_bt, _this$use_item_max_bt, _this$use_UI_quit, _this$use_UI_cancel, _this$use_UI_confirm;

          if (!this.use_UI_node) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "ItemBrowser init failed!");
            return;
          }

          (_this$use_item_node = this.use_item_node) === null || _this$use_item_node === void 0 ? void 0 : (_this$use_item_node$g = _this$use_item_node.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
            error: Error()
          }), Item) : Item)) === null || _this$use_item_node$g === void 0 ? void 0 : _this$use_item_node$g.init(this.data, this.item_num);

          if (this.use_item_name) {
            this.use_item_name.string = this.data["name"];
          }

          if (this.use_item_describe) {
            this.use_item_describe.string = this.data["describe"];
          }

          if (this.use_item_num_lbl) {
            this.use_item_num_lbl.string = "1";
          }

          this.use_item_num = 1;
          (_this$use_item_reduce = this.use_item_reduce_btn) === null || _this$use_item_reduce === void 0 ? void 0 : _this$use_item_reduce.on("click", () => {
            if (this.use_item_num > 1) {
              this.use_item_num--;
            }

            this.refreshUseNum();
          });
          (_this$use_item_add_bt = this.use_item_add_btn) === null || _this$use_item_add_bt === void 0 ? void 0 : _this$use_item_add_bt.on("click", () => {
            if (this.use_item_num < this.item_num && this.use_item_num + 1 <= this.data["max_num_once"]) {
              this.use_item_num++;
            }

            this.refreshUseNum();
          });
          (_this$use_item_max_bt = this.use_item_max_btn) === null || _this$use_item_max_bt === void 0 ? void 0 : _this$use_item_max_bt.on("click", () => {
            this.use_item_num = this.item_num > this.data["max_num_once"] ? this.data["max_num_once"] : this.item_num;
            this.refreshUseNum();
          });
          (_this$use_UI_quit = this.use_UI_quit) === null || _this$use_UI_quit === void 0 ? void 0 : _this$use_UI_quit.on("click", this.hideUseUI, this);
          (_this$use_UI_cancel = this.use_UI_cancel) === null || _this$use_UI_cancel === void 0 ? void 0 : _this$use_UI_cancel.on("click", this.hideUseUI, this);
          (_this$use_UI_confirm = this.use_UI_confirm) === null || _this$use_UI_confirm === void 0 ? void 0 : _this$use_UI_confirm.on("click", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("try use item", this.data["id"], -this.use_item_num, this.node.parent, this.useItem.bind(this));
          });
          this.refreshUseNum();
        }

        openUseUI() {
          if (!this.use_UI_node) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "ItemBrowser init failed!");
            return;
          }

          this.use_UI_node.active = true;
        }

        refreshUseNum() {
          this.use_item_num = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).normalize(this.use_item_num, 1, this.item_num);

          if (this.use_item_num_lbl) {
            this.use_item_num_lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).numToStr(this.use_item_num);
          }

          if (this.use_item_reduce_btn && this.use_item_reduce_disable_btn) {
            this.use_item_reduce_btn.active = this.use_item_num > 1;
            this.use_item_reduce_disable_btn.active = this.use_item_num <= 1;
          }

          if (this.use_item_add_btn && this.use_item_add_disable_btn) {
            let flag = this.use_item_num < this.item_num && this.use_item_num < this.data["max_num_once"];
            this.use_item_add_btn.active = flag;
            this.use_item_add_disable_btn.active = !flag;
          }
        }

        useItem(ifUse) {
          this.hideUseUI();

          if (!ifUse) {
            return;
          }

          this.use_item_num = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).normalize(this.use_item_num, 1, this.item_num);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("use item", this.data["id"], -this.use_item_num);
          this.item_num -= this.use_item_num;

          if (this.item_num_lbl) {
            this.item_num_lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).numToStr(this.item_num);
          }

          this.use_item_num = 1;
          this.refreshUseNum();
        }

        hideUseUI() {
          if (this.use_UI_node) {
            this.use_UI_node.active = false;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemBrowser.js.map