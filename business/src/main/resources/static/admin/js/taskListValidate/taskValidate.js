function cxfp(url){
    if(!confirm("请确认是否重新分配?")) return ;
    $.ajax({
        url         : url,
        contentType : 'application/x-www-form-urlencoded',
        type        : 'post',
        success : function (result) {

            if(result && result.resultCode && result.resultCode=="0000"){
                alert("取消分配成功，请重新分配");
                location.href="/distributionSurvey/list";
            }
            else{
                if(result && result.resultMsg){
                    alert(result.resultMsg);
                }
            }
        },
        error:function(){
            alert("重新分配失败");
        }
    });

};



