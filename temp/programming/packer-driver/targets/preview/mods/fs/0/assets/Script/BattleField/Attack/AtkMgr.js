System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Functions, Subscribe, HpMgr, DmgCal, _dec, _class, _temp, _crd, ccclass, property, AtkMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHpMgr(extras) {
    _reporterNs.report("HpMgr", "../HP/HpMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDmgCal(extras) {
    _reporterNs.report("DmgCal", "./DmgCal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfo(extras) {
    _reporterNs.report("Info", "./Info", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Functions = _unresolved_2.Functions;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      HpMgr = _unresolved_4.HpMgr;
    }, function (_unresolved_5) {
      DmgCal = _unresolved_5.DmgCal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72b74mZotFPL7EUJB7rOzxg", "AtkMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AtkMgr", AtkMgr = (_dec = ccclass('AtkMgr'), _dec(_class = (_temp = class AtkMgr extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "allies", []);

          _defineProperty(this, "enemies", []);

          _defineProperty(this, "all", []);
        }

        // 穿插合并后的数组
        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("battle is ready", this.name, this.start_battle, this); // 等待战斗场景初始化完成

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("hero die", this.name, hero => {
            // 武将（敌人）阵亡
            // ###############################################
            if (hero.camp === this.allies[0].camp) {
              // 如果是友方
              (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                error: Error()
              }), Functions) : Functions).del(this.allies, hero);
            } else {
              // 敌方
              (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
                error: Error()
              }), Functions) : Functions).del(this.enemies, hero);
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("defeat enemy");
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("defeat " + hero.getConf("category"));
            } // 测试阶段因为数据都保存在本地，故需要做这个判断


            (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
              error: Error()
            }), Functions) : Functions).del(this.all, hero); // 整体数组也要删除
            // ###############################################

            hero.node.destroy(); // 销毁阵亡的武将节点
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("battle interrupted", this.name, () => {
            // 战斗被中止
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).remove("hero die", this.name); // 移除监听

            this.unscheduleAllCallbacks(); // 移除所有计时器
          });
        }

        start_battle(allies, enemies) {
          this.allies = allies; // 初始化战斗双方数据

          this.enemies = enemies; // ############################################################################
          // 测试阶段在本地做轮流攻击，采用合并数组的方式实现

          this.all = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).alternate(this.allies, this.enemies); // 交替穿插合并敌我武将

          var count = -1; // 本地测试

          this.schedule(() => {
            if (this.allies.length < 1 || this.enemies.length < 1) {
              // 任意一方人数归零则战斗结束
              this.unscheduleAllCallbacks(); // 战斗结束解除计时器

              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("battle decided", false, this.allies.length > this.enemies.length, [true, true, true]); // 分出胜负

              return;
            }

            count = (count + 1) % this.all.length; // 根据长度以及上一位发起攻击的角色下标决定当前发起攻击的角色下标

            this.attack(this.all[count]); // 调用攻击方法
          }, 1.5); // ############################################################
        }

        attack(hero) {
          var target, target_Eff;
          var hp = (_crd && HpMgr === void 0 ? (_reportPossibleCrUseOfHpMgr({
            error: Error()
          }), HpMgr) : HpMgr).getInstance(); // 血量管理

          if (hero.camp === this.allies[0].camp) {
            target = this.enemies[0];
          } // 寻找攻击对象，测试阶段默认对方数组第一个
          else {
              target = this.allies[0];
            }

          var dmg = (_crd && DmgCal === void 0 ? (_reportPossibleCrUseOfDmgCal({
            error: Error()
          }), DmgCal) : DmgCal).calculate(hero, target); // 计算伤害

          hp.changeHp(target.id, -dmg); // 造成伤害

          var atkEff = hero.atkEff; // 攻击特效

          target_Eff = target.hitEff; // 受击特效

          if (!atkEff || !target_Eff) {
            return;
          }

          atkEff.play(); // 播放特效

          target_Eff.play();
        } // private find_target(hero: Info, troops: Info[]) { // 测试阶段暂不考虑寻敌
        // }


      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AtkMgr.js.map