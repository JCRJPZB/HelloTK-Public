System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, v3, PlayerMgr, ImgMgr, Subscribe, _dec, _class, _temp, _crd, ccclass, property, LeagueJoin;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      PlayerMgr = _unresolved_2.PlayerMgr;
    }, function (_unresolved_3) {
      ImgMgr = _unresolved_3.ImgMgr;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee3b5TqIC1GSIcKwB50YjAR", "LeagueJoin", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LeagueJoin", LeagueJoin = (_dec = ccclass('LeagueJoin'), _dec(_class = (_temp = class LeagueJoin extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "league_id", "");

          _defineProperty(this, "conf", null);

          _defineProperty(this, "flag", void 0);

          _defineProperty(this, "league_name", void 0);

          _defineProperty(this, "describe", void 0);

          _defineProperty(this, "member", void 0);

          _defineProperty(this, "join_btn", null);
        }

        onLoad() {
          var _layout$getChildByPat, _layout$getChildByPat2, _layout$getChildByPat3, _layout$getChildByPat4, _this$join_btn;

          var layout = this.node.getChildByName("Join_Layout");

          if (!layout) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find node named \'Join_Layout\'");
            return;
          }

          this.flag = (_layout$getChildByPat = layout.getChildByPath("Join_Flag")) === null || _layout$getChildByPat === void 0 ? void 0 : _layout$getChildByPat.getComponent(Sprite);
          this.league_name = (_layout$getChildByPat2 = layout.getChildByPath("Join_Name")) === null || _layout$getChildByPat2 === void 0 ? void 0 : _layout$getChildByPat2.getComponent(Label);
          this.describe = (_layout$getChildByPat3 = layout.getChildByPath("Join_Describe")) === null || _layout$getChildByPat3 === void 0 ? void 0 : _layout$getChildByPat3.getComponent(Label);
          this.member = (_layout$getChildByPat4 = layout.getChildByPath("Join_Member")) === null || _layout$getChildByPat4 === void 0 ? void 0 : _layout$getChildByPat4.getComponent(Label);
          this.join_btn = layout.getChildByPath("Join_Btn");
          (_this$join_btn = this.join_btn) === null || _this$join_btn === void 0 ? void 0 : _this$join_btn.on("click", () => {
            if (this.conf && this.conf["num_of_member"] < this.conf["max_member"]) {
              (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
                error: Error()
              }), PlayerMgr) : PlayerMgr).getInstance().joinLeague(this.league_id);
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("open UI", "LeagueInfo", "Window");
            } else if (this.conf && this.join_btn) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert UI", "该联盟已满员！", this.join_btn, v3(-50, 0, 0));
            }
          });
        }

        init(conf) {
          this.conf = conf;
          this.league_id = conf["league_id"];

          if (!this.flag || !this.league_name || !this.describe || !this.member || !this.join_btn) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Node has not been inited yet!");
          }

          if (this.flag) {
            this.flag.spriteFrame = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
              error: Error()
            }), ImgMgr) : ImgMgr).getInstance().getImg(conf["flag"]);

            if (!this.flag.spriteFrame) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("log err", "Can't find image named \'" + conf["flag"] + "\'");
            }
          }

          if (this.league_name) {
            this.league_name.string = conf["league_name"];
          }

          if (this.describe) {
            this.describe.string = conf["describe"];
          }

          if (this.member) {
            this.member.string = conf["num_of_member"].toString() + "/" + conf["max_member"].toString();
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LeagueJoin.js.map