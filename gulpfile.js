const gulp = require("gulp");
const connect = require("gulp-connect");
//gulp-sass 浏览器本身不支持sass的语法 把sass转成css
const sass = require("gulp-sass");
//gulp-concat 合并 减少请求次数
const concat = require("gulp-concat");
//gulp-uglify 压缩 减小文件大小
const uglify = require("gulp-uglify");
//重新命名
const rename = require("gulp-rename");
//压缩css
const cleanCss = require("gulp-clean-css");
//高版本转低版本
const babel = require("gulp-babel");
//转义压缩
const sourcemaps = require("gulp-sourcemaps");

//拷贝所有文件
gulp.task("copyHtml", done => {
    gulp.src("html/**").pipe(gulp.dest("dist/html")).pipe(connect.reload());
    gulp.src("image/**").pipe(gulp.dest("dist/image")).pipe(connect.reload());
    gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    gulp.src("font/**").pipe(gulp.dest("dist/font")).pipe(connect.reload());
    gulp.src("js/**").pipe(gulp.dest("dist/js")).pipe(connect.reload());
    done();
});


//搭建服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});


//sass任务
gulp.task("sass", done => {

    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});


//监听
gulp.task("watch", done => {

    gulp.watch(["*.html", "html/**", "image/**"], gulp.series("copyHtml"));
    gulp.watch("sass/*.scss", gulp.series("sass"));

    done();
})

//build //同步
gulp.task("build", gulp.parallel("copyHtml", "sass"));

gulp.task("default", gulp.series("server", "build", "watch"));