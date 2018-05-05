$(function(){ //等界面加载完成后，执行下面内容

    var loanForm = $("#loanForm");
    var saveloan = $("#saveloan");
    loanForm.validate();

    var saveLoanFunc = function(){
        var validator = loanForm.validate();
        if(!validator.form()){
            return;
        }
        if($("#saveloan").disabledButton(true)){
            return;
        }
        $.ajax({
            url         : '/houseSurvey/saveLoanInfo',
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            data        :  loanForm.serializeJSONString(),
            success : function (result) {
                console.log(result);
                if(result && result.resultCode && result.resultCode=="0000"){
                    cms.messager.alert("保存成功!");


                }else{
                    if(result && result.resultMsg){
                        cms.messager.alert(result.resultMsg);
                    }
                }
                $("#saveloan").disabledButton(false)
            }
        });
    };
    saveloan.on("click",saveLoanFunc);

});