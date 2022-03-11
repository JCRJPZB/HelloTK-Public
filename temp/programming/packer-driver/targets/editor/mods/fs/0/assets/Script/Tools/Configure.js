System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, JsonAsset, game, ResMgr, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, Configure;

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
      JsonAsset = _cc.JsonAsset;
      game = _cc.game;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a7543wNyVI2KuDxEpnWG4G", "Configure", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Configure", Configure = (_dec = ccclass('Configure'), _dec(_class = (_temp = _class2 = class Configure extends Component {
        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("resources loaded", this.name, Configure.init, this);
          game.addPersistRootNode(this.node);
        }

        static init() {
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).loadDir("resources", "/config", JsonAsset, res => {
            // 加载全部配置文件
            if (!res || res.length < 1) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "未知错误，配置未能成功加载！");
              return;
            }

            res.forEach(json => {
              Configure.setting_dict.set(json.name, json.json);
            }); // 存

            Configure.loaded = true; // 更改标志

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("settings loaded"); // 配置加载完毕, 发射消息
          });
        }

        static getConfigure(mod_name) {
          if (!Configure.loaded) {
            // 若设置尚未加载完毕
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert err", "Settings: \'" + mod_name + "\' have not been loaded yet!");
            return null;
          }

          if (Configure.setting_dict.size < 1) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert err", "Configure: \'" + mod_name + "\' have not been loaded yet!");
            return null;
          }

          if (!Configure.setting_dict.get(mod_name)) {
            // 如果没有找到参数对应的设置
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert err", "Configure don't have this part: " + mod_name + ".");
            return null;
          }

          return Configure.setting_dict.get(mod_name);
        }

      }, _defineProperty(_class2, "setting_dict", new Map()), _defineProperty(_class2, "loaded", false), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Configure.js.map