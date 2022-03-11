System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, Vec3, v3, HerosMgr, HpMgr, Generator, Subscribe, Info, Configure, _dec, _class, _temp, _crd, ccclass, property, BattleFieldMaker;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHerosMgr(extras) {
    _reporterNs.report("HerosMgr", "../Heros/HerosMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHpMgr(extras) {
    _reporterNs.report("HpMgr", "./HP/HpMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfo(extras) {
    _reporterNs.report("Info", "./Attack/Info", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../Tools/Configure", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      HerosMgr = _unresolved_2.HerosMgr;
    }, function (_unresolved_3) {
      HpMgr = _unresolved_3.HpMgr;
    }, function (_unresolved_4) {
      Generator = _unresolved_4.Generator;
    }, function (_unresolved_5) {
      Subscribe = _unresolved_5.Subscribe;
    }, function (_unresolved_6) {
      Info = _unresolved_6.Info;
    }, function (_unresolved_7) {
      Configure = _unresolved_7.Configure;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd906/qyOxFJ4wRnyW1VD37", "BattleFieldMaker", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleFieldMaker", BattleFieldMaker = (_dec = ccclass('BattleFieldMaker'), _dec(_class = (_temp = class BattleFieldMaker extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "allies", []);

          _defineProperty(this, "enemies", []);
        }

        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("prepare battle", this.name, this.prepare, this);
        }

        prepare(enemy_conf) {
          var army_node = find("/SafeArea/Armies"); // 队伍父节点

          var ally_node = army_node === null || army_node === void 0 ? void 0 : army_node.getChildByName("Allies"); // 友方队伍父节点

          var enemy_node = army_node === null || army_node === void 0 ? void 0 : army_node.getChildByName("Enemies"); // 敌方队伍父节点

          if (!ally_node || !enemy_node) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("print err", "Can't find armies nodes.");
            return;
          }

          var mgr = (_crd && HerosMgr === void 0 ? (_reportPossibleCrUseOfHerosMgr({
            error: Error()
          }), HerosMgr) : HerosMgr).getInstance(); // 武将Mgr

          var gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // 预制体实例化生成器

          var ally_conf = mgr.getTroops(); // 获取友方阵容

          var prePos = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("hero")["common"]["prePos"]; // 获取预先设定好的位置

          this.genArmies(ally_node, ally_conf, gen, prePos, "ally"); // 生成友方队伍

          this.genArmies(enemy_node, enemy_conf, gen, prePos, "enemy"); // 生成敌方队伍

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("battle is ready", this.allies, this.enemies); // 生成完毕，开始战斗
        }

        genArmies(parent, conf, gen, prePos, camp) {
          var hp = (_crd && HpMgr === void 0 ? (_reportPossibleCrUseOfHpMgr({
            error: Error()
          }), HpMgr) : HpMgr).getInstance();
          var conf_map = new Map();
          conf["heros"].forEach(hero => {
            conf_map.set(hero["id"], hero);
          });
          var hero_ids = conf["formation"]["ids_idxs"]; // id对应位置下标配置

          var pos_idxs = conf["formation"]["pos_idxs"]; // 位置下标数组

          if (hero_ids.length <= pos_idxs.length) {
            for (var i = 0; i < hero_ids.length; i++) {
              var hero_conf = conf_map.get(hero_ids[i]["id"]); // 获取武将配置

              var pos_idx = pos_idxs[hero_ids[i]["idx"]]; // 获取位置配置的下标

              var pos = prePos["pos"][pos_idx]; // 获取位置配置

              var pos_vec = new Vec3(pos[0] * prePos["3d_dist"], 0, pos[1] * prePos["3d_dist"]);
              var hero_node = gen.generator(parent, "Hero_3D", pos_vec); // 实例化武将节点

              if (!hero_node) {
                return;
              }

              gen.generator(hero_node, hero_conf["atkEff"], v3(0, 10, 0)); // 生成攻击特效

              gen.generator(hero_node, hero_conf["hitEff"], v3(0, 10, 0)); // 生成受击特效

              gen.generator(hero_node, hero_conf["arms"]); // 实例化队伍

              var info = hero_node.getComponent(_crd && Info === void 0 ? (_reportPossibleCrUseOfInfo({
                error: Error()
              }), Info) : Info); // Info对象，用于存储武将/怪物的属性及其他配置

              if (!info) {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("log err", "Can't find component!");
                return;
              }

              if (camp === "ally") {
                // 分阵营放置Info对象
                info.init(hero_conf["id"], camp, hero_conf);
                this.allies.push(info);
              } else if (camp === "enemy") {
                info.init(hero_conf["id"], camp, hero_conf);
                this.enemies.push(info);
              }

              hp.genHpNum(info, camp); // 添加血量显示
            }
          }

          hp.init_total_hp(conf, camp); // 总血量显示
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleFieldMaker.js.map