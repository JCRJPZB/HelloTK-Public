System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Functions, Generator, Subscribe, UIBase, LeagueJoin, LeagueMgr, _dec, _class, _temp, _crd, ccclass, property, LeagueList;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../../Tools/Functions", _context.meta, extras);
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

  function _reportPossibleCrUseOfLeagueJoin(extras) {
    _reporterNs.report("LeagueJoin", "./LeagueJoin", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Functions = _unresolved_2.Functions;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }, function (_unresolved_5) {
      UIBase = _unresolved_5.UIBase;
    }, function (_unresolved_6) {
      LeagueJoin = _unresolved_6.LeagueJoin;
    }, function (_unresolved_7) {
      LeagueMgr = _unresolved_7.LeagueMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32de7ba8I5O7pl8Ez+J0oK5", "LeagueList", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LeagueList", LeagueList = (_dec = ccclass('LeagueList'), _dec(_class = (_temp = class LeagueList extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "list_root", void 0);

          _defineProperty(this, "leagueMgr", void 0);

          _defineProperty(this, "gen", void 0);
        }

        onInit() {
          this.leagueMgr = (_crd && LeagueMgr === void 0 ? (_reportPossibleCrUseOfLeagueMgr({
            error: Error()
          }), LeagueMgr) : LeagueMgr).getInstance();
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.list_root = this.getNode("List_Content");
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("player join league", this.name, (league_id, pid) => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("close UI", "LeagueList", "Window");
          });
        }

        onOpen() {
          this.refreshList();
        }

        refreshList() {
          var _this$list_root;

          if (!this.leagueMgr) {
            this.leagueMgr = (_crd && LeagueMgr === void 0 ? (_reportPossibleCrUseOfLeagueMgr({
              error: Error()
            }), LeagueMgr) : LeagueMgr).getInstance();
          }

          let league_list = this.leagueMgr.getLeagueList();

          if (!league_list || league_list.length < 1) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Get league list failed!");
          }

          (_this$list_root = this.list_root) === null || _this$list_root === void 0 ? void 0 : _this$list_root.removeAllChildren();
          let display_list = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).randomFromArray(league_list, 10);
          display_list.forEach(league => {
            if (!this.gen || !this.list_root) {
              this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
                error: Error()
              }), Generator) : Generator).getInstance();
              this.list_root = this.getNode("List_Content");
            }

            if (!this.list_root) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can't find node named \'List_Content\'.");
              return;
            }

            let league_node = this.gen.generator(this.list_root, "League_Join");
            let ctrl = league_node === null || league_node === void 0 ? void 0 : league_node.getComponent(_crd && LeagueJoin === void 0 ? (_reportPossibleCrUseOfLeagueJoin({
              error: Error()
            }), LeagueJoin) : LeagueJoin);

            if (!ctrl) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can't find comp named \'LeagueJoin\'.");
              return;
            }

            ctrl.init(league);
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LeagueList.js.map