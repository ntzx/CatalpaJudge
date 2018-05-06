var $$ = mdui.JQ

function getQuestion()
{
    $$.ajax({
        method:"GET",
        url:"question/getQuestion",
        data:{
            id:'id', //等待添加
        },
        success:function(questiontext)
        {
            //渲染界面
        }
    });
}

function postCode()
{
    $$.ajax({
        method:"POST",
        url:"question/postCode",
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
        url:"question/getResult",
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