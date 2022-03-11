System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, LeagueMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cf41yCaT9CtbuRt341GKTn", "LeagueMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LeagueMgr", LeagueMgr = (_dec = ccclass('LeagueMgr'), _dec(_class = (_temp = _class2 = class LeagueMgr extends Component {
        // ###########################
        // ###########################
        constructor(name) {
          super(name);

          _defineProperty(this, "info_list", []);

          _defineProperty(this, "info_map", new Map());

          _defineProperty(this, "dynamic_map", new Map());

          _defineProperty(this, "shop_list_map", new Map());

          _defineProperty(this, "test_data_league_dynamics", [{
            "league_id": "1000001",
            "dynamics": [{
              "dynamic_id": "001",
              "content": "欢迎 “路人甲” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }, {
              "dynamic_id": "002",
              "content": "欢迎 “路人丙” 加入七星盟！",
              "time": "2021-01-01"
            }, {
              "dynamic_id": "003",
              "content": "“路人乙” 退出七星盟。",
              "time": "2021-01-02"
            }, {
              "dynamic_id": "004",
              "content": "“该用户已被封禁” 被请离七星盟。",
              "time": "2021-01-05"
            }]
          }, {
            "league_id": "1000002",
            "dynamics": []
          }, {
            "league_id": "1000003",
            "dynamics": []
          }, {
            "league_id": "1000004",
            "dynamics": []
          }, {
            "league_id": "1000005",
            "dynamics": []
          }, {
            "league_id": "1000006",
            "dynamics": []
          }, {
            "league_id": "1000007",
            "dynamics": []
          }, {
            "league_id": "1000008",
            "dynamics": []
          }, {
            "league_id": "1000009",
            "dynamics": []
          }, {
            "league_id": "1000010",
            "dynamics": []
          }, {
            "league_id": "1000011",
            "dynamics": []
          }, {
            "league_id": "1000012",
            "dynamics": []
          }]);

          _defineProperty(this, "test_data_league_list", [{
            "league_id": "1000001",
            "league_name": "七星盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "本服最强盟，入盟+V12345678审核。周贡不足350清人。"
          }, {
            "league_id": "1000002",
            "league_name": "002盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "002Test"
          }, {
            "league_id": "1000003",
            "league_name": "003盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "003Test"
          }, {
            "league_id": "1000004",
            "league_name": "004盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "004Test"
          }, {
            "league_id": "1000005",
            "league_name": "005盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "005Test"
          }, {
            "league_id": "1000006",
            "league_name": "006盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "006Test"
          }, {
            "league_id": "1000007",
            "league_name": "007盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "007Test"
          }, {
            "league_id": "1000008",
            "league_name": "008盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "008Test"
          }, {
            "league_id": "1000009",
            "league_name": "009盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "009Test"
          }, {
            "league_id": "1000010",
            "league_name": "010盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "010Test"
          }, {
            "league_id": "1000011",
            "league_name": "011盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "011Test"
          }, {
            "league_id": "1000012",
            "league_name": "012盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "012Test"
          }]);

          _defineProperty(this, "test_data_shop_list", [{
            "league_id": "1000001",
            "items": [{
              "item_id": "10001",
              "currency": "coin",
              "price": 1000,
              "reserve": 100
            }, {
              "item_id": "10002",
              "currency": "diamond",
              "price": 10,
              "reserve": 20
            }, {
              "item_id": "10003",
              "currency": "coin",
              "price": 500,
              "reserve": 50
            }]
          }]);

          this.info_list = this.loadLeagueList();
          this.info_list.forEach(info => {
            this.info_map.set(info["league_id"], info);
          });
          let dynamics = this.loadDynamics();
          dynamics.forEach(dynamic => {
            this.dynamic_map.set(dynamic["league_id"], dynamic);
          });
          let shop_list = this.loadShopList();
          shop_list.forEach(shop => {
            this.shop_list_map.set(shop["league_id"], shop);
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("player join league", this.name, (league_id, pid) => {
            // ####################################
            //      更新消息至服务器 这里先手动改   #
            // ####################################
            let info = this.info_map.get(league_id); // Map中存放的是引用不是深拷贝的对象，所以修改Map中的元素，原数组中的元素也会对应修改

            if (!info) {
              return;
            }

            info["num_of_member"]++;
            info["member_list"].push(pid);
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("player leave league", this.name, (league_id, pid) => {
            // ####################################
            //      更新消息至服务器 这里先手动改   #
            // ####################################
            let info = this.info_map.get(league_id);

            if (!info) {
              return;
            }

            info["num_of_member"]--;
            let member_list = info["member_list"];
            let idx = member_list.indexOf(pid);
            member_list.splice(idx, 1);
          });
        }

        static getInstance() {
          if (!LeagueMgr.ist) {
            LeagueMgr.ist = new LeagueMgr("LeagueMgr");
          }

          return LeagueMgr.ist;
        }

        loadLeagueList() {
          // ####################################
          return this.test_data_league_list; // #
          // ####################################
        }

        loadDynamics() {
          // ########################################
          return this.test_data_league_dynamics; // #
          // ########################################
        }

        loadShopList() {
          // ##################################
          return this.test_data_shop_list; // #
          // ##################################
        }

        getLeagueList() {
          return this.info_list;
        }

        getLeagueInfoById(league_id) {
          if (this.info_map.has(league_id)) {
            return this.info_map.get(league_id);
          }

          return null;
        }

        getLeagueDynamicsById(league_id) {
          if (this.dynamic_map.has(league_id)) {
            return this.dynamic_map.get(league_id);
          }

          return null;
        }

        getLeagueShopListById(league_id) {
          if (this.shop_list_map.has(league_id)) {
            return this.shop_list_map.get(league_id);
          }

          return null;
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LeagueMgr.js.map