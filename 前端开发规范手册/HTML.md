# HTML规范
-------------
### Head模板
- 文档类型
为每一个HTML页面的第一行添加标准模式的声明，确保在浏览器拥有一致的表现。
  ```
  <!DOCTYPE html>
  ```
- 语言属性
  ```
  <!-- 中文 -->
  <html lang="zh-Hans">
  <!-- 简体中文 -->
  <html lang="zh-cmn-Hans">
  <!-- English -->
  <html lang="en">
  ```
- 字符编码
  - 以无BOM的 utf-8 编码作为文件格式
  - 指定字符编码的 meta 必须是 head 的第一个直接子元素

  ###### 通用基础 HTML 模板
  ```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" http-equiv="Content-Type">
      <!-- IE 兼容模式 -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>首页</title>

      <!-- SEO 搜索引擎优化 -->
      <meta name="description" content="不超过150个字符">
      <meta name="keywords" content="">
      <meta name="author" content="name, email@gmail.com">

      <!-- 为移动设备添加 viewport -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <!-- 收藏网址图标 -->
      <link rel="shortcut icon" href="path/to/favicon.ico">

      <!-- 外链的页面样式文件 -->
      <link rel="stylesheet" href="./css/index.css">
    </head>
    <body>
      <!-- 页面内容区域 -->
      <div id="app"></div>

      <!-- 外链的页面行为交互文件 -->
      <script src="./js/index.js"></script>
    </body>
  </html>

  ```

### 标签
- 自闭合标签，无需闭合(例如：img、input、br、hr 等)；
- 可选的闭合标签，需闭合(例如：</li>、</body>)；
- 尽量使用语义化的标签(例如：<header>、<footer>、<nav>等)
- 尽量减少标签数量，多使用(::befor和::after)。
- 注意标签之间的嵌套，尽量少的用行内元素去嵌套块级元素

### 常见标签语义汇总

| 标签    | 语义  |
| :----: | :---- |
| `<header>` | 网页的头部页面 |
| `<nav>`    | 页面的导航链接区域 |
| `<article>`| 在文档，页面或者网站中自成一体的内容 |
| `<section>`| 文档中的“节”或“段” |
| `<aside>`  | 主要内容的附属信息部分 |
| `<footer>` | 网页底部的页脚 |
| `<p>`      | 段落 |
| `<h1> <h2> <h3> ...` | 标题 |
| `<ul>`     | 无序列表 |
| `<ol>`     | 有序列表 |
| `<blockquote>` | 大段引用 |
| `code`     | 代码标识 |
| `<del>`    | 强调某些东西是被删除的 | 

### Class 与 ID 和 标签属性的顺序
- 使用唯一的 id 作为标签的获取标识，尽量不做css样式；
- class 应以功能或者内容命名，不以表现形式命名；
- class 与 id 单词字母小写，多个单词组成时，采用中划线  `-` 分隔；
- 标签属性应保持按照特定的顺序出现以保证易读性，当样式过多时，应换多行显示；
- 顺序：id > class > name > data-xxx > src, for, type, href > title, alt > aria-xxx, role。
  ```
  <a id="..."
    class="..."
    data-modal="toggle"
    href="###">
    提交
  </a>
  <input class="form-control" type="text">
  <img src="..." alt="...">
  ```

### 标签嵌套
- 语义嵌套约束，浏览器大多会容错处理，生成的文档树可能相互不太一样。
  - `<li>` 用于` <ul>` 或 `<ol>` 下；
  - `<dd>`,` <dt>` 用于 `<dl>` 下；
  - `<thead>`,` <tbody>`,` <tfoot>`, `<tr>`, `<td>` 用于 `<table> `下；
- 严格嵌套约束，在所有的浏览器下都不被允许。
  - inline-block 元素，仅可以包含文本或其它 inline-block 元素(例如：<i>、<span>等);
  - `<a>`里不可以嵌套交互式元素`<a>`、`<button>`、`<select>`等;
  - `<p>`里不可以嵌套块级元素`<div>`、`<h1>~<h6>`、`<p>`、`<ul>/<ol>/<li>`、`<dl>/<dt>/<dd>`、`<form>`等。

### 布尔值属性
HTML5 规范中 `disabled`、`checked`、`selected` 等属性不用设置值。
  ```
  <input type="text" disabled>
  <input type="checkbox" value="1" checked>
  <select>
    <option value="1" selected>1</option>
  </select>
  ```
