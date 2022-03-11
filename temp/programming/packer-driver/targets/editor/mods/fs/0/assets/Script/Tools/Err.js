System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, game, Component, Subscribe, _dec, _class, _crd, ccclass, property, Err;

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "./Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      game = _cc.game;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "620e1qmxXFJFZjtu82dIEUg", "Err", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Err", Err = (_dec = ccclass('Err'), _dec(_class = class Err extends Component {
        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("log err", this.name, this.console, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("print err", this.name, this.print, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("alert err", this.name, this.alert, this);
        }

        console(err) {
          try {
            throw new Error(err);
          } catch (e) {
            console.error(e);
          }
        }

        alert(err) {
          this.console(err);
          this.stopGame();
        }

        print(err) {
          this.console(err);
          this.stopGame();
        }

        stopGame() {
          // Stop and exit game;
          // game.end();
          game.pause();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Err.js.map