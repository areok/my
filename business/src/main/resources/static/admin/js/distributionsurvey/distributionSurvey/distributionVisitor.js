$(function(){ //等界面加载完成后，执行下面内容

    //原因选择提示

    var bussNo = $('#bussNo');

    getDistributionVisitor(bussNo.val(),$("#visitorType").val());
    $("#returnAssign").click(function () {
        location.href="/distributionSurvey/list";
    });

        /*$.ajax({
            url         : '/distributionSurvey/releaseLockStatus',
            contentType : "application/json; charset=utf-8",
            type        : 'post',
            data        : JSON.stringify({"bussNo":bussNo.val()}),// {'bussNo=' + bussNo.val()},
            success : function (result) {

                if(result && result.resultCode && result.resultCode=="0000"){
                    location.href="/distributionSurvey/distributionSurveyList";
                }
                if(result && result.resultMsg){
                }
            },
            error:function(){
                alert("返回时释放分配锁失败");
            }
        });
    });*/



    //时间,失去焦点时
    var visitTime = $('#visitTime');
    var visitorType = $('#visitorType');
    var sliceTime = $('#sliceTime');

    $('#sliceTime').change(function(){
        if ((!visitTime.val() && typeof(visitTime.val())!="undefined" && visitTime.val()!=0) || (visitTime.val() == '') || (sliceTime.val() == '')){
            return;
        }

        $.ajax({
            url         : '/distributionSurvey/getVisitorList',
            contentType : 'application/x-www-form-urlencoded',
            type        : 'post',
            data        : 'userID=zxf01&bussNo=' + bussNo.val() + '&area=北京&visitorType=' + visitorType.val() + '&sliceTime=' + sliceTime.val() + '&date=' + visitTime.val(),
            success : function (result) {
                // var data = [];
                if(result && result.resultCode && result.resultCode=="0000"){
                    assignVisitorTab.bootstrapTable('load',result.users);
                    return;
                }
                assignVisitorTab.bootstrapTable('load',[]);
                if(result && result.resultMsg){
                    cms.messager.alert(result.resultMsg);
                }
            }
        })
    });

    //获取调查员列表
    var assignVisitorTab = $("#assignVisitorTab");

    assignVisitorTab.bootstrapTable();
    $('#visitorType').change(function(){
        if ((!visitTime.val() && typeof(visitTime.val())!="undefined" && visitTime.val()!=0) || (visitTime.val() == '') || (sliceTime.val() == '')){
            return;
        }

        $.ajax({
            url         : '/distributionSurvey/getVisitorList',
            contentType : 'application/x-www-form-urlencoded',
            type        : 'post',
            data        : 'userID=zxf01&bussNo=' + bussNo.val() + '&area=北京&visitorType=' + visitorType.val() + '&sliceTime=' + sliceTime.val() + '&date=' + visitTime.val(),
            success : function (result) {
                // var data = [];
                if(result && result.resultCode && result.resultCode=="0000"){
                    assignVisitorTab.bootstrapTable('load',result.users);
                    return;
                }
                assignVisitorTab.bootstrapTable('load',[]);
                if(result && result.resultMsg){
                    cms.messager.alert(result.resultMsg);
                }
            }
        })
    });


    var form = $("#assignForm");
    var visitorId = $("#visitorId");
    var sumbitAssignButton = $("#sumbitAssign");

    var sumbitAssign = function(){

        var validator = form.validate();
        if(!validator.form()){
            return;
        }

        var notice='是否确认提交?';
        var obj = assignVisitorTab.bootstrapTable('getSelections');
        obj = obj.length && obj[0] || null;
        var val = obj && obj.id || false;
        if(val){
            visitorId.val(val);
            $("#visitorName").val(obj.name);
        }else{
            cms.messager.alert("请选择下户调查员!");
            return;
        }

        if($("#curAssignVisitorHistoryRemark").val().trim()==''){
            cms.messager.alert("请填写分配原因!");
            return;
        }

        if($("#reasonType").val()=='1'){
            notice='选择内部原因,分配后外微无需支付下户费,是否确认提交?';
        }

        cms.messager.confirm("确定",notice,function(){
            if($("#sumbitAssign").disabledButton(true)){
                return;
            }
            $.ajax({
                url         : '/distributionSurvey/submitDistributionVisitor',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  form.serializeJSONString(),
                success : function (result) {
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert("分配成功!");
                        location.href="/distributionSurvey/list";
                    }
                    else{
                        cms.messager.alert(result.resultMsg);
                        $("#sumbitAssign").disabledButton(false)
                    }

                },
                error:function(){
                    // alert("提交失败");
                    $("#sumbitAssign").disabledButton(false)
                }
            });
        });

    };
    sumbitAssignButton.on("click",sumbitAssign);


    $("#searchUser").click(function(){


       if($("#searchVisitorName").val().trim() == ''){
           $('#assignVisitorTab').bootstrapTable('showAllColumns');
       }

        $('#assignVisitorTab').bootstrapTable('filterBy',{"name":$("#searchVisitorName").val()});
    });

    $("#visitorType").change(function () {

        getDistributionVisitor(bussNo.val(),$("#visitorType").val());
    });

    $("#searchVisitorName").blur(function () {
       if($("#searchVisitorName").val()=='') {
           $('#assignVisitorTab').bootstrapTable('filterBy',{});
       }

    });

});

function getDistributionVisitor(bussNo,visitorType,userName) {
    $.ajax({
        url         : '/distributionSurvey/getVisitorList',
        contentType : 'application/x-www-form-urlencoded',
        type        : 'post',
        data        : 'visitorType=' + visitorType ,
        success : function (result) {
            if(result && result.resultCode && result.resultCode=="0000"){
                $("#assignVisitorTab").bootstrapTable('load',result.users);
                return;
            }
            $("#assignVisitorTab").bootstrapTable('load',[]);
            if(result && result.resultMsg){
                cms.messager.alert(result.resultMsg);
            }
        }
    });
}