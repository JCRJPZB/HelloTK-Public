System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, HerosMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../Tools/Configure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
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

      _cclegacy._RF.push({}, "5557eVQmD9AFo1owxXHT1Xu", "HerosMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HerosMgr", HerosMgr = (_dec = ccclass('HerosMgr'), _dec(_class = (_temp = _class2 = class HerosMgr extends Component {
        // ##################################
        // ##################################
        constructor(name) {
          super(name);

          _defineProperty(this, "common", void 0);

          _defineProperty(this, "hero_conf", new Map());

          _defineProperty(this, "hero_data", new Map());

          _defineProperty(this, "hero_list", []);

          _defineProperty(this, "troop", {
            // 武将配置
            "heros": [{
              "id": "CaoCao_ally",
              "name": "曹操",
              "hero_id": "CaoCao",
              "prefab": "General_002",
              "level": 60,
              "hp": 1800,
              "atk": 6000,
              "def": 80,
              "atkEff": "default_atk_particle",
              "hitEff": "default_hit_particle",
              "skill_name": "default",
              "skillEff": "default_skill_particle",
              "arms": "Cavalry_Lv1",
              "is_sp": false,
              "is_select": true,
              "idx": 0
            }, {
              "id": "LiuBei_ally",
              "name": "刘备",
              "hero_id": "LiuBei",
              "prefab": "General_002",
              "level": 60,
              "hp": 1200,
              "atk": 8000,
              "def": 50,
              "atkEff": "default_atk_particle",
              "hitEff": "default_hit_particle",
              "skill_name": "default",
              "skillEff": "default_skill_particle",
              "arms": "Archer_Lv1",
              "is_sp": false,
              "is_select": true,
              "idx": 1
            }, {
              "id": "SunQuan_ally",
              "name": "孙权",
              "hero_id": "SunQuan",
              "prefab": "General_002",
              "level": 60,
              "hp": 2400,
              "atk": 5500,
              "def": 100,
              "atkEff": "default_atk_particle",
              "hitEff": "default_hit_particle",
              "skill_name": "default",
              "skillEff": "default_skill_particle",
              "arms": "Infantry_Lv1",
              "is_sp": false,
              "is_select": true,
              "idx": 2
            }, {
              "id": "LvBu_ally",
              "hero_id": "LvBu",
              "name": "吕布",
              "prefab": "General_001",
              "level": 60,
              "hp": 2800,
              "atk": 5500,
              "def": 100,
              "atkEff": "default_atk_particle",
              "hitEff": "default_hit_particle",
              "skill_name": "default",
              "skillEff": "default_skill_particle",
              "arms": "Infantry_Lv1",
              "is_sp": true,
              "is_select": true,
              "idx": 3
            }, {
              "id": "ZhugeLiang_ally",
              "name": "诸葛亮",
              "hero_id": "ZhugeLiang",
              "prefab": "General_001",
              "level": 60,
              "hp": 1500,
              "atk": 7000,
              "def": 80,
              "atkEff": "default_atk_particle",
              "hitEff": "default_hit_particle",
              "skill_name": "default",
              "skillEff": "default_skill_particle",
              "arms": "Cavalry_Lv1",
              "is_sp": false,
              "is_select": true,
              "idx": 4
            }, {
              "id": "ZhouYu_ally",
              "name": "周瑜",
              "hero_id": "ZhouYu",
              "prefab": "General_001",
              "level": 60,
              "hp": 1500,
              "atk": 7000,
              "def": 80,
              "atkEff": "default_atk_particle",
              "hitEff": "default_hit_particle",
              "skill_name": "default",
              "skillEff": "default_skill_particle",
              "arms": "Cavalry_Lv1",
              "is_sp": false,
              "is_select": false,
              "idx": 5
            }],
            "formation": {
              // 阵型
              "id": "snake",
              "name": "长蛇阵",
              "pos_idxs": [0, 1, 4, 5, 8],
              "introduce": "增加部队普通攻击能力",
              "ids_idxs": [{
                "id": "CaoCao_ally",
                "idx": 0
              }, {
                "id": "LiuBei_ally",
                "idx": 1
              }, {
                "id": "SunQuan_ally",
                "idx": 2
              }, {
                "id": "LvBu_ally",
                "idx": 3
              }, {
                "id": "ZhugeLiang_ally",
                "idx": 4
              }]
            }
          });

          var settings = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("hero");
          this.common = settings["common"];

          for (var i = 0; i < settings["hero"].length; i++) {
            this.hero_conf.set(settings["hero"][i]["id"], settings["hero"][i]);
          } // #############################


          var data = this.getTroops(); // # 仍需修改，配合FormationMgr中的内容对应修改
          // #############################

          data["heros"].forEach(hero => {
            this.hero_data.set(hero["id"], hero);
            this.hero_list.push(hero["id"]);
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("update troop", this.name, troop_conf => {
            this.troop = troop_conf;
          });
        }

        static getInstance() {
          if (!HerosMgr.instance) {
            HerosMgr.instance = new HerosMgr("HerosMgr");
          }

          return HerosMgr.instance;
        }

        getTroops() {
          // #######################
          return this.troop; // #######################
        }

        getHeroList() {
          return this.hero_list;
        }

        getHeroConfById(id) {
          if (!this.hero_conf.has(id)) {
            return null;
          }

          return this.hero_conf.get(id);
        }

        getHeroDataById(id) {
          if (!this.hero_data.has(id)) {
            return null;
          }

          return this.hero_data.get(id);
        }

        updateHeroData(data) {
          if (!this.hero_data.has(data["id"])) {
            return;
          }

          this.hero_data.set(data["id"], data);
        }

      }, _defineProperty(_class2, "instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HerosMgr.js.map