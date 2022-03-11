System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Subscribe, UIBase, _dec, _class, _crd, ccclass, property, MainPage;

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../UIBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }, function (_unresolved_3) {
      UIBase = _unresolved_3.UIBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "678cb2U5lhPub3OYeS2rQu2", "MainPage", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainPage", MainPage = (_dec = ccclass('MainPage'), _dec(_class = class MainPage extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        onInit() {
          this.addBtnEvent();
        }

        addBtnEvent() {
          let root = this.getNode("Option_Btns_Root");

          if (!root) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Can't find node named \'Btns_Root\' !");
          } else {
            let btns = root.children;
            btns.forEach(btn => {
              if (btn.name === "Expedition") {
                this.addClickEvent(btn.name, () => {
                  (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                    error: Error()
                  }), Subscribe) : Subscribe).trigger("show Expedition");
                });
                return;
              }

              this.addClickEvent(btn.name, () => {
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("open UI", btn.name, "Page");
              });
            });
          }

          this.addClickEvent("WorldMap", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("open UI", "WorldMap", "Page");
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainPage.js.map