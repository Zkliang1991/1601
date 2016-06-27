var gulp = require('gulp');

var sass = require('gulp-sass');
var less = require('gulp-less');

var connect = require('gulp-connect');
//依赖合并插件
var concat = require('gulp-concat');

//依赖压缩插件
var uglify = require('gulp-uglify');
//依赖重新命名插件
var rename = require('gulp-rename'); 
//css压缩插件
var minifyCSS = require('gulp-minify-css');
var webserver=require('gulp-webserver');
//引入
var webpack=require('gulp-webpack');
var imagemin = require('gulp-imagemin');
//处理name的插件
var name=require("vinyl-named");

var url=require("url");
var fs=require("fs");

//版本替换
var rev=require("gulp-rev"); //生成版本号
var revCollector=require("gulp-rev-collector");
/*gulp.task('hello',function(){

})

gulp.task('hello',function(){
	console.log('hello');
});*/

gulp.task('copy-index',function(){
	return gulp.src('index.html').pipe(gulp.dest('app'))

})

gulp.task('webserver',function(){
	gulp.src("./")
	.pipe(webserver(
	{
		livereload:true,
		directoryListing:{
			enable:true,
			path:"./"
		},
		port:8010,//端口号
		host:"localhost",//主机
		middleware: function(req, res, next) {   //middleware 中间键 req :request  , res:respone,
	        var urlObj = url.parse(req.url, true),
	            method = req.method;
	        switch (urlObj.pathname) {
	            case '/app/imgaes':
	                var data = {
	                    "status": 0,
	                    "errmsg": "",
	                    "data": [{}]
	                };
	                console.log(data);
	                res.setHeader('Content-Type', 'application/json');
	                fs.readFile('mock/optlist.json','utf-8',function(err,data){
	                    res.end(data);
	                });
	                return;
	            case 'api/orders':
	               	 console.log(urlObj.pathname)
	               	res.setHeader('Content-Type', 'application/json');
	                fs.readFile('json/data2.json','utf-8',function(err,data){
	                    res.end(JSON.stringify(data));
	                    console.log('thiszkl')
	                });
	                return;
	            case '/api/images':
	                // ...
	                return;
	            default:
	                ;
	        }
	        next();
	    }

	}
	))
})
var cssFiles=["src/css/index.scss"];
gulp.task("sass",function(){
	return gulp.src(cssFiles)
	.pipe(sass().on("error",sass.logError))
	/*.pipe(minifyCSS())*/
	.pipe(gulp.dest("app/prd/css"))
});


gulp.task("less",function(){
	gulp.src("src/css/zkl.less")
	.pipe(less())
	.pipe(gulp.dest("app/prd/css"));
});


var jsFile=["src/js/index.js"];
gulp.task("packjs",function(){
	return gulp.src(jsFile)
	.pipe(name())         //表示name插件
	.pipe(webpack({			//实现js模块化
		output:{
			filename:"[name].js" //一一对应文件
		},
		module:{
			loaders:[
				{test:/\.js/,loader:"imports?define=>false"}
			]
		},
		resolve:{  //表示文件名称过长或者文件目录较深时简化处理
			alias:{

			}
		},
		devtool:"#eval-source-map"
	}))
	.pipe(uglify().on("error",function(e){//错误不会挂起服务
		console.log("\x07",e.lineNumber,e.message);
		return this.end();
	}))
	.pipe(gulp.dest("app/prd/js"))
});
gulp.task('data',function(){
	return gulp.src('src/json/**/*').pipe(gulp.dest('app/prd/json'));
});
//版本控制，避免缓存
var cssRevFiles=["app/prd/css/index.css"];
var jsRevFiles=["app/prd/js/index.js"];
gulp.task("rev",function(){
	gulp.src(cssRevFiles)
	.pipe(rev())   //生成版本号
	.pipe(gulp.dest("app/prd/css"))
	.pipe(rev.manifest())    //生成json文件的缓存目录md5方式
	.pipe(gulp.dest("app/rev/css"))


	gulp.src(jsRevFiles)
	.pipe(rev())   //生成版本号
	.pipe(gulp.dest("app/prd/js"))
	.pipe(rev.manifest())    
	.pipe(gulp.dest("app/rev/js"))
})
gulp.task('html',function(){
	return gulp.src(['app/rev/**/*.json','app/*.html'])
	.pipe(revCollector({replaceReved:true}))
	.pipe(gulp.dest('app/'));
});

gulp.task("img",function(){
	return gulp.src("src/img/**/*.png")
	.pipe(gulp.dest("app/prd/img"));
})

gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index'])
	gulp.watch("src/css/*.scss",["sass"])
	gulp.watch("src/js/**/*",["packjs"])
	gulp.watch("src/img/**/*",["img"])
	gulp.watch('src/json/**/*',['data']);
	gulp.watch(['src/css/**/*','src/js/**/*'],['rev']);
	gulp.watch('app/rev/**/*.json',['html']);
})

gulp.task('default',['webserver','watch']);
