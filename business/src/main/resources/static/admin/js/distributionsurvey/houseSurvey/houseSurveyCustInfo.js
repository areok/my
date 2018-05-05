$(function(){ //等界面加载完成后，执行下面内容




    $("form").each(function () {
        $(this).validate();
    });


    $("input[name^='custMessages'][name$='harmfulRemark']").each(function(i){
       if($(this).val()!=null && $(this).val()!=''&& $(this).val()!='无'){

       }else{
           $(this).parent().hide();
       }
    });

    (function (){ // 闭包，防止下面定义的变量泄露到整个页面
        var certNo =$("#certNo");
        var saveButton = $("#savecust");
        var form = $("#custForm");

        var saveCust = function(){
            var validator = form.validate();
            if(!validator.form()){
                alert("有未填信息!");
                return;
            }
            $.ajax({
                url         : '/custMessage/saveCustMessageInfos',
                contentType : 'application/x-www-form-urlencoded',
                type        : 'post',
                data        :  form.serialize(),
                success : function (result) {

                    if(result && result.resultCode && result.resultCode=="0000"){

                        cms.messager.alert('保存成功!');
                    }else{
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                        }
                    }
                }
            });
        };
        saveButton.on("click",saveCust);
        
        
        $("#custUl").on('removetab',function(e,param){
        	var contain = param.contain; //删除的元素范围
        	var index = param.index; // input name里面的索引
        	var fresh = param.fresh; //是否是界面新增的借款人
            var cloneDiv = $(param.cloneDiv);
            var cloneLi = $(param.cloneLi);
            cloneLi.attr('data-stay',true);
            var ul = $(this);

            // var custName = contain.find('[name="custMessages[' + index + '].custName"]').val();
            var custId = contain.find('[name="custMessages[' + index + '].id"]').val();

            cms.dialog({
                titleText : "删除借款人信息",
                width : "500px",
                disFooter : false,
                cancelBtnShow : true,
                content:"是否要删除借款人的信息",
                cancelBtnText : "否",
                saveBtnShow : true,
                saveBtnText : "是",
                save:function(e,dialog){

                    deleteCustInfo(custId);
                    $.showNextTab(cloneLi);
                    cloneDiv.remove();
                    cloneLi.remove();
                    dialog.close();
                    ul.trigger('indexchange');
                }
            });

            return false;
        });

        $("#custUl").on('addtab',function (e,param) {
            var contain = param.contain; //添加的元素范围
            var index = param.index; // input name里面的索引
            var custUUID = UUID.prototype.createUUID().toLowerCase();

            contain.find('[name="custMessages[' + index + '].form"]').attr("id",custUUID);
            contain.find('[name="custMessages[' + index + '].savecust"]').attr("custId",custUUID);
            contain.find('[name="custMessages[' + index + '].form"]').validate();
            contain.find('[name="custMessages[' + index + '].id"]').val(custUUID);
            contain.find('[plug-image]').attr('data-cust-id',custUUID);
        });


        $("ul[name='custMessageFamilyMambers']").each(function () {
            var custIndex = $(this).attr('data-num-prefix');


            $(this).on('addtab',function(e,param){
                var contain = param.contain; //添加的元素范围

                var index = param.index; // input name里面的索引
                var fresh = param.fresh; //是否是界面新增的借款人
                var custUUID = UUID.prototype.createUUID().toLowerCase();
                var cloneDiv = $(param.cloneDiv);
                var cloneLi = $(param.cloneLi);
                cloneLi.attr('data-stay',true);
                contain.find('[name="custMessages[' + (custIndex-1) + '].familyMambers['+index+'].id"]').val(custUUID);
                return true;
            });

            $(this).on('removetab',function(e,param){
                var contain = param.contain; //删除的元素范围

                var index = param.index; // input name里面的索引
                var fresh = param.fresh; //是否是界面新增的借款人
                var cloneDiv = $(param.cloneDiv);
                var cloneLi = $(param.cloneLi);
                var ul = $(this);
                
                cloneLi.attr('data-stay',true);
                var custId = contain.find('[name="custMessages[' + (custIndex-1) + '].familyMambers['+index+'].id"]').val();
                cms.dialog({
                    titleText : "删除家庭成员信息",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"是否要删除家庭成员的信息",
                    cancelBtnText : "否",
                    saveBtnShow : true,
                    saveBtnText : "是",
                    save:function(e,dialog){

                        deleteFamilyMamber(custId);
                        $.showNextTab(cloneLi);
                        cloneDiv.remove();
                        cloneLi.remove();
                        dialog.close();
                        ul.trigger('indexchange');
                    }
                });
                return true;
            });
        });

    }());
});
function deleteCustInfo(id) {
    $.ajax({
        url         : '/custMessage/deleteCustMessage',
        contentType : "application/json; charset=utf-8",
        type        : 'post',
        data        :  JSON.stringify({"id":id,"taskType":"26"}), //下户删除借款人
        success : function (result) {
            if(result && result.resultCode && result.resultCode=="0000"){
                cms.messager.alert('删除成功!')
            }
        }
    });
}

