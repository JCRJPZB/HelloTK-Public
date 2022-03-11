System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Subscribe, _dec, _class, _temp, _crd, ccclass, property, MailTitle;

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b88d9R37aVPiKqhKu1UfKPv", "MailTitle", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MailTitle", MailTitle = (_dec = ccclass('MailTitle'), _dec(_class = (_temp = class MailTitle extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "title_lbl", null);

          _defineProperty(this, "isUnRead", null);

          _defineProperty(this, "hasAnnex", null);
        }

        init(info, callback) {
          var _this$node$getChildBy;

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("read mail", info["mail_id"], id => {
            if (this.isUnRead && id == info["mail_id"]) {
              this.isUnRead.active = false;
            }
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("collect annex", info["mail_id"], id => {
            if (this.hasAnnex && id == info["mail_id"]) {
              this.hasAnnex.active = false;
            }
          });
          this.title_lbl = (_this$node$getChildBy = this.node.getChildByName("Label")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Label);
          this.isUnRead = this.node.getChildByName("IsUnRead");
          this.hasAnnex = this.node.getChildByName("HasAnnex");

          if (this.title_lbl) {
            this.title_lbl.string = info["mail_title"];
          }

          if (this.isUnRead) {
            this.isUnRead.active = info["isUnRead"];
          }

          if (this.hasAnnex && info["hasAnnex"]) {
            this.hasAnnex.active = !info["collected"];
          }

          this.node.on("click", () => {
            if (this.isUnRead) {
              this.isUnRead.active = false;
            }

            callback();
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MailTitle.js.map