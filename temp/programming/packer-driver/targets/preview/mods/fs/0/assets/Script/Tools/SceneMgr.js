System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, ProgressBar, find, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, SceneMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      director = _cc.director;
      ProgressBar = _cc.ProgressBar;
      find = _cc.find;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "317989VMTFALb13oDoZRKIy", "SceneMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SceneMgr", SceneMgr = (_dec = ccclass('SceneMgr'), _dec(_class = (_temp = _class2 = class SceneMgr extends Component {
        // 加载进度条
        constructor(name) {
          super(name);

          _defineProperty(this, "pb", null);

          _defineProperty(this, "scene_load_count", new Map());

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("load scene", this.name, this.loadScene, this);
        }

        static getInstance() {
          if (!SceneMgr.ist) {
            SceneMgr.ist = new SceneMgr("SceneMgr");
          }

          return SceneMgr.ist;
        }

        loadScene(scene_name, data) {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("start load scene");
          director.loadScene("Loading", () => {
            var _find;

            // 先进入加载场景以做过渡
            this.pb = (_find = find("/Canvas/ProgressBar")) === null || _find === void 0 ? void 0 : _find.getComponent(ProgressBar);
            this.loadStart(scene_name, data);
          });
        }

        loadStart(scene_name, data) {
          try {
            director.preloadScene(scene_name, (completeCount, totalcount, item) => {
              // 预加载，同时根据加载进度更新进度条
              var ratio = completeCount / totalcount;

              if (!this.pb) {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("log err", "Load progress bar failed!");
                return;
              }

              this.pb.progress = ratio;
            }, () => {
              director.loadScene(scene_name, () => {
                this.loadComplete(data);
              });
            }); // 加载完成回调
          } catch (e) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find scene named: " + scene_name);
            this.returnToStart();
          }
        }

        loadComplete(data) {
          var _director$getScene;

          var scene_name = (_director$getScene = director.getScene()) === null || _director$getScene === void 0 ? void 0 : _director$getScene.name;

          if (!scene_name) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Load scene error!");
            this.returnToStart();
            return;
          }

          var num = this.scene_load_count.get(scene_name); // 保存场景加载次数

          if (num) {
            this.scene_load_count.set(scene_name, ++num);
          } else {
            this.scene_load_count.set(scene_name, 1);
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("change scene", scene_name, num ? num : 1, data); // 发射加载完成消息
        }

        returnToStart() {
          this.loadScene("StartScene", null);
        }

      }, _defineProperty(_class2, "ist", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SceneMgr.js.map