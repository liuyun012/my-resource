# CSS常用样式封装

## 编译css文件命令

```
# 下载项目依赖
npm install

# 将 src 下的scss文件都编译成带兼容性的 css文件 和 压缩css文件，方便项目引入
gulp
```

## src文件目录
- index.scss : css样式汇总输出主文件
- common(通用的css样式库)
  - reset.scss: 浏览器样式重置
  - animate.scss: css3动画库样式
  - mixins.scss: sass常用封装函数
  - flex-layout.scss: flex布局样式库
  - variable.scss: 项目主题 样式变量汇总
  - vue-transition.scss: Vue转场动画 <transition> 组件自定义样式名
  - common.scss: 通用 class 文件
- modules(常用的UI组件样式库)
- components(常见的组合组件样式)
