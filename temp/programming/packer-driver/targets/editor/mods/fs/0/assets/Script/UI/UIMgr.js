System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, Label, tween, v3, Configure, Generator, Subscribe, UIBase, _dec, _class, _class2, _temp, _crd, ccclass, property, UIMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../Tools/Configure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "./UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }, function (_unresolved_5) {
      UIBase = _unresolved_5.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bdce98Jc3NBwZMaelfTzzjy", "UIMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIMgr", UIMgr = (_dec = ccclass('UIMgr'), _dec(_class = (_temp = _class2 = class UIMgr extends Component {
        constructor(name) {
          super(name);

          _defineProperty(this, "_sceneName", "");

          _defineProperty(this, "_root_UI", null);

          _defineProperty(this, "_currentPage", "");

          _defineProperty(this, "_mapLayer", new Map());

          _defineProperty(this, "_UIConf", null);

          _defineProperty(this, "_stackPageName", []);

          _defineProperty(this, "_UIMap", new Map());

          _defineProperty(this, "_PageMap", new Map());

          _defineProperty(this, "gen", null);

          this._UIConf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("ui"); // this._reset();

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change scene", this.name, this._reset, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("open UI", this.name, this.openUI, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("close UI", this.name, this.closeUI, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("alert UI", this.name, this.alert, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("go back page", this.name, this.goBackPage, this);
        }

        static getInstance() {
          if (!UIMgr.ist) {
            UIMgr.ist = new UIMgr("UIMgr");
          }

          return UIMgr.ist;
        }

        _reset(scene_name, num, data) {
          this._sceneName = scene_name;
          this._currentPage = "";
          this._stackPageName = [];

          this._UIMap.clear();

          this._PageMap.clear();

          this._mapLayer.clear();

          let rootPath = this._UIConf["root"];
          let typeArr = this._UIConf["types"];

          if (!typeArr || typeArr.length < 1) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Get type array failed!");
            return;
          }

          this._root_UI = find(rootPath);

          if (!this._root_UI) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Get UI root failed!");
            return;
          }

          typeArr.forEach(type => {
            var _this$_root_UI;

            let node = (_this$_root_UI = this._root_UI) === null || _this$_root_UI === void 0 ? void 0 : _this$_root_UI.getChildByName(type["node_name"]);

            if (node) {
              this._mapLayer.set(type["type_name"], node);
            } else {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Failed to find node named \'" + type["node_name"] + "\' !");
            }
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("UI manager ready", scene_name, num, data);
        }

        openUI(strName, layer, params) {
          let ui = this._UIMap.get(strName);

          layer = layer || "Page";

          if (layer === "Page") {
            this._destoryAllUI();

            this.openPage(strName);
            ui = this._PageMap.get(strName);
          }

          if (!ui) {
            let layer_node = this._mapLayer.get(layer);

            if (!layer_node) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "找不到该界面：" + strName);
              return;
            }

            let ui_node = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance().generator(layer_node, strName);

            if (!ui_node) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "生成界面失败：" + strName);
              return;
            }

            ui = ui_node.getComponent(_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
              error: Error()
            }), UIBase) : UIBase);

            if (!ui) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", strName + " has no comp named \'UIBase\'.");
              return;
            }

            ui._strName = strName;
            ui.init(params);

            if (layer === "Page") {
              this._PageMap.set(strName, ui);
            } else {
              this._UIMap.set(strName, ui);
            }
          }

          ui.open(params);
        }

        openPage(pageName) {
          if (this._currentPage === pageName) {
            return;
          }

          if (this._currentPage) {
            this._stackPageName.push(this._currentPage);
          }

          if (this._currentPage && this._stackPageName.length > 1) {
            var _this$_PageMap$get;

            // 最底层的页面不会关闭
            (_this$_PageMap$get = this._PageMap.get(this._currentPage)) === null || _this$_PageMap$get === void 0 ? void 0 : _this$_PageMap$get.close(null);
          }

          if (this._stackPageName.length > 0) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("stop move camera");
          }

          this._currentPage = pageName;
        }

        closeUI(strName, layer, params) {
          if (!layer) {
            layer = "Window";
          }

          let ui = this._UIMap.get(strName);

          if (layer === "Page") {
            ui = this._PageMap.get(strName);
          }

          if (!ui) {
            return;
          }

          ui.close(params);
        }

        _destoryAllUI() {
          this._UIMap.forEach((ui, key) => {
            ui.node.destroy();
          });

          this._UIMap.clear();
        }

        goBackPage() {
          let length = this._stackPageName.length;

          if (length < 1) {
            return;
          }

          if (this._currentPage) {
            var _this$_PageMap$get2;

            (_this$_PageMap$get2 = this._PageMap.get(this._currentPage)) === null || _this$_PageMap$get2 === void 0 ? void 0 : _this$_PageMap$get2.close(null);
            this._currentPage = "";
          }

          this._destoryAllUI();

          let prePage = this._stackPageName.pop();

          if (!prePage) {
            return;
          }

          this.openPage(prePage);

          if (this._stackPageName.length < 1) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("continue move camera");
          }
        }

        alert(content, parent, pos) {
          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          let lbl_node = this.gen.generator(parent, "Alert_Label", pos);
          let lbl = lbl_node === null || lbl_node === void 0 ? void 0 : lbl_node.getComponent(Label);

          if (lbl) {
            lbl.string = content;
          }

          tween(lbl_node).by(1, {
            position: v3(0, 150, 0)
          }, {
            easing: "fade"
          }).call(() => {
            lbl_node === null || lbl_node === void 0 ? void 0 : lbl_node.destroy();
          }).start();
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIMgr.js.map