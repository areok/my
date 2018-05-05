$(function(){ //等界面加载完成后，执行下面内容
    (function (){ // 闭包，防止下面定义的变量泄露到整个页面

        var basicForm = $("#basicForm");
        var saveBasic = $("#saveBasic");
        var saveFlag = $("#saveFlag");
        var leftExtentionAmount = $("#leftExtentionAmount");
        var applyAmount = $("#applyAmount");
        var saveBasicFunc = function(){
            var validator = basicForm.validate();
            if(!validator.form()){
                return;
            }
            var leftnum = leftExtentionAmount.val() - 0;
            var applynum = applyAmount.val() - 0;
            if(leftnum < applynum){
                cms.messager.alert("申请展期金额不能超过可展金额!");
                return;
            }
            $.ajax({
                url         : '/extentionApply/saveOrSubmitExtentionApply',
                contentType : 'application/x-www-form-urlencoded',
                type        : 'post',
                data        :  basicForm.serialize(),
                success : function (result) {
                    console.log(result);
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert('保存成功!',function(){location.href="/extensionTaskList/extensionApplyTaskList"});
                        return;
                    }
                    else{
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                        }
                    }


                }
            })
        };
        saveBasic.on("click",saveBasicFunc);

        var submitBasic = $("#submitBasic");
        var submitBasicFunc = function(){


            saveFlag.val('1');
            var validator = basicForm.validate();
            if(!validator.form()){
                saveFlag.val('0');
                return;
            }
            var leftnum = leftExtentionAmount.val() - 0;
            var applynum = applyAmount.val() - 0;
            if(leftnum < applynum){
                cms.messager.alert("申请展期金额不能超过可展金额!");
                return;
            }
            $("#submitBasic").attr("disabled",true);
            cms.messager.confirm("确定","确定提交吗？",function(){

                $.ajax({
                    url         : '/extentionApply/saveOrSubmitExtentionApply',
                    contentType : 'application/x-www-form-urlencoded',
                    type        : 'post',
                    data        :  basicForm.serialize(),
                    success : function (result) {
                        if(result && result.resultCode && result.resultCode=="0000"){
                            cms.messager.alert("提交成功!");
                            location.href="/extensionTaskList/extensionApplyTaskList";
                        }
                        else{
                            cms.messager.alert("提交失败,请重新提交!");//assignVisitorView/assignVisitor?bussNo=zxf01
                            //location.reload();
                            // cms.dialog.modal.modal('hide');
                            //location.href="/assignVisitor?bussNo=" + $("#bussNo").val();
                        }
                        // if(result && result.resultMsg){
                        //     cms.messager.alert(result.resultMsg);
                        // }
                    },
                    error:function(){
                        alert("提交失败");
                        $("#submitBasic").attr("disabled",false)
                    }
                })
            },$("#submitBasic").attr("disabled",false))

        };

        submitBasic.on("click",submitBasicFunc);

        var applyTerm = $("#applyTerm");//贷款期限
        function change(){

            //处理期限
            var applyMax = applyTerm.attr('data-max-leftTerm');
            applyTerm.val('');
            applyTerm.empty();
            var value = applyTerm.attr('data-value');
            applyTerm.append('<option>未选择</option>')
            for(var i = 1 ; i <= applyMax; i++){
                if(i+''==value){
                    applyTerm.append('<option selected="selected" value="'+i+'">'+i+'</option>');
                }else{
                    applyTerm.append('<option value="'+i+'">'+i+'</option>');
                }
            }

        }
        change();
    }())
})