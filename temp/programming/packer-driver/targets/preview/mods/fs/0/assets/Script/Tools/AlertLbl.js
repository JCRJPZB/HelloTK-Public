System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, tween, v3, Generator, _dec, _class, _class2, _temp, _crd, ccclass, property, AlertLbl;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "./Generator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Generator = _unresolved_2.Generator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02386CL/INAE6RGI4YIrT9d", "AlertLbl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AlertLbl", AlertLbl = (_dec = ccclass('AlertLbl'), _dec(_class = (_temp = _class2 = class AlertLbl extends Component {
        constructor(name) {
          super(name);

          _defineProperty(this, "gen", null);

          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
        }

        static getInstance() {
          if (!AlertLbl.ins) {
            AlertLbl.ins = new AlertLbl("AlertLbl");
          }

          return AlertLbl.ins;
        }

        alert(content, parent, pos) {
          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          var lbl_node = this.gen.generator(parent, "Alert_Label", pos);
          var lbl = lbl_node === null || lbl_node === void 0 ? void 0 : lbl_node.getComponent(Label);

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

      }, _defineProperty(_class2, "ins", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AlertLbl.js.map