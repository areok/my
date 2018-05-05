$(function(){ //等界面加载完成后，执行下面内容
    var mortForm = $("#mortForm");
    var savemortinfo = $("#savemortinfo");
    mortForm.validate();

    checkOwnershipNo();//先对比
    $("#guaranteeOwnershipNo").change(function(){
        checkOwnershipNo();
    });


    $("#guaranteeUserStatus").change(function () {
        if($("#guaranteeUserStatus").val()==3){
            //出租情况

            $("input[name='guarantee.rentStatus']").attr('required','required');
            $("input[name='guarantee.hireUse']").attr('required','required');
        }

    });

    $("#guaranteeDisgust").click(function () {
        $("input[name='guarantee.disgust'][type='checkbox']").each(function () {
            $(this).attr("checked",false);
        });
    });
    //附近嫌恶设施
    $("input[name='guarantee.disgust'][type='checkbox']").click(function () {
        $("#guaranteeDisgust").attr("checked",false);
    });

    var railwayInfoVal=$('input:radio[name="guarantee.railwayInfo"]:checked').val();
    if(railwayInfoVal == null || railwayInfoVal == '' || railwayInfoVal == undefined || railwayInfoVal == '2'){
        document.getElementById("metro").readOnly=true;
        document.getElementById("station").readOnly=true;
        document.getElementById("walk").readOnly=true;
    }



    function deletePFRecord(id){
        if(!confirm("请确认是否删除该条记录?")) return ;

        $.ajax({
            url         : '/pledgeForm/delete',
            contentType : 'application/x-www-form-urlencoded',
            type        : 'post',
            data        :  'id=' + id,
            success : function (result) {

                if(result && result.resultCode && result.resultCode=="0000"){

                }else{
                    if(result && result.resultMsg){
                        alert(result.resultMsg);
                    }
                }

            },
            error:function(){
                alert("删除抵押物历史信息失败");
            }
        });

    };




    var saveMortinfoFunc = function(){

        // if(!checkGuaranteeHouseForm()) return ;

        var validator = mortForm.validate();
        if(!validator.form()){
            return;
        }

        $.ajax({
            url         : '/houseSurvey/saveHouseMortInfo',
            contentType : 'application/x-www-form-urlencoded',
            type        : 'post',
            data        :  mortForm.serialize(),
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
    savemortinfo.on("click", saveMortinfoFunc);


    //维护所有劝人

    var ownshipScales = $('#ownshipScales');
    var ownshipNames = $('#ownshipNames');
    var ownshipTable = $('#ownshipTable');
    var ownshipSure =$('#ownshipSure');
    var updateMaitain = function(e){
        var button = $(this);
        var modal = button.parents('.modal');
        var sacles = [];
        var data = ownshipTable.bootstrapTable('getData');
        var maitain = [];
        var sum = 0;
        for(var i in data){
            var v = parseFloat(data[i].scale);
            if(v >= 0){
                sum += v;
                sacles.push(data[i].scale);
                maitain.push(data[i].owerShipName);
            }
        }
        if(sum != 100){
            cms.messager.alert('共有权之和不为100%，请调整后保存！');
            return;
        }
        ownshipScales.val(sacles.join(','));
        ownshipNames.val(maitain.join(','));
        ownshipTable.trigger('rowchange');
        modal.modal('hide');

        $.ajax({
            url         : '/preLoanCommon/updateHouseOwnerShip',
            contentType : 'application/json; charset=utf-8',
            type        : 'post',
            dataType    : 'json',
            data        :  JSON.stringify(data),
            success : function (result) {
                if(result && result.resultCode && result.resultCode=="0000"){
                    cms.messager.alert("保存成功!");
                }else{
                    cms.messager.alert("保存失败!");
                }
            }
        });

    };
    ownshipTable.bootstrapTable();
    ownshipTable.bootstrapTable('refreshOptions',{
        columns: [{},{},{},{},{
            field: "scale",
            editable: {
                type: 'text',
                title: '共有情况(%)',
                validate: function (v) {
                    if (isNaN(v)) return '必须是数字';
                    var scale = parseFloat(v);
                    if (scale < 0 || scale>100 ) return '0-100之间选择';
                }
            }
        }]
    });
    ownshipSure.click(updateMaitain);

    
  //地铁校验
    $('[name="guarantee.railwayInfo"]').click(railwayInfoChange);
    function railwayInfoChange(){
    	var val = $('[name="guarantee.railwayInfo"]:checked').val();
    	if(val == '1'){
    		$("input[name='guarantee.metro']").removeClass('ignore').prop('readonly',false);
    		$("input[name='guarantee.station']").removeClass('ignore').prop('readonly',false);
    	    $("input[name='guarantee.walk']").removeClass('ignore').prop('readonly',false);
    	}else{
    		$("input[name='guarantee.metro']").addClass('ignore').val('').prop('readonly',true).next('.validate-tooltip').remove();
    		$("input[name='guarantee.station']").addClass('ignore').val('').prop('readonly',true).next('.validate-tooltip').remove();
    	    $("input[name='guarantee.walk']").addClass('ignore').val('').prop('readonly',true).next('.validate-tooltip').remove();
    	}
    }
    railwayInfoChange();
    
});

function checkOwnershipNo() {
    $.ajax({
        url         : '/houseSurvey/checkOwnershipNo',
        contentType : 'application/x-www-form-urlencoded',
        type        : 'post',
        data        :  'bussNo=' + $("#bussNo").val(),
        success : function (result) {

            if(result && result.admittanceOwnershipNo){
                if($("#guaranteeOwnershipNo").val()!=result.admittanceOwnershipNo){
                    $("#guaranteeOwnershipNo").css('color','red');
                }else{
                    $("#guaranteeOwnershipNo").css('color','');
                }
            }

        },
        error:function(){
            alert("删除抵押物历史信息失败");
        }
    });
}





