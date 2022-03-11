System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, v4, math, v3, Quat, _dec, _class, _class2, _temp, _crd, ccclass, property, sin, cos, sqrt, pow, Functions;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      v4 = _cc.v4;
      math = _cc.math;
      v3 = _cc.v3;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8af06peD1xBwpJNBlnbogCJ", "Functions", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ({
        sin,
        cos,
        sqrt,
        pow
      } = Math);

      _export("Functions", Functions = (_dec = ccclass('Functions'), _dec(_class = (_temp = _class2 = class Functions extends Component {
        // 将数字转为带逗号格式的字符串
        static numToStr(num) {
          if (num === 0) {
            return "0";
          }

          var str = "";
          var temp = num;

          while (temp > 0) {
            temp = temp % 1000;

            if (num >= 1000 && temp < 100) {
              if (temp < 10) {
                str = "00" + temp.toString() + "," + str;
              } else {
                str = "0" + temp.toString() + "," + str;
              }
            } else {
              str = temp.toString() + "," + str;
            }

            num = Math.floor(num / 1000);
            temp = num;
          }

          str = str.slice(0, str.length - 1);
          return str;
        } // 将数字转为带字母的表达形式


        static numToChar(num) {
          var digit = 0;

          for (; num >= 1000; digit++) {
            num = Math.floor(num / 1000);
          }

          var char = Functions.char_map.get(digit);

          if (char) {
            return num.toString().concat(char);
          } else return (num *= Math.pow(1000, digit)).toString();
        } // 交替穿插合并两个数组


        static alternate(a, b) {
          var temp = [];
          var short = a.length > b.length ? b : a;
          var long = a.length > b.length ? a : b;

          for (var i = 0; i < long.length; i++) {
            temp.push(long[i]);

            if (i < short.length) {
              temp.push(short[i]);
            }
          }

          return temp;
        } // 删除数组中指定元素


        static del(a, target) {
          var idx = a.indexOf(target);

          if (idx > -1) {
            a.splice(idx, 1);
          }
        } // 使UI中的节点跟随到3D空间节点(如3D节点会改变位置则需相应更新)


        static UIFllow3DNode(uiNode, camera, target) {
          var parent = uiNode.parent;

          if (!parent) {
            return;
          }

          var offset = new Vec3();
          camera.convertToUINode(target.worldPosition, parent, offset);
          uiNode.setPosition(offset);
        } // 深拷贝


        static deepCopy(e) {
          var copy = {};

          for (var key in e) {
            copy[key] = JSON.parse(JSON.stringify(e[key]));
          }

          return copy;
        } // 根据名称寻找指定节点(广度优先)


        static getNodeByName(name, root) {
          var child = root.getChildByName(name);

          if (child) {
            return child;
          }

          var children = root.children;

          while (children.length > 0) {
            child = children[0].getChildByName(name);

            if (child) {
              break;
            }

            children = children.concat(children[0].children);
            children.splice(0, 1);
          }

          if (child) {
            return child;
          }

          ;
          return null;
        } // 根据路径寻找指定节点


        static getNodeByPath(path, root) {
          var names = path.split("/");
          var child = root;

          while (names.length > 0) {
            if (!child) {
              break;
            }

            child = child.getChildByName(names[0]);
            names.splice(0, 1);
          }

          if (!child) {
            return null;
          }

          return child;
        } // 数组求和


        static sumOfArray(arr) {
          var total = 0;
          arr.forEach(num => {
            total += num;
          });
          return total;
        } // 根据概率抽值返回


        static probToVal(ps, values) {
          if (values.length < 1) {
            return null;
          }

          if (ps.length < 1 || ps.length != values.length) {
            return values[0];
          }

          var total = Functions.sumOfArray(ps);
          var section = [];

          for (var i = 0; i < ps.length; i++) {
            // 将概率铺展成区间
            section[i] = 0;

            if (i > 0) {
              section[i] = section[i - 1];
            }

            section[i] += ps[i];
          }

          var random_num = Math.random() * total;

          for (var _i = 0; _i < section.length; _i++) {
            if (random_num <= section[_i]) {
              return values[_i];
            }
          }

          return values[0];
        } // 根据区间随机返回值


        static randomInSec(max, min) {
          return min + Math.round(Math.random() * (max - min));
        } // 获取指定下标位置的字符，若下标大于长度则返回-1


        static charAt(str, idx) {
          if (str.length > idx) return str.charAt(idx);
          return -1;
        } // 交换数组内两个元素的位置


        static exch(array, idx_1, idx_2) {
          var temp = array[idx_1];
          array[idx_1] = array[idx_2];
          array[idx_2] = temp;
        } // 三区块基数快速排序


        static sortStr(strs, low, high, idx) {
          if (high <= low) {
            return;
          }

          var low_s = low,
              high_S = high; // low_s是比当前小的区块下标标记，high_s亦然

          var char = this.charAt(strs[low], idx); // 当前被比较的字符串的指定位置字符

          var i = low + 1;

          while (i <= high_S) {
            var temp = this.charAt(strs[i], idx); // 获取参与比较的字符串的指定位置字符

            if (temp < char) {
              Functions.exch(strs, low_s++, i++);
            } // 若比被比较的字符小则移入小区
            else if (temp > char) {
                Functions.exch(strs, i, high_S--);
              } // 若比被比较的字符大则移入大区
              else {
                  i++;
                } // 若相等则不用移动，继续呆在相等区

          }

          Functions.sortStr(strs, low, low_s - 1, idx); // 继续排序小区

          if (char != -1) {
            Functions.sortStr(strs, low_s, high_S, idx + 1);
          } // 相等区排序下一位置的字符


          Functions.sortStr(strs, high_S + 1, high, idx); // 继续排序大区
        } // 欧拉角转四元数


        static EulerToQuaternion(v) {
          var wx = sin(v.y / 2) * sin(v.z / 2) * cos(v.x / 2) + cos(v.y / 2) * cos(v.z / 2) * sin(v.x / 2);
          var wy = sin(v.y / 2) * cos(v.z / 2) * cos(v.x / 2) + cos(v.y / 2) * sin(v.z / 2) * sin(v.x / 2);
          var wz = cos(v.y / 2) * sin(v.z / 2) * cos(v.x / 2) - sin(v.y / 2) * cos(v.z / 2) * sin(v.x / 2);
          var ww = cos(v.y / 2) * cos(v.z / 2) * cos(v.x / 2) - sin(v.y / 2) * sin(v.z / 2) * sin(v.x / 2);
          return v4(wx, wy, wz, ww);
        } // 四元数乘法


        static Multiply(q1, q2) {
          var w = q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z;
          var x = q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y;
          var y = q1.w * q2.y + q1.y * q2.w + q1.z * q2.x - q1.x * q2.z;
          var z = q1.w * q2.z + q1.z * q2.w + q1.x * q2.y - q1.y * q2.x;
          return v4(x, y, z, w);
        } // 角度转弧度


        static ToRadian(a) {
          return v3(math.toRadian(a.x), math.toRadian(a.y), math.toRadian(a.z));
        } // 四元数求逆


        static getInverse(q) {
          var mod_square = pow(q.x, 2) + pow(q.y, 2) + pow(q.z, 2) + pow(q.w, 2); // 四元数范数的平方

          var adjoint = v4(-q.x, -q.y, -q.z, q.w); // 共轭四元数

          return adjoint.multiplyScalar(1 / mod_square); // 四元数的逆等于其共轭四元数除以四元数范数的平方
        } // 使用四元数根据给出的欧拉角计算旋转后的向量


        static QuaternionRotate(v, a) {
          // v:被旋转的向量，a:欧拉角
          var qv = v4(v.x, v.y, v.z, 0); // 将三维向量转换为纯四元数

          var qr = Functions.EulerToQuaternion(Functions.ToRadian(a)); // 将欧拉角转换为四元数

          var inverse = Functions.getInverse(qr); // 求出该四元数的逆

          var qv_r = Functions.Multiply(qr, qv); // 计算旋转

          qv_r = Functions.Multiply(qv_r, inverse);
          v = v3(qv_r.x, qv_r.y, qv_r.z); // w=0，直接将x,y,z取出得到旋转后的结果

          return v;
        } // 使用四元数计算旋转后的向量


        static getRotateVec(v, qr) {
          var qv = new Quat(v.x, v.y, v.z, 0); // 将三维向量转换为纯四元数

          var invert = new Quat();
          Quat.invert(invert, qr); // 求出该四元数的逆

          var res = new Quat();
          Quat.multiply(res, qr, qv); // 计算旋转

          Quat.multiply(res, res, invert);
          v = v3(res.x, res.y, res.z); // w=0，直接将x,y,z取出得到旋转后的结果

          return v;
        } // 将数值约束在区间内，区间默认左闭右闭


        static normalize(num, min, max) {
          if (min === void 0) {
            min = null;
          }

          if (max === void 0) {
            max = null;
          }

          if (min) {
            num = num >= min ? num : min;
          }

          if (max) {
            num = num <= max ? num : max;
          }

          return num;
        } // 从数组中随机取出一定数量的元素


        static randomFromArray(arr, num) {
          if (arr.length <= num) {
            return arr;
          }

          var arr_copy = arr.concat();

          if (arr.length / 2 >= num) {
            // 如果从数组中摘元素更快，则将指定数量的元素从原数组中取出放入结果数组，最后返回结果数组
            var res_arr = [];

            for (var i = 0; i < num; i++) {
              var index = Math.floor(Math.random() * arr_copy.length);
              res_arr.push(arr_copy.splice(index, 1));
            }

            return res_arr;
          } else {
            // 否则删除元素直到数组中的元素个数与要取的元素个数一致，而后直接返回原数组
            for (; arr_copy.length > num;) {
              var _index = Math.floor(Math.random() * arr_copy.length);

              arr_copy.splice(_index, 1);
            }

            return arr_copy;
          }
        }

      }, _defineProperty(_class2, "char_map", new Map([[0, " "], [1, "k"], [2, "M"], [3, "G"], [4, "T"], [5, "P"], [6, "E"], [7, "Z"], [8, "Y"]])), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Functions.js.map