System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, StageMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../../Tools/Configure", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21b91aIK2VH7o5UfDdN/9e/", "StageMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StageMgr", StageMgr = (_dec = ccclass('StageMgr'), _dec(_class = (_temp = _class2 = class StageMgr extends Component {
        // #################################
        // #################################
        constructor(name) {
          super(name);

          _defineProperty(this, "conf", void 0);

          _defineProperty(this, "data", void 0);

          _defineProperty(this, "scene_map", new Map());

          _defineProperty(this, "stage_map", new Map());

          _defineProperty(this, "goals_str", void 0);

          _defineProperty(this, "test_stage_data", {
            "main": {
              "last_stage": "main_1",
              "stages": [{
                "id": "main_1",
                "clear": false,
                "available": true
              }, {
                "id": "main_2",
                "clear": false,
                "available": false
              }, {
                "id": "main_3",
                "clear": false,
                "available": false
              }, {
                "id": "main_4",
                "clear": false,
                "available": false
              }, {
                "id": "main_5",
                "clear": false,
                "available": false
              }]
            }
          });

          this.data = this.getStageData();
          this.conf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("stage");

          if (this.conf) {
            // 初始化时读取关卡配置
            this.conf["scenes"].forEach(scene => {
              this.scene_map.set(scene["id"], scene);

              if (!scene["stages"] || !scene["stages"].length) {
                return;
              }

              scene["stages"].forEach(stage => {
                this.stage_map.set(stage["id"], stage);
              });
              this.mergeData2Conf(scene);
            });
          }

          this.goals_str = this.conf["goals"];
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("stage clear", this.name, this.changeStageState, this);
        }

        static getInstance() {
          if (!StageMgr.ist) {
            StageMgr.ist = new StageMgr("StageMgr");
          }

          return StageMgr.ist;
        }

        getStageData() {
          // #######################
          return this.test_stage_data; // #######################
        } // 获取关卡配置


        getSceneConf() {
          return this.scene_map.get(this.curr_scene);
        } // 获取通关记录中的最后一关


        getLastStageId() {
          return this.scene_map.get(this.curr_scene)["last_stage"];
        }

        getStageConfById(stage_id) {
          return this.stage_map.get(stage_id);
        }

        getStageGoal(id) {
          // 获取关卡三星目标条件
          var stage_conf = this.stage_map.get(id);
          var goal_strs = [];
          stage_conf["goal"].forEach(goal_conf => {
            var [goal, num] = goal_conf.split(":");
            goal_strs.push(this.goals_str[goal].replace(this.goals_str["replacement"], num.toString()));
          });
          return goal_strs;
        }

        changeStageState(stage_id) {
          var stage_conf = this.stage_map.get(stage_id);

          if (!stage_conf["clear"]) {
            stage_conf["clear"] = true;
            var scene = this.scene_map.get(stage_conf["scene"]);
            var next = stage_conf["next"];

            if (next && scene) {
              var next_stage = this.stage_map.get(next);

              if (next_stage) {
                next_stage["available"] = true;
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("stage available " + next, true);
              }

              scene["last_stage"] = next;
            }
          }
        }

        mergeData2Conf(conf) {
          // 合并玩家数据至关卡配置
          var data = this.data[conf["id"]];

          if (data) {
            conf["last_stage"] = data["last_stage"];
            data["stages"].forEach(stage_data => {
              var id = stage_data["id"];
              var stage_conf = this.stage_map.get(id);

              if (!id || !stage_conf) {
                return;
              }

              for (var key in stage_data) {
                stage_conf[key] = stage_data[key];
              }
            });
          }

          return conf;
        } // 设置当前关卡名


        set curr_scene(scene_name) {
          StageMgr.curr_scene = scene_name;
        }

        get curr_scene() {
          return StageMgr.curr_scene;
        }

      }, _defineProperty(_class2, "ist", void 0), _defineProperty(_class2, "curr_scene", ""), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StageMgr.js.map