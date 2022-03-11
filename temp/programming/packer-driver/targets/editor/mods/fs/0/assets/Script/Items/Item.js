System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, Functions, Generator, ImgMgr, ItemBrowser, _dec, _class, _temp, _crd, ccclass, property, Item;

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

  function _reportPossibleCrUseOfItemBrowser(extras) {
    _reporterNs.report("ItemBrowser", "./ItemBrowser", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Functions = _unresolved_2.Functions;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      ImgMgr = _unresolved_4.ImgMgr;
    }, function (_unresolved_5) {
      ItemBrowser = _unresolved_5.ItemBrowser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea3ccHOksBKuITLrG4pkXGu", "Item", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Item", Item = (_dec = ccclass('Item'), _dec(_class = (_temp = class Item extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "imgMgr", null);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "bg", null);

          _defineProperty(this, "sp", null);

          _defineProperty(this, "num_lbl", null);

          _defineProperty(this, "data", {
            "type_id": "",
            "sub_type_id": "",
            "id": "",
            "img": "",
            "name": "",
            "describe": "",
            "rare": "",
            "access": null,
            "able_to_use": false,
            "max_num_once": 0,
            "num": 0
          });
        }

        onLoad() {
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
        }

        init(conf, item_num, browser_root) {
          var _this$node$getChildBy, _this$node$getChildBy2, _this$node$getChildBy3;

          this.data = conf; // 无单次使用上限

          if (this.data["max_num_once"] === -1) {
            this.data["max_num_once"] = Number.MAX_SAFE_INTEGER;
          }

          this.bg = (_this$node$getChildBy = this.node.getChildByName("Bg")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Sprite);
          this.sp = (_this$node$getChildBy2 = this.node.getChildByName("Sprite")) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(Sprite);
          this.num_lbl = (_this$node$getChildBy3 = this.node.getChildByName("Num")) === null || _this$node$getChildBy3 === void 0 ? void 0 : _this$node$getChildBy3.getComponent(Label);
          this.data["num"] = item_num;
          this.imgMgr = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
            error: Error()
          }), ImgMgr) : ImgMgr).getInstance();
          let bg_spf = this.imgMgr.getImg("Item_Bg_" + this.data["rare"]);
          let sp_spf = this.imgMgr.getImg(this.data["img"]);

          if (this.bg && this.sp && this.num_lbl && bg_spf && sp_spf) {
            this.bg.spriteFrame = bg_spf;
            this.sp.spriteFrame = sp_spf;
            this.num_lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).numToStr(this.data["num"]);
          }

          if (browser_root) {
            this.node.on("click", () => {
              this.createBrowser(browser_root);
            });
          }
        }

        createBrowser(parent) {
          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          let browser = this.gen.generator(parent, "Item_Browser");

          if (!browser) {
            return;
          }

          let ctrl = browser.getComponent(_crd && ItemBrowser === void 0 ? (_reportPossibleCrUseOfItemBrowser({
            error: Error()
          }), ItemBrowser) : ItemBrowser);
          ctrl === null || ctrl === void 0 ? void 0 : ctrl.init(this.data);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Item.js.map