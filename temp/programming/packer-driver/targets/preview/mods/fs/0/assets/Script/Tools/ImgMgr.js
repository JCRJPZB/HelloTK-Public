System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SpriteFrame, ResMgr, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, ImgMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "./Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86029RRaMVNuKbHcCMpuWZN", "ImgMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ImgMgr", ImgMgr = (_dec = ccclass('ImgMgr'), _dec(_class = (_temp = _class2 = class ImgMgr extends Component {
        static getInstance() {
          if (!ImgMgr.ist) {
            ImgMgr.ist = new ImgMgr("ImgMgr");
          }

          return ImgMgr.ist;
        }

        constructor(name) {
          super(name);

          _defineProperty(this, "spf_map", new Map());

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).loadDir("Texture", "/", SpriteFrame, spfs => {
            // 加载全部预制体
            if (spfs.length < 1) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "No SpriteFrame ");
              return;
            }

            spfs.forEach(spf => {
              this.spf_map.set(spf.name, spf);
            }); // 用图片名作key，写配置需注意重名

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("ImgMgr ready");
          });
        }

        getImg(name) {
          // 获取图片
          var spf = this.spf_map.get(name);

          if (spf) {
            return spf;
          }

          return null;
        }

      }, _defineProperty(_class2, "ist", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ImgMgr.js.map