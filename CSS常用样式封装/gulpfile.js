/**
 * @Author: qinzhenxing
 * @Date:   2018-01-19T15:48:08+08:00
 * @Last modified by:   qinzhenxing
 * @Last modified time: 2018-01-19T16:35:06+08:00
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sassToCss'], function() {
  return gulp.src('dist/css/**/*.css')      // 压缩 css 文件
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/min'));
});

// 将sass文件编译成css文件
gulp.task('sassToCss', function() {
  return gulp.src('src/**/*.scss')  // 编译的scss文件
    .pipe(sass())                    // 编译
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0'],
      cascade: true, // 是否美化属性值 默认：true
      remove:true    // 是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest('dist/css'));        // css输出目录
});
