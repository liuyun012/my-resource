# JavaScript开发工具资源汇总

## 工具目录
- 移动端 click 300ms 延迟响应<br>
  - 解决方案: [FastClick库](https://github.com/ftlabs/fastclick)
  - 使用方法: 在 window load 事件之后，在` <body>` 上调用FastClick.attach() 即可。
  ```
  window.addEventListener( "load", function() {
      FastClick.attach( document.body );
  }, false );
  ```
- 设备检测(PC,IOS,安卓等)
  - [device.js]()
- rem终端适配方案
  - [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)
  ![](https://github.com/liuyun012/my-resource/blob/master/JavaScript/rem.jpeg)
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

- JavaScript
