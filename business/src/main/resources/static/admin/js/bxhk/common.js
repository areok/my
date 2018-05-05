/**
 * Created by 马宇驰 on 2018/1/22.
 */
var reStatusEnum = {};
reStatusEnum["A"] = "待还";
reStatusEnum["B"] = "正常部分还款";
reStatusEnum["C"] = "正常还清";
reStatusEnum["D"] = "逾期未还款";
reStatusEnum["E"] = "逾期部分还款";
reStatusEnum["F"] = "逾期还清";
reStatusEnum["G"] = "提前还清";
reStatusEnum["I"] = "结清";
var reStatusEnuminversion = {};
reStatusEnuminversion["待还"] = "A";
reStatusEnuminversion["正常部分还款"] = "B";
reStatusEnuminversion["正常还清"] = "C";
reStatusEnuminversion["逾期未还款"] = "D";
reStatusEnuminversion["逾期部分还款"] = "E";
reStatusEnuminversion["逾期还清"] = "F";
reStatusEnuminversion["提前还清"] = "G";
reStatusEnuminversion["结清"] = "I";

    //将table变为可操作
    function tableToEdit(){
        var editTr = $("#editTr");
        var editTd = $(".editTd");
        editTr.show()
        editTd.show();
        $(".edit").attr("contentEditable","true");
        //$(".time").on("click",function(){
        //    WdatePicker({dateFmt:'yyyy-MM-dd'});
        //});
    };
   //将table变为不可编辑
    function tableToNoEdit(){
        var editTr = $("#editTr");
        var editTd = $(".editTd");
        editTr.hide();
        editTd.hide();
        $(".edit").attr("contentEditable","false");
        $(".time").unbind("click");
    };
//获取table中的数据
    function getDateFromTable(dateTable){
        var data = [];
        $('#'+dateTable+' tr').each(function(index){
            if(index!=0){
                var item = {};
                $(this).children().each(function(index){
                    //console.log($(this).attr('name'));
                    //console.log(this.innerHTML);
                    if($(this).attr('name')!="exclusive"){
                        if(this.innerHTML!=""){
                            if($(this).attr('name')=="reBiDate"){
                                //console.log(new Date(this.innerHTML+" 00:00:00".replace(/-/g,"\/")));
                                item[$(this).attr('name')]=new Date(this.innerHTML+" 00:00:00");
                            }else if($(this).attr('name')=="reIndex"){
                                item[$(this).attr('name')]=this.innerHTML.split("-")[1];
                            }else if($(this).attr('name')=="reShouldPrincipal"){
                                item[$(this).attr('name')]=this.innerHTML*1000000;
                            }else if($(this).attr('name')=="reShouldInterest"){
                                item[$(this).attr('name')]=this.innerHTML*1000000;
                            }else if($(this).attr('name')=="reShouldDefaultInterest"){
                                item[$(this).attr('name')]=this.innerHTML*1000000;
                            }else if($(this).attr('name')=="reRealyPrincipal"){
                                item[$(this).attr('name')]=this.innerHTML*1000000;
                            }else if($(this).attr('name')=="reRealyInterest"){
                                item[$(this).attr('name')]=this.innerHTML*1000000;
                            }else if($(this).attr('name')=="reRealyDefaultInterest"){
                                item[$(this).attr('name')]=this.innerHTML*1000000;
                            }else if($(this).attr('name')=="reStatus"){
                                item[$(this).attr('name')]=reStatusEnuminversion[this.innerHTML];
                            }else {
                                item[$(this).attr('name')]=this.innerHTML;
                            }
                        }
                    }
                });
                data.push(item);
            }
        });
        data = JSON.stringify(data);//转为json字符串
        //alert(data);//data就是你要提交的json字符串数据对象，自己服务器端反序列化为字符串数组后操作，至于你用表单或者ajax提交自己实现
        return data;
    };
