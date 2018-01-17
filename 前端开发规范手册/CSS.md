# CSS规范

### 通俗约定
- 代码组织
  - 以组件为单位组织代码段，写好各组件间的注释，注释规范一致；
  - 组件间和样式间都要有 一空行 的间隔；
  - 按css文件功能进行区分分组，合理安排前后的引入顺序。
- Class 和 ID
  - 使用语义化、通用的命名方式，避免无意义的英文或者数字命名；
  - 统一使用连字符 - 作为 ID、Class 名称链接，不要驼峰和下划线；
  - 避免选择器嵌套层级过多，尽量不要超过 3级；
  - 避免选择器和Class、ID 叠加使用。
- 声明块格式
  - 选择器分组时，保持独立的选择器占用一行；
  - 声明块的左括号 { 前添加一个空格；
  - 声明块的右括号 } 应单独成行；
  - 声明语句中的 : 后应添加一个空格；
  - 一般以逗号分隔的属性值，每个逗号后应添加一个空格；
  - rgb()、rgba()、hsl()、hsla() 或 rect() 括号内的值，逗号分隔，但逗号后不添加一个空格；
  - 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）；
  - 十六进制值应该全部小写和尽量简写，例如，#fff 代替 #ffffff；
  - 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;；

    ```html
    /* css推荐书写方式 */
    .selector,
    .selector-secondary,
    .selector[type="text"] {
      color: #fff;
      padding: 15px;
      margin-bottom: 15px;
      background-color: rgba(0,0,0,.5);
      box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
    }
    ```
- 声明属性顺序
  - 相关属性为一组，推荐的样式编写顺序为：
  - 定位(Positioning) > 盒模型(box model) > 字体排版(Typographic) > 视觉体验(Visual) > 其他(Other)

  ```
  /* css单个样式推荐写法 */
  .declaration-order {
    /* Positioning */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* Box model */
    float: right;
    overflow: hidden;
    display: block;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    /* Typographic */
    font-size: 16px;
    line-height: 1.5;
    text-align: center;

    /* Visual */
    color: #fff;
    opacity: .8;
    background-color: #f5f5f5;

    /* Other */
    cursor: pointer;
  }
  ```
- 引号引用
  - url()、属性选择符、属性值推荐使用双引号
  ```
  /* 推荐写法 */
  @import url("//www.google.com/css/maia.css");

  html {
    font-family: "open sans", arial, sans-serif;
  }

  .selector[type="text"] {

  }
  ```
- 链接的样式顺序：`a:link -> a:visited -> a:hover -> a:active`
- 使用 Autoprefixer 自动添加浏览器厂商前缀，编写 CSS 时不需要添加浏览器前缀，保证代码的简洁。

### CSS目录结构及分类
- 目录结构
  - 基础样式库(重置样式、mixins函数、变量文件、布局样式、公用样式)
  - 通用UI组件样式库(button、icon、list、dialog等)
  - 页面相关组件样式库(组件页面各自的样式)
- 注释规范
  1. 文件顶部注释(推荐通过插件完成)
  ```
  /*
  * @description: 中文说明
  * @author: name
  * @update: name (2013-04-13 18:32)
  */
  ```
  2. 模块注释(多人协作)
  ```
  /* module: module1 by 张三 */
  …
  /* module: module2 by 张三 */
  ```
  3. 单行注释
  4. 区块注释
  ```
  /* Header */
  /* Footer */
  /* Gallery */
  ```
- 命名规范
  - ID和class的命名应反映该元素的功能或使用通用名称，而不要用抽象的晦涩的命名。
  - 常用命名（多记多查英文单词）：page、wrap、layout、header(head)、footer(foot、ft)、content(cont)、menu、nav、main、submain、sidebar(side)、logo、banner、title(tit)、popo(pop)、icon、note、btn、txt、iblock、window(win)、tips等
  - 命名越简短越好，只要足够表达涵义。
  - 命名避免使用中文拼音，应该采用更简明有语义的英文单词进行组合。
  - 命名注意缩写，但是不能盲目缩写。
  - 不允许通过1、2、3等序号进行命名。
  - 尽可能提高代码模块的复用，样式尽量用组合的方式
  - 规则名称中不应该包含颜色（red/blue）、定位（left/right）等与具体显示效果相关的信息。应该用意义命名，而不是样式显示结果命名。
  - 层级(z-index)必须清晰明确，页面弹窗、气泡为最高级（最高级为999），不同弹窗气泡之间可在三位数之间调整；普通区块为10-90内10的倍数；区块展开、弹出为当前父层级上个位增加，禁止层级间盲目攀比。
- 常用命名推荐
  1. 页面结构：容器: container、页头：header、内容：content/container、页面主体：main、页尾：footer、导航：nav、侧栏：sidebar、栏目：column、页面外围控制整体布局宽度：wrapper、左右中：left right center。
  2. 导航：导航：nav、主导航：mainbav、子导航：subnav、导航：topnav、边导航：sidebar、左导航：leftsidebar、右导航：rightsidebar、菜单：menu、子菜单：submenu、标题: title、摘要: summary
  3. 功能：标志：logo、广告：banner、登陆：login、登录条：loginbar、注册：regsiter、搜索：search、功能区：shop、标题：title、加入：joinus、状态：status、按钮：btn、滚动：scroll、标签页：tab、文章列表：list、提示信息：msg、当前的: current、小技巧：tips、图标: icon、注释：note、指南：guild、服务：service、热点：hot、新闻：news、下载：download、投票：vote、合作伙伴：partner、友情链接：link、版权：copyright。

### 代码性能优化
1. 合并margin、padding、border的-left/-top/-right/-bottom的设置，尽量使用短名称。
2. 选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置。
3. 如果没有边框时，不要写成border:0，应该写成border:none 。
4. 在保持代码解耦的前提下，尽量合并重复的样式。
5. background、font等可以缩写的属性，尽量使用缩写形式。
6. 慎重选择高消耗的样式：box-shadows、border-radius、transparency、transforms、CSS filters（性能杀手）
7. Float在渲染时计算量比较大，尽量减少使用。
8.
