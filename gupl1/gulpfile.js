// 导入gulp系统模块
const {src,dest,watch,series} = require('gulp');
const {default:postcss} = require('postcss');
// 导入gulp-sass模块
const sass = require('gulp-sass')(require('sass'));
// 导入browser-sync模块
const browsersyncServer=require("browser-sync").create();

const post = require('gulp-postcss');

// const cssnano = require('cssnano');

const autoprefixer = require('autoprefixer');

const terser = require('gulp-terser')

const concat = require('gulp-concat')

// Task1:编译sass
function sassTask() {
  var plugins = [
    autoprefixer({browsers: ['last 1 version']}),
    // cssnano()
];
    // 只要异步就要return
    // src源头 数据源 设置数据源的路径同时打开sourcemaps
    return src('scss/main.scss',{sourcemaps:true})
    // pipe管道
    .pipe(sass())

    .pipe(post(plugins))
    // dest 目的地
    .pipe(dest('dist',{sourcemaps:'.'}))
  }
  
  // Task2:压缩代码
// function compressTask(cb) {
//     // place code for your default task here
//     cb();
//   }

// 合并与压缩JS
function jsTask(){
  return src('js/**/*.js',{sourcemaps: true })
  .pipe(concat('all.js'))
  .pipe(terser())
  .pipe(dest('dist',{sourcemaps:'.'}))
}

  // Task3:服务器
function serverTask(cb) {
    browsersyncServer.init({
        server:{
            baseDir:'.'
        }
    });
    cb();
  }
  function bsReload(cb){
      browsersyncServer.reload()
      cb()
  }
  function bsWatch(done){
    watch('index.html',bsReload)
    watch(['scss/main.sass'],series(sassTask,bsReload))
    done()
}
  
//   exports.default = defaultTask
        exports.default = series(
            sassTask,
            jsTask,
            serverTask,
            bsWatch
        )


  
