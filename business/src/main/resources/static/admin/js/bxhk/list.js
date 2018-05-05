/**
 * Created by 马宇驰 on 2018/1/24.
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
function initReStatus(){
    $("#example1").find("td[name='reStatus']").each(function (){
        $(this).html(reStatusEnum[$(this).html()]);
    });
};
initReStatus();
