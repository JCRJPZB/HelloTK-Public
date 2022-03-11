System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ItemMgr, Functions, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, InventoryMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfItemMgr(extras) {
    _reporterNs.report("ItemMgr", "../../../Items/ItemMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ItemMgr = _unresolved_2.ItemMgr;
    }, function (_unresolved_3) {
      Functions = _unresolved_3.Functions;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1eb37nEtiBLR7eziXeM3UVt", "InventoryMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InventoryMgr", InventoryMgr = (_dec = ccclass('InventoryMgr'), _dec(_class = (_temp = _class2 = class InventoryMgr extends Component {
        // ###############################################
        // ###############################################
        constructor(name) {
          super(name);

          _defineProperty(this, "itemMgr", null);

          _defineProperty(this, "item_types_id", []);

          _defineProperty(this, "inventory_data", {
            "resources": [],
            "spirit": [],
            "equipment": [],
            "tool": []
          });

          _defineProperty(this, "test_data", {
            "resources": [{
              "id": "Diamond",
              "num": 1500
            }, {
              "id": "Gold",
              "num": 1000000
            }],
            "spirit": [],
            "equipment": [],
            "tool": [{
              "id": "GiftBox",
              "num": 2
            }]
          });

          this.inventory_data = this.getInventoryData();
          this.itemMgr = (_crd && ItemMgr === void 0 ? (_reportPossibleCrUseOfItemMgr({
            error: Error()
          }), ItemMgr) : ItemMgr).getInstance();
          this.item_types_id = this.itemMgr.getItemTypes();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("collect item", this.name, this.changeItemNum, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("use item", this.name, this.changeItemNum, this);
        }

        static getInstance() {
          if (!InventoryMgr.ist) {
            InventoryMgr.ist = new InventoryMgr("InventoryMgr");
          }

          return InventoryMgr.ist;
        }

        getInventoryData() {
          // ########################
          return this.test_data; // #
          // ########################
        }

        getInventoryByType(type_name) {
          if (type_name === "all") {
            let items = [];
            this.item_types_id.forEach(id => {
              if (id["type_id"] === "all") {
                return;
              }

              items = items.concat(this.inventory_data[id["type_id"]]);
            });
            return items;
          }

          return this.inventory_data[type_name];
        }

        changeItemNum(id, num) {
          if (!this.itemMgr) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "InventoryMgr init failed");
            return;
          }

          let item = this.itemMgr.getItemConf(id);

          if (item) {
            let item_list = this.inventory_data[item["type_id"]];
            let find_flag = false;
            let idx = 0,
                res = 0;
            item_list.forEach(item => {
              if (item["id"] === id) {
                res = item["num"] = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                  error: Error()
                }), Functions) : Functions).normalize(item["num"] + num, 0, null);
                idx = item_list.indexOf(item);
                find_flag = true;
              }
            });

            if (!find_flag && num > 0) {
              item_list.push({
                "id": id,
                "num": num
              });
            }

            if (find_flag && idx > -1 && res <= 0) {
              item_list = item_list.slice(idx, idx);
            }

            this.inventory_data[item["type_id"]] = item_list;
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("change item num");
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=InventoryMgr.js.map