import { _decorator, Component, Node, Prefab, instantiate, Vec3 } from 'cc';
import { ResMgr } from './ResMgr';
import { Subscribe } from './Subscribe';
const { ccclass, property } = _decorator;

@ccclass('Generator')
export class Generator extends Component {

    private prefab_map: Map<string, Prefab> = new Map();
    private static ist: Generator | null = null;

    public static getInstance(): Generator {
        if (!Generator.ist) { Generator.ist = new Generator("Generator"); }
        return Generator.ist;
    }

    private constructor(name: string) {
        super(name);
        ResMgr.loadDir("Prefab", "/", Prefab, (prefabs: Prefab[]) => { // 加载全部预制体
            if (prefabs.length < 1) {
                Subscribe.trigger("alert err", "No prefabs");
                return;
            }
            prefabs.forEach(p => { this.prefab_map.set(p.data._name, p); }); // 用预制体名作key，写配置需注意重名
            Subscribe.trigger("Generator ready");
        });
        Subscribe.listen("Generator prefab", this.name, this.generator, this);
    }

    public generator(parent: Node, name: string, pos?: Vec3) { // parent: 父节点， name: 预制体名称
        let new_node = this.getObject(name);
        if (!new_node) { return null; }
        new_node.parent = parent; // 放入父节点
        if (pos) { new_node.setPosition(pos); } // 设置位置
        return new_node;
    }

    public getObject(name: string) { // 获取预制体实例化对象
        let prefab = this.prefab_map.get(name);
        if (!prefab) {
            Subscribe.trigger("log err", "Prefab \'" + name + "\' doesn't exist.");
            return null;
        }
        return instantiate(prefab);
    }
}
