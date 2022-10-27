[rewrite_local]
^http[s]?:\/\/uu.tuanyougou.com\/\/video\/registryUser.+$ url script-response-body https://github.com/2816143418/qx/blob/main/qx.js
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
    obj.data.userId= 88888;
    $done({body: JSON.stringify(obj)});