//添加
    function addTr(me){
        //生成新的tr
        var meTr = me.parentNode.parentNode;
        //console.log(meTr)
        var newTr = "<tr style='text-align:center'>"+$(meTr).html()+"</tr>";
        var str = $(meTr).find("td[name='reIndex']").html();
        var strs = str.split("-");
        var newIndex = Number(strs[1])+1;
        var newReIndex = "借-"+newIndex;
        newTr = newTr.replace(str,newReIndex);
        var result = /<td name="reShouldPrincipal".+?</.exec(newTr);
        newTr = newTr.replace(result,'<td name="reShouldPrincipal" data-real-money="" effectivenum="num" class="edit" data-real-init-finish="true">0.00<');
        result = /<td name="reShouldInterest".+?</.exec(newTr);
        newTr = newTr.replace(result,'<td name="reShouldInterest" data-real-money="" effectivenum="num" data-real-init-finish="true">0.00<');
        result = /<td name="reBiDate".+?</.exec(newTr);
        newTr = newTr.replace(result,'<td name="reBiDate" class="edit time" contenteditable="true"><');
        $(me.parentNode.parentNode).after(newTr);
        updateReIndex(me.parentNode.parentNode.nextSibling,newIndex,"add");
        init("s");
        //$(".time").on("click",function(){
        //    WdatePicker({dateFmt:'yyyy-MM-dd'});
        //});
    }
//删除
    function removeTr(me){
        var meTr = me.parentNode.parentNode;
        var currentReIndex = $("#reIndex").html();
        if(currentReIndex){
            currentReIndex = currentReIndex.split("-")[1];
            if(Number( $("#reIndex").html().split("-")[1])<=Number(currentReIndex)){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"该期无法删除",
                    cancelBtnText : "确认"
                });
                return;
            }
        }
        //该期应还本金不为0
        if($(meTr).find("td[name='reShouldPrincipal']").html()!="0.00"){
            var a = $(meTr).siblings('*:last').find("td[name='reShouldPrincipal']").html();
            var b = $(meTr).find("td[name='reShouldPrincipal']").html();
            var c = wanToFen(a)+wanToFen(b);
            if($(meTr).next().length>0){
                $(meTr).siblings('*:last').find("td[name='reShouldPrincipal']").html(fenToWan(c))
            }
        }
        var nextTr;
        if(!$(meTr).next().length>0){
            $(meTr).prev().find("td[name='reShouldPrincipal']").html((new BigDecimal($(meTr).find("td[name='reShouldPrincipal']").html()).add(new BigDecimal($(meTr).prev().find("td[name='reShouldPrincipal']").html()))).toString());
            $(meTr).remove();
        }else{
            $(meTr).remove();
        }
        updateReIndex(meTr,1,"cut");
        reBiDateEvent();
        init("s");

    }
//修改数据的借款期数
    function updateReIndex(newTr,newIndex_,sign){
        var currentTr = $(newTr);
        var currentReIndex  =  newIndex_;
        if(sign=="add"){
            while(currentTr.next().length>0){
                currentTr = currentTr.next();
                currentTr.find("td[name='reIndex']").each(function() {
                    currentReIndex = currentReIndex + 1;
                    var newText = "借-"+currentReIndex;
                    $(this).html(newText);
                });
            }
        }else if(sign=="cut"){
            while(currentTr.next().length>0){
                currentTr = currentTr.next();
                currentTr.find("td[name='reIndex']").each(function() {
                    var newIndex = index - 1;
                    var newText = "借-"+newIndex;
                    $(this).html(newText);
                });
            }
        }
    }
    function save_(data,href){
        $.ajax({
            url:"/bxhk/savebill",
            contentType:"application/json;charset=UTF-8;",
            type:"POST",
            data: data,
            success:function (res){
                if (res.code == "200") {
                    if(res.msg == "SUCCESS"){
                        cms.messager.alert("修改成功!!",function(){location.href = href;});
                    }else{
                        cms.messager.alert("修改失败!",function(){location.href = href;});
                    }

                } else {
                    cms.messager.alert("网络异常");
                    $("#pushButton").disabledButton(false)
                }
            }
        });
    }
    function cut(data){
        $.ajax({
            url:"/bxhk/deletebill",
            contentType:"application/json;charset=UTF-8;",
            type:"POST",
            data: data,
            success:function (data){

            }
        });
    }
