System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, Label, Sprite, EditBox, ProgressBar, Subscribe, _dec, _class, _temp, _crd, ccclass, property, comTypes, UIContainer;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      EditBox = _cc.EditBox;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb47fs/CFJNKoFkknq+j+j4", "UIContainer", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      comTypes = {
        'Button': Button,
        'Label': Label,
        'Sprite': Sprite,
        'EditBox': EditBox,
        "ProgressBar": ProgressBar
      };

      _export("UIContainer", UIContainer = (_dec = ccclass('UIContainer'), _dec(_class = (_temp = class UIContainer extends Component {
        constructor() {
          super();

          _defineProperty(this, "mapNode", new Map());

          _defineProperty(this, "mapBtn", new Map());

          _defineProperty(this, "mapLabel", new Map());

          _defineProperty(this, "mapSprite", new Map());

          _defineProperty(this, "mapEditBox", new Map());

          _defineProperty(this, "mapProgressBar", new Map());

          _defineProperty(this, "compCache", null);

          this.compCache = {
            'Button': this.mapBtn,
            'Label': this.mapLabel,
            'Sprite': this.mapSprite,
            'EditBox': this.mapEditBox,
            "ProgressBar": this.mapProgressBar
          };
        }

        getNode(key) {
          return this.mapNode.get(key);
        }

        getComp(key, type) {
          let mapCom = this.compCache[type];

          if (!mapCom) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find ui type named \'" + type + "\'.");
            return null;
          }

          return mapCom.get(key);
        }

        find(rootN) {
          if (!rootN) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Node is null or undefined!");
            return;
          }

          let name = rootN.name;
          this.mapNode.set(name, rootN); //??????????????????????????????????????????????????????Map???

          for (let key in this.compCache) {
            //????????????
            let ComType = comTypes[key]; //????????????

            let Comp = rootN.getComponent(ComType);

            if (Comp) {
              //?????????????????????:this.mapBtn
              let mapComp = this.compCache[key]; //??????????????????????????????map???

              mapComp.set(name, Comp);
            }
          }

          let arrChild = rootN.children;

          for (let node of arrChild) {
            this.find(node);
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIContainer.js.map