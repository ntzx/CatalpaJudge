var $$ = mdui.JQ

function getUuid()
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

function getQuestion()
{
    var url = document.URL
    var id = url.match(/\/question\/(.*?)\//)[1];
    $$.ajax({
        method:"GET",
        url:"question/getQuestion",
        data:{
            id:id,
        },
        success:function(questiontext)
        {
            $$("#question").text(questiontext);
        }
    });
}

$$('#postCode').on('click',function postCode(e){
    var uuid = getUuid();
    $$('#uuid').text(uuid);
    var select = document.getElementById("lang").options;
    var lang = select[document.getElementById("lang").selectedIndex].text;
    var data={
        uuid:uuid,
        lang:lang,
        code:$$("#code").text(), 
    };
    $$('#code').prop('readOnly',true);
    $$('#result').prop('hidden',false);
    $$('#result').text('Waiting...');
    $$.ajax({
        method:"POST",
        url:"test/postCode",
        data:data,
        success:function(result)
        {
            setTimeout(getResult,5000);
        }
    });
});

function getResult()
{
    $$.ajax({
        method:"GET",
        url:"question/getResult",
        data:{
            id:$$('#uuid').text(),
        },
        success:function(result)
        {
            $$("#result").text(result);
        }
    });
}

getQuestion();