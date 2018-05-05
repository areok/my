$(function(){ //等界面加载完成后，执行下面内容
    (function (){ // 闭包，防止下面定义的变量泄露到整个页面
        var bussForm = $("#bussForm");

        $("#savebuss").click(function(){

            var validator = bussForm.validate();
            if(!validator.form()){
                return;
            }

            $.ajax({
                url         : '/extentionAssess/saveExtentionAssess',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  bussForm.serializeJSONString(),
                success : function (result) {
                    console.log(result);
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert('保存成功!',function(){location.href="/extensionTaskList/extensionPreAssessTaskList"});
                        return;
                    }
                    else{
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                        }
                    }
                }
            });
        });

        $("#submitbuss").click(function(){
            var validator = bussForm.validate();
            if(!validator.form()){
                return;
            }
            $("#submitbuss").attr("disabled",true);
            $.ajax({
                url         : '/extentionAssess/submitExtentionAssess',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  bussForm.serializeJSONString(),
                success : function (result) {
                    console.log(result);
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert('提交成功!',function(){location.href="/extensionTaskList/extensionPreAssessTaskList"});
                        return;
                    }
                    else{
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                        }
                    }
                },
                error:function(){
                    alert("提交失败");
                    $("#submitbuss").attr("disabled",false)
                }
            });
        });
    }());
    //初评价值计算
    var linkedHome = $("#linkedHome");
    var worldUnion = $("#worldUnion");

    var firstAssessPrice = $("#firstAssessPrice");
    var unitPrice = $("#unitPrice");
    var guaranteeGuaArea = $("#guaranteeGuaArea");
    var pledgeAmounted = $("#pledgeAmounted");

    var baseMortrate = $("#baseMortrate");

    var handlefirstAssessPrice = function(){
        var lval = parseFloat(linkedHome.val());
        var wval = parseFloat(worldUnion.val());
        if(lval && wval){
            var val = (wval+lval*0.9)/2;
            var firstval = val*guaranteeGuaArea.val();
            var  maxLoanval = firstval*baseMortrate.val()/100-pledgeAmounted.val();
            unitPrice.val(val);
            firstAssessPrice.val(maxLoanval);
        }
    };
    linkedHome.change(handlefirstAssessPrice);
    worldUnion.change(handlefirstAssessPrice);
});