var url = $request.url;
if(url.indexOf('video.qq') != -1)
{
  var CookieName = "腾讯视频";
  var CookieKey = "chavy_cookie_videoqq";
} else if (url.indexOf('acfun') != -1)
{
  var CookieName = "AcFun";
  var CookieKey = "chavy_cookie_acfun";
}
var CookieValue = $request.headers['Cookie'];
if ($persistentStore.read(CookieKey) != (undefined || null)) {
  if ($persistentStore.read(CookieKey) != CookieValue) {
    var cookie = $persistentStore.write(CookieValue, CookieKey);
    if (!cookie) {
      $notification.post("更新" + CookieName + "Cookie失败‼️", "", "");
    } else {
      $notification.post("更新" + CookieName + "Cookie成功 🎉", "", "");
    }
  }
} else {
  var cookie = $persistentStore.write(CookieValue, CookieKey);
  if (!cookie) {
    $notification.post("首次写入" + CookieName + "Cookie失败‼️", "", "");
  } else {
    $notification.post("首次写入" + CookieName + "Cookie成功 🎉", "", "");
  }
}

$done();
