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
        constructor(...args) {
          super(...args);

          _defineProperty(this, "allies", []);

          _defineProperty(this, "enemies", []);
        }

        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("prepare battle", this.name, this.prepare, this);
        }

        prepare(enemy_conf) {
          let army_node = find("/SafeArea/Armies"); // ???????????????

          let ally_node = army_node === null || army_node === void 0 ? void 0 : army_node.getChildByName("Allies"); // ?????????????????????

          let enemy_node = army_node === null || army_node === void 0 ? void 0 : army_node.getChildByName("Enemies"); // ?????????????????????

          if (!ally_node || !enemy_node) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("print err", "Can't find armies nodes.");
            return;
          }

          let mgr = (_crd && HerosMgr === void 0 ? (_reportPossibleCrUseOfHerosMgr({
            error: Error()
          }), HerosMgr) : HerosMgr).getInstance(); // ??????Mgr

          let gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance(); // ???????????????????????????

          let ally_conf = mgr.getTroops(); // ??????????????????

          let prePos = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("hero")["common"]["prePos"]; // ??????????????????????????????

          this.genArmies(ally_node, ally_conf, gen, prePos, "ally"); // ??????????????????

          this.genArmies(enemy_node, enemy_conf, gen, prePos, "enemy"); // ??????????????????

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("battle is ready", this.allies, this.enemies); // ???????????????????????????
        }

        genArmies(parent, conf, gen, prePos, camp) {
          let hp = (_crd && HpMgr === void 0 ? (_reportPossibleCrUseOfHpMgr({
            error: Error()
          }), HpMgr) : HpMgr).getInstance();
          let conf_map = new Map();
          conf["heros"].forEach(hero => {
            conf_map.set(hero["id"], hero);
          });
          let hero_ids = conf["formation"]["ids_idxs"]; // id????????????????????????

          let pos_idxs = conf["formation"]["pos_idxs"]; // ??????????????????

          if (hero_ids.length <= pos_idxs.length) {
            for (let i = 0; i < hero_ids.length; i++) {
              let hero_conf = conf_map.get(hero_ids[i]["id"]); // ??????????????????

              let pos_idx = pos_idxs[hero_ids[i]["idx"]]; // ???????????????????????????

              let pos = prePos["pos"][pos_idx]; // ??????????????????

              let pos_vec = new Vec3(pos[0] * prePos["3d_dist"], 0, pos[1] * prePos["3d_dist"]);
              let hero_node = gen.generator(parent, "Hero_3D", pos_vec); // ?????????????????????

              if (!hero_node) {
                return;
              }

              gen.generator(hero_node, hero_conf["atkEff"], v3(0, 10, 0)); // ??????????????????

              gen.generator(hero_node, hero_conf["hitEff"], v3(0, 10, 0)); // ??????????????????

              gen.generator(hero_node, hero_conf["arms"]); // ???????????????

              let info = hero_node.getComponent(_crd && Info === void 0 ? (_reportPossibleCrUseOfInfo({
                error: Error()
              }), Info) : Info); // Info???????????????????????????/??????????????????????????????

              if (!info) {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("log err", "Can't find component!");
                return;
              }

              if (camp === "ally") {
                // ???????????????Info??????
                info.init(hero_conf["id"], camp, hero_conf);
                this.allies.push(info);
              } else if (camp === "enemy") {
                info.init(hero_conf["id"], camp, hero_conf);
                this.enemies.push(info);
              }

              hp.genHpNum(info, camp); // ??????????????????
            }
          }

          hp.init_total_hp(conf, camp); // ???????????????
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleFieldMaker.js.map