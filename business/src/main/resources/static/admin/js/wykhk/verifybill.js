/**
 * Created by 马宇驰 on 2018/1/18.
 */
$(function(){
    var update = $("#update");
    var save = $("#save");

    //修改按钮
    update.on("click",function(){
        var editTr = $("#editTr");
        var editTd = $(".editTd");
        editTr.show()
        editTd.show();
        $(".edit").attr("contentEditable","true");
        $(".time").on("click",function(){
            WdatePicker({dateFmt:'yyyy-MM-dd'});
        });
    });
    //保存按钮
    save.on("click",function(){
        var editTr = $("#editTr");
        var editTd = $(".editTd");
        editTr.hide();
        editTd.hide();
        $(".edit").attr("contentEditable","false");
        $(".time").unbind("click");
        var data = getDateFromTable('dateTable');
        submit(data,"save");
    });
});