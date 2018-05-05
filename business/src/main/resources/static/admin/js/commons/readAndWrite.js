$(function(){
    init();
});

function canWrite(me,agr){
    var comm = $(agr);
    var value = me.value;
    if(value==='2'){
        comm.attr("readonly",true);
        comm.val("");
        comm.attr("required",false);
    }else{
        comm.attr("required",true);
        comm.attr("readonly",false);
    }
}
function init(){
    if($("input[name='guarantee.rentStatus']:checked").val()=='2'){
        $("#rentRemark").attr("readonly","true");
    }
    if($("input[name='guarantee.hireUse']:checked").val()=='2'){

        $("#hireRemark").attr("readonly","true");
    }
    if($("input[name='guarantee.specialPeople']:checked").val()=='2'){
        $("#specialRemark").attr("readonly","true");
    }
    if($("input[name='guarantee.fierceHouser']:checked").val()=='2'){
        $("#newsSource").attr("readonly","true");
    }
}
function chuzu(){
    var chuzu1 = $("#chuzu1_no");
    var chuzu2 = $("#chuzu2_no");
    var juzhu = $("#juzhu2");
    var qita = $("#qita2");
    if($("input[name='guarantee.rentStatus']:checked").val()=='2'){
        $("#rentRemark").attr("readonly","true");
    }
    if($("input[name='guarantee.hireUse']:checked").val()=='2'){

        $("#hireRemark").attr("readonly","true");
    }
    if($("input[name='guarantee.specialPeople']:checked").val()=='2'){
        $("#specialRemark").attr("readonly","true");
    }
    if($("input[name='guarantee.fierceHouser']:checked").val()=='2'){
        $("#newsSource").attr("readonly","true");
    }
}
function fuyuan(chuzu1_ok,chuzu1_no,chuzu2_ok,chuzu2_no,juzhu1,juzhu2,qita1,qita2){
    chuzu1_ok.attr("disabled",false);
    chuzu1_no.attr("disabled",false);
    chuzu2_ok.attr("disabled",false);
    chuzu2_no.attr("disabled",false);
    juzhu1.attr("disabled",false);
    juzhu2.attr("disabled",false);
    qita1.attr("disabled",false);
    qita2.attr("disabled",false);
}
function chuzuqingkuang(chuzu1_ok,chuzu1_no,chuzu2_ok,chuzu2_no){
    var rentRemark =  $("#rentRemark");
    var hireRemark = $("#hireRemark");
    rentRemark.attr("readonly",true);
    hireRemark.attr("readonly",true);
    rentRemark.attr("required",false);
    hireRemark.attr("required",false);
    rentRemark.val("");
    hireRemark.val("");
    chuzu1_ok.removeAttr("checked");
    chuzu1_no.attr("checked",true);
    chuzu1_no.click();
    chuzu2_ok.removeAttr("checked");
    chuzu2_no.attr("checked",true);
    chuzu2_no.click();

    chuzu1_ok.attr("disabled",true);
    chuzu1_no.attr("disabled",true);
    chuzu2_ok.attr("disabled",true);
    chuzu2_no.attr("disabled",true);
}
function selectChuzu(me) {
    var chuzu1_ok = $("#chuzu1_ok");
    var chuzu1_no = $("#chuzu1_no");
    var chuzu2_ok = $("#chuzu2_ok");
    var chuzu2_no = $("#chuzu2_no");
    var juzhu1 = $("#juzhu1");
    var juzhu2 = $("#juzhu2");
    var qita1 = $("#qita1");
    var qita2 = $("#qita2");
    //1 空置
    //2 自用
    //3  出租
    //4  其他
    var syqk = me.value;
    if("3" == syqk){
        fuyuan(chuzu1_ok,chuzu1_no,chuzu2_ok,chuzu2_no,juzhu1,juzhu2,qita1,qita2);
    } else{
        fuyuan(chuzu1_ok,chuzu1_no,chuzu2_ok,chuzu2_no,juzhu1,juzhu2,qita1,qita2);
        chuzuqingkuang(chuzu1_ok,chuzu1_no,chuzu2_ok,chuzu2_no);
    }
}
