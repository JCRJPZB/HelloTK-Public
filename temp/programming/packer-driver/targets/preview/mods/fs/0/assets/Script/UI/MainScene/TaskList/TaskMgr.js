System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Configure, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, TaskMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfigure(extras) {
    _reporterNs.report("Configure", "../../../Tools/Configure", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Configure = _unresolved_2.Configure;
    }, function (_unresolved_3) {
      Subscribe = _unresolved_3.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59309gwBsRG1b8v7sZXkJNI", "TaskMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskMgr", TaskMgr = (_dec = ccclass('TaskMgr'), _dec(_class = (_temp = _class2 = class TaskMgr extends Component {
        // ##################################
        // ###################################
        constructor(name) {
          super(name);

          _defineProperty(this, "task_map", new Map());

          _defineProperty(this, "progress_data", null);

          _defineProperty(this, "test_progress_data", {
            "task_w_001": 0,
            "task_w_002": 0,
            "task_w_login_1": 2,
            "task_w_login_2": 2,
            "task_w_login_3": 2,
            "task_w_login_4": 2
          });

          this.getTaskProgrss(this.setTaskConfigure.bind(this));
        }

        static getInstance() {
          if (!this.ist) {
            this.ist = new TaskMgr("TaskMgr");
          }

          return this.ist;
        }

        getTaskByCategory(cate) {
          if (!this.task_map.has(cate)) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("log err", "Task don't have category named \'" + cate + "\'.");
          }

          return this.task_map.get(cate);
        }

        setTaskConfigure() {
          var conf = (_crd && Configure === void 0 ? (_reportPossibleCrUseOfConfigure({
            error: Error()
          }), Configure) : Configure).getConfigure("task");
          var category = conf["category"];
          var tasks = conf["tasks"];

          if (category && category.length && category.length > 1) {
            category.forEach(c => {
              if (c === "all") {
                return;
              }

              var task_array = tasks[category];

              if (task_array && task_array.length && task_array.length > 0) {
                var map = new Map();
                task_array.forEach(task => {
                  var progress = this.progress_data[task["id"]];

                  if (!progress) {
                    progress = 0;
                  }

                  task["progress"] = progress;
                  map.set(task["id"], task);
                  this.setTaskListener(task);
                });
                this.task_map.set(c, map);
              }
            });
          }
        }

        getTaskProgrss(cb) {
          // ###############################################
          this.progress_data = this.test_progress_data; // ###############################################

          cb();
        }

        setTaskListener(conf) {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen(conf["listen_msg"], conf["id"], () => {
            conf["progress"]++;
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("task progress", conf);
          });
        } // public t<T extends string, U>(arg1: T, arg2: U): [T, U] { // 泛型
        //     return [arg1, arg2]
        // }


      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TaskMgr.js.map