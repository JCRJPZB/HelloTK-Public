System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Json2Exc;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "689c3Zy24xCJ6+TrfKRd6I7", "Json2Exc", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Json2Exc", Json2Exc = (_dec = ccclass('Json2Exc'), _dec(_class = class Json2Exc extends Component {
        J2E(json) {// 以blob流的形式，组合成csv格式导出
          // public createLargerCsv(titleArray: Array<String>, jsonData: Array<any>) {
          //     let str: string = ''
          //     let blob: Blob
          //     this.startTime = new Date()
          //     // 使用string是因为如果是0的话会不显示，
          //     titleArray.forEach(title => {
          //         str += `${title.toString()},`
          //     })
          //     str += '\n'
          //     jsonData.forEach(data => {
          //         Object.values(data).forEach(o => {
          //             str += `${o.toString()},`
          //         })
          //         str += '\n'
          //     })
          //     // 添加编码格式
          //     blob = new Blob([str], { type: 'text/plain;charset=utf-8' })
          //     //解决中文乱码问题
          //     blob = new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
          //     this.createLink(this.fileName, window.URL.createObjectURL(blob), FileType.csv)
          //     this.endTime = new Date()
          //     // 返回开始，结束时间
          //     return {
          //         endTime: this.endTime,
          //         startTime: this.startTime
          //     }
        }

        E2J(fpath) {}

      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Json2Exc.js.map