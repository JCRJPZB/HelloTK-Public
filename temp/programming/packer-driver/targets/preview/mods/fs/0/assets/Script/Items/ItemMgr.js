System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Generator, ImgMgr, Subscribe, Item, _dec, _class, _class2, _temp, _crd, ccclass, property, ItemMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../Tools/Configure", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
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

      _cclegacy._RF.push({}, "2bef4ydqjFJqbO7Ejx9GKkU", "ItemMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemMgr", ItemMgr = (_dec = ccclass('ItemMgr'), _dec(_class = (_temp = _class2 = class ItemMgr extends Component {
        constructor(name) {
          super(name);

          _defineProperty(this, "conf", void 0);

          _defineProperty(this, "item_types", []);

          _defineProperty(this, "conf_map", new Map());

          _defineProperty(this, "imgMgr", null);

          _defineProperty(this, "gen", null);

          this.conf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("items");

          if (this.conf) {
            this.item_types = this.conf["types"];
            this.conf["items"].forEach(item => {
              this.conf_map.set(item["id"], item);
            });
          }

          this.imgMgr = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
            error: Error()
          }), ImgMgr) : ImgMgr).getInstance();
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("try use item", this.name, this.tryUseItem, this);
        }

        static getInstance() {
          if (!ItemMgr.ist) {
            ItemMgr.ist = new ItemMgr("ItemMgr");
          }

          return ItemMgr.ist;
        } // 获取物品类别


        getItemTypes() {
          return this.item_types;
        }

        getItemConf(id) {
          // 获取物品信息
          if (!this.conf_map.has(id)) {
            return null;
          }

          return this.conf_map.get(id);
        }

        getItemNode(id, parent, item_num, browser_root, pos) {
          var conf = this.getItemConf(id);

          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          if (conf && this.imgMgr) {
            var node = this.gen.generator(parent, "Item", pos);

            if (!node) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can't find prefab: Item");
              return;
            }

            var ctrl = node.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item);
            ctrl === null || ctrl === void 0 ? void 0 : ctrl.init(conf, item_num, browser_root);
            return node;
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("log err", "ItemMgr initalized failed!");
          return null;
        }

        tryUseItem(id, num, item_browser_root, callback) {
          // root 是用来放提示框的
          // ##################
          callback(true); // 后续需要加上使用物品的提示，以及若不能使用物品的提示
          // ##################
        }

      }, _defineProperty(_class2, "ist", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemMgr.js.map