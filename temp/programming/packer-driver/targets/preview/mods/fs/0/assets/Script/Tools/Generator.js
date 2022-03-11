System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, ResMgr, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, Generator;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "./Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1bdbLZqfJGYpKF+oDpiY/3", "Generator", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Generator", Generator = (_dec = ccclass('Generator'), _dec(_class = (_temp = _class2 = class Generator extends Component {
        static getInstance() {
          if (!Generator.ist) {
            Generator.ist = new Generator("Generator");
          }

          return Generator.ist;
        }

        constructor(name) {
          super(name);

          _defineProperty(this, "prefab_map", new Map());

          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).loadDir("Prefab", "/", Prefab, prefabs => {
            // 加载全部预制体
            if (prefabs.length < 1) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "No prefabs");
              return;
            }

            prefabs.forEach(p => {
              this.prefab_map.set(p.data._name, p);
            }); // 用预制体名作key，写配置需注意重名

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("Generator ready");
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("Generator prefab", this.name, this.generator, this);
        }

        generator(parent, name, pos) {
          // parent: 父节点， name: 预制体名称
          var new_node = this.getObject(name);

          if (!new_node) {
            return null;
          }

          new_node.parent = parent; // 放入父节点

          if (pos) {
            new_node.setPosition(pos);
          } // 设置位置


          return new_node;
        }

        getObject(name) {
          // 获取预制体实例化对象
          var prefab = this.prefab_map.get(name);

          if (!prefab) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Prefab \'" + name + "\' doesn't exist.");
            return null;
          }

          return instantiate(prefab);
        }

      }, _defineProperty(_class2, "ist", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Generator.js.map