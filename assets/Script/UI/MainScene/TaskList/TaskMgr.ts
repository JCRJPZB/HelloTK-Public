import { _decorator, Component, Node } from 'cc';
import { Configure } from '../../../Tools/Configure';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('TaskMgr')
export class TaskMgr extends Component {

    private static ist: TaskMgr;

    private task_map: Map<string, Map<string, any>> = new Map();
    private progress_data: any = null;

    // ##################################
    private test_progress_data: any = {
        "task_w_001": 0,
        "task_w_002": 0,
        "task_w_login_1": 2,
        "task_w_login_2": 2,
        "task_w_login_3": 2,
        "task_w_login_4": 2
    };
    // ###################################

    private constructor(name: string) {
        super(name);
        this.getTaskProgrss(this.setTaskConfigure.bind(this));
    }

    public static getInstance() {
        if (!this.ist) {
            this.ist = new TaskMgr("TaskMgr");
        }
        return this.ist;
    }

    public getTaskByCategory(cate: string) {
        if (!this.task_map.has(cate)) {
            Subscribe.trigger("log err", "Task don't have category named \'" + cate + "\'.");
        }
        return this.task_map.get(cate);
    }

    private setTaskConfigure() {
        let conf = Configure.getConfigure("task");
        let category = conf["category"];
        let tasks = conf["tasks"];
        if (category && category.length && category.length > 1) {
            category.forEach((c: string) => {
                if (c === "all") {
                    return;
                }
                let task_array = tasks[category];
                if (task_array && task_array.length && task_array.length > 0) {
                    let map = new Map<string, any>();
                    task_array.forEach((task: any) => {
                        let progress: number | undefined = this.progress_data[task["id"]];
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

    private getTaskProgrss(cb: Function) {
        // ###############################################
        this.progress_data = this.test_progress_data;
        // ###############################################
        cb();
    }

    private setTaskListener(conf: any) {
        Subscribe.listen(conf["listen_msg"], conf["id"], () => {
            conf["progress"]++;
            Subscribe.trigger("task progress", conf);
        });
    }

    // public t<T extends string, U>(arg1: T, arg2: U): [T, U] { // 泛型
    //     return [arg1, arg2]
    // }
}
