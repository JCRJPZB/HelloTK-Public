import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../../../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('LeagueMgr')
export class LeagueMgr extends Component {

    private static ist: LeagueMgr;
    private info_list: any[] = [];
    private info_map: Map<string, any> = new Map();
    private dynamic_map: Map<string, any> = new Map();
    private shop_list_map: Map<string, any> = new Map();

    // ###########################
    private test_data_league_dynamics: any[] = [
        {
            "league_id": "1000001",
            "dynamics": [
                {
                    "dynamic_id": "001",
                    "content": "欢迎 “路人甲” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                },
                {
                    "dynamic_id": "002",
                    "content": "欢迎 “路人丙” 加入七星盟！",
                    "time": "2021-01-01"
                },
                {
                    "dynamic_id": "003",
                    "content": "“路人乙” 退出七星盟。",
                    "time": "2021-01-02"
                },
                {
                    "dynamic_id": "004",
                    "content": "“该用户已被封禁” 被请离七星盟。",
                    "time": "2021-01-05"
                }
            ]
        },
        {
            "league_id": "1000002",
            "dynamics": []
        },
        {
            "league_id": "1000003",
            "dynamics": []
        },
        {
            "league_id": "1000004",
            "dynamics": []
        },
        {
            "league_id": "1000005",
            "dynamics": []
        },
        {
            "league_id": "1000006",
            "dynamics": []
        },
        {
            "league_id": "1000007",
            "dynamics": []
        },
        {
            "league_id": "1000008",
            "dynamics": []
        },
        {
            "league_id": "1000009",
            "dynamics": []
        },
        {
            "league_id": "1000010",
            "dynamics": []
        },
        {
            "league_id": "1000011",
            "dynamics": []
        },
        {
            "league_id": "1000012",
            "dynamics": []
        }
    ];

    private test_data_league_list: any[] = [
        {
            "league_id": "1000001",
            "league_name": "七星盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "本服最强盟，入盟+V12345678审核。周贡不足350清人。"
        },
        {
            "league_id": "1000002",
            "league_name": "002盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "002Test"
        },
        {
            "league_id": "1000003",
            "league_name": "003盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "003Test"
        },
        {
            "league_id": "1000004",
            "league_name": "004盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "004Test"
        },
        {
            "league_id": "1000005",
            "league_name": "005盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "005Test"
        },
        {
            "league_id": "1000006",
            "league_name": "006盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "006Test"
        },
        {
            "league_id": "1000007",
            "league_name": "007盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "007Test"
        },
        {
            "league_id": "1000008",
            "league_name": "008盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "008Test"
        },
        {
            "league_id": "1000009",
            "league_name": "009盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "009Test"
        },
        {
            "league_id": "1000010",
            "league_name": "010盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "010Test"
        },
        {
            "league_id": "1000011",
            "league_name": "011盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "011Test"
        },
        {
            "league_id": "1000012",
            "league_name": "012盟",
            "lord_pid": "22389299",
            "lord_name": "紫冰",
            "land": "82",
            "num_of_member": 498,
            "max_member": 500,
            "member_list": [],
            "flag": "default_league_flag",
            "describe": "012Test"
        }
    ];

    private test_data_shop_list: any[] = [
        {
            "league_id": "1000001",
            "items": [
                {
                    "item_id": "10001",
                    "currency": "coin",
                    "price": 1000,
                    "reserve": 100
                },
                {
                    "item_id": "10002",
                    "currency": "diamond",
                    "price": 10,
                    "reserve": 20
                },
                {
                    "item_id": "10003",
                    "currency": "coin",
                    "price": 500,
                    "reserve": 50
                }
            ]
        }
    ]
    // ###########################

    private constructor(name: string) {
        super(name);
        this.info_list = this.loadLeagueList();
        this.info_list.forEach((info: any) => {
            this.info_map.set(info["league_id"], info);
        });
        let dynamics = this.loadDynamics();
        dynamics.forEach((dynamic: any) => {
            this.dynamic_map.set(dynamic["league_id"], dynamic);
        });
        let shop_list = this.loadShopList();
        shop_list.forEach((shop: any) => {
            this.shop_list_map.set(shop["league_id"], shop);
        });

        Subscribe.listen("player join league", this.name, (league_id: string, pid: string) => {
            // ####################################
            //      更新消息至服务器 这里先手动改   #
            // ####################################
            let info = this.info_map.get(league_id); // Map中存放的是引用不是深拷贝的对象，所以修改Map中的元素，原数组中的元素也会对应修改
            if (!info) {
                return;
            }
            info["num_of_member"]++;
            info["member_list"].push(pid);
        });

        Subscribe.listen("player leave league", this.name, (league_id: string, pid: string) => {
            // ####################################
            //      更新消息至服务器 这里先手动改   #
            // ####################################
            let info = this.info_map.get(league_id);
            if (!info) {
                return;
            }
            info["num_of_member"]--;
            let member_list: string[] = info["member_list"];
            let idx = member_list.indexOf(pid);
            member_list.splice(idx, 1);
        });
    }

    public static getInstance() {
        if (!LeagueMgr.ist) {
            LeagueMgr.ist = new LeagueMgr("LeagueMgr");
        }
        return LeagueMgr.ist;
    }

    public loadLeagueList() {
        // ####################################
        return this.test_data_league_list; // #
        // ####################################
    }

    private loadDynamics() {
        // ########################################
        return this.test_data_league_dynamics; // #
        // ########################################
    }

    private loadShopList() {
        // ##################################
        return this.test_data_shop_list; // #
        // ##################################
    }

    public getLeagueList() { return this.info_list; }

    public getLeagueInfoById(league_id: string) {
        if (this.info_map.has(league_id)) { return this.info_map.get(league_id); }
        return null;
    }

    public getLeagueDynamicsById(league_id: string) {
        if (this.dynamic_map.has(league_id)) { return this.dynamic_map.get(league_id); }
        return null;
    }

    public getLeagueShopListById(league_id: string) {
        if (this.shop_list_map.has(league_id)) { return this.shop_list_map.get(league_id); }
        return null;
    }
}
