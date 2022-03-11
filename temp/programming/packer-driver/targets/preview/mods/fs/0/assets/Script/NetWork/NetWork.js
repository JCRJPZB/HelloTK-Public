System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Subscribe, _dec, _class, _temp, _crd, ccclass, property, NetWork;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../Tools/Subscribe", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Subscribe = _unresolved_2.Subscribe;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "71db522BotC/5rA/qLKKGjj", "NetWork", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NetWork", NetWork = (_dec = ccclass('NetWork'), _dec(_class = (_temp = class NetWork extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ws", new WebSocket("ws://82.157.123.54:9010/ajaxchattest"));

          _defineProperty(this, "nodeDict", new Map());
        }

        onLoad() {
          this.ws.onopen = function (e) {
            console.log(e + "\n" + "Send Text WS was opened.");
          };

          this.ws.onmessage = function (event) {
            console.log("Response text msg: " + event.data);
            console.log("Response msg type: " + typeof event.data);
          };

          this.ws.onerror = function (event) {
            console.log("Send Text fired an error");
          };

          this.ws.onclose = function (event) {
            console.log("WebSocket instance closed.");
          };

          this.scheduleOnce(() => {
            if (this.ws.readyState === WebSocket.OPEN) {
              this.ws.send("User connect success");
            } else {
              console.log("WebSocket instance wasn't ready...");
            }
          }, 1); // 需要初始化节点的字典
          // this.nodeDict.set("nodeName", node);
        }

        sendMsg(msg) {
          this.ws.send(msg);
        }

        sendFile(file) {
          this.ws.send(file);
        }

        receiveMsg(msg) {
          var params = msg.split(";"); // 分隔符写入配置？

          if (params.length < 1) {
            (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
              error: Error()
            }), Subscribe) : Subscribe).trigger("alert err", "Message should not be null.");
            return;
          }

          if (params.length === 1) {
            console.log(msg);
          }

          if (params.length > 1) {
            var node = this.nodeDict.get(params[0]);

            if (!node) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert err", "Node not found.");
              return;
            }

            var type = params.shift();
            node.emit("receiveMsg", type, params);
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetWork.js.map