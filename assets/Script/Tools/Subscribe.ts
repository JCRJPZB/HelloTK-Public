import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Subscribe')
export class Subscribe extends Component {
    private static client_map: Map<string, Map<string, Function>> = new Map();

    // ############
    //   添加监听
    // ############
    public static listen(key: string, script: string, func: Function, target?: unknown) { // func 传入之前可能需要 bind()
        let map: Map<string, Function> | undefined = new Map();
        if (this.client_map.has(key)) {
            map = this.client_map.get(key);
        }
        if (map) {
            if (target) { func = func.bind(target); }
            map.set(script, func);
            this.client_map.set(key, map);
            return true;
        } else {
            return false;
        }
    }

    // ############
    //   触发消息
    // ############
    public static trigger(key: string, ...args: any) {
        let map = this.client_map.get(key);
        if (!map) { return false; }
        map.forEach((func: Function) => {
            func.apply(func, args);
        });
    }

    // ############
    //   移除监听
    // ############
    public static remove(key: string, script: string) {
        let map = this.client_map.get(key);
        if (!map) { return false; }
        if (!script) { this.client_map.delete(key); return true; }
        map.delete(script);
        return true;
    }

    // ############
    //   清空列表
    // ############
    public static reset() {
        this.client_map.clear();
    }
}
