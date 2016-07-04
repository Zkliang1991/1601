define(function(require,exports,module){
	require('./zepto');
	require('zepto-tap');
	var P = {
		_init:function(){
			P.initlogin();
		},
		initlogin:function(){
			$('#reg').on('tap',function(){
				window.location.href = 'login.html';
			});
		},
	}
	module.exports = {
		init:P._init
	}
})