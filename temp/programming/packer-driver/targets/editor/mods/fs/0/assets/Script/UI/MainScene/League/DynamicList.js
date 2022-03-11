System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Generator, Subscribe, UIBase, LeagueMgr, _dec, _class, _temp, _crd, ccclass, property, DynamicList;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLeagueMgr(extras) {
    _reporterNs.report("LeagueMgr", "./LeagueMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Generator = _unresolved_2.Generator;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      UIBase = _unresolved_4.UIBase;
    }, function (_unresolved_5) {
      LeagueMgr = _unresolved_5.LeagueMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "185bdQiP3BEM5vAuVU3EYk1", "DynamicList", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DynamicList", DynamicList = (_dec = ccclass('DynamicList'), _dec(_class = (_temp = class DynamicList extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "leagueMgr", null);

          _defineProperty(this, "dynamic_page_map", new Map());

          _defineProperty(this, "view_root", void 0);

          _defineProperty(this, "page_num_box", void 0);

          _defineProperty(this, "page_num", 0);

          _defineProperty(this, "max_page", 0);

          _defineProperty(this, "current_page", void 0);
        }

        onInit(league_id) {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("refresh dynamics", this.name, this.refreshDynamics, this);
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.leagueMgr = (_crd && LeagueMgr === void 0 ? (_reportPossibleCrUseOfLeagueMgr({
            error: Error()
          }), LeagueMgr) : LeagueMgr).getInstance();
          this.view_root = this.getNode("Dynamic_View");
          this.page_num_box = this.getComp("PageNum", "EditBox");
          this.page_num = 1;
          this.addClickEvent("PreBtn", () => {
            this.turnToPage(-1, false);
          }, this);
          this.addClickEvent("NextBtn", () => {
            this.turnToPage(-1, true);
          }, this);

          if (this.page_num_box) {
            this.page_num_box.string = "1/1";
            this.page_num_box.node.on("editing-did-ended", box => {
              let page_num = Number(box.string);

              if (!isNaN(page_num)) {
                this.turnToPage(page_num, false);
              }

              box.string = this.page_num.toString() + "/" + this.max_page.toString();
            }, this);
          }
        }

        onOpen(league_id) {
          this.refreshDynamics(league_id);
        }

        refreshDynamics(league_id) {
          if (!this.leagueMgr || !this.gen || !this.view_root) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Init failed!");
            return;
          }

          this.view_root.removeAllChildren();
          this.dynamic_page_map.clear();
          let dynamics = this.leagueMgr.getLeagueDynamicsById(league_id)["dynamics"];
          let new_page = null;

          for (let i = 0; i < dynamics.length; i++) {
            if (i % 8 == 0) {
              // 一页8条动态
              new_page = this.gen.generator(this.view_root, "Dynamics");

              if (new_page && i / 8 > 0) {
                new_page.active = false;
              } // 除了第一页都失活，实现默认显示第一页


              if (!new_page) {
                break;
              }

              this.dynamic_page_map.set(Math.floor(i / 8) + 1, new_page); // 根据页码保存
            }

            if (!new_page) {
              break;
            }

            this.createDynamic(new_page, dynamics[i]);
          }

          if (this.dynamic_page_map.size > 0) {
            let first_page = this.dynamic_page_map.get(1);

            if (first_page) {
              this.current_page = first_page;
            }
          } else {
            new_page = this.gen.generator(this.view_root, "Dynamics");

            if (new_page) {
              this.dynamic_page_map.set(1, new_page);
              this.current_page = new_page;
            }
          }

          if (this.page_num_box) {
            this.max_page = this.dynamic_page_map.size;
            this.max_page = this.max_page > 0 ? this.max_page : 1;
            this.page_num = 1;
            this.page_num_box.string = this.page_num.toString() + "/" + this.max_page.toString();
          }
        }

        createDynamic(parent, info) {
          var _new_dynamic$getChild, _new_dynamic$getChild2;

          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          let new_dynamic = this.gen.generator(parent, "League_Dynamic");

          if (!new_dynamic) {
            return;
          }

          let content = (_new_dynamic$getChild = new_dynamic.getChildByPath("Mask/Content")) === null || _new_dynamic$getChild === void 0 ? void 0 : _new_dynamic$getChild.getComponent(Label);
          let time = (_new_dynamic$getChild2 = new_dynamic.getChildByName("Timestamp")) === null || _new_dynamic$getChild2 === void 0 ? void 0 : _new_dynamic$getChild2.getComponent(Label);

          if (!content || !time) {
            return;
          }

          content.string = info["content"];
          time.string = info["time"];
        }

        turnToPage(page_num, isNext) {
          if (page_num > 0) {
            if (page_num === this.page_num) {
              return;
            }

            page_num = page_num > this.max_page ? this.max_page : page_num;
          } else if (isNext) {
            if (this.page_num >= this.max_page) {
              return;
            }

            page_num = this.page_num + 1;
          } else {
            if (this.page_num <= 1) {
              return;
            }

            page_num = this.page_num - 1;
          }

          let page = this.dynamic_page_map.get(page_num);

          if (!page) {
            return;
          }

          this.page_num = page_num;

          if (this.page_num_box) {
            this.page_num_box.string = this.page_num.toString() + "/" + this.max_page.toString();
          }

          if (this.current_page) {
            this.current_page.active = false;
          }

          this.current_page = page;
          this.current_page.active = true;
          return;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DynamicList.js.map