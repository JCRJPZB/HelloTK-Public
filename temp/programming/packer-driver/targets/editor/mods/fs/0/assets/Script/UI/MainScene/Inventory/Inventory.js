System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, InventoryMgr, Subscribe, ItemMgr, Generator, UIBase, _dec, _class, _temp, _crd, ccclass, property, Inventory;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInventoryMgr(extras) {
    _reporterNs.report("InventoryMgr", "./InventoryMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemMgr(extras) {
    _reporterNs.report("ItemMgr", "../../../Items/ItemMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      InventoryMgr = _unresolved_2.InventoryMgr;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      ItemMgr = _unresolved_4.ItemMgr;
    }, function (_unresolved_5) {
      Generator = _unresolved_5.Generator;
    }, function (_unresolved_6) {
      UIBase = _unresolved_6.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cda5b+nV9CbrzxG1d6WJSF", "Inventory", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Inventory", Inventory = (_dec = ccclass('Inventory'), _dec(_class = (_temp = class Inventory extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "inventoryMgr", null);

          _defineProperty(this, "itemMgr", null);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "category_root", void 0);

          _defineProperty(this, "item_root", void 0);

          _defineProperty(this, "item_browser_root", void 0);

          _defineProperty(this, "currType", "all");
        }

        onInit() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("collect item", this.name, this.changeItemNum, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change item num", this.name, this.changeItemNum, this);
          this.inventoryMgr = (_crd && InventoryMgr === void 0 ? (_reportPossibleCrUseOfInventoryMgr({
            error: Error()
          }), InventoryMgr) : InventoryMgr).getInstance();
          this.itemMgr = (_crd && ItemMgr === void 0 ? (_reportPossibleCrUseOfItemMgr({
            error: Error()
          }), ItemMgr) : ItemMgr).getInstance();
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.addClickEvent("Return", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("go back page");
          }, this);
          this.category_root = this.getNode("Category_Root");
          this.item_root = this.getNode("Item_Root");
          this.item_browser_root = this.getNode("Item_Browser_Root");
          this.setCategroy();
        }

        onOpen() {
          this.refreshItems("all");
        }

        onClose() {
          if (this.item_browser_root) {
            this.item_browser_root.removeAllChildren();
          }

          if (this.item_root) {
            this.item_root.removeAllChildren();
          }
        }

        setCategroy() {
          if (!this.itemMgr) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Inventory init failed!");
            return;
          }

          let itemTypes = this.itemMgr.getItemTypes();
          itemTypes.forEach(type => {
            if (!this.gen) {
              this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
                error: Error()
              }), Generator) : Generator).getInstance();
            }

            if (this.category_root) {
              var _category_node$getChi;

              let category_node = this.gen.generator(this.category_root, "Inventory_Category");
              category_node === null || category_node === void 0 ? void 0 : category_node.on("click", () => {
                this.refreshItems(type["type_id"]);
              });
              let category_name_lbl = category_node === null || category_node === void 0 ? void 0 : (_category_node$getChi = category_node.getChildByName("Name")) === null || _category_node$getChi === void 0 ? void 0 : _category_node$getChi.getComponent(Label);

              if (category_name_lbl) {
                category_name_lbl.string = type["type_name"];
              }
            }
          });
        }

        refreshItems(type) {
          var _this$inventoryMgr;

          this.currType = type;

          if (this.item_browser_root) {
            this.item_browser_root.removeAllChildren();
          }

          if (this.item_root) {
            this.item_root.removeAllChildren();
          }

          let items = (_this$inventoryMgr = this.inventoryMgr) === null || _this$inventoryMgr === void 0 ? void 0 : _this$inventoryMgr.getInventoryByType(type);

          if (items && items.length >= 0) {
            items.forEach(item => {
              if (this.itemMgr && this.item_root && this.item_browser_root) {
                this.itemMgr.getItemNode(item["id"], this.item_root, item["num"], this.item_browser_root);
              }
            });
          }
        }

        changeItemNum() {
          if (this.node.active) {
            this.refreshItems(this.currType);
          }
        }

        onDestroy() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).remove("collect item", this.name);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).remove("use item", this.name);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Inventory.js.map