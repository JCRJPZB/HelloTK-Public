System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, Label, Camera, Functions, Subscribe, _dec, _class, _temp, _crd, ccclass, property, HpNum;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../Tools/Functions", _context.meta, extras);
  }

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
      find = _cc.find;
      Label = _cc.Label;
      Camera = _cc.Camera;
    }, function (_unresolved_2) {
      Functions = _unresolved_2.Functions;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "029f87Zhc9Bba11wecL2YPI", "HpNum", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HpNum", HpNum = (_dec = ccclass('HpNum'), _dec(_class = (_temp = class HpNum extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "lbl", new Label());

          _defineProperty(this, "curHp", 0);

          _defineProperty(this, "camp", "");
        }

        // 阵营
        onLoad() {
          let lbl = this.getComponent(Label);

          if (!lbl) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("print err", "Node doesn't have component named \'Label\'!");
            return;
          }

          this.lbl = lbl;
        }

        init(hp, target, camp) {
          var _find;

          // 血量，血量跟随的3D物体，阵营
          if (!this.lbl) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Label hasn't initialized!");
            return;
          }

          this.curHp = hp;
          this.lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).numToStr(this.curHp); // 数字转字符串并设置

          this.camp = camp;
          let camera = (_find = find("/Main Camera")) === null || _find === void 0 ? void 0 : _find.getComponent(Camera); // 主摄像机

          this.scheduleOnce(() => {
            if (!camera) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can't find camera!");
              return;
            }

            (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).UIFllow3DNode(this.node, camera, target); // 防止节点位置未初始化，间隔短暂时间后修正一次位置
          }, 0.1);
        }

        changeHp(value) {
          // 血量变化
          let rest = this.curHp + value;
          this.curHp = rest > 0 ? rest : 0;
          this.lbl.string = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).numToStr(this.curHp);
          return rest;
        } // 获取当前血量所属单位的阵营


        getCamp() {
          return this.camp;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HpNum.js.map