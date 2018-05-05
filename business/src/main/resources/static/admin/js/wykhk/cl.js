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
        if(reType=="01"){
            if(dateIsNotNull()){
                return
            };
            caculateDiv.show();
            var value = Number(reShouldDefaultInterest.html())+ Number(reShouldPrincipal.html())+ Number(reShouldInterest.html());
            value = value.toFixed(6);
            value = fenToWan(value);

            //本金
            reShouldPrincipal.html(fenToWan(reShouldPrincipal.html()));
            //利息
            reShouldInterest.html(fenToWan(reShouldInterest.html()));
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
            var preZdrq = decDate(zdrq);
            var dates = Number(getDays(preZdrq,hkri));
            reShouldInterest.html(fenToWan(reOddCorpus*dates*(monthInterestRate/30).toFixed(6)));
            var value = Number(reShouldDefaultInterest.html())+ Number(reShouldPrincipal.html())+ Number(reShouldInterest.html());
            value = value.toFixed(6);
            value = fenToWan(value);
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
        $("#newEditDiv").hide();
        $("#oldEditDiv").show();
        tableToNoEdit();
    });
    cpmplete.on("click",function(){
        $("#newEditDiv").hide();
        $("#oldEditDiv").show();
        var data = getDateFromTable('dateTable');
        submit(data,"save");
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
            if(CompareDate(hkri,zdrq)){
                item["reStatus"] = "F";
            }else{
                item["reStatus"] = "C";
            }
        }else if(reType=="02"){
            item["reType"] = "02";
            if((Number(reRealyPrincipal)+Number(reRealyInterest))!=Number($("#shouldTotal").html())){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"本金和利息实还必须等于应还金额",
                    cancelBtnText : "确认"
                });
            }

        }else if(reType=="03"){
            item["reType"] = "03";
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
        update(data);

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
        console.log(Number(reRealyDefaultInterest.html()));
        console.log(Number(reRealyPrincipal.html()));
        console.log(Number(reRealyInterest.html()));
        realTotal.html(formateValue(value.toString()));
    };
    //提交核销
    function update(data){
        $.ajax({
            url:"/bxhk/verification",
            contentType:"application/json;charset=UTF-8;",
            type:"POST",
            data: data,
            success:function (data){

            }
        });
    }
    reRealyDefaultInterest.blur(calculate);
    reRealyPrincipal.blur(calculate);
    reRealyInterest.blur(calculate);
    //d1>d2返回true
    function CompareDate(d1,d2)
    {
        return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))));
    }
    //计算两日期之间的天数
    function getDays(strDateStart,strDateEnd) {
        var strSeparator = "-"; //日期分隔符
        var oDate1;
        var oDate2;
        var iDays;
        oDate1 = strDateStart.split(strSeparator);
        oDate2 = strDateEnd.split(strSeparator);
        var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
        var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
        iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24)//把相差的毫秒数转换为天数
        return iDays;
    }
    //
    function decDate(date){
        var dates = date.split("-");
        var year = Number(dates[0]);
        var month = Number(dates[1]);
        var date = Number(dates[2]);
        if(month-1==0){
            year = year - 1;
            month = 12;
        }
        return year+"-"+month+"-"+date;
    }

    //判断还款时间不能小于上次还款日
    function dateIsNotLessThanPre(){
        //还款日期
        var  hkri= $("#hkri").html();
        if(CompareDate(preReRealyDate,hkri)){
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
