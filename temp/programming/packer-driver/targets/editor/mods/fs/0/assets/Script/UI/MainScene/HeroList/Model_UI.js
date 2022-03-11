System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Camera, RenderTexture, SpriteFrame, Generator, Subscribe, _dec, _class, _temp, _crd, ccclass, property, Model_UI;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../../Tools/Generator", _context.meta, extras);
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
      Camera = _cc.Camera;
      RenderTexture = _cc.RenderTexture;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      Generator = _unresolved_2.Generator;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7c1cybICdILZXJleeBqGpx", "Model_UI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Model_UI", Model_UI = (_dec = ccclass('Model_UI'), _dec(_class = (_temp = class Model_UI extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "camera", null);

          _defineProperty(this, "model", null);

          _defineProperty(this, "target", null);

          _defineProperty(this, "gen", null);
        }

        onLoad() {
          var _this$node$getChildBy;

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("set model UI targetTexture", this.name, t => {
            this.target = t;
          });
          this.node.active = false;
          this.camera = (_this$node$getChildBy = this.node.getChildByName("Camera")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Camera);
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("show hero model", this.name, this.show, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change curr hero model", this.name, this.changeHero, this);
        }

        show() {
          this.node.active = true;
        }

        changeHero(prefab_name) {
          if (this.model) {
            this.model.destroy();
            this.model = null;
          }

          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          this.model = this.gen.generator(this.node, prefab_name);
          this.updateUI();
        }

        updateUI() {
          if (!this.camera || !this.target) {
            return;
          }

          const renderTexture = new RenderTexture();
          renderTexture.reset({
            width: 600,
            height: 800
          });
          this.camera.targetTexture = renderTexture;
          const spriteFrame = new SpriteFrame();
          spriteFrame.texture = renderTexture;
          this.target.spriteFrame = spriteFrame;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Model_UI.js.map