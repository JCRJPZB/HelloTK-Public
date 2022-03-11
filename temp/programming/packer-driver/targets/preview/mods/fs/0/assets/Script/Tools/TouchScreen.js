System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, geometry, Camera, PhysicsSystem, find, input, Input, Subscribe, _dec, _class, _temp, _crd, ccclass, property, Ray, TouchScreen;

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
      geometry = _cc.geometry;
      Camera = _cc.Camera;
      PhysicsSystem = _cc.PhysicsSystem;
      find = _cc.find;
      input = _cc.input;
      Input = _cc.Input;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4841dJezXhODb81MKctRBiZ", "TouchScreen", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        Ray
      } = geometry);

      _export("TouchScreen", TouchScreen = (_dec = ccclass('TouchScreen'), _dec(_class = (_temp = class TouchScreen extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "touchRay", new Ray());

          _defineProperty(this, "mainCamera", null);

          _defineProperty(this, "touch_flag", "");
        }

        onLoad() {
          var _this = this;

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change scene", this.name, function (scene_name, num) {
            var camera_node = find("Main Camera");

            if (camera_node) {
              _this.mainCamera = camera_node.getComponent(Camera);
            } else {
              _this.mainCamera = null;
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can't find camera node!");
            }
          });
          input.on(Input.EventType.TOUCH_START, e => {
            this.touch(e, "start");
          }, this);
          input.on(Input.EventType.TOUCH_MOVE, e => {
            this.touch(e, "move");
          }, this);
          input.on(Input.EventType.TOUCH_END, e => {
            this.touch(e, "end");
          }, this);
          input.on(Input.EventType.TOUCH_CANCEL, e => {
            this.touch(e, "end");
          }, this);
        }

        touch(e, type) {
          if (!this.mainCamera) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("t_" + type + "_2d", e);
            return;
          }

          this.mainCamera.screenPointToRay(e.getLocationX(), e.getLocationY(), this.touchRay);

          if (PhysicsSystem.instance.raycast(this.touchRay)) {
            var res = PhysicsSystem.instance.raycastResults;

            if (res.length <= 0) {
              return;
            }

            var uuid = res[0].collider.node.uuid;
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("t_" + type + uuid, e);
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TouchScreen.js.map