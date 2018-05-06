var $$ = mdui.JQ

function postCode()
{
    $$.ajax({
        method:"POST",
        url:"test/postCode",
        data:{
            uuid:"uuid",
            lang:"lang",
            code:"code", //等待添加
        },
        success:function(result)
        {
            if(result=='success')
            {
                setTimeout(getResult,5000);
            }
        }
    });
}

function getResult()
{
    $$.ajax({
        method:"GET",
        url:"test/getResult",
        data:{
            id:"id", //等待添加
        },
        success:function(result)
        {
            //渲染界面
        }
    });
}

getQuestion();