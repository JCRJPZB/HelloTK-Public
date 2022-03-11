System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _temp, _crd, ccclass, property, BasicExceptionCode, BasicException;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bd04qyxNxJT5dEY0GnptVy", "BasicException", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BasicExceptionCode", BasicExceptionCode = {
        PARAM_COUNT: "BASIC0001",
        PARAM_TYPE: "BASIC0002",
        PARAM_NULL: "BASIC0003"
      });

      _export("BasicException", BasicException = (_dec = ccclass('BasicException'), _dec(_class = (_temp = class BasicException extends Error {
        constructor(code = "BASIC9999", detail = "", script = "", func = "") {
          super();

          _defineProperty(this, "map", new Map());

          _defineProperty(this, "code", "");

          _defineProperty(this, "msg", "");

          _defineProperty(this, "detail", "");

          _defineProperty(this, "script", "");

          _defineProperty(this, "func", "");

          this.map = new Map([['BASIC0001', '参数数量错误'], ['BASIC0002', '参数类型错误'], ['BASIC0003', '参数为空'], ['BASIC9999', '未知错误']]);
          this.check(code, detail, script, func);
        }

        appendMap(map) {
          this.map = new Map([...this.map, ...map]);
        }

        check(code = "BASIC9999", detail = "", script = "Unknown", func = "Unknown") {
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

        getCode() {
          return this.code;
        } //获取错误码中文描述


        getMsg() {
          return this.msg;
        } //获取错误明细(错误明细是抛出错误时手动传入的)


        getDetail() {
          return this.detail;
        } //获取错误位置


        getErrPos() {
          return this.script + '.' + this.func;
        } // 转字符串


        toString() {
          return `Error code:${this.code},msg:${this.msg},detail:${this.detail}\nat: ${this.script}.${this.func}`;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BasicException.js.map