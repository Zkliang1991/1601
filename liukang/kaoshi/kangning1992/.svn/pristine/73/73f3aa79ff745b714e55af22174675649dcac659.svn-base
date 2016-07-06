<?php
error_reporting(E_ALL||~E_NOTICE);
header('Content-type:text/html;charset=utf-8');
require_once "jssdk.php";
$jssdk = new JSSDK("wxbe2eec7ba1d02aff", "371befb928712e94d926435ee4a31495");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
      <button id="btn" style="font-size:100px;color:pink;">拍照</button>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  wx.config({
    debug: true,   //表示开启调试模式
    appId: '<?php echo $signPackage["appId"];?>',  //必填，公众号的唯一标识
    timestamp: <?php echo $signPackage["timestamp"];?>,
    // 必填，生成签名的时间戳
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    // 必填，生成签名的随机串
    signature: '<?php echo $signPackage["signature"];?>',
    // 必填，签名
    jsApiList: [
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
      //必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function () {
    // 在这里调用 API
    document.getElementById('btn').onclick =function(){
        wx.chooseImage({   //拍照或从手机相册中选图接口
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          }
      });
    }

    wx.getNetworkType({
        success: function (res) {
            var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
            alert(networkType);
        }
      });

    wx.onMenuShareTimeline({
        title: '郑州1601最棒的', // 分享标题
        link: 'http://cute8888.applinzi.com/wx/swiper.html', // 分享链接
        imgUrl: 'http://cute8888.applinzi.com/wx/tuzi.jpg', // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
            alert('谢谢你！')

        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });
  });
</script>
</html>
