$(document).one('pageChange',function () {
    //初始化input
    function initCreditHav() {
        $("input[name^='creditInfos'][name$='creditHav']").each(function(i){
            if($(this).attr('checked')=='checked'){
                creditHav($(this))
            }
        });
    }
    initCreditHav();
})
// 有无涉诉
function creditHav(th){
    if($(th).val()=="2"){
        $(th).parents("ul").next().find(".creditText").attr("required","required")
        $(th).parents("ul").next().find(".creditText").removeAttr("disabled")
    }else if($(th).val()=="1"){
        $(th).parents("ul").next().find(".tooltip").remove()
        $(th).parents("ul").next().find(".creditText").attr("disabled","disabled")
        $(th).parents("ul").next().find(".creditText").removeAttr("required")
        $(th).parents("ul").next().find(".creditText").val("")
    }
}