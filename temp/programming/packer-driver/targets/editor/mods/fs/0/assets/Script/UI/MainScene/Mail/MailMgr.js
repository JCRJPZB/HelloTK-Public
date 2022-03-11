System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Subscribe, _dec, _class, _class2, _temp, _crd, ccclass, property, MailMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
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

      _cclegacy._RF.push({}, "22db1LhCahK9b6hJOR3AeoO", "MailMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MailMgr", MailMgr = (_dec = ccclass('MailMgr'), _dec(_class = (_temp = _class2 = class MailMgr extends Component {
        // ############################################################
        // ############################################################
        constructor(name) {
          super(name);

          _defineProperty(this, "mail_list", []);

          _defineProperty(this, "mail_id_list", []);

          _defineProperty(this, "mail_map", new Map());

          _defineProperty(this, "test_data_mail_list", [{
            "mail_id": "001",
            "mail_title": "登录奖励",
            "sender": "官方",
            "text_content": "领主大人，这是您今日的登录奖励~",
            "mail_annex": [{
              "item_id": "Diamond",
              "num": 50
            }, {
              "item_id": "Gold",
              "num": 100000
            }, {
              "item_id": "GiftBox",
              "num": 10
            }],
            "isUnRead": true,
            "hasAnnex": true,
            "collected": false
          }, {
            "mail_id": "002",
            "mail_title": "维护补偿",
            "sender": "官方",
            "text_content": "领主大人，本次服务器维护已结束，发放补偿如下：",
            "mail_annex": [{
              "item_id": "Diamond",
              "num": 200
            }, {
              "item_id": "Gold",
              "num": 100000
            }, {
              "item_id": "Energy",
              "num": 50
            }],
            "isUnRead": true,
            "hasAnnex": true,
            "collected": false
          }]);

          this.mail_list = this.getMails();
          this.mail_list.forEach(mail => {
            this.mail_id_list.push(mail["mail_id"]);
            this.mail_map.set(mail["mail_id"], mail);
          });
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("read mail", this.name, this.readMial, this);
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).listen("collect annex", this.name, this.collectAnnex, this);
        }

        static getInstance() {
          if (!MailMgr.ist) {
            MailMgr.ist = new MailMgr("MailMgr");
          }

          return MailMgr.ist;
        }

        getMailList() {
          return this.mail_list;
        }

        addMail(mail) {
          this.mail_list.push(mail);
          this.mail_id_list.push(mail["mail_id"]);
          this.mail_map.set(mail["mail_id"], mail);
        }

        removeMail(id) {
          let idx = this.mail_id_list.indexOf(id);
          this.mail_map.delete(id);
          this.mail_list.slice(idx, idx);
          this.mail_id_list.slice(idx, idx);
        }

        readMial(id) {
          let mail = this.mail_map.get(id);

          if (mail && mail["isUnRead"]) {
            mail["isUnRead"] = false;
            this.updateMail();
          }
        }

        collectAnnex(id) {
          let mail = this.mail_map.get(id);

          if (mail && mail["hasAnnex"] && !mail["collected"]) {
            mail["collected"] = true;
            this.updateMail();
          }
        }

        updateMail() {// ################
          // 存储新的玩家邮件状态
          // ################
        }

        reciveNewMail(mail) {
          if (mail["mail_id"] && mail["mail_title"] && mail["sender"] && mail["mail_content"]) {
            this.mail_list.push(mail);
          } // ##################################
          // Update mail message?
          // ##################################

        }

        getMails() {
          // ##################################
          return this.test_data_mail_list; // #
          // ##################################
        }

      }, _defineProperty(_class2, "ist", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MailMgr.js.map