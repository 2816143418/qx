/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
Ff

脚本名称:Ff

使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body tuanyougou.js
[mitm] 
hostname = *.tuanyougou.*
*******************************
