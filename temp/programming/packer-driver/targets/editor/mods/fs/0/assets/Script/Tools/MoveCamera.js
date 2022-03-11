System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Camera, geometry, find, PhysicsSystem, Vec3, v3, Input, input, Configure, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, Ray, MoveCamera;

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
      Camera = _cc.Camera;
      geometry = _cc.geometry;
      find = _cc.find;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      Input = _cc.Input;
      input = _cc.input;
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27abeYjJkNK3IcFRq8cRSsm", "MoveCamera", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        Ray
      } = geometry);

      _export("MoveCamera", MoveCamera = (_dec = ccclass('MoveCamera'), _dec(_class = (_temp = _class2 = class MoveCamera extends Component {
        // 各个场景拖动摄像头的配置
        // 当前场景拖动摄像头的配置
        // 当前场景的摄像头
        // 检测碰撞用的射线
        // 边界
        // 摄像头当前位置
        // 双指在屏幕上触点之间的距离
        // 当前缩放比例
        // 最大缩放比例
        // 最小缩放比例
        // 整个3D场景的父节点(缩放用，但私以为这么做不是一个好方案)
        constructor(name) {
          super(name);

          _defineProperty(this, "conf", void 0);

          _defineProperty(this, "curr_conf", void 0);

          _defineProperty(this, "camera", null);

          _defineProperty(this, "ray", new Ray());

          _defineProperty(this, "max_x", 0);

          _defineProperty(this, "min_x", 0);

          _defineProperty(this, "max_z", 0);

          _defineProperty(this, "min_z", 0);

          _defineProperty(this, "pos", new Vec3());

          _defineProperty(this, "touch_dist", 0);

          _defineProperty(this, "scale", 1);

          _defineProperty(this, "max_scale", 1);

          _defineProperty(this, "min_scale", 1);

          _defineProperty(this, "safe_area", null);

          this.conf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("base")["camera_move"]; // 读取配置文件

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("start load scene", this.name, this.disableMove, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change scene", this.name, this.changeScene, this); // 监听切换场景消息

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("continue move camera", this.name, this.enableMove, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("stop move camera", this.name, this.disableMove, this);
          this.changeScene("StartScene", 1, null); // 第一次进入游戏
        }

        static getInstance() {
          // 获取单例
          if (!MoveCamera.ist) {
            MoveCamera.ist = new MoveCamera("MoveCamera");
          }

          return MoveCamera.ist;
        }

        enableMove() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this); // 注册触摸事件

          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        disableMove() {
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this); // 取消注册触摸事件

          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        changeScene(scene_name, num, data) {
          this.curr_conf = this.conf[scene_name]; // 根据场景名称更改当前配置

          if (!this.curr_conf) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find configure named \'" + scene_name + "\'.");
            return;
          }

          if (this.curr_conf["enable"]) {
            this.enableMove();
          } else {
            this.disableMove();
          }

          this.max_x = this.curr_conf["max_x"];
          this.min_x = this.curr_conf["min_x"];
          this.max_z = this.curr_conf["max_z"];
          this.min_z = this.curr_conf["min_z"];
          this.scale = 1;
          this.max_scale = this.curr_conf["max_scale"];
          this.min_scale = this.curr_conf["min_scale"];
          let camera_node = find("Main Camera"); // 更换到新场景的摄像头

          if (!camera_node) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find Main Camera!");
            return;
          }

          this.camera = camera_node.getComponent(Camera); // 获取摄像头控件

          this.safe_area = find("SafeArea"); // 获取整个3D场景的父节点
        }

        onTouchStart(e) {
          if (!this.curr_conf || !this.curr_conf["enable"] || !this.camera) {
            return;
          } // 未配置该场景或未使用移动摄像头功能


          let t_num = e.getAllTouches().length; // 获取手指数量

          if (t_num === 1) {
            // 一根手指则为移动模式
            if (this.curr_conf["ray_cast"]) {
              this.rayCast(e, "start");
            } // 检测射线碰撞，以 触发点击事件


            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("touch screen start"); // 发射触摸屏幕事件
          } else if (t_num === 2) {
            // 两根手指则为缩放模式
            // 在触摸开始的时候记录两手指在屏幕上触点间的距离
            this.touch_dist = e.getAllTouches()[0].getLocation().subtract(e.getAllTouches()[1].getLocation()).length();
          }
        }

        onTouchMove(e) {
          if (!this.curr_conf || !this.curr_conf["enable"] || !this.camera) {
            return;
          } // 未配置该场景或未使用移动摄像头功能


          let t_num = e.getAllTouches().length; // 获取手指数量

          if (t_num === 2) {
            let touchs = e.getAllTouches(); // 获取触点

            let dist = touchs[0].getLocation().subtract(touchs[1].getLocation()).length(); // 计算距离

            this.scaleScene(dist / this.touch_dist); // 计算缩放比例并调用缩放方法

            this.touch_dist = dist; // 更新当前缩放比例
          } else if (t_num === 1) {
            this.camera.node.getPosition(this.pos); // 获取初始位置

            let temp_x = this.pos.x - e.getDeltaX() * 0.1; // 根据位移量计算摄像机的位移

            let temp_z = this.pos.z + e.getDeltaY() * 0.1;
            this.pos.x = temp_x > this.max_x ? this.max_x : temp_x < this.min_x ? this.min_x : temp_x; // 边缘检测

            this.pos.z = temp_z > this.max_z ? this.max_z : temp_z < this.min_z ? this.min_z : temp_z;
            this.camera.node.setPosition(this.pos); // 应用位移
          }
        }

        onTouchEnd(e) {
          if (!this.curr_conf || !this.curr_conf["enable"] || !this.camera) {
            return;
          } // 未配置该场景或未使用移动摄像头功能


          if (this.curr_conf["ray_cast"]) {
            this.rayCast(e, "end");
          }

          let t_num = e.getAllTouches().length;
          if (t_num <= 1) (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("touch screen end");
        }

        rayCast(e, type) {
          // 射线检测
          if (!this.camera) {
            return;
          }

          this.camera.screenPointToRay(e.getLocationX(), e.getLocationY(), this.ray); // 发出射线

          if (PhysicsSystem.instance.raycast(this.ray)) {
            // 检测碰撞
            let res = PhysicsSystem.instance.raycastResults; // 获得检测结果

            if (res.length <= 0) {
              return;
            }

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("touch_" + type + res[0].collider.node.uuid); // 发射结果

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("touch_" + type);
          }
        }

        scaleScene(rate) {
          if (!this.safe_area) {
            return;
          }

          let curr_scale = this.scale; // 保存当前比例

          this.scale *= rate; // 缩放

          this.scale = this.scale < this.min_scale ? this.min_scale : this.scale; // 边界检测

          this.scale = this.scale > this.max_scale ? this.max_scale : this.scale;

          if (this.scale != curr_scale * rate) {
            rate = this.scale / curr_scale;
          } // 约束


          this.safe_area.setScale(v3(this.scale, this.scale, this.scale)); // 应用缩放
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MoveCamera.js.map