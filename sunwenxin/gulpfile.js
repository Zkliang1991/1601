var gulp = require('gulp');

var sass = require('gulp-sass');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var name = require('vinyl-named');
var webpack = require('gulp-webpack');
var webserver = require('gulp-webserver');
//2.mock 数据
var url = require('url');
var fs = require('fs');
//3 sass预编译  合并压缩
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');// 压缩css文件
//4 js压缩 模块化开发
var named = require('vinyl-named');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
//5版本替换
var rev = require('gulp-rev'); //版本号生成
var revCollector = require('gulp-rev-collector'); // 版本号替换

gulp.task('copy-index',function(){
	return gulp.src('html/index.html')
	.pipe(gulp.dest('app'))
})

gulp.task('images',function(){
	return gulp.src('img/**/*.{png,jpg}')
	.pipe(gulp.dest('app/prd/img'))
})

gulp.task('data',function(){
	return gulp.src('json/**/*')
	.pipe(gulp.dest('app/prd/json'))
})

gulp.task('sass',function(){
	return gulp.src('css/index.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('app/prd/css'))
})

gulp.task('less',function(){
	return gulp.src('css/swx.less')
	.pipe(less())
	.pipe(gulp.dest('app/prd/css'))
})
gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
	gulp.watch('css/index.scss',['sass']);
	gulp.watch('js/index.js',['packjs']);
})

gulp.task('webserver',function(){
	gulp.src('./')    //表示当前文件夹
	.pipe(webserver({
		livereload:true,
		directoryListing:{  //表示要不要在浏览器中显示应用路径
			enable:true,
			path:'./'    //表示服务器的启动路径 localhost
		},
		port:80, //端口号
		host:'localhost', //主机
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

	}))
})

gulp.task('packjs',function(){
	return gulp.src(jsFiles)
	.pipe(name())    //表示执行name插件
	.pipe(webpack({  //实现js模块化
		output:{
			filename:'[name].js'   //通过name  一一对应文件名称
		},
		module:{
			loaders:[{
				test:/\.js$/,loader:'imports?define=>false'
			}]
		},		
		resolve:{  //表示文件名称过长，或者文件目录较深的时候的简化处理
			alias:{
				
			}
		},
		devtool:'#eval-source-map',
	}))
	// .pipe(uglify().on('error',function(e){ //表示错误不会挂起服务
	// 	console.log('\x07',e.lineNumber,e.message);
	// 	return  this.end();
	// }))
	.pipe(gulp.dest('app/prd/js'));
})

gulp.task('default',['webserver','watch']);