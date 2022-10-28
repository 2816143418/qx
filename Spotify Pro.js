Spotify Pro解锁部分功能，音质不能设置超高  app版本8.7.78
下载地址：http://mtw.so/6qFvqC
hostname= spclient.wg.spotify.com
****************************************/
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/2816143418/qx/main/Spotify.js
