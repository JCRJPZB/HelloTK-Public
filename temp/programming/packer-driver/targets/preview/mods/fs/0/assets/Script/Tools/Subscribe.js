System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, Subscribe;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7475SI+L5ApZlKzyrWBCg8", "Subscribe", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Subscribe", Subscribe = (_dec = ccclass('Subscribe'), _dec(_class = (_temp = _class2 = class Subscribe extends Component {
        // ############
        //   添加监听
        // ############
        static listen(key, script, func, target) {
          // func 传入之前可能需要 bind()
          var map = new Map();

          if (this.client_map.has(key)) {
            map = this.client_map.get(key);
          }

          if (map) {
            if (target) {
              func = func.bind(target);
            }

            map.set(script, func);
            this.client_map.set(key, map);
            return true;
          } else {
            return false;
          }
        } // ############
        //   触发消息
        // ############


        static trigger(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var map = this.client_map.get(key);

          if (!map) {
            return false;
          }

          map.forEach(func => {
            func.apply(func, args);
          });
        } // ############
        //   移除监听
        // ############


        static remove(key, script) {
          var map = this.client_map.get(key);

          if (!map) {
            return false;
          }

          if (!script) {
            this.client_map.delete(key);
            return true;
          }

          map.delete(script);
          return true;
        } // ############
        //   清空列表
        // ############


        static reset() {
          this.client_map.clear();
        }

      }, _defineProperty(_class2, "client_map", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Subscribe.js.map