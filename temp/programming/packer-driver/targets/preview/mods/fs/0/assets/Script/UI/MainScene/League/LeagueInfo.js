System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PlayerMgr, ImgMgr, Subscribe, UIBase, LeagueMgr, _dec, _class, _temp, _crd, ccclass, property, LeagueInfo;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../../Player/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "../../../Tools/ImgMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      PlayerMgr = _unresolved_2.PlayerMgr;
    }, function (_unresolved_3) {
      ImgMgr = _unresolved_3.ImgMgr;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }, function (_unresolved_5) {
      UIBase = _unresolved_5.UIBase;
    }, function (_unresolved_6) {
      LeagueMgr = _unresolved_6.LeagueMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b80cMtakhGCr4fUHl680BO", "LeagueInfo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LeagueInfo", LeagueInfo = (_dec = ccclass('LeagueInfo'), _dec(_class = (_temp = class LeagueInfo extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "leagueMgr", null);

          _defineProperty(this, "playerMgr", null);

          _defineProperty(this, "league_id", "");

          _defineProperty(this, "league_name", null);

          _defineProperty(this, "lord", null);

          _defineProperty(this, "lord_pid", "");

          _defineProperty(this, "land", null);

          _defineProperty(this, "numOfMember", null);

          _defineProperty(this, "league_flag", null);

          _defineProperty(this, "describe_box", null);

          _defineProperty(this, "describe_lbl", null);
        }

        onInit() {
          var _this$describe_box;

          this.addBtnEvent();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("refresh league info", this.name, this.refreshInfo, this);
          this.leagueMgr = (_crd && LeagueMgr === void 0 ? (_reportPossibleCrUseOfLeagueMgr({
            error: Error()
          }), LeagueMgr) : LeagueMgr).getInstance();
          this.playerMgr = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance();
          this.league_name = this.getComp("Name", "Label");
          this.lord = this.getComp("Lord", "Label");
          this.land = this.getComp("Land", "Label");
          this.numOfMember = this.getComp("NumOfMember", "Label");
          this.league_flag = this.getComp("Detail_Flag", "Sprite");
          this.describe_box = this.getComp("Describe_Editor", "EditBox");
          this.describe_lbl = this.getComp("Describe_Label", "Label");
          (_this$describe_box = this.describe_box) === null || _this$describe_box === void 0 ? void 0 : _this$describe_box.node.on("editing-did-ended", this.changeDescribe, this);
        }

        onOpen() {
          if (!this.playerMgr) {
            this.playerMgr = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance();
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("open UI", "DynamicList", "Window", this.playerMgr.getPlayerInfo("league_id"));
          this.refreshInfo(this.playerMgr.getPlayerInfo("league_id"));
          var pid = this.playerMgr.getPlayerInfo("pid");

          if (pid === this.lord_pid && this.describe_lbl && this.describe_box) {
            this.describe_box.node.active = true;
            this.describe_lbl.node.active = false;
          }
        }

        onClose() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("close UI", "DynamicList", "Window");
        }

        refreshInfo(league_id) {
          if (!this.leagueMgr) {
            this.leagueMgr = (_crd && LeagueMgr === void 0 ? (_reportPossibleCrUseOfLeagueMgr({
              error: Error()
            }), LeagueMgr) : LeagueMgr).getInstance();
          }

          var info = this.leagueMgr.getLeagueInfoById(league_id);
          this.league_id = league_id;

          if (this.league_name && info["league_name"]) {
            this.league_name.string = info["league_name"];
          }

          if (this.lord && info["lord_name"]) {
            this.lord.string = info["lord_name"];
          }

          this.lord_pid = info["lord_pid"];

          if (this.land && info["land"]) {
            this.land.string = info["land"];
          }

          if (this.numOfMember && info["num_of_member"] && info["max_member"]) {
            var num_of_member = info["num_of_member"] + '/' + info["max_member"];
            this.numOfMember.string = num_of_member;
          }

          if (this.league_flag && info["flag"]) {
            var spf = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
              error: Error()
            }), ImgMgr) : ImgMgr).getInstance().getImg(info["flag"]);

            if (spf) {
              this.league_flag.spriteFrame = spf;
            }
          }

          if (this.describe_box && info["describe"]) {
            this.describe_box.string = info["describe"];
          }

          if (this.describe_lbl && info["describe"]) {
            this.describe_lbl.string = info["describe"];
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("refresh dynamics", this.league_id);
        }

        changeDescribe(box) {// ########################
          // 将新的联盟描述上传到服务器
          // ########################
        }

        addBtnEvent() {
          this.addClickEvent("Shop", this.shop, this);
          this.addClickEvent("Tasks", this.tasks, this);
          this.addClickEvent("Battle", this.battle, this);
          this.addClickEvent("Member", this.member, this);
          this.addClickEvent("Contribution", this.contribution, this);
          this.addClickEvent("Leave", this.leaveLeague, this);
        }

        shop() {
          console.log("shop");
        }

        tasks() {
          console.log("tasks");
        }

        battle() {
          console.log("battle");
        }

        member() {
          console.log("member");
        }

        contribution() {
          console.log("contribution");
        }

        leaveLeague() {
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().leaveLeague();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("close UI", "LeagueInfo", "Window");
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("open UI", "LeagueList", "Window");
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LeagueInfo.js.map