System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Subscribe, UIContainer, _dec, _class, _temp, _crd, ccclass, property, UIBase;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIContainer(extras) {
    _reporterNs.report("UIContainer", "./UIContainer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }, function (_unresolved_3) {
      UIContainer = _unresolved_3.UIContainer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2aca9uWn2ZH46ZrGnlml+Bo", "UIBase", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIBase", UIBase = (_dec = ccclass('UIBase'), _dec(_class = (_temp = class UIBase extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_strName", '');

          _defineProperty(this, "_ui", new (_crd && UIContainer === void 0 ? (_reportPossibleCrUseOfUIContainer({
            error: Error()
          }), UIContainer) : UIContainer)());
        }

        // protected _arrWatcher: Watcher[] = [];
        init(params) {
          this._strName = this.node.name;

          this._ui.find(this.node);

          this.onInit(params);
        }

        open(params) {
          if (!this.node.active) {
            this.node.active = true;
          }

          this.onOpen(params);
        }

        close(params) {
          if (this.node.active) {
            this.node.active = false;
          }

          this.onClose(params);
        }

        getNode(name) {
          return this._ui.getNode(name);
        }

        getComp(name, type) {
          return this._ui.getComp(name, type);
        }

        addClickEvent(nodeName, cb, target) {
          let btnNode = this.getNode(nodeName);

          if (!btnNode) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find node named \'" + nodeName + "\' at page \'" + this._strName + "\'.");
            return;
          }

          btnNode.on("click", cb, target);
        } // public bindCb(func: Function, params?: any) { if (params && params.length === 1) { params = params[0]; }}
        // public bindComp(name: string, type: string) { }


        onInit(params) {
          ; //
        }

        onOpen(params) {
          ; //
        }

        onClose(params) {
          ; //
        } // protected onDestroy(params: any) {
        //     ; //
        // }


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIBase.js.map