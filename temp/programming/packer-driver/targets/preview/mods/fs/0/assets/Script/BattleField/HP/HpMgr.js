System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Generator, Subscribe, HpNum, _dec, _class, _class2, _temp, _crd, ccclass, property, HpMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfo(extras) {
    _reporterNs.report("Info", "../Attack/Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHpNum(extras) {
    _reporterNs.report("HpNum", "./HpNum", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Generator = _unresolved_2.Generator;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      HpNum = _unresolved_4.HpNum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3dbc6+ZAn1FwbXbUyeKJFSa", "HpMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HpMgr", HpMgr = (_dec = ccclass('HpMgr'), _dec(_class = (_temp = _class2 = class HpMgr extends Component {
        // 血量管理
        // 单例
        // 生成器
        // 血条根节点
        // 血条哈希表
        // Info哈希表
        constructor(name) {
          // 初始化
          super(name);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "num_map", new Map());

          _defineProperty(this, "hero_map", new Map());

          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change hp", this.name, this.changeHp, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("set hp bar root", this.name, hpBar_root => {
            HpMgr.num_root = hpBar_root;
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("Hp manager is ready");
          });
        }

        static getInstance() {
          // 获取单例
          if (!HpMgr.ist) {
            HpMgr.ist = new HpMgr("HpMgr");
          }

          return HpMgr.ist;
        }

        reset() {
          // 清除数据(为重复进入战斗界面做准备)
          this.num_map.clear();
        }

        genHpNum(hero, camp) {
          // 生成血条
          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          if (!HpMgr.num_root) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Hp bar root is undefined!");
            return;
          }

          var new_hpBar = this.gen.generator(HpMgr.num_root, "HpNum"); // 实例化，父节点为血条根节点

          var num_ctrl = new_hpBar === null || new_hpBar === void 0 ? void 0 : new_hpBar.getComponent(_crd && HpNum === void 0 ? (_reportPossibleCrUseOfHpNum({
            error: Error()
          }), HpNum) : HpNum); // 获得血量的脚本组件

          if (!num_ctrl) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Component doesn't exist!");
            return;
          }

          num_ctrl.init(hero.getConf("hp"), hero.node, camp); // 传参初始化

          this.num_map.set(hero.id, num_ctrl); // 存

          this.hero_map.set(hero.id, hero); // 存
        }

        init_total_hp(conf, camp) {
          // 根据配置统计血量
          var heros = conf["heros"];
          var total = 0;
          heros.forEach(hero => {
            total += hero["hp"];
          }); // 累加

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("battle set total hp", total, camp);
        }

        changeHp(id, value) {
          // 血量变化
          var bar = this.num_map.get(id); // 获取发生变化的对象

          if (!bar) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find " + id + "'s hp bar!");
            return;
          }

          var rest = bar.changeHp(value); // 应用变化

          if (rest <= 0) {
            this.heroDie(id);
            value -= rest;
          } // 武将死亡 || 减去溢出的伤害(用以正确计算总血量的变化)


          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("battle change total hp", value, bar.getCamp());
        }

        heroDie(id) {
          // 武将阵亡
          this.scheduleOnce(() => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("hero die", this.hero_map.get(id)); // 发射消息

            var hpNum = this.num_map.get(id); // 获取对应的血量节点并将其从父节点移除

            if (hpNum) {
              hpNum.node.parent = null;
            }

            this.num_map.delete(id); // 根据ID删除对应的键值

            this.hero_map.delete(id);
          }, 1);
        }

        onDestroy() {
          this.unscheduleAllCallbacks();
        }

      }, _defineProperty(_class2, "ist", null), _defineProperty(_class2, "num_root", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HpMgr.js.map