import { _decorator, Node } from 'cc';
import { Generator } from '../../../Tools/Generator';
import { Subscribe } from '../../../Tools/Subscribe';
import { UIBase } from '../../UIBase';
import { Task } from './Task';
import { TaskMgr } from './TaskMgr';
const { ccclass, property } = _decorator;
 
@ccclass('TaskList')
export class TaskList extends UIBase {

    private task_root: Node | undefined;
    private curr_cate: string = "";

    onInit() {
        this.addClickEvent("Return", () => {
            Subscribe.trigger("go back page");
        }, this);
        this.task_root = this.getNode("Task_Content");
        Subscribe.listen("show tasks by category", this.name, this.showTasksByCategory, this);
    }

    onOpen() {
        this.showTasksByCategory("all");
    }

    private showTasksByCategory(cate: string) {
        if (cate === this.curr_cate) {
            return;
        }
        this.curr_cate = cate;
        let task_map: Map<string, any> | undefined = TaskMgr.getInstance().getTaskByCategory(cate);
        if (task_map) {
            this.task_root?.removeAllChildren();
            task_map.forEach((conf: any, key: string, map: Map<string, any>) => {
                this.genTask(conf, map);
            });
        }
    }

    private genTask(conf: any, map: Map<string, any>) {
        if (conf["pre_task"]) {
            let pre_task = map.get(conf["pre_task"]);
            if (pre_task && !pre_task["is_done"]) { // 如果有前置任务并且前置任务未完成
                return;
            }
        }
        if (this.task_root) {
            let task_node = Generator.getInstance().generator(this.task_root, "Task");
            let ctrl = task_node?.getComponent(Task);
            if (ctrl) {
                ctrl.init_task(conf);
            }
        }
    }
}
