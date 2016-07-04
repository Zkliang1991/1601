<?php
//解决乱码
error_reporting(E_ALL||~E_NOTICE);
header('Content-type:text/html;charset=utf-8');

// 
require_once "jssdk.php";
$jssdk = new JSSDK("wx91302493ca4f2e86", "3c3891625d52aac33367d760cbc9a498");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />

  <title></title>
</head>
<body>
   <h1>微信开发</h1>
      <div id="picBox"></div>
      <button id="btn" >拍照</button>
      <button id="downBtn" >上传</button>
      <p id="btnShow">点击显示上传图片</p>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
       'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
    ]
  });
  wx.ready(function () {
    // var btn=document.getElementById('btn');
    // btn.onclick=function(){
    //   wx.chooseImage({
    //       count: 1, // 默认9
    //       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //       success: function (res) {
    //           var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //       }
    //   });
    // }
    // 在这里调用 API

    wx.getNetworkType({
      success: function (res) {
          var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
          alert(networkType);
      }
    });

    wx.onMenuShareTimeline({
        title: '郑州1601最棒的', // 分享标题
        link: 'http://kangning1992.applinzi.com/myweixin/swiper.html', // 分享链接
        imgUrl: 'http://kangning1992.applinzi.com/myweixin/tuzi.jpg', // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
            alert('谢谢你！')

        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareAppMessage({
        title: '啊啊啊啊', // 分享标题
        desc: '好惨', // 分享描述
        link: 'http://kangning1992.applinzi.com/myweixin/swiper.html', // 分享链接
        imgUrl: 'http://kangning1992.applinzi.com/myweixin/tuzi.jpg', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareQQ({
       title: '啊啊啊啊', // 分享标题
        desc: '好惨', // 分享描述
        link: 'http://kangning1992.applinzi.com/myweixin/swiper.html', // 分享链接
        imgUrl: 'http://kangning1992.applinzi.com/myweixin/tuzi.jpg', // 分享图标
    success: function () { 
       // 用户确认分享后执行的回调函数
    },
    cancel: function () { 
       // 用户取消分享后执行的回调函数
    }
});

    wx.onMenuShareWeibo({
        title: '啊啊啊啊', // 分享标题
        desc: '好惨', // 分享描述
        link: 'http://kangning1992.applinzi.com/myweixin/swiper.html', // 分享链接
        imgUrl: 'http://kangning1992.applinzi.com/myweixin/tuzi.jpg', // 分享图标
    success: function () { 
       // 用户确认分享后执行的回调函数
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
    }
});

    wx.onMenuShareQZone({
        title: '啊啊啊啊', // 分享标题
        desc: '好惨', // 分享描述
        link: 'http://kangning1992.applinzi.com/myweixin/swiper.html', // 分享链接
        imgUrl: 'http://kangning1992.applinzi.com/myweixin/tuzi.jpg', // 分享图标
    success: function () { 
       // 用户确认分享后执行的回调函数
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
    }

    });
// 获取地理位置接口
    wx.getLocation({
    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
    }
});

    wx.previewImage({
    current: 'http://kangning1992.applinzi.com/myweixin/tuzi.jpg', // 当前显示图片的http链接
    urls: ['http://kangning1992.applinzi.com/myweixin/tuzi.jpg'] // 需要预览的图片http链接列表
});

    wx.uploadImage({
    localId: '10.8.166.39', // 需要上传的图片的本地ID，由chooseImage接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (res) {
        var serverId = res.serverId; // 返回图片的服务器端ID
    }
});

    // document.getElementById('btn').onclick=function(){
    //   wx.chooseImage({
    //     count:1,
    //     sizeType:['original','compressed'],
    //     sourceType
    //   })
    // }

    var localIds = null;
        var serverId = null;
    document.getElementById('btn').onclick =function(){
        wx.chooseImage({   //拍照或从手机相册中选图接口
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
               localIds = res.localIds;
                document.getElementById('picBox').style.backgroundImage = "url("+localIds+")";
               // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
               document.getElementById('picBox').style.backgroundSize = 'cover';

          }
      });
    }

    // document.getElementById('downBtn').onclick = function(){
    //     alert(localIds.toString());
    //     wx.uploadImage({
    //         localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
    //         isShowProgressTips: 1, // 默认为1，显示进度提示
    //         success: function (res) {
    //             erverId = res.serverId; // 返回图片的服务器端ID
    //             alert("上传成功");
    //             alert(erverId)
    //         }
    //     });
    // }

    document.getElementById('downBtn').onclick = function(){
        wx.uploadImage({
            localId: localIds.toString(), //  字符串操作需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
                var serverId = res.serverId; // 返回图片的服务器端ID
                alert('上传成功')
            }
        });
    }
    document.getElementById('btnShow').onclick =function(){
        wx.downloadImage({
            serverId: erverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
                var localId = res.localId; // 返回图片下载后的本地ID
                alert('下载中...');
                document.getElementById('btnShow').style.backgroundImage = "url("+localId+")";
                document.getElementById('btnShow').backgroundSize = 'cover';
            }
        });
    }

</script>
</html>
