System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Generator, Subscribe, UIBase, Task, TaskMgr, _dec, _class, _temp, _crd, ccclass, property, TaskList;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "./Task", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskMgr(extras) {
    _reporterNs.report("TaskMgr", "./TaskMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Generator = _unresolved_2.Generator;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }, function (_unresolved_4) {
      UIBase = _unresolved_4.UIBase;
    }, function (_unresolved_5) {
      Task = _unresolved_5.Task;
    }, function (_unresolved_6) {
      TaskMgr = _unresolved_6.TaskMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5662fkmZtBGcZhIx7xSoeTt", "TaskList", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskList", TaskList = (_dec = ccclass('TaskList'), _dec(_class = (_temp = class TaskList extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "task_root", void 0);

          _defineProperty(this, "curr_cate", "");
        }

        onInit() {
          this.addClickEvent("Return", () => {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("go back page");
          }, this);
          this.task_root = this.getNode("Task_Content");
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("show tasks by category", this.name, this.showTasksByCategory, this);
        }

        onOpen() {
          this.showTasksByCategory("all");
        }

        showTasksByCategory(cate) {
          if (cate === this.curr_cate) {
            return;
          }

          this.curr_cate = cate;
          let task_map = (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
            error: Error()
          }), TaskMgr) : TaskMgr).getInstance().getTaskByCategory(cate);

          if (task_map) {
            var _this$task_root;

            (_this$task_root = this.task_root) === null || _this$task_root === void 0 ? void 0 : _this$task_root.removeAllChildren();
            task_map.forEach((conf, key, map) => {
              this.genTask(conf, map);
            });
          }
        }

        genTask(conf, map) {
          if (conf["pre_task"]) {
            let pre_task = map.get(conf["pre_task"]);

            if (pre_task && !pre_task["is_done"]) {
              // 如果有前置任务并且前置任务未完成
              return;
            }
          }

          if (this.task_root) {
            let task_node = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance().generator(this.task_root, "Task");
            let ctrl = task_node === null || task_node === void 0 ? void 0 : task_node.getComponent(_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task);

            if (ctrl) {
              ctrl.init_task(conf);
            }
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TaskList.js.map