import { _decorator, Component, Node } from 'cc';
import { Subscribe } from '../Tools/Subscribe';
const { ccclass, property } = _decorator;

@ccclass('NetWork')
export class NetWork extends Component {

    // private ws: WebSocket = new WebSocket("ws://172.29.84.23:20099");
    private ws: WebSocket = new WebSocket("ws://82.157.123.54:9010/ajaxchattest"); // 后续改为配置文件设置服务器地址
    private nodeDict: Map<string, Node> = new Map<string, Node>();

    onLoad() {
        this.ws.onopen = function (e) {
            console.log(e + "\n" + "Send Text WS was opened.");
        }
        this.ws.onmessage = function (event) {
            console.log("Response text msg: " + event.data);
            console.log("Response msg type: " + typeof event.data);
        }
        this.ws.onerror = function (event) {
            console.log("Send Text fired an error");
        }
        this.ws.onclose = function (event) {
            console.log("WebSocket instance closed.");
        }
        this.scheduleOnce(() => {
            if (this.ws.readyState === WebSocket.OPEN) {
                this.ws.send("User connect success");
            }
            else {
                console.log("WebSocket instance wasn't ready...");
            }
        }, 1);
        // 需要初始化节点的字典
        // this.nodeDict.set("nodeName", node);
    }

    sendMsg(msg: string) {
        this.ws.send(msg);
    }

    sendFile(file: ArrayBuffer | Blob) {
        this.ws.send(file)
    }

    receiveMsg(msg: string) {
        let params: string[] = msg.split(";"); // 分隔符写入配置？
        if (params.length < 1) { Subscribe.trigger("alert err", "Message should not be null."); return; }
        if (params.length === 1) { console.log(msg); }
        if (params.length > 1) {
            let node = this.nodeDict.get(params[0]);
            if (!node) { Subscribe.trigger("alert err", "Node not found."); return; }
            let type = params.shift();
            node.emit("receiveMsg", type, params);
        }
    }

}
