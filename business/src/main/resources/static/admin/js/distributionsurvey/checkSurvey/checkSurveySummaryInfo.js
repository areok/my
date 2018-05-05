$(function(){ //等界面加载完成后，执行下面内容
    var pushButton = $("#pushButton");
    var supplementInfosTable = $('#supplementInfosTable');
    var pushSupplyFunc = function(){
        if($("#supplementInfoContent").val()==''){
            alert("推送的补充内容不能为空,请确认!");
            return;
        };

        cms.messager.confirm("确定","确定推送吗？",function(){
            if($("#pushButton").disabledButton(true)){
                return;
            }
            $.ajax({
                url         : '/checkSurvey/addCheckSurveySupplement',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  summaryForm.serializeJSONString(),
                success : function (result) {
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert("推送成功!");
                        location.href="/checkSurvey/list";
                        // result.data.editTime = new Date(result.data.editTime).format('yyyy-MM-dd hh:mm:ss.S');
                        // supplementInfosTable.bootstrapTable('prepend',result.data);
                    }
                    else{
                        cms.messager.alert("推送失败,请重新点击推送!");
                        $("#pushButton").disabledButton(false)
                    }

                }
            })
        })
    };
    supplementInfosTable.bootstrapTable();
    pushButton.on("click",pushSupplyFunc);

    var summaryForm = $("#summaryForm");
    var savesummary = $("#savesummary");

    var saveSummaryFunc = function(){

        $.ajax({
            url         : '/checkSurvey/saveCheckSummaryInfo',
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
        })
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
        cms.messager.confirm("确定","贷款、借款人、抵押物信息是否已保存？",function(){
            if($("#submitsummary").disabledButton(true)){
                return;
            }
            $.ajax({
                url         : '/checkSurvey/submitCheckSummaryInfo',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  summaryForm.serializeJSONString(),
                success : function (result) {
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert("提交成功!",function () {
                            location.href="/checkSurvey/list";
                        });
                    }
                    else{
                        cms.messager.alert("提交失败,请重新提交!");
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


    if($("#assignVisitorTab").find("li").disabledButton(true)){
        return;
    }
    if(data !=''){
        cms.dialog({
            titleText : "提示",
            width : "400px",
            disFooter : false,
            cancelBtnShow : false,
            content:data,
            saveBtnShow : true ,
            saveBtnText : "确定",
            save:function(e,dialog){
                if(typeof callback == 'function'){
                    callback();
                }
                dialog.close();
                $("#assignVisitorTab").find("li").disabledButton(false)
            }
        });
    }

});