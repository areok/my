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
        $(".time").on("click",function(){
            WdatePicker({dateFmt:'yyyy-MM-dd'});
        });
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
        var index = newTr.indexOf("借");
        var str = newTr.substr(index,3);
        var strs = str.split("-");
        var newIndex = Number(strs[1])+1;
        var newReIndex = str.replace(Number(strs[1]),newIndex);
        newTr = newTr.replace(str,newReIndex);
        var result = /<td name="id" style="display: none">[\d.]+?</.exec(newTr);
        newTr = newTr.replace(result,'<td name="id" style="display: none"><');
        $(me.parentNode.parentNode).after(newTr);
        updateReIndex(me.parentNode.parentNode.nextSibling,newIndex,"add");
        init("s");
        $(".time").on("click",function(){
            WdatePicker({dateFmt:'yyyy-MM-dd'});
        });
    }
//删除
    function removeTr(me){
        var meTr = me.parentNode.parentNode;
        var currentReIndex = $("#reIndex").html();

        var item = {};
        $(meTr).each(function(index){
            $(this).children().each(function(index){
                //console.log($(this).attr('name'));
                //console.log(this.innerHTML);
                if($(this).attr('name')!="exclusive"){
                    if(this.innerHTML!=""){
                        if($(this).attr('name')=="reIndex"){
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
        });
        if(currentReIndex){
            //console.log(item["reIndex"]);

            currentReIndex = currentReIndex.split("-")[1];
            //console.log(currentReIndex);
            if(Number(item["reIndex"])<=Number(currentReIndex)){
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

        var data = JSON.stringify(item);//转为json字符串
        submit(data,"cut");
        updateReIndex(meTr,1,"cut");
        $(meTr).remove();
        init("s");

    }
//修改数据的借款期数
    function updateReIndex(newTr,newIndex_,sign){
        var currentTr = $(newTr);
        if(sign=="add"){
            while(currentTr.next().length>0){
                currentTr = currentTr.next();
                currentTr.find("td").each(function() {
                    var text = $(this).html();
                    if (text.indexOf("借") != -1) {
                        var odlText = $(this).html();
                        var index = odlText.split("-")[1];
                        var newIndex = newIndex_ + 1;
                        var newText = odlText.replace(index, newIndex);
                        $(this).html(newText);
                    }
                });
                newIndex_ = newIndex_ + 1;
            }
        }else if(sign=="cut"){
            while(currentTr.next().length>0){
                currentTr = currentTr.next();
                currentTr.find("td").each(function() {
                    var text = $(this).html();
                    if (text.indexOf("借") != -1) {
                        var odlText = $(this).html();
                        var index = odlText.split("-")[1];
                        var newIndex = index - 1;
                        var newText = odlText.replace(index, newIndex);
                        $(this).html(newText);
                    }
                });
            }
        }
    }
    function save_(data){
        $.ajax({
            url:"/bxhk/savebill",
            contentType:"application/json;charset=UTF-8;",
            type:"POST",
            data: data,
            success:function (data){

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
            removeTr_.on("click",function(){
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
            removeTr_.on("click",function(){
                removeTr(this);
            });
        }
    };
    function submit(data,sign){
        if(sign=="save"){
            save_(data);
        }else{
            cut(data);
        }
    };
    init();
    //分专万
    function fenToWan(value){
        value = value / 10000 / 100;
        value = value.toString();
        value = $.fixedmax(value, 6);
        value = $.adaptionzero(value, 6);
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
initReStatus();

