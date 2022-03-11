System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Camera, Sprite, RenderTexture, SpriteFrame, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TestRender;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Camera = _cc.Camera;
      Sprite = _cc.Sprite;
      RenderTexture = _cc.RenderTexture;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "018aaVIOU5PfL2QFDMJifZR", "RenderModel2UI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestRender", TestRender = (_dec = ccclass('TestRender'), _dec2 = property(Camera), _dec3 = property(Sprite), _dec(_class = (_class2 = (_temp = class TestRender extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "camera", _descriptor, this);

          _initializerDefineProperty(this, "target", _descriptor2, this);
        }

        update() {
          this.updateModelState();
        }

        updateModelState() {
          var renderTexture = new RenderTexture();
          renderTexture.reset({
            width: 600,
            height: 800
          });
          this.camera.targetTexture = renderTexture;
          var spriteFrame = new SpriteFrame();
          spriteFrame.texture = renderTexture;
          this.target.spriteFrame = spriteFrame;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RenderModel2UI.js.map