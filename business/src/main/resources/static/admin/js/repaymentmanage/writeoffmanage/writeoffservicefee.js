$(function(){ //等界面加载完成后，执行下面内容
	(function (){ // 闭包，防止下面定义的变量泄露到整个页面
		var form = $('form');
		var table = $("#pusinterestTable");
        var payFlowTable = $('#payFlowTable');

		var calculateButton = $('#calculate');
		var submitButton = $('#submit');
		var calculateFlag = $('#calculateFlag');
        var expectSum = $('[name="expectSum"]');
        var realSum = $('[name="realSum"]');

		var curRealSum = $('[name="curRealSum"]');
		var leftExpectSum = $('[name="leftExpectSum"]');

		var curServiceFee = $('[name="curServiceFee"]');
		var curPlatformFee = $('[name="curPlatformFee"]');

		var leftRepaymentService = $('[name="leftRepaymentService"]');
		var leftRepaymentPlatform = $('[name="leftRepaymentPlatform"]');

        var repaymentService = $('[name="repaymentService"]');
        var realRepaymentService = $('[name="realRepaymentService"]');
		var platformFee = $('[name="repaymentPlatform"]');
		var realPlatformFee = $('[name="realRepaymentPlatform"]');
        var periods = $('[name="periods"]');
        var bussNo = $('[name="bussNo"]');
        var sequenceNum = $("#sequenceNum");
        var payTotalInfo = $('#payTotalInfo');
        var repayTime = $('[name="repayTime"]');

        var payRepaymentService = $("#payRepaymentService");
        var payRepaymentPalte = $("#payRepaymentPalte");
        var payRealRepaymentService = $("#payRealRepaymentService");
        var payRealRepaymentPalte = $("#payRealRepaymentPalte");
        var payTotalRepayment = $("#payTotalRepayment");
        var payRealTotalRepayment = $("#payRealTotalRepayment");
        
        function initSum(){
        	expectSum.val((repaymentService.val()-0)+(platformFee.val()-0));
        	realSum.val((realRepaymentService.val()-0)+(realPlatformFee.val()-0));
			//剩余应收服务费=账单应收服务费-账单实收服务费
			leftRepaymentService.val((repaymentService.val()-0)-(realRepaymentService.val()-0));
			//剩余应收平台费=账单应收平台费-账单实收平台费
			leftRepaymentPlatform.val((platformFee.val()-0)-(realPlatformFee.val()-0));
			//本次实收,可能出现差距,该直接取还款金额还是这样
			curRealSum.val((curServiceFee.val()-0)+(curPlatformFee.val()-0));
			//剩余应收=账单应收合计-账单实收合计
			leftExpectSum.val((expectSum.val()-0)-(realSum.val()-0));
        }
        initSum();

        function getDate(){
        	return 'bussNo='+bussNo.val()+'&periods='+periods.val()+'&repay='+payTotalInfo.val()+
				'&repayTime='+repayTime.val()+'&sequenceNum='+sequenceNum.val();
        }

        function changeCalcFlag(flagVal) {
            calculateFlag.val(flagVal);
        }
        var calcChangeFun = function calcChange() {
            changeCalcFlag("0");
        }
        repayTime.on("click",calcChangeFun);

		var calculateFunc =  function save(){
            payTotalInfo.removeAttrs("required");
            var validator = form.validate();
            if(!validator.form()){
                return;
            }
			
			$.ajax({
		 		url         : '/writeoffmanage/writeoffservicefee/calculate',
		 		contentType : 'application/x-www-form-urlencoded',
		 		type        : 'post',
		 		data        :  getDate(),
		 		success : function (result) {
					if(result && result.resultCode && result.resultCode=="0000"){
						calculateFlag.val('1');
						if(result.resultMsg){
							cms.messager.alert("服务费核销计算成功!");
						}
                        payRepaymentService.text(result.payRepaymentService);
                        payRepaymentPalte.text(result.payRepaymentPalte);
                        payTotalRepayment.text(result.payTotalRepayment);
		 				return;
		 			}
		 			if(result && result.resultMsg){
		 				cms.messager.alert(result.resultMsg);
		 				return;
		 			}

		 		}	
		 	})
		}
		calculateButton.on("click",calculateFunc);

		var submitFunc =  function submit(){
            payTotalInfo.attr("required", "required");
            var validator = form.validate();
            if(!validator.form()){
                return;
            }
            var reg = /^[0-9]*\.?[0-9]{0,6}$/;
            if(!reg.test(payTotalInfo.val()) || parseFloat(payTotalInfo.val()) <= 0){
                cms.messager.alert("还款金额必须大于零，且最多为六位小数！");
                return;
            }
            if(calculateFlag.val()!='1' || payTotalRepayment.text()==''){
                cms.messager.alert("请先选择还款时间和还款金额进行计算后才能提交核销!");
                return;
            }
            if(parseFloat(payTotalInfo.val()) > parseFloat(payTotalRepayment.text())){
                cms.messager.alert("还款金额【"+parseFloat(payTotalInfo.val())+"万元】不能大于应收款总额【"+parseFloat(payTotalRepayment.text())+"万元】");
                return;
            }
			cms.messager.confirm("操作提示", "本次还款金额为【"+payTotalInfo.val()+"】万元，您确定要执行【提交核销】操作吗？", function (data) {
                if (data) {
                    $.ajax({
                        url: '/writeoffmanage/writeoffservicefee/submit',
                        contentType: 'application/x-www-form-urlencoded',
                        type: 'post',
                        data: getDate(),
                        success: function (result) {
                            if (result && result.resultCode && result.resultCode == "0000") {
                                if (result.resultMsg) {
                                    cms.messager.alert("服务费核销提交成功!");
                                    payRealRepaymentService.text(result.payRealRepaymentService);
                                    payRealRepaymentPalte.text(result.payRealRepaymentPalte);
                                    payRealTotalRepayment.text(result.payRealTotalRepayment);
                                    $("input").attr("disabled", "true");
                                    calculateButton.attr("disabled", "true");
                                    submitButton.attr("disabled", "true");
                                    table.bootstrapTable('load', result.billsList);
                                    //刷新还款流水
                                    payFlowTable.bootstrapTable('load',result.repaymentFlowList);
                                }
                                return;
                            }
                            if (result && result.resultMsg) {
                                cms.messager.alert(result.resultMsg);
                                return;
                            }
                        }
                    })
                }

            })
		}
		submitButton.on("click",submitFunc);

	}())
})