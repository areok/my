$(function(){ //等界面加载完成后，执行下面内容
    (function (){ // 闭包，防止下面定义的变量泄露到整个页面
        var bussForm = $("#bussForm");
        var interestRate = $("#loaninterestRate");
        var extentionInterestRate = $("#extentionInterestRate");
        var changeInterestRateReason = $("#changeInterestRateReason");
        // var bussForm = $("#bussForm");
        var serviceCharge = $("#loanserviceCharge");
        var extentionServiceRate = $("#extentionServiceRate");
        var changeServiceRateReason = $("#changeServiceRateReason");
        var leftExtentionAmount = $("#leftExtentionAmount");
        var approveAmount = $("#approveAmount");
        var approveTerm = $("#approveTerm");


        var payeeType = $("#payeeType");//收款类型
        var payee = $("#payee");//收款名称
        // var productName = $("#productName");//产品名称
        var account = $("#account");//开户行账号
        var openBank = $("#openBank");//开户行名称

        var cacheType = {};
        function initLendType(){
            for(var i = 0 ; i < casecades.length; i++){
                var value = casecades[i].value;
                if(value!="03"){
                    continue;
                }
                if(!cacheType[value]){
                    cacheType[value] = casecades[i] && casecades[i].casecade;
                }
                initLendName(value);
            }
        }
        var cacheName = {};
        function initLendName(lendVal){
            var casecade = cacheType[lendVal+''];
            for(var i = 0 ; i < casecade.length; i++){
                var value = casecade[i].value;
                if(!cacheName[lendVal+value]){
                    cacheName[lendVal+value] = casecade[i] && casecade[i].casecade;
                }
                initProductName(lendVal, value);
            }
        }
        var cachePName = {};
        function initProductName(lendVal, lnVal){
            var casecade = cacheName[lendVal+lnVal] || {};
            for(var i = 0 ; i < casecade.length; i++){
                var value = casecade[i].value;
                if(!cachePName[lendVal+'_'+lnVal+'_'+value]){
                    cachePName[lendVal+'_'+lnVal+'_'+value] = casecade[i] && casecade[i].casecade;
                }
            }
        }

        initLendType();
        console.log(cacheType)
        console.log(cacheName)

        function changeTypeOptions(){
            var data = payeeType.attr('data-value');
            payeeType.append('<option>未选择</option>');
            for(var i = 0 ; i < casecades.length; i++){
                var value = casecades[i].value;
                var name = casecades[i].name;
                if(value!="03"){
                    continue;
                }
                if(data==value){
                    payeeType.append('<option selected="selected" value="'+value+'">'+name+'</option>');
                }else{
                    payeeType.append('<option value="'+value+'">'+name+'</option>');
                }
            }
        }
        function changeNameOptions(){
            var lendVal = payeeType.val();
            if(!lendVal || lendVal=='未选择'){
                return;
            }
            console.log(lendVal);
            var data = payee.attr('data-value');
            var casecade = cacheType[lendVal+''];
            payee.empty();
            for(var i = 0 ; i < casecade.length; i++){
                var value = casecade[i].value;
                if(data==value){
                    payee.append('<option selected="selected" value="'+value+'">'+value+'</option>');
                }else{
                    payee.append('<option value="'+value+'">'+value+'</option>');
                }
            }
        }
        // function changeProductNameOptions(){
        //     var lendVal = payeeType.val();
        //     var lnVal = payee.val();
        //     if(!lnVal && !lendVal){
        //         return;
        //     }
        //     var data = productName.attr('data-value');
        //     var casecade = cacheName[lendVal+lnVal] || {};
        //     productName.empty();
        //     for(var i = 0 ; i < casecade.length; i++){
        //         var value = casecade[i].value;
        //         if(data==value){
        //             productName.append('<option selected="selected" value="'+value+'">'+value+'</option>');
        //         }else{
        //             productName.append('<option value="'+value+'">'+value+'</option>');
        //         }
        //     }
        // }
        changeTypeOptions();
        changeNameOptions();
        // changeProductNameOptions();
        payeeType.change(function(){
            changeNameOptions();
            // changeProductNameOptions();
            loadData();
        });
        payee.change(function(){
            // changeProductNameOptions();
            loadData();
        });
        // productName.change(function(){
        //     loadData();
        // });

        function loadData(){
            var lendVal = payeeType.val();
            var lnVal = payee.val();
             var pnVal = '服务费';
            if(!lnVal || !lendVal){
                return;
            }
            var lender = (cacheName[lendVal+lnVal] && cacheName[lendVal+lnVal][0].casecade && cacheName[lendVal+lnVal][0].casecade.lender) || {};
            var product = {};
            if(true){
                product = (cachePName[lendVal+'_'+lnVal+'_'+pnVal] && cachePName[lendVal+'_'+lnVal+'_'+pnVal].product) || {};
            }
            account.val(product.payeeBankAccount);//开户行账号
            openBank.val(product.payeeBankName);//开户行名称

        }


        $("#savebuss").click(function(){

            var validator = bussForm.validate();
            if(!validator.form()){
                return;
            }
            var leftnum = leftExtentionAmount.val() - 0;
            var approvenum = approveAmount.val() - 0;
            if(leftnum < approvenum){
                cms.messager.alert("审批展期金额不能超过可展金额!");
                return;
            }

            var interestRateValue = interestRate.val();
            interestRateValue-=0;
            var extentionInterestRateValue = extentionInterestRate.val();
            extentionInterestRateValue-=0;
            if(interestRateValue!=extentionInterestRateValue){
                if (changeInterestRateReason.val().replace(/(^\s*)|(\s*$)/g, "").length ==0)
                {
                    cms.messager.alert("借款月利率不等于展期月利率,利率修改原因不能为空!");
                    return;
                }
            }

            var serviceChargeValue = serviceCharge.val();
            serviceChargeValue-=0;
            var extentionServiceRateValue = extentionServiceRate.val();
            extentionServiceRateValue-=0;
            if(serviceChargeValue!=extentionServiceRateValue){
                if (changeServiceRateReason.val().replace(/(^\s*)|(\s*$)/g, "").length ==0)
                {
                    cms.messager.alert("借款服务费率不等于展期服务费率,服务费率修改原因不能为空!");
                    return;
                }
            }

            $.ajax({
                url         : '/extentionApprove/saveExtentionApprove',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  bussForm.serializeJSONString(),
                success : function (result) {
                    console.log(result);
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert('保存成功!',function(){location.href="/extensionTaskList/extensionApprovalTaskList"});
                        return;
                    }
                    else{
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                        }
                    }
                }
            });
        });

        $("#submitbuss").click(function(){
            var validator = bussForm.validate();
            if(!validator.form()){
                return;
            }
            var leftnum = leftExtentionAmount.val() - 0;
            var approvenum = approveAmount.val() - 0;
            if(leftnum < approvenum){
                cms.messager.alert("审批展期金额不能超过可展金额!");
                return;
            }

            var interestRateValue = interestRate.val();
            interestRateValue-=0;
            var extentionInterestRateValue = extentionInterestRate.val();
            extentionInterestRateValue-=0;
            if(interestRateValue!=extentionInterestRateValue){
                if (changeInterestRateReason.val().replace(/(^\s*)|(\s*$)/g, "").length ==0)
                {
                    cms.messager.alert("借款月利率不等于展期月利率,利率修改原因不能为空!");
                    return;
                }
            }

            var serviceChargeValue = serviceCharge.val();
            serviceChargeValue-=0;
            var extentionServiceRateValue = extentionServiceRate.val();
            extentionServiceRateValue-=0;
            if(serviceChargeValue!=extentionServiceRateValue){
                if (changeServiceRateReason.val().replace(/(^\s*)|(\s*$)/g, "").length ==0)
                {
                    cms.messager.alert("借款服务费率不等于展期服务费率,服务费率修改原因不能为空!");
                    return;
                }
            }
            $("#submitbuss").attr("disabled",true);
            $.ajax({
                url         : '/extentionApprove/submitExtentionApprove',
                contentType : "application/json; charset=utf-8",
                type        : 'post',
                data        :  bussForm.serializeJSONString(),
                success : function (result) {
                    console.log(result);
                    if(result && result.resultCode && result.resultCode=="0000"){
                        cms.messager.alert('提交成功!',function(){location.href="/extensionTaskList/extensionApprovalTaskList"});
                        return;
                    }
                    else{
                        if(result && result.resultMsg){
                            cms.messager.alert(result.resultMsg);
                        }
                    }
                },
                error:function(){
                    alert("提交失败");
                    $("#submitbuss").attr("disabled",false)
                }
            });
        });
        function change(){

            //处理期限
            var applyMax = approveTerm.attr('data-max-leftTerm');
            approveTerm.val('');
            approveTerm.empty();
            var value = approveTerm.attr('data-value');
            approveTerm.append('<option>未选择</option>')
            for(var i = 1 ; i <= applyMax; i++){
                if(i+''==value){
                    approveTerm.append('<option selected="selected" value="'+i+'">'+i+'</option>');
                }else{
                    approveTerm.append('<option value="'+i+'">'+i+'</option>');
                }
            }

        }
        change();

        //服务费计算
        var extentionService = $("#extentionService");
        var handlefirstAssessPrice = function(){
            var lval = parseFloat(approveAmount.val());
            var wval = parseFloat(approveTerm.val());
            var rval = parseFloat(extentionServiceRate.val());
            if(lval && wval && rval){
                var val = (lval*wval*rval*0.01);
                extentionService.val(val);
            }
        };
        approveAmount.change(handlefirstAssessPrice);
        approveTerm.change(handlefirstAssessPrice);
        extentionServiceRate.change(handlefirstAssessPrice);
    }());

});