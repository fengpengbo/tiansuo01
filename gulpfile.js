var gulp = require("gulp");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var minfyCSS = require("gulp-minify-css");
var minfyIMG = require("gulp-imagemin");

//复制html
gulp.task("copyhtml",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo"));
	
});

//复制图片
gulp.task("imgs",function(){
	gulp.src("img/*.{jpg,png}")
	.pipe(minfyIMG())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\img"));
	
	
});

// 复制js
gulp.task("uglifyjs",function(){
	gulp.src("js/*.js")
	// .pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\js"));	
});
//复制css
gulp.task("uglifycss",function(){
	gulp.src("css/jd.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\css"));	
});
gulp.task("css",function(){
	gulp.src("css/iconfont.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\css"));	
});
gulp.task("fonts",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\font"));	
});
// 复制php
gulp.task("uglifyphp",function(){
	gulp.src("*.php")
	// .pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo"));	
});

//sass编译
gulp.task("scssfile",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(minfyCSS())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\css"));
});

//合并并且压缩文件
// gulp.task("scripts",function(){
// 	gulp.src(["js/login.js","js/tools.js"])
// 	.pipe(concat("cendor.js"))
// 	.pipe(uglify())
// 	.pipe(rename("vender.min.js"))
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\js"));
// });
//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("*.php",["uglifyphp"]);
	gulp.watch("img/*.{jpg,png}",["imgs"]);
	gulp.watch("js/*.js",["uglifyjs"]);
	gulp.watch("css/jd.css",["uglifycss"]);
	gulp.watch("font/**/*",["fonts"]);
	gulp.watch("css/iconfont.css",["css"]);
	 gulp.watch("scss/*.scss",["scssfile"]);
});