System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, Generator, Subscribe, StageMgr, StagePoint, _dec, _class, _temp, _crd, ccclass, property, StageMaker;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStageMgr(extras) {
    _reporterNs.report("StageMgr", "./StageMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStagePoint(extras) {
    _reporterNs.report("StagePoint", "./StagePoint", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      Generator = _unresolved_2.Generator;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      StageMgr = _unresolved_4.StageMgr;
    }, function (_unresolved_5) {
      StagePoint = _unresolved_5.StagePoint;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "765bc3YG/hPY7uK+YRxg9bF", "StageMaker", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StageMaker", StageMaker = (_dec = ccclass('StageMaker'), _dec(_class = (_temp = class StageMaker extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "mgr", null);

          _defineProperty(this, "conf", void 0);
        }

        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("generator stage ui", this.name, this.generatorStageUI, this);
        }

        generatorStageUI(scene_name, ui_root) {
          this.mgr = (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
            error: Error()
          }), StageMgr) : StageMgr).getInstance();
          this.mgr.curr_scene = scene_name; // ???????????????

          var stage_root = find("/SafeArea/Stage_Root");
          var gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // ???????????????????????????????????????????????????DEMO??????
          // #########################################################

          this.conf = this.mgr.getSceneConf(); // ??????????????????

          this.conf["stages"].forEach(stage => {
            // ??????????????????????????????
            if (!stage_root || !ui_root) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can'f find root!");
              return;
            } // let pos = v3(stage["pos"][0], stage["pos"][1], stage["pos"][2]); // ??????????????????????????????????????????


            var new_stage = gen.generator(stage_root, "Stage_model"); // ??????????????????

            var stage_ctrl = new_stage === null || new_stage === void 0 ? void 0 : new_stage.getComponent(_crd && StagePoint === void 0 ? (_reportPossibleCrUseOfStagePoint({
              error: Error()
            }), StagePoint) : StagePoint); // ????????????

            if (stage_ctrl) {
              stage_ctrl.init(ui_root, stage); // ?????????
            }
          }); // #########################################################
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StageMaker.js.map