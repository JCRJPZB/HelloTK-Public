System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, HerosMgr, Generator, Subscribe, UIBase, HeroListPortrait, _dec, _class, _temp, _crd, ccclass, property, HeroList;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfHerosMgr(extras) {
    _reporterNs.report("HerosMgr", "../../../Heros/HerosMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroListPortrait(extras) {
    _reporterNs.report("HeroListPortrait", "./HeroListPortrait", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      HerosMgr = _unresolved_2.HerosMgr;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }, function (_unresolved_5) {
      UIBase = _unresolved_5.UIBase;
    }, function (_unresolved_6) {
      HeroListPortrait = _unresolved_6.HeroListPortrait;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5aa69wXuq9JOKAQFxdOC0iF", "HeroList", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroList", HeroList = (_dec = ccclass('HeroList'), _dec(_class = (_temp = class HeroList extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "herosMgr", null);

          _defineProperty(this, "hero_id_list", []);

          _defineProperty(this, "hero_data", new Map());

          _defineProperty(this, "heroList_protrait_root", void 0);

          _defineProperty(this, "curr_hero_name_Lbl", void 0);

          _defineProperty(this, "curr_panel", "");

          _defineProperty(this, "story_btn", void 0);

          _defineProperty(this, "story_Node", void 0);

          _defineProperty(this, "targetTexture", void 0);
        }

        onInit() {
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.herosMgr = (_crd && HerosMgr === void 0 ? (_reportPossibleCrUseOfHerosMgr({
            error: Error()
          }), HerosMgr) : HerosMgr).getInstance();
          this.hero_id_list = this.herosMgr.getHeroList();
          this.hero_id_list.forEach(id => {
            this.hero_data.set(id, this.herosMgr.getHeroDataById(id));
          });
          this.addClickEvent("Return", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("go back page");
          }, this);
          this.heroList_protrait_root = this.getNode("List_Content");
          this.curr_hero_name_Lbl = this.getComp("Hero_Name", "Label");
          this.addClickEvent("Info_Btn", () => {
            this.changePane("HeroInfo");
          });
          this.addClickEvent("Equip_Btn", () => {
            this.changePane("HeroEquip");
          });
          this.addClickEvent("Spirit_Btn", () => {
            this.changePane("HeroSpirit");
          });
          this.targetTexture = this.getComp("ModelUI", "Sprite");
        }

        onOpen() {
          if (this.targetTexture) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("set model UI targetTexture", this.targetTexture);
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("show hero model");
          }

          this.fillList();
          this.curr_panel = "";
          this.changePane("HeroInfo");
        }

        onClose() {
          if (this.curr_panel) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("close UI", this.curr_panel, "Window");
          }
        }

        fillList() {
          var _this$heroList_protra;

          (_this$heroList_protra = this.heroList_protrait_root) === null || _this$heroList_protra === void 0 ? void 0 : _this$heroList_protra.removeAllChildren();
          this.hero_id_list.forEach(id => {
            if (!this.gen) {
              this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
                error: Error()
              }), Generator) : Generator).getInstance();
            }

            if (!this.heroList_protrait_root) {
              return;
            }

            var node = this.gen.generator(this.heroList_protrait_root, "HeroList_Portrait");
            var ctrl = node === null || node === void 0 ? void 0 : node.getComponent(_crd && HeroListPortrait === void 0 ? (_reportPossibleCrUseOfHeroListPortrait({
              error: Error()
            }), HeroListPortrait) : HeroListPortrait);
            ctrl === null || ctrl === void 0 ? void 0 : ctrl.init(this.hero_data.get(id));
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change check hero in list", this.name, this.changeCurrHero, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("change check hero in list", this.hero_id_list[0]);
        }

        changeCurrHero(id) {
          var name = this.hero_data.get(id)["name"];
          var prefab_name = this.hero_data.get(id)["prefab"];

          if (this.curr_hero_name_Lbl) {
            this.curr_hero_name_Lbl.string = name;
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("change curr hero model", prefab_name);
        }

        changePane(panel_name) {
          if (this.curr_panel != "") {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("close UI", this.curr_panel, "Window");
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("open UI", panel_name, "Window");
          this.curr_panel = panel_name;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HeroList.js.map