//初始化
    function init(sign){
        var addTr_ = $(".addTr");
        var removeTr_ = $(".removeTr");
        if(!sign){
            addTr_.on("click",function(){
                addTr(this);
            });
            removeTr_.on("click",function(e){
                e.stopPropagation();
                removeTr(this);
            });
        }else{
            addTr_.each(function(){
                $(this).unbind()
            });
            removeTr_.each(function(){
                $(this).unbind()
            });
            addTr_.on("click",function(){
                addTr(this);
            });
            removeTr_.on("click",function(e){
                e.stopPropagation();
                removeTr(this);
            });
        }
        againCalculate();
    };
    function submit(data,sign,href){
        if(sign=="save"){
            save_(data,href);
        }else{
            cut(data,href);
        }
    };
    init();
    //分专万
    function fenToWan(value){
        value = value / 10000 / 100;
        value = value.toString();
        value = $.fixedmax(value, 6);
        value = $.adaptionzero(value, 6)
        return value;
    }
    //万专分
    function wanToFen(value){
        value = value * 10000 * 100;
        return value;
    }
//格式化数据
function formateValue(value){
    value = $.fixedmax(value, 6);
    value = $.adaptionzero(value, 6);
    return value;
}
function initReStatus(){
    $("#dateTable").find("td[name='reStatus']").each(function (){
        $(this).html(reStatusEnum[$(this).html()]);
    });
};
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
initReStatus();
function againCalculate(){
    $("#dateTable").find("td[name='reShouldPrincipal']").each(function(){
        $(this).unbind()
    });
    $("#dateTable").find("td[name='reBiDate']").each(function(){
        $(this).unbind()
    });
    $(".time").each(function(){
        $(this).unbind()
    });
    $("#dateTable").find("td[name='reShouldPrincipal']").on("blur",function(){
        reShouldPrincipalEvent();
    });
    $("#dateTable").find("td[name='reBiDate']").on("blur",function(){
        reBiDateEvent();
    });
    $(".time").on("blur",function(){
        timeEvent(this);
    });
}
function calculateValue(a,b,c){
    var d = (c/3000).toFixed(8);
    return a*b*d;
}
//d1>d2返回true
function CompareDate(d1,d2)
{
    return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))));
}



//账单时间触发事件重新计算值
function reBiDateEvent(){
    var currentReIndex =  $("#reIndex").html().split("-")[1];
    $('#dateTable tr').each(function(index){
        if(index!=0){
            if(Number(index)<Number(currentReIndex)){
                return;
            }else if(Number(index)==Number(currentReIndex)){
                if($(this).find("td[name='reRealyInterest']").html()==""
                    && $(this).find("td[name='reRealyPrincipal']").html()==""
                    && $(this).find("td[name='reRealyDefaultInterest']").html()==""){

                }else {
                    return
                }
            }
            //上月账单日
            var preReBliDate;
            //本月账单日
            var currentReBiDate = $(this).find("td[name='reBiDate']").html();
            //本金
            var currentBenJin = $(this).find("td[name='reShouldPrincipal']").html();



            //当前利率
            var monthInterestRate = $("#monthInterestRate").val();
            //第一期
            if(index==1){
                preReBliDate = $("#lendDate").val();
            }else{
                preReBliDate = $(this).prev().find("td[name='reBiDate']").html();
            }
            //之前金额
            var preBenJin = 0;

            $(this).prevAll().each(function(index){
                preBenJin = preBenJin + wanToFen(Number($(this).find("td[name='reShouldPrincipal']").html()));
            });
            var benJin  = getValue() - preBenJin;
            var dates = Number(getDays(preReBliDate,currentReBiDate));
            $(this).find("td[name='reShouldInterest']").html(fenToWan((calculateValue(benJin,dates,monthInterestRate))));
            //判断是否为最后一起
            if(!$(this).next().length>0){
                return
            }
            preReBliDate = currentReBiDate;
            currentReBiDate =  $(this).next().find("td[name='reBiDate']").html();
        }
    });
}

