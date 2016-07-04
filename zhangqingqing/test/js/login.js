define(function(require,exports,module){
	require('./zepto');
	require('zepto-tap');
	var P = {
		_init:function(){
			P.initreg();
		},
		initreg:function(){
			$('#reg').on('tap',function(){
				window.location.href = '../html/register.html';
			});
			$('#login-index').on('tap',function(){
				window.location.href = '../html/index.html';
			});
		},
	}
	module.exports = {
		init:P._init
	}
})