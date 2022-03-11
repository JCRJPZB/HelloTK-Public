import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export const BasicExceptionCode = {
    PARAM_COUNT: "BASIC0001",
    PARAM_TYPE: "BASIC0002",
    PARAM_NULL: "BASIC0003"
}

@ccclass('BasicException')
export class BasicException extends Error {
    protected map: Map<string, string> = new Map<string, string>();
    protected code: string = "";
    protected msg: string | undefined = "";
    protected detail: string = "";
    protected script: string = "";
    protected func: string = "";

    constructor(code: string = "BASIC9999", detail: string = "", script: string = "", func: string = "") {
        super();
        this.map = new Map([
            ['BASIC0001', '参数数量错误'],
            ['BASIC0002', '参数类型错误'],
            ['BASIC0003', '参数为空'],
            ['BASIC9999', '未知错误']
        ]);

        this.check(code, detail, script, func);
    }

    protected appendMap(map: Map<string, string>) {
        this.map = new Map<string, string>([...this.map, ...map]);
    }

    private check(
        code: string = "BASIC9999",
        detail: string = "",
        script: string = "Unknown",
        func: string = "Unknown") {
        this.detail = detail;
        this.script = script;
        this.func = func;
        if (this.map.has(code)) {
            this.code = code;
            this.msg = this.map.get(code);
        } else {
            this.code = "BASIC9999";
            this.msg = this.map.get(code);
        }

    }

    public getCode() {
        return this.code;
    }

    //获取错误码中文描述
    public getMsg() {
        return this.msg;
    }

    //获取错误明细(错误明细是抛出错误时手动传入的)
    public getDetail() {
        return this.detail;
    }

    //获取错误位置
    public getErrPos() {
        return this.script + '.' + this.func;
    }

    // 转字符串
    public toString() {
        return `Error code:${this.code},msg:${this.msg},detail:${this.detail}\nat: ${this.script}.${this.func}`;
    }
}
