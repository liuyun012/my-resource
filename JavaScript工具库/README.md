# JavaScript开发工具资源汇总

## 工具功能对应表
- [fastclick.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/fastclick.js) : 移动端 click 300ms 延迟响应;
- [rem.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/rem.js) : 移动端适配rem，配合 px2rem 插件使用;
- [formatDate.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/formatDate.js) : 对时间进行格式化;
- [validator.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/validator.js) : from表单验证工具库(数字，字符，手机，密码等)
- [regExp.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/regExp.js) : 常用的正则表达式汇总整理
- [cookie.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/cookie.js) : cookie的获取，设置，及删除操作
- [jsBridge.js](https://github.com/liuyun012/my-resource/blob/master/JavaScript/utils/jsBridge.js) : h5与移动客户端 WebView 的交互方法

## 前端开发项目效率提升
- 移动端 click 300ms 延迟响应<br>
  - 解决方案: [FastClick库](https://github.com/ftlabs/fastclick)
  - 使用方法: 在 window load 事件之后，在` <body>` 上调用FastClick.attach() 即可。
  ```
  window.addEventListener( "load", function() {
      FastClick.attach( document.body );
  }, false );
  ```
- 专为手机网页前端设计的调试面板工具 -- Eruda
  - 文件地址：[Eruda](https://github.com/liriliri/eruda)
  - [eruda -- CDN地址](http://www.bootcdn.cn/eruda/)
  - 使用方法：
    ```html
    <script>eruda.init();</script>
    ```
- 设备检测(PC,IOS,安卓等)
  - [device.js](https://github.com/binnng/device.js)
  - 最简单的PC端和移动端的判断
    ```html
    if(navigator.userAgent.match(/Android/i)||(navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
          if (location.search.indexOf("?") == -1) {
            window.location.href = '/phone.html';
          }
       }
    ```
- rem终端适配方案
  - [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)
  ![](https://github.com/liuyun012/my-resource/blob/master/JavaScript/images/rem.jpeg)
- 对时间Date的操作方法
  - 获取和单个时间的转化
  - 对时间进行格式化(刚刚，几小时前，几天前...等): [formatDate.js]()

- 电话号码和邮箱地址识别
  ```html
  <!-- 关闭电话号码识别： -->
  <meta name="format-detection" content="telephone=no" />
  <!-- 开启电话功能： -->
  <a href="tel:123456">123456</a>
  <!-- 开启短信功能： -->
  <a href="sms:123456">123456</a>
  <!-- 关闭邮箱地址识别： -->
  <meta name="format-detection" content="email=no" />
  <!-- 开启邮件发送： -->
  <a mailto:>mobile@gmail.com">mobile@gmail.com</a>
  ```
- from表单验证工具库：[validator.js](https://github.com/jaywcjlove/validator.js)
- 移动端网站的内容触摸滑动组件：[Swiper中文网](http://www.swiper.com.cn/)
- 功能齐全的可视化图表开源库：[ECharts中文网](http://echarts.baidu.com/index.html)
