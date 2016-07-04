define(function(require,exports,module){
  require('swiper-3.3.1.min.js');
  //定义P对象
  var P = {
    _init:function(){
      P.initswiper();
     	// P.foo();

    },
    fooinit:function(){
    	P.foo();
    },
    initswiper:function(){
      var myswiper = new Swiper('.swiper-container',{
        loop:true,
        speed:2000,
      })
      P.initechart(); 
    },
    foo:function(){
    	console.log("我的天！")
    },
    initechart:function(){
      console.log('echart');
    }
  }
  //对外提供整个接口 暴露
  module.exports = {
    init:P._init,
    init1:P.fooinit	   
  }
})

