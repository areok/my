$(function(){ //等界面加载完成后，执行下面内容
    var summaryForm = $("#summaryForm");
    var savesummary = $("#savesummary");
    var saveSummaryFunc = function(){

        $.ajax({
            url         : '/houseSurvey/saveSummaryInfo',
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            data        :  summaryForm.serializeJSONString(),
            success : function (result) {
                console.log(result);
                if(result && result.resultCode && result.resultCode=="0000"){
                    cms.messager.alert("保存成功!");
                }
                else{
                    if(result && result.resultMsg){
                        cms.messager.alert(result.resultMsg);
                    }
                }


            }
        });
    };
    savesummary.on("click",saveSummaryFunc);
    var saveFlag = $("#saveFlag");
    var submitsummary = $("#submitsummary");
    var submitSummaryFunc = function(){
        saveFlag.val('1');
        var validator = summaryForm.validate();
        if(!validator.form()){
            saveFlag.val('0');
            return;
        }
        cms.messager.confirm("确定","确定提交吗？",function(){
            if($("#submitsummary").disabledButton(true)){
                return;
            }
            $.ajax({
                url         : '/houseSurvey/submitSummaryInfo',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  summaryForm.serializeJSONString(),
                success : function (result) {
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert("提交成功!");
                        location.href="/houseSurvey/list";
                    }
                    else{
                        cms.messager.alert(result.resultMsg);
                        $("#submitsummary").disabledButton(false)
                    }

                },
                error:function(){
                    alert("提交失败");
                    $("#submitsummary").disabledButton(false)
                }
            })
        })

    };

    submitsummary.on("click",submitSummaryFunc);
});