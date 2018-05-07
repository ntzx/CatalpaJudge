var $$ = mdui.JQ  

function uuid()
{
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}//我也知道uuid不该是这么简单，但先这样凑合

$$('#postCode').on('click',function postCode(e){
    uuid = uuid();
    $$('#uuid').text(uuid);
    data={
        uuid:uuid,
        lang:"lang",//如何选择
        code:$$("#code").text(), 
    };
    console.log($$("#lang").selected);
    console.log(data);
    $$.ajax({
        method:"POST",
        url:"test/postCode",
        data:data,
        success:function(result)
        {
            var inst = new mdui.Tab('#tab');
            inst.show('tab2');
            $$('#output').text('您的代码已成功上传，请等待几秒后按刷新按钮获取结果，每次点击刷新按钮都会获得最新的输出');
        }
    });
});

$$("#getResult").on("click",function getResult(e){
    $$.ajax({
        method:"GET",
        url:"test/getResult",
        data:{
            id:$$('#uuid').text(),
        },
        success:function(result)
        {
            $$("#output").text(result);
        }
    });
});