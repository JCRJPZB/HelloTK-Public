System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, PlayerMgr;

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
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4588ARIKZEobNL80+5l7i5", "PlayerMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerMgr", PlayerMgr = (_dec = ccclass('PlayerMgr'), _dec(_class = (_temp = _class2 = class PlayerMgr extends Component {
        // #############################################
        // #############################################
        constructor(name) {
          super(name);

          _defineProperty(this, "player_info", null);

          _defineProperty(this, "player_list", []);

          _defineProperty(this, "player_map", new Map());

          _defineProperty(this, "test_data_player_info", {
            "pid": "22389299",
            "pname": "紫冰",
            "league_id": null,
            //"1000001",
            "items": ["10001", "10002", "10003"]
          });

          _defineProperty(this, "test_data_player_list", [{
            "pid": "22389299",
            "pname": "紫冰",
            "league_id": "1000001",
            "items": ["10001", "10002", "10003"]
          }, {
            "pid": "36279225",
            "pname": "测试账号",
            "league_id": null,
            "items": []
          }, {
            "pid": "10000001",
            "pname": "《HelloTK》官方",
            "league_id": "1000001",
            "items": []
          }]);

          this.player_info = this.getPlayer();
          this.player_list = this.getPlayerList();
          this.player_list.forEach(player => {
            this.player_map.set(player["pid"], player);
          });
        }

        static getInstance() {
          if (!PlayerMgr.ist) {
            PlayerMgr.ist = new PlayerMgr("PlayerMgr");
          }

          return PlayerMgr.ist;
        }

        getPlayerAllInfo() {
          return this.player_info;
        }

        getPlayerInfo(info_id) {
          return this.player_info[info_id];
        }

        getPlayerAllInfoById(pid) {
          if (!this.player_map.has(pid)) {
            return null;
          }

          return this.player_map.get(pid);
        }

        getPlayerInfoById(pid, info) {
          if (!this.player_map.has(pid)) {
            return null;
          }

          return this.player_map.get(pid)[info];
        }

        leaveLeague() {
          if (!this.player_info["league_id"]) {
            return;
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("player leave league", this.player_info["league_id"], this.player_info["pid"]);
          this.player_info["league_id"] = null;
          this.updateInfo();
        }

        joinLeague(league_id) {
          if (this.player_info["league_id"]) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "已加入其它联盟!");
            return;
          }

          this.player_info["league_id"] = league_id;
          this.updateInfo();
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("player join league", league_id, this.player_info["pid"]);
        }

        updateInfo() {// #########################
          //     上传更新玩家信息     #
          // #########################
        }

        getPlayerList() {
          // ####################################
          return this.test_data_player_list; // #
          // ####################################
        }

        getPlayer() {
          // ####################################
          return this.test_data_player_info; // #
          // ####################################
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerMgr.js.map