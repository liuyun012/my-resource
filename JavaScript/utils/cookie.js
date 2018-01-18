/**
 * @Author: Qzx
 * @Date: 2017-06-23T16:42:26+08:00
 * @description: 运用JS设置cookie、读取cookie、删除cookie
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-18T15:29:34+08:00
 */

function getCookie(name) {
  var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function setCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name) {
  setCookie(name, '', -1);
}

module.exports = {
  get: getCookie,
  set: setCookie,
  delete: deleteCookie
}
