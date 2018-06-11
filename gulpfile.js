var gulp = require("gulp");
// var uglify = require("gulp-uglify");
var sass = require("gulp-sass");

//复制html
gulp.task("tiansuo",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo"));
	
});

//复制图片
gulp.task("imgs",function(){
	gulp.src("img/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\img"));
	
	
});

// 压缩js
gulp.task("uglifyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\js"));	
});
gulp.task("uglifycss",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\css"));	
});


//sass编译
// gulp.task("scssfile",function(){
// 	gulp.src("scss/*.scss")
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\tiansuo\\css"));
// });

//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["tiansuo"]);
	gulp.watch("img/*.{jpg,png}",["imgs"]);
	gulp.watch("js/*.js",["uglifyjs"]);
	gulp.watch("css/*.css",["uglifycss"]);
	// gulp.watch("scss/*.scss",["scssfile"]);
});