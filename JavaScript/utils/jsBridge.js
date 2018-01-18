/**
 * jsBridge 客户端与前端的交互
 * Created by liminshen on 2017/5/8.
 */
var uId = 1314;
function JsBridge(options,cb) {
	var options = options || {};
	//"jsbridge://doAction?title=分享标题&desc=分享描述&link=http%3A%2F%2Fwww.baidu.com&callbackName=jsBridgeFn"
	this.schemeProtocol = options.protocol || 'jsbridge';
	this.params = options.params;
	this.action = options.action;
	this.cbName = 'jsBridgeFn'+(uId++);
	this.cb = cb;
	this.init();
}
JsBridge.prototype = {
	constructor : JsBridge,
	init : function () {
		this.initUrl();
		this.initJsBridgeFn();
		this.initIframe();
		this.loadIframe();
	},
	initUrl : function () {
		this.url = this.schemeProtocol+'://'+this.action+'?';
		for(var name in this.params){
			this.url += name + '=' + this.params[name] +'&';
		}
		this.url += 'callBackFunction' + '=' + this.cbName;
	},
	initIframe : function () {
		this.iframe = document.createElement('iframe');
		this.iframe.style.width = '1px';
		this.iframe.style.height = '1px';
		this.iframe.style.display = 'none';
		this.iframe.src = this.url;
	},
	initJsBridgeFn : function () {
		console.log(this.cbName);
		var self = this;
		window[this.cbName] = function (repsonse) {
			console.log('执行函数回调');
			self.cb(repsonse);
		}
	},
	loadIframe : function () {
		var self = this;
		document.body.appendChild(this.iframe);
		setTimeout(function() {
			self.iframe.remove();
		}, 100);
	}
}
module.exports = JsBridge;
