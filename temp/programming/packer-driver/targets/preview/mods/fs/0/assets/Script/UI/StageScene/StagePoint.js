System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, find, Camera, Material, MeshRenderer, v3, tween, MonsterMgr, Functions, Generator, ResMgr, Subscribe, StageMgr, _dec, _class, _temp, _crd, ccclass, property, StagePoint;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMonsterMgr(extras) {
    _reporterNs.report("MonsterMgr", "../../BattleField/Monster/MonsterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../Tools/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStageMgr(extras) {
    _reporterNs.report("StageMgr", "./StageMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      find = _cc.find;
      Camera = _cc.Camera;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      v3 = _cc.v3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      MonsterMgr = _unresolved_2.MonsterMgr;
    }, function (_unresolved_3) {
      Functions = _unresolved_3.Functions;
    }, function (_unresolved_4) {
      Generator = _unresolved_4.Generator;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
    }, function (_unresolved_6) {
      Subscribe = _unresolved_6.Subscribe;
    }, function (_unresolved_7) {
      StageMgr = _unresolved_7.StageMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f65ezBaVdDXrmJwFxDWTmB", "StagePoint", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StagePoint", StagePoint = (_dec = ccclass('StagePoint'), _dec(_class = (_temp = class StagePoint extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ui_target", null);

          _defineProperty(this, "ui_node", null);

          _defineProperty(this, "text", null);

          _defineProperty(this, "camera", null);

          _defineProperty(this, "meshR", null);

          _defineProperty(this, "enable_mtr", null);

          _defineProperty(this, "disable_mtr", null);

          _defineProperty(this, "select_mtr", null);

          _defineProperty(this, "isEnabled", false);

          _defineProperty(this, "slt_flag", false);

          _defineProperty(this, "data", null);
        }

        // 关卡内怪物的配置
        onLoad() {
          this.meshR = this.node.getComponent(MeshRenderer); // 获取材质管理器

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).loadRes("Material", "/Stage/Stage_enable", Material, res => {
            // 加载可用状态材质
            this.enable_mtr = res;

            if (this.isEnabled) {
              var _this$meshR;

              (_this$meshR = this.meshR) === null || _this$meshR === void 0 ? void 0 : _this$meshR.setMaterial(this.enable_mtr, 0);
            }
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).loadRes("Material", "/Stage/Stage_disable", Material, res => {
            // 加载禁用状态材质
            this.disable_mtr = res;
          });
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).loadRes("Material", "/Stage/Stage_selected", Material, res => {
            // 加载选中状态材质
            this.select_mtr = res;
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("touch_start" + this.node.uuid, this.node.uuid, () => {
            var _this$meshR2;

            // 触摸开始事件
            if (!this.isEnabled) {
              return;
            }

            this.slt_flag = true;
            (_this$meshR2 = this.meshR) === null || _this$meshR2 === void 0 ? void 0 : _this$meshR2.setMaterial(this.select_mtr, 0); // 将材质改为被选中
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("touch_end" + this.node.uuid, this.node.uuid, () => {
            // 触摸结束事件(触点在自身)
            if (this.isEnabled && this.slt_flag) {
              // 只有当可用且触摸标识在自身时才响应
              this.changeSelect();
            }
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("touch_end", this.node.uuid, () => {
            // 触摸结束事件
            if (this.isEnabled && this.slt_flag) {
              var _this$meshR3;

              this.slt_flag = false;
              (_this$meshR3 = this.meshR) === null || _this$meshR3 === void 0 ? void 0 : _this$meshR3.setMaterial(this.enable_mtr, 0); // 恢复到选中状态材质
            }
          });
        }

        init(uiParent, conf) {
          var _find;

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("stage available " + conf["id"], this.uuid, this.changeState, this);
          this.ui_target = this.node.getChildByName("UITarget"); // UI跟随的节点（3D)

          this.camera = (_find = find("/Main Camera")) === null || _find === void 0 ? void 0 : _find.getComponent(Camera); // 主摄像机

          var pos = v3(conf["pos"][0], conf["pos"][1], conf["pos"][2]); // 摆放

          this.node.setPosition(pos);
          var gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // 预制体生成器

          this.ui_node = gen.generator(uiParent, "Stage_UI"); // 生成UI节点

          if (this.ui_target && this.ui_node) {
            var label = this.ui_node.getChildByName("Label");

            if (label) {
              this.text = label.getComponent(Label);
            }

            if (this.text) {
              this.text.string = conf["name"];
            } // 设置关卡名称


            var mstMgr = (_crd && MonsterMgr === void 0 ? (_reportPossibleCrUseOfMonsterMgr({
              error: Error()
            }), MonsterMgr) : MonsterMgr).getInstance(); // 怪物管理器

            var mst_conf = [];
            conf["monsters"].forEach(mst => {
              // 获取关卡内的怪物配置
              mst_conf.push(mstMgr.getMonsterAttr(mst));
            });
            var mst_pos_idxs = [];

            for (var i = 0; i < mst_conf.length; i++) {
              mst_pos_idxs.push({
                "id": mst_conf[i]["id"],
                "idx": i
              });
            } // 生成配置


            this.data = {
              // 生成数据
              "stage_id": conf["id"],
              "formation": {
                "id": "monster",
                "name": "怪物",
                "ids_idxs": mst_pos_idxs,
                "pos_idxs": [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
              "heros": mst_conf
            };

            if (conf["available"]) {
              // 若已通关或解锁则改为可用状态
              this.ui_node.on("click", this.changeSelect, this);
              this.isEnabled = true;

              if (conf["id"] === (_crd && StageMgr === void 0 ? (_reportPossibleCrUseOfStageMgr({
                error: Error()
              }), StageMgr) : StageMgr).getInstance().getLastStageId()) {
                // 此处初始化了进入选关界面以后显示哪个关卡
                this.changeSelect();
              }
            }
          }
        }

        changeSelect() {
          // 改变选中关卡
          var x = this.node.getPosition().x + 10;

          if (this.camera) {
            var camera_pos = this.camera.node.getPosition();
            var camera_tween = tween(this.camera.node) // 缓动移动摄像头到关卡位置
            .to(1, {
              position: v3(x, camera_pos.y, camera_pos.z)
            }, {
              easing: "sineInOut"
            }).call(() => {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).remove("touch screen start", this.name);
            }) // 缓动结束后移除监听
            .start();
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).listen("touch screen start", this.name, () => {
              // 监听触摸事件
              camera_tween.stop(); // 移动过程中有触摸事件则终止缓动

              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).remove("touch screen start", this.name); // 终止后移除监听
            }, this);
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("change select stage", this.data);
        }

        changeState(available) {
          if (available) {
            var _this$meshR4;

            (_this$meshR4 = this.meshR) === null || _this$meshR4 === void 0 ? void 0 : _this$meshR4.setMaterial(this.enable_mtr, 0);
          } else {
            var _this$meshR5;

            (_this$meshR5 = this.meshR) === null || _this$meshR5 === void 0 ? void 0 : _this$meshR5.setMaterial(this.disable_mtr, 0);
          }
        }

        update() {
          if (this.ui_target && this.camera && this.ui_node) {
            (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).UIFllow3DNode(this.ui_node, this.camera, this.ui_target); // 跟随3D节点
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StagePoint.js.map