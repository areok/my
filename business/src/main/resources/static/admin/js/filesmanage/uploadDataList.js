$(function () { //等界面加载完成后，执行下面内容
    (function () { // 闭包，防止下面定义的变量泄露到整个页面
        var lenderName = $("[name='queryVo.lenderName']");//N出借人名称
        var lenderPlanName = $("[name='queryVo.lenderPlanName']");//产品名称
        var cache = {};
        // cache['lenderName'] = {lenderPlanName1:1,lenderPlanName2:1,lenderPlanName3:}..
        cache['请选择'] = {'请选择': true};

        for (var i = 0; i < lenders.length; i++) {
            var lender = lenders[i];
            console.log(lender);
            cache[lender.lendName] || (cache[lender.lendName] = {'请选择': true});
            cache[lender.lendName][lender.lendPlanName] = true;
        }


        function initLenderName(){
            lenderName.empty();
            for (var lendName in cache) {
                var $option = $("<option></option>").attr("value", lendName).text(lendName);
                lenderName.append($option);
                if (lenderName.attr("data-value") == lendName) {
                    $option.attr("selected", "selected");
                }
                if(lendName=="请选择"){
                    $option.attr("value", "");
                }
            }
        }
        initLenderName();


        lenderName.change(function () {
            var lendN=lenderName.val();
            lenderPlanName.empty();
            var planNames = cache[lendN];
            for (var planName in planNames) {
                var $option = $("<option></option>").attr("value", planName).text(planName);
                lenderPlanName.append($option);
                if (lenderPlanName.attr("data-value") == planName) {
                    $option.attr("selected", "selected");
                }
                if(planName=="请选择"){
                    $option.attr("value", "");
                }
            }
        });
        lenderName.change();



        $('#sear1ch').click(function () {
            var startTime = $("#startTime").val();
            var endTime = $("#endTime").val();
            if ((startTime != null && startTime != '') && (endTime != null && endTime != '')) {
                var start = new Date(startTime.replace("-", "/").replace("-", "/"));
                var end = new Date(endTime.replace("-", "/").replace("-", "/"));
                if (end < start) {
                    alert("起始时间应小于截止时间");
                    return false;
                }
            }
            return true;
        });

    }())

})





