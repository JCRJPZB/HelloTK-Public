System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, InventoryMgr, Generator, ImgMgr, MoveCamera, Subscribe, _dec, _class, _temp, _crd, ccclass, property, GameMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfInventoryMgr(extras) {
    _reporterNs.report("InventoryMgr", "../UI/MainScene/Inventory/InventoryMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "./Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "./ImgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveCamera(extras) {
    _reporterNs.report("MoveCamera", "./MoveCamera", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      InventoryMgr = _unresolved_2.InventoryMgr;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      ImgMgr = _unresolved_4.ImgMgr;
    }, function (_unresolved_5) {
      MoveCamera = _unresolved_5.MoveCamera;
    }, function (_unresolved_6) {
      Subscribe = _unresolved_6.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "279517QfXNMg4C3xbah+L+g", "GameMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameMgr", GameMgr = (_dec = ccclass('GameMgr'), _dec(_class = (_temp = class GameMgr extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "is_img_ready", false);

          _defineProperty(this, "is_gen_ready", false);
        }

        onLoad() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("bundle loaded", this.name, () => {
            // #############################
            (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance(); // #

            (_crd && MoveCamera === void 0 ? (_reportPossibleCrUseOfMoveCamera({
              error: Error()
            }), MoveCamera) : MoveCamera).getInstance(); // #

            (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
              error: Error()
            }), ImgMgr) : ImgMgr).getInstance(); // #

            (_crd && InventoryMgr === void 0 ? (_reportPossibleCrUseOfInventoryMgr({
              error: Error()
            }), InventoryMgr) : InventoryMgr).getInstance(); // #
            // #############################
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("ImgMgr ready", this.name, () => {
            this.is_img_ready = true;

            if (this.is_gen_ready) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("game start");
            }
          }, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("Generator ready", this.name, () => {
            this.is_gen_ready = true;

            if (this.is_img_ready) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("game start");
            }
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("pause", this.name, () => {
            director.pause();
          }); // 暂停游戏

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("resume", this.name, () => {
            director.resume();
          }); // 恢复游戏
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameMgr.js.map