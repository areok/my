/**
 * Created by 马宇驰 on 2018/1/18.
 */
$(function(){
    var caculate = $("#caculate");
    var editButton = $("#editButton");
    var caculateDiv =  $("#caculateDiv");
    var cancle = $("#cancle");
    var cpmplete = $("#cpmplete");
    var verification = $("#verification");

    var shouldTotal = $("#shouldTotal");
    var reShouldDefaultInterest = $("#reShouldDefaultInterest");
    var reShouldPrincipal = $("#reShouldPrincipal");
    var reShouldInterest = $("#reShouldInterest");

    var realTotal = $("#realTotal");
    var reRealyDefaultInterest = $("#reRealyDefaultInterest");
    var reRealyPrincipal = $("#reRealyPrincipal");
    var reRealyInterest = $("#reRealyInterest");
    //上次还款日
    var preReRealyDate = $("#reRealyDate").val();
    //账单日期
    var zdrq = $("#zdrq").html();
    //剩余本金
    var reOddCorpus = $("#reOddCorpus").val();
    //月利率
    var monthInterestRate = $("#monthInterestRate").val();

    //计算
    caculate.on("click",function(){
        //还款日期
        var hkri = $("#hkri").html();
        var reType = $('input:radio[name="reType"]:checked').val();
        var current;
        if(reType=="01"){
            if(dateIsNotNull()){
                return
            };
            caculateDiv.show();
            $('#dateTable tr').each(function(index) {
                $(this).find("td[name='reIndex']").each(function(){
                    if($(this).html()==$("#reIndex").html()){
                        current = $(this).parent();
                        console.log(1)
                    }
                });
            });
            var alerady_reRealyPrincipal = current.find("td[name='reRealyPrincipal']");;
            var alerady_reRealyInterest = current.find("td[name='reRealyInterest']");;
            var alerady_reRealyPrincipal_value = alerady_reRealyPrincipal==""?0:wanToFen(alerady_reRealyPrincipal.html());
            var alerady_reRealyInterest_value = alerady_reRealyInterest==""?0:wanToFen(alerady_reRealyInterest.html());
            //本金
            reShouldPrincipal.html(fenToWan(reShouldPrincipal.html()- alerady_reRealyPrincipal_value));
            //利息
            reShouldInterest.html(fenToWan(reShouldInterest.html() - alerady_reRealyInterest_value));
            var value = Number(wanToFen(reShouldDefaultInterest.html()))+ Number( wanToFen($("#reShouldPrincipal").html()))+ Number(wanToFen($("#reShouldInterest").html()));
            value = value.toFixed(6);
            value = fenToWan(value);
            shouldTotal.html(value);
        }else if(reType=="02"){
            if(dateIsNotNull()){
                return
            };
            if(CompareDate(hkri,zdrq)){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"请先归还本期金额",
                    cancelBtnText : "确认"
                });
                return;
            }
            caculateDiv.show();
            //本金
            var reOddCorpus_ = fenToWan(reOddCorpus);
            reShouldPrincipal.html(reOddCorpus_);
            //利息
            var dates = Number(getDays(zdrq,hkri));
            //正常利息
            var reIndex = $("#reIndex").html();
            var interest;
            $("#dateTable").find("td[name='reIndex']").each(function (){
                if($(this).html() == reIndex){
                    interest = $(this).next().next().next().html()
                }
            });
            //少还利息
            var interest_spacing = calculateValue(reOddCorpus,dates,monthInterestRate);
            interest_spacing = fenToWan(interest_spacing.toFixed(0));
            var value = new BigDecimal(interest+"").subtract(new BigDecimal(interest_spacing+""));
            reShouldInterest.html(value.toString());
            value = Number(reShouldDefaultInterest.html())+ Number(reShouldPrincipal.html())+ Number(reShouldInterest.html());
            shouldTotal.html(value);
        }else if(reType=="03"){
            if(dateIsNotNull()){
                return
            };
            if(CompareDate(hkri,zdrq)){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"请先归还本期金额",
                    cancelBtnText : "确认"
                });
                return;
            }
            caculateDiv.show();
            //本金
            var reOddCorpus_ = fenToWan(reOddCorpus);
            reShouldPrincipal.html("小于"+reOddCorpus_);
            //利息
            var preZdrq = decDate(zdrq);
            var dates = Number(getDays(preZdrq,hkri));
            reShouldInterest.html(0);
            shouldTotal.html("小于"+reOddCorpus_);
        }else{
            cms.dialog({
                titleText : "提示",
                width : "500px",
                disFooter : false,
                cancelBtnShow : true,
                content:"请输入还款类型",
                cancelBtnText : "确认"
            });
        }
    });
    //单击编辑按钮
    editButton.on("click",function(){
        $("#oldEditDiv").hide();
        $("#newEditDiv").show();
        tableToEdit();
    });
    cancle.on("click",function(){
        //$("#newEditDiv").hide();
        //$("#oldEditDiv").show();
        //tableToNoEdit();
        var href = window.location.href;
        location.href = href;
    });
    cpmplete.on("click",function(){
        $("#newEditDiv").hide();
        $("#oldEditDiv").show();
        var data = getDateFromTable('dateTable');
        var href = window.location.href;
        submit(data,"save",href);
        tableToNoEdit();
    });
    //核销
    verification.on("click",function(){
        //还款日期
        var hkri = $("#hkri").html();
        var realTotal = $("#realTotal");
        var reRealyDefaultInterest = wanToFen($("#reRealyDefaultInterest").html());
        var reRealyPrincipal = wanToFen($("#reRealyPrincipal").html());
        var reRealyInterest = wanToFen($("#reRealyInterest").html());
        var bussNo = $("#bussNo").html();
        var reIndex = $("#reIndex").html().split("-")[1];
        var item = {};
        item["bussNo"] = bussNo;
        item["reIndex"] = reIndex;
        item["reRealyDefaultInterest"] = reRealyDefaultInterest;
        item["reRealyPrincipal"] = reRealyPrincipal;
        item["reRealyInterest"] = reRealyInterest;
        item["reRealyDate"] = hkri;
        item["reBiDate"] = zdrq;
        var reType = $('input:radio[name="reType"]:checked').val();
        if(reType=="01"){
            item["reType"] = "01";
            var reShouldPrincipal = wanToFen($("#reShouldPrincipal").html());
            var reShouldInterest = wanToFen($("#reShouldInterest").html());
            if(hkri==zdrq){
                if(reRealyPrincipal==reShouldPrincipal){
                    item["reStatus"] = "C";
                }else if(reRealyPrincipal<reShouldPrincipal){
                    item["reStatus"] = "B";
                }
            }else if(CompareDate(hkri,zdrq)){
                if(reRealyPrincipal==reShouldPrincipal && reRealyInterest==reShouldInterest){
                    item["reStatus"] = "F";
                }else if(reRealyPrincipal<reShouldPrincipal || reRealyInterest<reShouldInterest){
                    item["reStatus"] = "E";
                }
            }else{
                if(reRealyPrincipal==reShouldPrincipal){
                    item["reStatus"] = "G";
                }else if(reRealyPrincipal<reShouldPrincipal){
                    item["reStatus"] = "B";
                }
            }
        }else if(reType=="02"){
            var reShouldPrincipal = wanToFen($("#reShouldPrincipal").html());
            item["reShouldPrincipal"] = reShouldPrincipal;
            item["reStatus"] = "G";
            item["reType"] = "02";
            if($("#realTotal").html()!=$("#shouldTotal").html()){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"本金和利息实还必须等于应还金额",
                    cancelBtnText : "确认"
                });
                return;
            }

        }else if(reType=="03"){
            item["reType"] = "03";
            var reShouldPrincipal = wanToFen($("#reShouldPrincipal").html());
            item["reShouldPrincipal"] = reShouldPrincipal;
            if(reRealyInterest!=0){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"利息必须为0",
                    cancelBtnText : "确认"
                });
            }else if(Number(reRealyPrincipal) >= Number(reOddCorpus)){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"实还本金必选小于剩余本金",
                    cancelBtnText : "确认"
                });
            }
        }
        var data = JSON.stringify(item);//转为json字符串;
        var href = window.location.href;
        update(data,href);

    });
    //计算实际缴纳总额
    function calculate(){
        var reRealyDefaultInterest = $("#reRealyDefaultInterest");
        var reRealyPrincipal = $("#reRealyPrincipal");
        var reRealyInterest = $("#reRealyInterest");
        reRealyDefaultInterest.html(formateValue(reRealyDefaultInterest.html()));
        reRealyPrincipal.html(formateValue(reRealyPrincipal.html()));
        reRealyInterest.html(formateValue(reRealyInterest.html()));
        var value = Number(reRealyDefaultInterest.html())+ Number(reRealyPrincipal.html())+ Number(reRealyInterest.html());
        //console.log(Number(reRealyDefaultInterest.html()));
        //console.log(Number(reRealyPrincipal.html()));
        //console.log(Number(reRealyInterest.html()));
        realTotal.html(formateValue(value.toString()));
    };
    //提交核销
    function update(data,href){
        $.ajax({
            url:"/bxhk/verification",
            contentType:"application/json;charset=UTF-8;",
            type:"POST",
            data: data,
            success:function (res){
                if (res.code == "200") {
                    if(res.msg == "SUCCESS"){
                        cms.messager.alert("核销成功!!",function(){location.href = href;});
                    }else{
                        cms.messager.alert("核销失败!",function(){location.href = href;});
                    }

                } else {
                    cms.messager.alert("网络异常");
                    $("#pushButton").disabledButton(false)
                }
            }
        });
    }
    reRealyDefaultInterest.blur(calculate);
    reRealyPrincipal.blur(calculate);
    reRealyInterest.blur(calculate);
    //
    function decDate(date){
        var dates = date.split("-");
        var year = Number(dates[0]);
        var month = Number(dates[1]);
        var date = Number(dates[2]);
        if(month-1==0){
            year = year - 1;
            month = 12;
        }else {
            month = month-1;
        }
        return year+"-"+month+"-"+date;
    }

    //判断还款时间不能小于上次还款日
    function dateIsNotLessThanPre(){
        //还款日期
        var  hkri= $("#hkri").html();
        if(preReRealyDate==hkri){

        }else if(CompareDate(preReRealyDate,hkri)){
            cms.dialog({
                titleText : "提示",
                width : "500px",
                disFooter : false,
                cancelBtnShow : true,
                content:"还款日期不能小于上次还款日期",
                cancelBtnText : "确认"
            });
            return true;
        }
    }

    //判断还款时间不能大于当前系统时间
    function dateIsNotGreaterThanCurrent(){
        //还款日期
        var hkri = $("#hkri").html();
        if(CompareDate(hkri,new Date().format("yyyy-MM-dd"))){
            cms.dialog({
                titleText : "提示",
                width : "500px",
                disFooter : false,
                cancelBtnShow : true,
                content:"还款时间不能大于系统时间",
                cancelBtnText : "确认"
            });
            return true;
        }
        return dateIsNotLessThanPre();
    };

    //判断还款时间不能为空
    function dateIsNotNull(){
        //还款日期
        var hkri = $("#hkri").html();
        if(hkri==""){
            cms.dialog({
                titleText : "提示",
                width : "500px",
                disFooter : false,
                cancelBtnShow : true,
                content:"请输入还款时间",
                cancelBtnText : "确认"
            });
            return true;
        }
        return dateIsNotGreaterThanCurrent();
    };
});
