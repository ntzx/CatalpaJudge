var $$ = mdui.JQ

function getQuestions(id)
{
    $$.ajax({
        method:"GET",
        url:"questions",
        data:{
            id:id,
        },
        success:function(data)
        {
            //渲染界面
        }
    });
}