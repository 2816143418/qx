/*******************************
a
脚本名称:a

*******************************
[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body https://raw.githubusercontent.com/2816143418/qx/main/11.js
[mitm] 
hostname = *.tuanyougou.*
*******************************
Surge

[Script]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ requires-body=1,max-size=0,script-path=tuanyougou.js

[MITM]
hostname = *.tuanyougou.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.userId= 99999;
    $done({body: JSON.stringify(obj)});