//本金触发事件重新计算值
function reShouldPrincipalEvent(){
    var currentReIndex =  $("#reIndex").html().split("-")[1];
    $('#dateTable tr').each(function(index) {
        if (index != 0) {
            if (Number(index) < Number(currentReIndex)) {
                return;
            }else if(Number(index)==Number(currentReIndex)){
                if($(this).find("td[name='reRealyInterest']").html()==""
                    && $(this).find("td[name='reRealyPrincipal']").html()==""
                    && $(this).find("td[name='reRealyDefaultInterest']").html()==""){

                }else {
                    return
                }
            }
            //上月账单日
            var preReBliDate;
            //本月账单日
            var currentReBiDate = $(this).find("td[name='reBiDate']").html();
            //本金
            var currentBenJin = $(this).find("td[name='reShouldPrincipal']").html();

            //之前金额
            var preBenJin = 0;
            $(this).prevAll().each(function(index){
                preBenJin = preBenJin + wanToFen(Number($(this).find("td[name='reShouldPrincipal']").html()));
            });
            var benJin = getValue() - preBenJin;
            //当前利率
            var monthInterestRate = $("#monthInterestRate").val();
            //第一期
            if (index == 1) {
                preReBliDate = $("#lendDate").val();
            } else {
                preReBliDate = $(this).prev().find("td[name='reBiDate']").html();
            }
            var dates = Number(getDays(preReBliDate, currentReBiDate));
            $(this).find("td[name='reShouldInterest']").html(fenToWan((calculateValue(benJin, dates, monthInterestRate))));
            //判断是否为最后一期
            if (!$(this).next().length > 0) {
                return
            }

            $(this).siblings('*:last').find("td[name='reShouldPrincipal']").html((new BigDecimal(fenToWan(benJin)).subtract(new BigDecimal(currentBenJin))).toString())

            preReBliDate = currentReBiDate;
            currentReBiDate = $(this).next().find("td[name='reBiDate']").html();
        }

    });
}
function setValue(){

    $.cookie('total',getTotal(),{expires:86400,path: '/'});
};
function getValue(){
    var value = $.cookie('total');
    return value;
};

function getTotal(){
    var total = 0;
    $('#dateTable tr').each(function(index) {
        if(index>0){
            total += Number($(this).find("td[name='reShouldPrincipal']").html());
        }
    });
    return total;
}
function timeEvent(me){
        //当前期数
        var index = $(me).prev().html().split("-")[1];
        var pre = $(me).parent().prev().find("td[name='reBiDate']").html();
        var current = $(me).html()
        var next = $(me).parent().next().find("td[name='reBiDate']").html();
        var dueLoanDate;
        if(index==1){
            pre = $("#lendDate").val();
            if(CompareDate(pre,current)){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"本期时间不能小于放款时间",
                    cancelBtnText : "确认"
                });
                $("#dateTable").find("td").each(function(){
                    if(this!=me){
                        $(this).attr("contentEditable","false");
                    }
                });
                return;
            }
        }
        else if(!$(me).parent().next().length>0){
            dueLoanDate = $("#dueLoanDate").val();
            if(dueLoanDate == current){

            }else if(CompareDate(current,dueLoanDate)){
                cms.dialog({
                    titleText : "提示",
                    width : "500px",
                    disFooter : false,
                    cancelBtnShow : true,
                    content:"本期时间不能大于放款到期时间",
                    cancelBtnText : "确认"
                });
                $("#dateTable").find("td").each(function(){
                    if(this!=me){
                        $(this).attr("contentEditable","false");
                    }
                });
                return;
            }
        }
        if(current<pre || current >next){
            cms.dialog({
                titleText : "提示",
                width : "500px",
                disFooter : false,
                cancelBtnShow : true,
                content:"请输入合适的时间",
                cancelBtnText : "确认"
            });
            $("#dateTable").find("td").each(function(){
                if(this!=me){
                    $(this).attr("contentEditable","false");
                }
            });
            return;
        }else{
            $(".edit").attr("contentEditable","true");
            var reDate = $(me).html();
            if(CompareDate(new Date().toString(),reDate)){
                $(me).prev().prev().html("逾期未还款");
            }else{
                $(me).prev().prev().html("待还");
            }
        }
}
setValue();
