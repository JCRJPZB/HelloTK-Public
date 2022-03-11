System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, v3, Sprite, find, Configure, Functions, Generator, ImgMgr, Subscribe, UIBase, HerosMgr, FormationBar, HeroPortrait, _dec, _class, _temp, _crd, ccclass, property, Formation;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../../Tools/Configure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunctions(extras) {
    _reporterNs.report("Functions", "../../Tools/Functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImgMgr(extras) {
    _reporterNs.report("ImgMgr", "../../Tools/ImgMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UI/UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHerosMgr(extras) {
    _reporterNs.report("HerosMgr", "../HerosMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormationBar(extras) {
    _reporterNs.report("FormationBar", "./FormationBar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroPortrait(extras) {
    _reporterNs.report("HeroPortrait", "./HeroPortrait", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      v3 = _cc.v3;
      Sprite = _cc.Sprite;
      find = _cc.find;
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Functions = _unresolved_3.Functions;
    }, function (_unresolved_4) {
      Generator = _unresolved_4.Generator;
    }, function (_unresolved_5) {
      ImgMgr = _unresolved_5.ImgMgr;
    }, function (_unresolved_6) {
      Subscribe = _unresolved_6.Subscribe;
    }, function (_unresolved_7) {
      UIBase = _unresolved_7.UIBase;
    }, function (_unresolved_8) {
      HerosMgr = _unresolved_8.HerosMgr;
    }, function (_unresolved_9) {
      FormationBar = _unresolved_9.FormationBar;
    }, function (_unresolved_10) {
      HeroPortrait = _unresolved_10.HeroPortrait;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "524e5eNQ5NBC4hXApyFkME8", "Formation", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Formation", Formation = (_dec = ccclass('Formation'), _dec(_class = (_temp = class Formation extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "troop_conf", void 0);

          _defineProperty(this, "formation_conf", void 0);

          _defineProperty(this, "hero_map", new Map());

          _defineProperty(this, "max_selection", 0);

          _defineProperty(this, "selected_hero_ids", []);

          _defineProperty(this, "hero_root", void 0);

          _defineProperty(this, "alert_root", void 0);

          _defineProperty(this, "portrait_root", void 0);

          _defineProperty(this, "portraits", []);

          _defineProperty(this, "formation_name", void 0);

          _defineProperty(this, "bar_root", void 0);

          _defineProperty(this, "curr_formation_id", "");

          _defineProperty(this, "formation_ctrl_map", new Map());

          _defineProperty(this, "formation_conf_map", new Map());

          _defineProperty(this, "gen", null);

          _defineProperty(this, "sort_map", new Map());

          _defineProperty(this, "sort_type", "str");

          _defineProperty(this, "heros_conf_map", new Map());

          _defineProperty(this, "ids_sp", []);

          _defineProperty(this, "ids_nm", []);

          _defineProperty(this, "ids", []);
        }

        // 所有武将id
        onInit() {
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.hero_root = this.getNode("Hero_Content"); // 武将根节点

          this.portrait_root = this.getNode("Portrait_Root"); // 阵型摆放武将头像的根节点

          this.formation_name = this.getComp("Formation_Name", "Label"); // 阵型名称Label

          this.bar_root = this.getNode("Formation_Content"); // 阵型栏根节点

          this.alert_root = this.getNode("Alert_Root"); // 提示信息的根节点

          this.troop_conf = (_crd && HerosMgr === void 0 ? (_reportPossibleCrUseOfHerosMgr({
            error: Error()
          }), HerosMgr) : HerosMgr).getInstance().getTroops(); // 队伍数据配置

          this.formation_conf = this.troop_conf["formation"]; // 阵型配置

          if (this.formation_name) {
            this.formation_name.string = this.formation_conf["name"];
          }

          this.max_selection = this.formation_conf["pos_idxs"].length; // 最大可编入武将数量

          if (!this.portrait_root) {
            return;
          }

          for (var i = 0; i < this.max_selection; i++) {
            // 生成武将头像
            var portrait = this.gen.generator(this.portrait_root, "Hero_portrait");
            if (portrait) this.portraits.push(portrait); // 存入数组
          }

          this.curr_formation_id = this.formation_conf["id"]; // 保存当前阵型id

          this.setFormationBar(); // 初始化阵型选择栏

          this.addClickEvent("FinishBtn", this.finishEvent, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("changeSpHero", this.name, this.changeSpHero, this); // 监听取消/设为常用消息

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change hero selected", this.name, this.changeSelected, this); // 监听切换武将选中状态消息

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("change formation", this.name, this.changeFormation, this); // 监听切换阵型消息

          this.sort_map = new Map([// 排序方法Map
          ["str", this.sortStr.bind(this)]]);
          this.sort_type = "str"; // 初始设为默认的方法

          this.setHero(); // 摆放武将
        }

        onOpen() {
          // 每次打开编队界面都刷新编队状态
          this.troop_conf = (_crd && HerosMgr === void 0 ? (_reportPossibleCrUseOfHerosMgr({
            error: Error()
          }), HerosMgr) : HerosMgr).getInstance().getTroops(); // 队伍数据配置

          this.formation_conf = this.troop_conf["formation"]; // 阵型配置

          if (this.formation_name) {
            this.formation_name.string = this.formation_conf["name"];
          }

          this.max_selection = this.formation_conf["pos_idxs"].length; // 最大可编入武将数量

          this.curr_formation_id = this.formation_conf["id"]; // 保存当前阵型id

          this.updateFormation(true, true);
        }

        finishEvent(e) {
          // 隐藏编队界面
          if (this.selected_hero_ids.length > 0) {
            var ids_idxs = [];

            for (var i = 0; i < this.selected_hero_ids.length; i++) {
              ids_idxs.push({
                "id": this.selected_hero_ids[i],
                "idx": i
              }); // 收集阵型编队信息
            }

            this.formation_conf["ids_idxs"] = ids_idxs; // 并将数据添加至配置中(对应上面的覆盖时丢失的数据)

            this.troop_conf["formation"] = this.formation_conf; // 更新

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("update troop", this.troop_conf); // 并将新配置发射出去

            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("go back page"); // 返回上一个页面

            return; // 若编队中有人则不触发提醒
          }

          if (e && this.hero_map.size > 0 && this.alert_root) {
            // 若编队空无一人则不退出，提醒玩家
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert UI", "请至少选择一位武将!", this.alert_root, e.node.getPosition());
          }
        }

        setFormationBar() {
          var conf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("hero")["common"]["formation"]; // 读取编队配置

          if (!this.bar_root || !this.gen) {
            return;
          }

          for (var i = 0; i < conf.length; i++) {
            // 放置阵型栏
            if (conf[i]["id"] === "monster") {
              continue;
            }

            this.formation_conf_map.set(conf[i]["id"], conf[i]); // 保存阵型配置

            var node = this.gen.generator(this.bar_root, "Formation_Bar", v3(0, i * -130 - 75, 0)); // 生成阵型

            var ctrl = node === null || node === void 0 ? void 0 : node.getComponent(_crd && FormationBar === void 0 ? (_reportPossibleCrUseOfFormationBar({
              error: Error()
            }), FormationBar) : FormationBar); // 获取阵型栏脚本

            if (ctrl) {
              ctrl.init(conf[i], this.curr_formation_id); // 初始化

              this.formation_ctrl_map.set(conf[i]["id"], ctrl); // 保存阵型栏脚本
            }
          }
        }

        changeFormation(id) {
          var _this$formation_ctrl_, _this$formation_ctrl_2;

          // 切换阵型
          (_this$formation_ctrl_ = this.formation_ctrl_map.get(this.curr_formation_id)) === null || _this$formation_ctrl_ === void 0 ? void 0 : _this$formation_ctrl_.changeState(false); // 更新旧阵型状态为disable

          (_this$formation_ctrl_2 = this.formation_ctrl_map.get(id)) === null || _this$formation_ctrl_2 === void 0 ? void 0 : _this$formation_ctrl_2.changeState(true); // 更新新阵型状态为enable

          this.curr_formation_id = id; // 更新当前阵型id

          this.formation_conf = this.formation_conf_map.get(id); // 覆盖当前的阵型配置(注意：此操作会丢失阵型中的武将信息，需要补充回去)

          this.updateFormation(false, true); // 更新阵型
        }

        setHero() {
          // 摆放武将
          for (var i = 0; i < this.troop_conf["heros"].length; i++) {
            this.troop_conf["heros"][i]["idx"] = i; // 设置好idx，后面修改heros_conf_map时用的上

            this.heros_conf_map.set(this.troop_conf["heros"][i]["id"], this.troop_conf["heros"][i]); // 武将配置map

            if (this.troop_conf["heros"][i]["is_sp"]) {
              this.ids_sp.push(this.troop_conf["heros"][i]["id"]);
            } // 保存常用武将
            else {
                this.ids_nm.push(this.troop_conf["heros"][i]["id"]);
              } // 保存非常用武将
            // 保存被编入编队的武将id


            if (this.troop_conf["heros"][i]["is_select"]) {
              this.selected_hero_ids.push(this.troop_conf["heros"][i]["id"]);
            }
          }

          this.sortStr(); // 根据名称顺序排序

          for (var _i = 0; _i < this.ids.length; _i++) {
            // 新建武将并放入面板
            if (!this.hero_root || !this.gen) {
              return;
            }

            var hero_portrait = this.gen.generator(this.hero_root, "Hero_2D");

            if (hero_portrait) {
              var _hero_portrait$getCom;

              (_hero_portrait$getCom = hero_portrait.getComponent(_crd && HeroPortrait === void 0 ? (_reportPossibleCrUseOfHeroPortrait({
                error: Error()
              }), HeroPortrait) : HeroPortrait)) === null || _hero_portrait$getCom === void 0 ? void 0 : _hero_portrait$getCom.init(this.heros_conf_map.get(this.ids[_i])); // 初始化

              this.hero_map.set(this.ids[_i], hero_portrait); // 保存节点
            }
          }
        }

        changeSelected(id, is_select, call_back) {
          if (!is_select) {
            // 如果传过来是未被选中说明即将被选中
            if (this.selected_hero_ids.length >= this.max_selection) {
              var _find, _this$hero_map$get;

              // 如果选中的武将数量大于等于最大编入人数
              var canvas_pos = (_find = find("Canvas")) === null || _find === void 0 ? void 0 : _find.worldPosition; // 计算提示Label显示的位置

              var portrait_pos = (_this$hero_map$get = this.hero_map.get(id)) === null || _this$hero_map$get === void 0 ? void 0 : _this$hero_map$get.worldPosition;

              if (canvas_pos && portrait_pos && this.alert_root) {
                var pos = v3(portrait_pos).subtract(canvas_pos);
                (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                  error: Error()
                }), Subscribe) : Subscribe).trigger("alert UI", "编队武将数量已达上限!", this.alert_root, pos);
              }

              return; // 已达上限，所以不做操作直接返回
            }

            this.selected_hero_ids.push(id); // 若未达到上限，则添加武将至编队

            this.troop_conf["heros"][this.heros_conf_map.get(id)["idx"]]["is_select"] = true; // 修改被选中标记
          } else {
            if (this.selected_hero_ids.length <= 0) {
              return;
            } // 若已无被选中的武将则直接返回（正常来说这个判断不会为true）


            var idx = this.selected_hero_ids.indexOf(id); // 将取消选中的武将从编队中移除

            this.selected_hero_ids.splice(idx, 1);
            this.troop_conf["heros"][this.heros_conf_map.get(id)["idx"]]["is_select"] = false; // 修改被选中标记
          }

          call_back(); // 调用修改编队回调

          this.updateFormation(true, false); // 更新编队信息
        }

        updateFormation(update_hero, udpate_pos) {
          // 更新编队信息
          if (!this.portrait_root || !this.selected_hero_ids || !this.formation_conf) {
            return;
          }

          if (this.portraits.length < this.selected_hero_ids.length) {
            // 如果选中的武将多于当前阵型人数，则说明出现问题
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Length of selected heros out of range!");
          }

          if (update_hero) {
            // 更新武将头像图片
            for (var i = 0; i < this.portraits.length; i++) {
              var portrait_sp = this.portraits[i].getComponent(Sprite); // 获取头像精灵组件

              if (!portrait_sp) {
                continue;
              } // 若此时选中武将已配置完成，则剩余的置空


              if (i >= this.selected_hero_ids.length) {
                portrait_sp.spriteFrame = null;
                continue;
              } // 反之则更新头像图片


              var hero_id = this.heros_conf_map.get(this.selected_hero_ids[i])["hero_id"]; // 注意一件事，id和hero_id是不一样的，一个是当前这个武将的id，一个是武将配置中的武将id，即一个是每个玩家不一样一个是所有该武将都一样

              portrait_sp.spriteFrame = (_crd && ImgMgr === void 0 ? (_reportPossibleCrUseOfImgMgr({
                error: Error()
              }), ImgMgr) : ImgMgr).getInstance().getImg(hero_id); // 根据配置设置精灵组件贴图
            }
          }

          if (udpate_pos) {
            // 更新武将头像位置
            var pos_idxs = this.formation_conf["pos_idxs"]; // 获取阵型位置配置

            var prePos = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
              error: Error()
            }), Configure) : Configure).getConfigure("hero")["common"]["prePos"]; // 获取武将头像位置配置

            for (var _i2 = 0; _i2 < this.portraits.length; _i2++) {
              var idx = prePos["pos"][pos_idxs[_i2]];
              var pos = v3(idx[0] * prePos["2d_dist"], idx[1] * prePos["2d_dist"], 0); // 计算头像位置

              this.portraits[_i2].setPosition(pos); // 设置位置

            }

            if (this.formation_name) {
              this.formation_name.string = this.formation_conf["name"];
            } // 更新阵型名称

          }
        }

        changeSpHero(id, isAdd) {
          // 设为/取消常用
          var idx = this.heros_conf_map.get(id)["idx"];
          this.troop_conf["heros"][idx]["is_sp"] = isAdd; // 同步更新配置

          var add_ids,
              del_ids = [];

          if (isAdd) {
            [add_ids, del_ids] = [this.ids_sp, this.ids_nm];
          } // 从一个数组中移除并添加至另一个数组
          else {
              [add_ids, del_ids] = [this.ids_nm, this.ids_sp];
            }

          var del_idx = del_ids.indexOf(id);
          del_ids.splice(del_idx, 1); // 删除

          add_ids.push(id); // 添加

          this.updateOder(); // 更新武将顺序
        }

        updateOder() {
          var sort_func = this.sort_map.get(this.sort_type);

          if (sort_func) {
            sort_func();
          } // 根据设置找到指定排序方法并调用


          if (this.hero_root) {
            this.hero_root.removeAllChildren(); // 清空武将节点

            this.ids.forEach(id => {
              // 按照顺序重新摆放
              var node = this.hero_map.get(id);

              if (node && this.hero_root) {
                node.parent = this.hero_root;
              }
            });
          }
        }

        sortStr() {
          // 按照字符顺序排序
          (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).sortStr(this.ids_sp, 0, this.ids_sp.length - 1, 0);
          (_crd && Functions === void 0 ? (_reportPossibleCrUseOfFunctions({
            error: Error()
          }), Functions) : Functions).sortStr(this.ids_nm, 0, this.ids_nm.length - 1, 0);
          this.ids = this.ids_sp.concat(this.ids_nm);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Formation.js.map