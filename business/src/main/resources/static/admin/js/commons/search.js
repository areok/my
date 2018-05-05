
$(function() {
    var zw = ["ASSET_BUSINESS_LIST_LEND_PLAN_NO-暂无"];
    var fzxt = ["ASSET_BUSINESS_LIST_FZ_XINTUO_LEND_PLAN_1-金达一号",
                "ASSET_BUSINESS_LIST_FZ_XINTUO_LEND_PLAN_2-金达二号",
                "ASSET_BUSINESS_LIST_FZ_XINTUO_LEND_PLAN_3-金达三号",
                "ASSET_BUSINESS_LIST_FZ_XINTUO_LEND_PLAN_4-金达四号",
                "ASSET_BUSINESS_LIST_FZ_XINTUO_LEND_PLAN_5-金达五号",
                "ASSET_BUSINESS_LIST_FZ_XINTUO_LEND_PLAN_NO-暂无"];
    var jcyh = ["ASSET_BUSINESS_LIST_JC_BANK_LEND_PLAN_1-晋城一号",
                "ASSET_BUSINESS_LIST_JC_BANK_LEND_PLAN_NO-暂无"];
    var lendPanNos={};
    lendPanNos["ASSET_BUSINESS_LIST_LEND_NAME_NO"]=zw;
    lendPanNos["ASSET_BUSINESS_LIST_LEND_NAME_FZ_XINTUO"]=fzxt;
    lendPanNos["ASSET_BUSINESS_LIST_LEND_NAME_JC_BANK"]=jcyh;
    var lenderNo = $("#lenderNo");
    var lenderPlanNo = $("#lenderPlanNo");
    lenderNo.change(function (me) {
        init(me,"ss");
    });
    init($("#lenderNo"));
    function init(me,sign){
        var lenderNo;
        var lenderPlanNoSelected = $("#lenderPlanNoSelected").val();
        if(sign){
            lenderNo = $(me.target).val();
        }else {
            lenderNo = me.val();
        }
        var str = lendPanNos[lenderNo];
        var content  ='<option value="">请选择</option>';
        for(s in str){
            var value = str[s].split("-")[0];
            var text = str[s].split("-")[1];
            if(lenderPlanNoSelected == value){
                content += '<option selected = "true" value='+value+'>'+text+'</option>'
            }else{
                content += '<option value='+value+'>'+text+'</option>'
            }

        }
        lenderPlanNo.html(content);
    }

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
})

