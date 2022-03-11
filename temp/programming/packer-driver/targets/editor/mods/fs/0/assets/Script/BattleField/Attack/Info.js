System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ParticleSystem, Subscribe, _dec, _class, _temp, _crd, ccclass, property, Info;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ParticleSystem = _cc.ParticleSystem;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "763eddn/1pE1KZHknjLgf+7", "Info", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Info", Info = (_dec = ccclass('Info'), _dec(_class = (_temp = class Info extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "__id", "");

          _defineProperty(this, "__atkEff", void 0);

          _defineProperty(this, "__hitEff", void 0);

          _defineProperty(this, "__camp", "");

          _defineProperty(this, "__conf", void 0);
        }

        // 配置
        onLoad() {}

        init(id, camp, conf) {
          var _this$node$getChildBy, _this$node$getChildBy2;

          this.__id = id;
          this.__camp = camp;
          this.__conf = conf;
          let atkEff__name = this.__conf["atkEff"];
          this.__atkEff = (_this$node$getChildBy = this.node.getChildByName(atkEff__name)) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(ParticleSystem);
          let hitEff__name = this.__conf["hitEff"];
          this.__hitEff = (_this$node$getChildBy2 = this.node.getChildByName(hitEff__name)) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(ParticleSystem);

          if (!this.__atkEff) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find child or component!");
            return;
          }
        }

        get id() {
          return this.__id;
        }

        get atkEff() {
          return this.__atkEff;
        }

        get hitEff() {
          return this.__hitEff;
        }

        get camp() {
          return this.__camp;
        }

        getConf(arg) {
          return this.__conf[arg];
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Info.js.map