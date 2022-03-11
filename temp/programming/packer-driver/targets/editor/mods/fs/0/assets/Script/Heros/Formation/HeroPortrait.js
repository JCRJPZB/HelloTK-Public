System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Sprite, ImgMgr, Subscribe, _dec, _class, _temp, _crd, ccclass, property, HeroPortrait;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "../../Tools/ImgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ImgMgr = _unresolved_2.ImgMgr;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3bcafz2LplDxJOtLiXDg9si", "HeroPortrait", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroPortrait", HeroPortrait = (_dec = ccclass('HeroPortrait'), _dec(_class = (_temp = class HeroPortrait extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "id", "");

          _defineProperty(this, "unselected", null);

          _defineProperty(this, "selected", null);

          _defineProperty(this, "select_trigger", null);

          _defineProperty(this, "is_select", false);

          _defineProperty(this, "portrait", null);

          _defineProperty(this, "name_lbl", null);

          _defineProperty(this, "lv_lbl", null);

          _defineProperty(this, "sp_trigger", null);

          _defineProperty(this, "sp_disable", null);

          _defineProperty(this, "sp_enable", null);

          _defineProperty(this, "is_sp", false);
        }

        // 是否是常用标志
        onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2, _this$node$getChildBy3, _this$sp_trigger, _this$sp_trigger2;

          // 获取组件、节点
          this.unselected = this.node.getChildByName("Border_unselected");
          this.selected = this.node.getChildByName("Border_selected");
          this.select_trigger = this.node.getChildByName("Select_trigger");
          this.portrait = (_this$node$getChildBy = this.node.getChildByName("Portrait")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Sprite);
          this.name_lbl = (_this$node$getChildBy2 = this.node.getChildByName("Name")) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(Label);
          this.lv_lbl = (_this$node$getChildBy3 = this.node.getChildByName("Lv_Label")) === null || _this$node$getChildBy3 === void 0 ? void 0 : _this$node$getChildBy3.getComponent(Label);
          this.sp_trigger = this.node.getChildByName("Sp_trigger");
          this.sp_disable = (_this$sp_trigger = this.sp_trigger) === null || _this$sp_trigger === void 0 ? void 0 : _this$sp_trigger.getChildByName("Sp_disable");
          this.sp_enable = (_this$sp_trigger2 = this.sp_trigger) === null || _this$sp_trigger2 === void 0 ? void 0 : _this$sp_trigger2.getChildByName("Sp_enable");
        }

        init(conf) {
          this.id = conf["id"]; // 设置id

          this.is_select = conf["is_select"]; // 获取被编队选中状态

          if (this.selected && this.unselected) {
            this.selected.active = this.is_select;
            this.unselected.active = !this.is_select;
          }

          if (this.select_trigger) {
            this.select_trigger.on("click", () => {
              // 触发选中，发射选中消息
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("change hero selected", this.id, this.is_select, this.changeSelected.bind(this));
            });
          }

          if (this.name_lbl) {
            this.name_lbl.string = conf["name"];
          } // 显示武将名称


          if (this.lv_lbl) {
            this.lv_lbl.string = "Lv." + conf["level"];
          } // 显示武将等级


          this.is_sp = conf["is_sp"]; // 设置常用状态

          if (this.sp_disable && this.sp_enable && this.sp_trigger) {
            this.sp_trigger.on("click", this.changeSphero, this); // 触发取消/设为常用，发射消息

            this.sp_disable.active = !this.is_sp; // 修改常用标记

            this.sp_enable.active = this.is_sp;
          }

          if (this.portrait) this.portrait.spriteFrame = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
            error: Error()
          }), ImgMgr) : ImgMgr).getInstance().getImg(conf["hero_id"]); // 显示武将头像
        }

        changeSelected() {
          // 修改被编队选中的状态
          if (this.selected && this.unselected) {
            this.is_select = !this.is_select;
            this.selected.active = this.is_select;
            this.unselected.active = !this.is_select;
          }
        }

        changeSphero() {
          // 修改常用状态
          if (this.sp_disable && this.sp_enable) {
            this.is_sp = !this.is_sp;
            this.sp_disable.active = !this.is_sp;
            this.sp_enable.active = this.is_sp;
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("changeSpHero", this.id, this.is_sp);
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HeroPortrait.js.map