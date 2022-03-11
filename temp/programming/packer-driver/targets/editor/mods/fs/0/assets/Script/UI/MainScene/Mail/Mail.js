System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ItemMgr, Generator, Subscribe, UIBase, MailMgr, MailTitle, _dec, _class, _temp, _crd, ccclass, property, Mail;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfItemMgr(extras) {
    _reporterNs.report("ItemMgr", "../../../Items/ItemMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGenerator(extras) {
    _reporterNs.report("Generator", "../../../Tools/Generator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubscribe(extras) {
    _reporterNs.report("Subscribe", "../../../Tools/Subscribe", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIBase(extras) {
    _reporterNs.report("UIBase", "../../UIBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailMgr(extras) {
    _reporterNs.report("MailMgr", "./MailMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailTitle(extras) {
    _reporterNs.report("MailTitle", "./MailTitle", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ItemMgr = _unresolved_2.ItemMgr;
    }, function (_unresolved_3) {
      Generator = _unresolved_3.Generator;
    }, function (_unresolved_4) {
      Subscribe = _unresolved_4.Subscribe;
    }, function (_unresolved_5) {
      UIBase = _unresolved_5.UIBase;
    }, function (_unresolved_6) {
      MailMgr = _unresolved_6.MailMgr;
    }, function (_unresolved_7) {
      MailTitle = _unresolved_7.MailTitle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27e75luVZBCSrkyODgHEv8v", "Mail", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Mail", Mail = (_dec = ccclass('Mail'), _dec(_class = (_temp = class Mail extends (_crd && UIBase === void 0 ? (_reportPossibleCrUseOfUIBase({
        error: Error()
      }), UIBase) : UIBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "gen", null);

          _defineProperty(this, "mail_list", []);

          _defineProperty(this, "mail_map", new Map());

          _defineProperty(this, "currMail", void 0);

          _defineProperty(this, "mail_title_root", void 0);

          _defineProperty(this, "mail_sender", null);

          _defineProperty(this, "text_content", null);

          _defineProperty(this, "mail_annex_root", void 0);

          _defineProperty(this, "collect_btn", void 0);

          _defineProperty(this, "collected", void 0);

          _defineProperty(this, "alert_Lbl_Root", void 0);
        }

        onInit() {
          this.addBtnEvent();
          this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
            error: Error()
          }), Generator) : Generator).getInstance();
          this.mail_title_root = this.getNode("Title_Content");
          this.mail_sender = this.getComp("Sender", "Label");
          this.text_content = this.getComp("Text_Content", "Label");
          this.mail_annex_root = this.getNode("Annex_Content");
          this.collect_btn = this.getNode("Collect");
          this.collected = this.getNode("Collected");
          this.alert_Lbl_Root = this.getNode("Alert_Lbl_Root");
        }

        onOpen() {
          this.refreshMail();
        }

        addBtnEvent() {
          this.addClickEvent("Quit", this.hide, this);
          this.addClickEvent("Return", this.hide, this);
          this.addClickEvent("AllRead", this.allRead, this);
          this.addClickEvent("Collect", this.collect_item, this);
        }

        refreshMail() {
          if (!this.gen) {
            this.gen = (_crd && Generator === void 0 ? (_reportPossibleCrUseOfGenerator({
              error: Error()
            }), Generator) : Generator).getInstance();
          }

          if (this.mail_title_root) {
            let list = (_crd && MailMgr === void 0 ? (_reportPossibleCrUseOfMailMgr({
              error: Error()
            }), MailMgr) : MailMgr).getInstance().getMailList();

            if (list.length > this.mail_list.length) {
              for (let i = this.mail_list.length; i < list.length; i++) {
                this.mail_list.push(list[i]["mail_id"]);
                this.mail_map.set(list[i]["mail_id"], list[i]);
                let new_title = this.gen.generator(this.mail_title_root, "Mail_Title");
                let ctrl = new_title === null || new_title === void 0 ? void 0 : new_title.getComponent(_crd && MailTitle === void 0 ? (_reportPossibleCrUseOfMailTitle({
                  error: Error()
                }), MailTitle) : MailTitle);

                if (ctrl) {
                  ctrl.init(list[i], () => {
                    this.readMail(list[i]["mail_id"]);
                  });
                }
              }
            }

            this.readMail(this.mail_list[0]);
          }
        }

        readMail(mail_id) {
          if (this.mail_sender && this.text_content) {
            let mail = this.mail_map.get(mail_id);

            if (mail) {
              var _this$mail_annex_root;

              this.currMail = mail;
              this.mail_sender.string = "From: " + mail["sender"];
              this.text_content.string = mail["text_content"];
              (_this$mail_annex_root = this.mail_annex_root) === null || _this$mail_annex_root === void 0 ? void 0 : _this$mail_annex_root.removeAllChildren();
              mail["mail_annex"].forEach(annex => {
                if (!this.mail_annex_root) {
                  return;
                }

                (_crd && ItemMgr === void 0 ? (_reportPossibleCrUseOfItemMgr({
                  error: Error()
                }), ItemMgr) : ItemMgr).getInstance().getItemNode(annex["item_id"], this.mail_annex_root, annex["num"]);
              });

              if (this.collect_btn && this.collected) {
                if (mail["hasAnnex"] && !mail["collected"]) {
                  this.collect_btn.active = true;
                  this.collected.active = false;
                } else {
                  this.collect_btn.active = false;
                  this.collected.active = true;
                }
              }

              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("read mail", mail["mail_id"]);
            }
          }
        }

        allRead() {}

        collect_item() {
          // ########################################################################
          if (this.currMail["hasAnnex"] && !this.currMail["collected"] && this.currMail["mail_annex"].length > 0) {
            this.currMail["mail_annex"].forEach(annex => {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("collect item", annex["item_id"], annex["num"]);
            });
          } // ########################################################################
          // 由于网络等因素导致的领取失败需要考虑


          if (this.collect_btn) {
            if (this.alert_Lbl_Root) {
              (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
                error: Error()
              }), Subscribe) : Subscribe).trigger("alert UI", "领取成功！!", this.alert_Lbl_Root); // 显示提示Label
            }

            this.collect_btn.active = false;

            if (this.collected) {
              this.collected.active = true;
            }
          }

          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("collect annex", this.currMail["mail_id"]);
        }

        hide() {
          (_crd && Subscribe === void 0 ? (_reportPossibleCrUseOfSubscribe({
            error: Error()
          }), Subscribe) : Subscribe).trigger("go back page");
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Mail.js.map