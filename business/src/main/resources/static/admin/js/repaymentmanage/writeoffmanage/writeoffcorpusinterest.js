$(function(){ //等界面加载完成后，执行下面内容
	(function (){ // 闭包，防止下面定义的变量泄露到整个页面
		var form = $('form');
        var table = $('#pusinterestTable');
        var payFlowTable = $('#payFlowTable');

		var calculateButton = $('#calculate');
		var submitButton = $('#submit');
        var trainCalculateBtn = $('#trainCalculate');
		var calculateFlag = $('#calculateFlag');
        var expectSum = $('[name="expectSum"]');
        var realSum = $('[name="realSum"]');

		var curRealSum = $('[name="curRealSum"]');
		var leftExpectSum = $('[name="leftExpectSum"]');

		var curInterest = $('[name="curInterest"]');
		var curCorpus = $('[name="curCorpus"]');
		var curOverdueFee = $('[name="curOverdueFee"]');

		var leftRepaymentCorpus = $('[name="leftRepaymentCorpus"]');
		var leftRepaymentInterest = $('[name="leftRepaymentInterest"]');
		var leftRepaymentOverdueFee = $('[name="leftRepaymentOverdueFee"]');

        var repaymentCorpus = $('[name="repaymentCorpus"]');
        var realRepaymentCorpus = $('[name="realRepaymentCorpus"]');
        var repaymentInterest = $('[name="repaymentInterest"]');
        var realRepaymentInterest = $('[name="realRepaymentInterest"]');
        var repaymentOverdueFee = $('[name="repaymentOverdueFee"]');
        var realRepaymentOverdueFee = $('[name="realRepaymentOverdueFee"]');
		var reduceOverdueFee = $('[name="reduceOverdueFee"]');
        var repay = $('[name="repay"]');
		var patialCorpus = $('[name="patialCorpus"]');
        var repayTime = $('[name="repayTime"]');
        var periods = $('[name="periods"]');
        var bussNo = $('[name="bussNo"]');
        var sequenceNum = $("#sequenceNum");
        var payTotalInfo = $("#payTotalInfo");

        var payOverdueFine = $("#payOverdueFine");
        var reduceInternetFine = $("#reduceInternetFine");
        var payRepaymentInterest = $("#payRepaymentInterest");
        var payRepaymentCorpus = $("#payRepaymentCorpus");
        var payTotal = $("#payTotal");

        var isPreWriteoff = $('[name="isPreWriteoff"]');
        var isAll = $('[name="isAll"]');

		function initSum(){
			expectSum.val((repaymentCorpus.val()-0)+(repaymentInterest.val()-0)+(repaymentOverdueFee.val()-0)-(reduceOverdueFee.val()-0));
			realSum.val((realRepaymentCorpus.val()-0)+(realRepaymentInterest.val()-0)+(realRepaymentOverdueFee.val()-0));
			//剩余应收本金=账单应收本金-账单实收本金
			leftRepaymentCorpus.val((repaymentCorpus.val()-0)-(realRepaymentCorpus.val()-0));
			//剩余应收罚息=账单应收罚息-账单实收罚息-减免罚息
			leftRepaymentOverdueFee.val((repaymentOverdueFee.val()-0)-(realRepaymentOverdueFee.val()-0)-(reduceOverdueFee.val()-0));
			//剩余应收利息=账单应收利息-账单实收利息
			leftRepaymentInterest.val((repaymentInterest.val()-0)-(realRepaymentInterest.val()-0));
			//本次实收,可能出现差距,该直接取还款金额还是这样
			curRealSum.val((curInterest.val()-0)+(curCorpus.val()-0)+(curOverdueFee.val()-0));
			//剩余应收=账单应收合计-账单实收合计
			leftExpectSum.val((expectSum.val()-0)-(realSum.val()-0));
		}
		initSum();

        function fillBills(bills, billsList){
        	for(var i in billsList){
        		var temp = billsList[i];
				temp.repaymentTime = (new Date(temp.repaymentTime-0)).format('yyyy-MM-dd');
				temp.gracePeriodEndTime = temp.gracePeriodEndTime && (new Date(temp.gracePeriodEndTime-0)).format('yyyy-MM-dd');
			}
        	if(bills){
        		repaymentCorpus.val(bills.repaymentCorpus);
        		realRepaymentCorpus.val(bills.realRepaymentCorpus);
        		repaymentInterest.val(bills.repaymentInterest);
        		realRepaymentInterest.val(bills.realRepaymentInterest);
        		repaymentOverdueFee.val(bills.repaymentOverdueFee);
        		realRepaymentOverdueFee.val(bills.realRepaymentOverdueFee);
				reduceOverdueFee.val(bills.reduceOverdueFee);
        		bills.repaymentTime = (new Date(bills.repaymentTime-0)).format('yyyy-MM-dd');
				bills.gracePeriodEndTime = bills.gracePeriodEndTime && (new Date(bills.gracePeriodEndTime-0)).format('yyyy-MM-dd');
				curCorpus.val(bills.curCorpus);
				curInterest.val(bills.curInterest -0);
				curOverdueFee.val(bills.curOverdueFee);
				initSum();
        		table.bootstrapTable('load',billsList);
        	}
        }

        function refreshRepaymentFlow(bussNo){
            $("#repaymentBillsFlow").html("");
            $.ajax({
                url:'/writeoffmanage/queryRepaymentflow',
                contentType : 'application/x-www-form-urlencoded',
                type:'post',
                data:{bussNo:bussNo},
                success:function(data){
                    alert(data);
                    //将返回的html放入指定div
                    $("#repaymentBillsFlow").html(data);
                    //重新转译该div中数据
                    reTranslateDiv("repaymentBillsFlow");
                },
                error:function(){
                    alert("查询还款计划失败！");
                },
            });
        }
        function calcFillBills(result){
            payOverdueFine.text(result.payOverdueFine);
            reduceInternetFine.text(result.reduceInternetFine);
            payRepaymentInterest.text(result.payRepaymentInterest);
            payRepaymentCorpus.text(result.payRepaymentCorpus);
            payTotal.text(result.payTotal);
        }
        function getDate(){
        	return 'bussNo='+bussNo.val()+'&periods='+periods.val()+'&repay='+repay.val()+
                '&patialCorpus='+patialCorpus.val()+'&repayTime='+repayTime.val()+
                '&isPreWriteoff='+$('input[name="isPreWriteoff"]:checked').val()+
                '&isAll='+$('input[name="isAll"]:checked').val()+'&sequenceNum='+sequenceNum.val();
        }
        function changeCalcFlag(flagVal) {
            calculateFlag.val(flagVal);
        }
        var calcChangeFun = function calcChange() {
            changeCalcFlag("0");
        }
        repayTime.on("click",calcChangeFun);
        isPreWriteoff.on("click",calcChangeFun);
        isAll.on("click",calcChangeFun);

        //试算
		var calculateFunc =  function save(){
            payTotalInfo.attr("required", "required");
            var validator = form.validate();
            if(!validator.form()){
                return;
            }
            if(calculateFlag.val()!='1'){
                cms.messager.alert("请先选择还款时间和还款金额进行计算后才能试算!");
                return;
            }

			$.ajax({
				url         : '/writeoffmanage/writeoffcorpusinterest/calculate',
				contentType : 'application/x-www-form-urlencoded',
				type        : 'post',
				data        :  getDate(),
				success : function (result) {
					if(result && result.resultCode && result.resultCode=="0000"){
						calculateFlag.val('1');
						if(result.resultMsg){
							cms.messager.alert("本息核销试算成功!");
						}
                        calcFillBills(result);
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

        //提交
		var submitFunc =  function submit(){
            payTotalInfo.attr("required", "required");
			var validator = form.validate();
			if(!validator.form()){
				return;
			}
			var reg = /^[0-9]*\.?[0-9]{0,6}$/;
            if(!reg.test(repay.val()) || parseFloat(repay.val()) <= 0){
                cms.messager.alert("还款金额必须大于零，且最多为六位小数！");
                return;
            }
            if(calculateFlag.val()!='1' || payTotal.text()==''){
                cms.messager.alert("请先选择还款时间和还款金额进行计算后才能提交核销!");
                return;
            }
            if(parseFloat(repay.val()) > parseFloat(payTotal.text())){
                cms.messager.alert("还款金额【"+parseFloat(repay.val())+"万元】不能大于应收款总额【"+parseFloat(payTotal.text())+"万元】");
                return;
            }
            cms.messager.confirm("操作提示", "本次还款金额为【"+repay.val()+"】万元，您确定要执行【提交核销】操作吗？", function (data) {
                if (data) {
                    $.ajax({
                        url         : '/writeoffmanage/writeoffcorpusinterest/submit',
                        contentType : 'application/x-www-form-urlencoded',
                        type        : 'post',
                        data        :  getDate(),
                        async: false,
                        success : function (result) {
                            if(result && result.resultCode && result.resultCode=="0000" && result.curBill){
                                if(result.resultMsg){
                                    cms.messager.alert("本息核销提交成功!");
                                    $("#curOverdueFee").text(result.curBill.curOverdueFee==0?'0.00':result.curBill.curOverdueFee);
                                    $("#curInterest").text(result.curBill.curInterest==0?'0.00':result.curBill.curInterest);
                                    $("#curCorpus").text(result.curBill.curCorpus==0?'0.00':result.curBill.curCorpus);
                                    $("#curTotalAmt").text(result.curBillTotal==0?'0.00':result.curBillTotal);
                                    $("input").attr("disabled", "true");
                                    $("#trainCalculate").attr("disabled", "true");
                                    $("#submit").attr("disabled", "true");
                                    table.bootstrapTable('load',result.billsList);
                                    //刷新还款流水
                                    payFlowTable.bootstrapTable('load',result.repaymentFlowList);
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

		//提前还款按钮切换
		isPreWriteoff.click(changePreWriteoff);
		function changePreWriteoff(){

			var value = isPreWriteoff.filter(':checked').val();
			if(value == '1'){
                isAll.prop('disabled',false).removeClass('ignore');
			}else{
                isAll.prop('disabled',true).prop('checked',false).addClass('ignore');
			}
			changeAll();
		}
		var isPartialYes = $('#isPartialYes');
		var isPartialNo = $('#isPartialNo');
		var repayTimeWapper = $('#repayTimeWapper');
		isAll.click(changeAll);
		function changeAll(){
			var selected = isAll.filter(':checked');
			if(selected.val() == '2'){
				if(selected.attr('data-reason')){
					cms.messager.alert(selected.attr('data-reason'));
					isPartialNo.prop('checked',false);
					return;
				}else{
					repayTimeWapper.fadeIn().find('input').removeClass('ignore');
				}
			}else{
				if(selected.attr('data-reason')){
					cms.messager.alert(selected.attr('data-reason'));
					isPartialYes.prop('checked',false);
					return;
				}else {
					repayTimeWapper.fadeOut().find('input').addClass('ignore');
				}
			}
		}

		//还款计算请求
		function calcBillsInfo() {
            $.ajax({
                url         : '/writeoffmanage/writeoffcorpusinterest/calculate',
                contentType : 'application/x-www-form-urlencoded',
                type        : 'post',
                data        :  getDate(),
                success : function (result) {
                    if(result && result.resultCode && result.resultCode=="0000"){
                        calculateFlag.val('1');
                        if(result.resultMsg){
                            cms.messager.alert("本息核销计算成功!");
                        }
                        calcFillBills(result);
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

            payTotalInfo.removeAttrs("required");
            var validator = form.validate();
            if(!validator.form()){
                return;
            }

            var d2 = new Date(repayTime.val().replace(/\-/g, "\/")); //还款时间
            //还款时间不能小于账单的开始时间
            var beforeDate=new Date($("#fistRepTime").val().replace(/\-/g, "\/"));
            if(d2<beforeDate){
                cms.messager.alert("还款时间不能小于账单的开始时间！");
                return false;
            }
            //还款时间不能小于上次实还时间
            var minRealTime=new Date($("#minRealTime").val().replace(/\-/g, "\/"));
            if(d2<minRealTime){
                cms.messager.alert("还款时间不能小于上次实还时间 ！");
                return false;
            }
            var isPrePay = isPreWriteoff.filter(':checked').val();
            if(isPrePay=='2'){//正常还款
                calcBillsInfo();
            }else if(isPrePay=='1'){
                var isPrePartPay=isAll.filter(':checked').val();
                if(isPrePartPay=='1'){//提前还款
                    //提前还款  还款时间不能大于最后一期还款时间
                    var maxRepaymentTime = new Date($("#maxRepaymentTime").val().replace(/\-/g, "\/")); //最大还款时间
                    if(maxRepaymentTime < d2){
                        cms.messager.alert("还款时间不能大于最后一期还款时间！");
                        return;
                    }

                    // TODO 1、有未生效的展期不允许提前还款

                    //2、服务费未还清不允许提前还款
                    if($("#servFlag").val() == false || $("#servFlag").val()=="false"){
                        cms.messager.alert("服务费未还清不允许提前还款！");
                        return;
                    }
                    //3、已还清的账单不能提前还款，在当期之后做提前还款
                    var preRepTime = $("#preRepTime").val();
                    preRepTime = preRepTime.length>19 ? preRepTime.substring(0,19):preRepTime;
                    var preRepTimeD = new Date(preRepTime.replace(/\-/g, "\/")); //当期还款日
                    if(preRepTimeD >= d2){
                        cms.messager.alert("提前还款日期必须大于上一期还款日！");
                        return;
                    }
                    calcBillsInfo();
                }else if(isPrePartPay=='2'){//提前部分还款
                    var bool=true;
                    var repayDate=$("#repayDate").val();
                    var bussNo=$("#bussNo").val();
                    //提前部分本金还款 , 还款时间不能大于当期应还时间
                    var repaymentTime=$("#repaymentTime").val();
                    var d1 = new Date(repaymentTime.substring(0,4),parseInt(repaymentTime.substring(4,6))-1,repaymentTime.substring(6,8),18,00,00); //应还时间
                    var d2 = new Date(repayDate.replace(/\-/g, "\/")); //还款时间
                    if(d1 < d2){
                        alert("还款时间不能大于当期应还时间！");
                        return;
                    }
                    //提前部分本金还款, 有逾期就不能还。有实还利息，请将该期还清之后在进行提前部分还款
                    $.ajax({
                        type : 'post',
                        dataType : 'json',
                        async: false,
                        data: {bussNo:bussNo,termNoNewTerm:$("#periods").val()},
                        url : "selectCurPeriodsOverdue",
                        success : function(data) {
                            if(data.isOverdue=="1"){//有逾期
                                bool=false;
                                alert("该期有逾期，请将该期还清之后在进行提前部分还款！");
                            }else if(data.realInterest=="1"){//有实还利息
                                bool=false;
                                alert("该期有实还利息，请将该期还清之后在进行提前部分还款！");
                            }
                        },
                        error : function() {
                            bool=false;
                            alert("请联系技术人员");
                        }
                    });
                    if(!bool){
                        return false;
                    }
                    $.ajax({
                        type : 'post',
                        dataType : 'json',
                        async: false,
                        data: {bussNo:bussNo,NowTime:repayDate},
                        url : "checkIsOnePeriods",
                        success : function(data) {
                            var periods = parseFloat(data.periods);
                            var nowPeriods = parseFloat($("#periods").val());
                            if(periods=="1"){
                                bool=false;
                                alert("请选择第一期之后进行部分本金提前还款！");
                                return false;
                            }
                            if(periods<nowPeriods){
                                bool=false;
                                alert("请选择当期之后进行部分本金提前还款！");
                            }
                        },
                        error:function() {
                            bool=false;
                            alert("请联系技术人员");
                        }
                    });
                    if(bool){
                        calPayInfo('3');
                    }else{
                        return false;
                    }

                }
            }

        }
        trainCalculateBtn.on("click", trainCalculateBtnFunc);

		changePreWriteoff();
	}())
})
