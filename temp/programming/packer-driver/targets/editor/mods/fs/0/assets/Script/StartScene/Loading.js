System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Subscribe, _dec, _class, _temp, _crd, ccclass, property, Loading;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c163r0rQFM5oGD3vz4cIHR", "Loading", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Loading", Loading = (_dec = ccclass('Loading'), _dec(_class = (_temp = class Loading extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "start_btn", null);

          _defineProperty(this, "load_lbl", null);

          _defineProperty(this, "login_window", null);

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
        onLoad() {
          var _this$node$getChildBy;

          // 本地测试阶段，后续服务端配合重写
          this.start_btn = this.node.getChildByName("StartBtn");
          this.load_lbl = (_this$node$getChildBy = this.node.getChildByName("Loading")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Label);
          this.login_window = this.node.getChildByName("Login_window");

          if (!this.start_btn || !this.load_lbl || !this.login_window) {
            return;
          }

          this.load_lbl.node.active = true;
          this.login_window.active = false;
          this.start_btn.active = false;
          this.start_btn.on("click", () => {
            // Select BattleField
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("load scene", "Main", "test_player");
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("login success", this.name, () => {
            if (!this.start_btn) {
              return;
            }

            this.start_btn.active = true;
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Loading.js.map