function deleteFamilyMamber(id) {
    $.ajax({
        url         : '/custMessage/deleteFamilyMamber',
        contentType : "application/json; charset=utf-8",
        type        : 'post',
        data        :  JSON.stringify({"id":id}),
        success : function (result) {
            if(result && result.resultCode && result.resultCode=="0000"){
                cms.messager.alert('删除成功!')
            }
        }
    });
}

function checkFamIterStat(currentDom) {
    var type = $(currentDom).attr('type');
   
    if(type == 'radio'){
        $(currentDom).parent().parent().find('input[type="checkbox"]').each(function () {
            if($(this).val()=='4'){
                $(this).parent().next().find('input').val('无');
                $(this).parent().next().hide();
            }
            $(this).attr("checked",false);

        });
    }else{

        if($(currentDom).val()=='4'){

            if($(currentDom).is(':checked')){
                $(currentDom).parent().next().find('input').val('');
                $(currentDom).parent().next().show();
            }else{
                $(currentDom).parent().next().find('input').val('无');
                $(currentDom).parent().next().hide();
            }

        }

        $(currentDom).parent().parent().find('input[type="radio"]').each(function () {
            $(this).attr("checked",false);
        });
    }
}


function checkCustMessageCertNo(currentDom) {

    var indexNum = getIndexNum($(currentDom).attr('name'));

    // var certNo = $(currentDom).val();

    var custMessageCertNo='custMessages'+indexNum+'.certNo';
    var certNo = $(currentDom).parent().parent().parent().find('input[name="'+custMessageCertNo+'"]').val();

    var custMessageName = 'custMessages'+indexNum+'.custName';
    var name = $(currentDom).parent().parent().parent().find('input[name="'+custMessageName+'"]').val();
    var data = 'certNo='+certNo+'&name='+name;

    if(name=='' || certNo==''){
        return ;
    }

    var json = showBirthday(certNo);

    //链带年龄
    var custMessageAge='custMessages'+indexNum+'.age';
    $(currentDom).parent().parent().parent().find('input[name="'+custMessageAge+'"]').val(json.age || '');

    //链带性别
    var custMessageSex = 'custMessages'+indexNum+'.sex';
    $(currentDom).parent().parent().parent().find('input[name="'+custMessageSex+'"]:radio[value="'+json.sex+'"]').prop("checked",true);

    $.ajax({
        async: false,
        url         : '/mockOuterInterface/mockRealNameAuth',
        contentType : 'application/x-www-form-urlencoded',
        type        : 'post',
        data        :  data,
        success : function (result) {
            if(result && result.resultCode=="0000"){
            }else{
                $(currentDom).parent().parent().parent().find('input[name="'+custMessageName+'"]').val('');
                cms.messager.alert("用户身份验证失败!");
            }
        }
    });

}


function checkFamilyCertNo(currentDom) {
    var namePar=$(currentDom).attr('name');
    namePar = namePar.substring(0,namePar.lastIndexOf(".")+1);

    var familyCertNo=namePar+'certNo';
    var familyName=namePar+'name';
    var certNo = $(currentDom).parent().parent().parent().find('input[name="'+familyCertNo+'"]').val();

    var name = $(currentDom).parent().parent().parent().find('input[name="'+familyName+'"]').val();

    var data = 'certNo='+certNo+'&name='+name;

    if(name==''|| certNo ==''){
        return ;
    }

    var json = showBirthday(certNo);

    //链带年龄
    var familyAge=namePar+'age';

    $(currentDom).parent().parent().parent().find('input[name="'+familyAge+'"]').val(json.age || '');

    //链带性别
    var familySex = namePar+'sex';
    $(currentDom).parent().parent().parent().find('input[name="'+familySex+'"]:radio[value="'+json.sex+'"]').prop("checked",true);

    $.ajax({
        async: false,
        url         : '/mockOuterInterface/mockRealNameAuth',
        contentType : 'application/x-www-form-urlencoded',
        type        : 'post',
        data        :  data,
        success : function (result) {
            if(result && result.resultCode=="0000"){
            }else{
                $(currentDom).parent().parent().parent().find('input[name="'+familyName+'"]').val('');
                cms.messager.alert("用户身份验证失败!");
            }
        }
    });

}

function getIndexNum(name) {
    return  name.substring(name.indexOf("["),name.indexOf("]")+1);
}


function submitCustInfo(obj) {
    //设置性别单选disabled失效
    $(".sexRadio").attr("disabled",false);
    var formId = $(obj).attr('custId');
    var form = $("#"+formId);
    var validator = form.validate();
    if(!validator.form()){
        cms.messager.alert('有未填写信息!');
        return;
    }

    $.ajax({
        url         : '/custMessage/saveCustMessageInfos',
        contentType : 'application/x-www-form-urlencoded',
        type        : 'post',
        data        :  form.serialize(),
        success : function (result) {
            $(".sexRadio").attr("disabled","disabled");
            if(result && result.resultCode && result.resultCode=="0000"){
                cms.messager.alert('保存成功!');
            }else{
                if(result && result.resultMsg){
                    cms.messager.alert(result.resultMsg);
                }
            }
        }
    });
}
