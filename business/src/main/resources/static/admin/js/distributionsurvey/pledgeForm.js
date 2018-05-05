function savePledgeForm(data,callback) {

    $.ajax({
        url         : '/loanCommon/savePledgeForm',
        contentType : 'application/json; charset=utf-8',
        type        : 'post',
        dataType    : 'json',
        data        :  JSON.stringify(data),
        success : function (result) {
            console.log(result);
            if(result && result.resultCode && result.resultCode=="0000"){
                cms.messager.alert("保存成功!");
                callback(result.resultMsg)
            }else{
                cms.messager.alert("保存失败!");
            }
        }
    });
}

function updatePledgeForm(data) {
    $.ajax({
        url         : '/loanCommon/updatePledgeForm',
        contentType : 'application/json; charset=utf-8',
        type        : 'post',
        dataType    : 'json',
        data        :  JSON.stringify(data),
        success : function (result) {
            console.log(result);
            if(result && result.resultCode && result.resultCode=="0000"){
                cms.messager.alert("更新成功!");
            }else{
                cms.messager.alert("更新失败!");
            }
        }
    });
}

function deletePledgeForm(data) {
    $.ajax({
        url         : '/loanCommon/deletePledgeForm',
        contentType : 'application/json; charset=utf-8',
        type        : 'post',
        dataType    : 'json',
        data        :  JSON.stringify(data),
        success : function (result) {
            console.log(result);
            if(result && result.resultCode && result.resultCode=="0000"){
                cms.messager.alert("删除成功!");
            }else{
                cms.messager.alert("删除失败!");
            }
        }
    });
}