System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, UIBase, _dec, _class, _temp, _crd, ccclass, property, Task;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIBase = _unresolved_2.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b773c1pIdEv7TZT6zQISAF", "Task", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Task", Task = (_dec = ccclass('Task'), _dec(_class = (_temp = class Task extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "describe_lbl", void 0);

          _defineProperty(this, "progressBar", void 0);

          _defineProperty(this, "reward_root", void 0);
        }

        init_task(conf) {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Task.js.map