System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Functions, _dec, _class, _class2, _temp, _crd, ccclass, property, MonsterMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../../Tools/Configure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../Tools/Functions", _context.meta, extras);
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
      Functions = _unresolved_3.Functions;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d09ebAU+pGA4ocl2FaVvI5", "MonsterMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterMgr", MonsterMgr = (_dec = ccclass('MonsterMgr'), _dec(_class = (_temp = _class2 = class MonsterMgr extends Component {
        constructor(name) {
          super(name);

          _defineProperty(this, "conf", void 0);

          _defineProperty(this, "conf_map", new Map());

          this.conf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("monsters");

          if (this.conf) {
            this.conf["monsters"].forEach(mst => {
              // 初始化时读取怪物配置
              this.conf_map.set(mst["id"], mst);
            });
          }
        }

        static getInstance() {
          if (!MonsterMgr.ist) {
            MonsterMgr.ist = new MonsterMgr("MonsterMgr");
          }

          return MonsterMgr.ist;
        }

        getMonsterAttr(data) {
          let conf = (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).deepCopy(this.conf_map.get(data["mst_id"]));

          if (!conf) {
            return null;
          }

          conf["hp"] = conf["base_hp"] + data["lv"] * conf["grow_rate"]["hp"]; // 根据实际关卡数据以及配置计算怪物数值

          conf["atk"] = conf["base_atk"] + data["lv"] * conf["grow_rate"]["atk"];
          conf["def"] = conf["base_def"] + data["lv"] * conf["grow_rate"]["def"];
          conf["pos"] = JSON.parse(JSON.stringify(data["pos"]));
          conf["id"] = JSON.parse(JSON.stringify(data["id"])); // 注意怪物的种类ID与实际场上怪物的ID之区别

          return conf;
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MonsterMgr.js.map