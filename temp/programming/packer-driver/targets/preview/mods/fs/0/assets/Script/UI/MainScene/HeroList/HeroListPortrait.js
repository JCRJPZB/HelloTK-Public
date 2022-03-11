System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, Label, ImgMgr, Subscribe, _dec, _class, _temp, _crd, ccclass, property, HeroListPortrait;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "../../../Tools/ImgMgr", _context.meta, extras);
  }

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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ImgMgr = _unresolved_2.ImgMgr;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1601c4wnGJB4ZeWkauHkTwx", "HeroListPortrait", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroListPortrait", HeroListPortrait = (_dec = ccclass('HeroListPortrait'), _dec(_class = (_temp = class HeroListPortrait extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "imgMgr", null);

          _defineProperty(this, "sp", null);

          _defineProperty(this, "name_lbl", null);

          _defineProperty(this, "isSelect", null);
        }

        init(data) {
          var _this$node$getChildBy, _this$node$getChildBy2;

          this.imgMgr = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
            error: Error()
          }), ImgMgr) : ImgMgr).getInstance();
          this.sp = (_this$node$getChildBy = this.node.getChildByName("Sprite")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Sprite);
          this.name_lbl = (_this$node$getChildBy2 = this.node.getChildByName("Label")) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(Label);
          this.isSelect = this.node.getChildByName("IsSelect");

          if (this.sp) {
            this.sp.spriteFrame = this.imgMgr.getImg(data["hero_id"]);
          }

          if (this.name_lbl) {
            this.name_lbl.string = data["name"];
          }

          if (this.isSelect) {
            this.isSelect.active = false;
          }

          this.node.on("click", () => {
            var _this$isSelect;

            if (((_this$isSelect = this.isSelect) === null || _this$isSelect === void 0 ? void 0 : _this$isSelect.active) === true) {
              return;
            }

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("change check hero in list", data["id"]);
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change check hero in list", this.node.uuid, id => {
            if (this.isSelect) {
              if (id != data["id"]) {
                this.isSelect.active = false;
              } else {
                this.isSelect.active = true;
              }
            }
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HeroListPortrait.js.map