$(function(){ //等界面加载完成后，执行下面内容
	(function (){ // 闭包，防止下面定义的变量泄露到整个页面
		var form = $("#subForm");

		var calculateButton = $('#calculate');
		var submitButton = $('#submit');
        var repay = $("#payTotalInfo");
        var repayTime = $('[name="repayTime"]');
        var bussNo = $('[name="bussNo"]');
        var nfId = $('[name="nfId"]');

        var payNotarialfees = $("#payNotarialfees");
        var payRealNotarialfees = $("#payRealNotarialfees");

        function getDate(){
        	return 'bussNo='+bussNo.val()+'&repay='+repay.val()+'&repayTime='+repayTime.val()+'&nfId='+nfId.val();
        }

        //提交
		var submitFunc =  function submit(){
            repay.attr("required", "required");
            //repayTime.attr("required", "required");
			var validator = form.validate();
			if(!validator.form()){
				return;
			}
			var reg = /^[0-9]*\.?[0-9]{0,6}$/;
            if(!reg.test(repay.val()) || parseFloat(repay.val()) <= 0){
                cms.messager.alert("还款金额必须大于零，且最多为六位小数！");
                return;
            }

            if(parseFloat(repay.val()) > parseFloat(payNotarialfees.text())){
                cms.messager.alert("还款金额【"+parseFloat(repay.val())+"万元】不能大于应收款总额【"+parseFloat(payNotarialfees.text())+"万元】");
                return;
            }
            cms.messager.confirm("操作提示", "本次还款金额为【"+repay.val()+"】万元，您确定要执行【提交核销】操作吗？", function (data) {
                if (data) {
                    $.ajax({
                        url         : '/writeoffmanage/writeoffnotarialfees/submit',
                        contentType : 'application/x-www-form-urlencoded',
                        type        : 'post',
                        data        :  getDate(),
                        success : function (result) {
                            if(result && result.resultCode && result.resultCode=="0000"){
                                if(result.resultMsg){
                                    cms.messager.alert("公证费核销提交成功!");
                                    payRealNotarialfees.text(result.payRealNotarialfees==0?'0.00':result.payRealNotarialfees);
                                    $("input").attr("disabled", "true");
                                    $("#trainCalculate").attr("disabled", "true");
                                    $("#submit").attr("disabled", "true");
                                    $("#fieldsetForm").attr("disabled", "disabled");
                                }
                                return;
                            }
                            if(result && result.resultMsg){
                                cms.messager.alert(result.resultMsg);
                                return;
                            }

                        }
                    })
                }
            });
		}
		submitButton.on("click",submitFunc);

		//还款计算请求
		function calcBillsInfo() {
            $.ajax({
                url         : '/writeoffmanage/writeoffnotarialfees/calculate',
                contentType : 'application/x-www-form-urlencoded',
                type        : 'post',
                data        :  getDate(),
                success : function (result) {
                    if(result && result.resultCode && result.resultCode=="0000"){
                        if(result.resultMsg){
                            cms.messager.alert("公证费核销计算成功!");
                            payNotarialfees.text(result.payNotarialfees);
                        }
                        return;
                    }
                    if(result && result.resultMsg){
                        cms.messager.alert(result.resultMsg);
                        return;
                    }

                }
            })
        }
		
        //计算还款信息按钮
        var trainCalculateBtnFunc =  function trainCalc(){
            //repayTime.removeAttrs("required");
            repay.removeAttrs("required");
            var validator = form.validate();
            if(!validator.form()){
                return;
            }
            calcBillsInfo();

        }
        calculateButton.on("click", trainCalculateBtnFunc);

	}())
})
