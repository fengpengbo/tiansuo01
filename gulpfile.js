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
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\js"));	
});
// gulp.task("uglifycss",function(){
// 	gulp.src("css/*.css")
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\css"));	
// });


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
	gulp.watch("img/*.{jpg,png}",["imgs"]);
	gulp.watch("js/*.js",["uglifyjs"]);
	// gulp.watch("css/*.css",["uglifycss"]);
	 gulp.watch("scss/*.scss",["scssfile"]);
});