System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, resources, assetManager, Configure, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, ResMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "./Configure", _context.meta, extras);
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
      resources = _cc.resources;
      assetManager = _cc.assetManager;
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ef46VNddxJSqnQ0y8rYn5y", "ResMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResMgr", ResMgr = (_dec = ccclass('ResMgr'), _dec(_class = (_temp = _class2 = class ResMgr extends Component {
        onLoad() {
          try {
            resources.preloadDir("/");
          } catch (e) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("print err", e);
            return;
          }

          ResMgr.bundle_map.set("resources", resources); // 将内置资源bundle放入map

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("resources loaded");
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("settings loaded", this.name, ResMgr.loadBundle, this);
        }

        static loadBundle() {
          // ############# 远程的bundle需要给出服务器访问文件夹的地址 ########
          var list = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("bundle_list")["bundles"];

          if (!list) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert err", "未知错误!");
            return;
          }

          var rest = list.length;
          list.forEach(name => {
            assetManager.loadBundle(name, (err, bundle) => {
              if (err) {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("print err", err.message);
                return;
              }

              ResMgr.bundle_map.set(name, bundle);

              if (--rest < 1) {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("bundle loaded");
              }
            });
          });
        }

        static loadRes(bundle_name, path, type, callBack, param) {
          // 加载资源
          var bundle = ResMgr.bundle_map.get(bundle_name);

          if (!bundle) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("print err", "Bundle not found: " + bundle_name);
            return;
          }

          bundle.load(path, type, null, (err, res) => {
            if (err) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", err.message);
              callBack(null, param);
              return;
            }

            callBack(res, param);
          });
        }

        static loadDir(bundle_name, path, type, callBack, param) {
          // 加载文件夹
          var bundle = ResMgr.bundle_map.get(bundle_name);

          if (!bundle) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("print err", "Bundle not found: " + bundle_name);
            return;
          }

          bundle.loadDir(path, type, (err, res) => {
            if (err) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", err.message);
              callBack(null, param);
              return;
            }

            callBack(res, param);
          });
        }

        static preLoad(bundle_name, path, type) {
          // 预加载
          var bundle = ResMgr.bundle_map.get(bundle_name);

          if (!bundle) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Bundle not found: " + bundle_name);
            return;
          }

          bundle.preload(path, type);
        }

      }, _defineProperty(_class2, "bundle_map", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResMgr.js.map