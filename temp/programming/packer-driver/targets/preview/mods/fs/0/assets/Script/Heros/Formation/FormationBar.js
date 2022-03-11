System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Subscribe, _dec, _class, _temp, _crd, ccclass, property, FormationBar;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f52116IUS1KzYfLVai/n5XV", "FormationBar", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FormationBar", FormationBar = (_dec = ccclass('FormationBar'), _dec(_class = (_temp = class FormationBar extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "name_lbl", null);

          _defineProperty(this, "intro_lbl", null);

          _defineProperty(this, "trigger", null);

          _defineProperty(this, "point_dis", null);

          _defineProperty(this, "point_en", null);

          _defineProperty(this, "isEnable", false);
        }

        // 是否激活flag
        onLoad() {
          var _this$node$getChildBy, _this$node$getChildBy2;

          // 获取各个组件
          this.name_lbl = (_this$node$getChildBy = this.node.getChildByPath("Mask/Layout/Name")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Label);
          this.intro_lbl = (_this$node$getChildBy2 = this.node.getChildByPath("Mask/Layout/Introduce")) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getComponent(Label);
          this.trigger = this.node.getChildByName("Trigger");
          this.point_dis = this.node.getChildByName("Disable");
          this.point_en = this.node.getChildByName("Enable");
        }

        init(data, curr_id) {
          if (this.name_lbl) {
            this.name_lbl.string = data["name"] + "：";
          } // 更新名称


          if (this.intro_lbl) {
            this.intro_lbl.string = data["introduce"];
          } // 更新简介


          if (this.trigger && this.point_dis && this.point_en) {
            // 点击事件
            this.trigger.on("click", () => {
              if (!this.isEnable) (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("change formation", data["id"]);
            });
            this.point_dis.active = true; // 初始化标记点状态

            this.point_en.active = false;

            if (data["id"] == curr_id) {
              // 根据玩家数据判断是否当前选中
              this.point_en.active = true; // 是当前选中则修改标记点状态

              this.point_dis.active = false;
              this.isEnable = true;
            }
          }
        }

        changeState(isEnable) {
          // 修改选中状态
          if (this.point_dis && this.point_en) {
            this.point_dis.active = !isEnable;
            this.point_en.active = isEnable;
            this.isEnable = isEnable;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FormationBar.js.map