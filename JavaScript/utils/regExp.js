/**
 * @Author: Qzx
 * @Date:   2017-12-07
 * @Filename: regExp.js
 * @description: 常用的正则表达式汇总
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-18T18:16:29+08:00
 */
const myRegExp = {
  // 检查字符串是否是数字
  isNumber: function(str) {
    let reg = /^\d+$/;
    return reg.test(str)
  },

  // 检查字符串是否存在中文
  isChinese: function(str) {
    let reg = /[\u4e00-\u9fa5]/gm;
    return reg.test(str)
  },

  // 检查字符串是否为合法身份证号码
  isIDcard: function(str) {
    let reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    return reg.test(str)
  },

  // 检查字符串是否为合法手机号码
  isPhone: function(str) {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
    return reg.test(str)
  },

  // 去掉前后空格
  trim: function(str) {
    let reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
  },

  // 检查字符串是否为合法Email地址
  isEmail: function(str) {
    let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    return reg.test(str)
  }
}

export default myRegExp;
