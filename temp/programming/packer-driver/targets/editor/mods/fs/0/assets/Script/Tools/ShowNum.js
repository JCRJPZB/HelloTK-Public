System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Sprite, SpriteAtlas, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ShowNum;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca895hZD0dCirKjl8GhUAUn", "ShowNum", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowNum", ShowNum = (_dec = ccclass('ShowNum'), _dec2 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = class ShowNum extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sprAtlas", _descriptor, this);

          _defineProperty(this, "_poolArr", []);
        }

        onLoad() {} // public loadTexture( texturePath:string = "res/game/laba_haiyang.png",callBack:Function = null ) :void {
        // this._callBack = callBack;
        // let self = this;
        // if(self._sprAtlas){
        //     self._callBack();
        // }else{
        //     cc.loader.loadRes(texturePath, cc.SpriteAtlas, function (err, atlas:cc.SpriteAtlas) {
        //         self._sprAtlas = atlas;
        //         self._callBack();
        //     })
        // }
        // }


        getNodeFromPool(index) {
          let numNode;
          let numSpr;

          if (this._poolArr.length == 0 || index + 1 > this._poolArr.length) {
            numNode = new Node();
            numSpr = numNode.addComponent(Sprite);

            this._poolArr.push(numNode);
          }

          numNode = this._poolArr[index];

          if (numNode && numNode.parent) {
            numNode.parent.removeChild(numNode);
          }

          return numNode;
        }

        showNumber(num, frameName = "num2-") {
          if (this.sprAtlas == null) return;
          this.removeReset();
          let numArr = num.toString().split("");
          let numNode;
          let numSpr;

          for (let i = 0; i < numArr.length; i++) {
            var _numSpr$spriteFrame;

            numNode = this.getNodeFromPool(i);
            this.node.addChild(numNode);
            let sp = numNode.getComponent(Sprite);

            if (!sp) {
              return;
            }

            numSpr = sp;
            let s = numArr[i];
            numSpr.spriteFrame = this.sprAtlas.getSpriteFrame(frameName + s);
            let pos = numNode.getPosition();

            if (!numSpr.spriteFrame) {
              return;
            }

            numNode.setPosition(new Vec3((((_numSpr$spriteFrame = numSpr.spriteFrame) === null || _numSpr$spriteFrame === void 0 ? void 0 : _numSpr$spriteFrame.rect.width) + 2) * i, pos.y, pos.z));
          }
        }

        removeReset() {
          this.node.removeAllChildren();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ShowNum.js.map