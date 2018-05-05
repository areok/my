$(function(){ //等界面加载完成后，执行下面内容
    (function (){ // 闭包，防止下面定义的变量泄露到整个页面
        var table = $('#extentionApprove');
        var cancelbuttons = table.find('button').filter(function(index){return $(this).html()=="删除"});
        var otherbuttons = table.find('button').filter(function(index){return $(this).html()!="删除"});

        function getBussNoPeriods(button){
            return 'bussNo='+button.attr('data-buss-no')+'&periods='+button.attr('data-periods');
        }


        otherbuttons.on('click',function(){
            var button = $(this);
            location.href = button.attr('data-href')+'?bussNo='+button.attr('data-buss-no');

        });

        cancelbuttons.on('click',function(){
            var button = $(this);

            cms.messager.prompt('删除展期',function(e,remark){
                if(!remark){
                    cms.message.alert('请填写删除展期原因!');
                    return false;
                }
                $.ajax({
                    url         :  button.attr('data-href'),
                    contentType : 'application/x-www-form-urlencoded',
                    type        : 'post',
                    data        :  'bussNo='+button.attr('data-buss-no')+'&remark='+remark,
                    success : function (result) {
                        if(result && result.resultCode && result.resultCode=="0000"){
                            if(result.resultMsg){
                                cms.messager.alert(result.resultMsg,function () {
                                    location.reload();
                                });
                            }
                            return;
                        }
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                            return;
                        }
                    }
                });
                return true;
            });
        });

    }())
})
