System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Subscribe, UIBase, _dec, _class, _temp, _crd, ccclass, property, StartPage;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../UI/UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }, function (_unresolved_3) {
      UIBase = _unresolved_3.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c951aYqOCFNMLZJgFjzfZEx", "StartPage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartPage", StartPage = (_dec = ccclass('StartPage'), _dec(_class = (_temp = class StartPage extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "font", null);

          _defineProperty(this, "test_enemy", {
            // 武将配置
            "heros": [{
              "id": "CaoCao_ally",
              "name": "曹操",
              "hero_id": "CaoCao",
              "prefab": "General",
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
              "prefab": "General",
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
              "prefab": "General",
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
              "prefab": "General",
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
              "prefab": "General",
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
              "prefab": "General",
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
              "id": "crescent",
              "name": "偃月阵",
              "pos_idxs": [1, 2, 3, 5, 6],
              "introduce": "提高暴击率",
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
        }

        // #######################
        onInit() {
          this.setBtnEvent();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("open UI", "SignUp", "Window");
        }

        setBtnEvent() {
          this.addClickEvent("StartBtn", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("load scene", "Main", "test_player");
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StartPage.js.map