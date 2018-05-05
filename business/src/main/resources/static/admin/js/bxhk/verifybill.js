/**
 * Created by 马宇驰 on 2018/1/18.
 */
$(function(){
    var update = $("#update");
    var save = $("#save");
    var cancle = $("#cancle_div");

    //取消按钮
    cancle.on("click",function(){
        //var editTr = $("#editTr");
        //var editTd = $(".editTd");
        //editTr.hide();
        //editTd.hide();
        //update.show();
        //cancle.hide();
        //$(".edit").attr("contentEditable","false");
        //$(".time").unbind("click");
        var href = window.location.href;
        location.href = href;
    });
    //修改按钮
    update.on("click",function(){
        var editTr = $("#editTr");
        var editTd = $(".editTd");
        editTr.show()
        editTd.show();
        update.hide();
        cancle.show();

        $(".edit").attr("contentEditable","true");
        //$(".time").on("click",function(){
        //    WdatePicker({dateFmt:'yyyy-MM-dd'});
        //});
    });
    //保存按钮
    save.on("click",function(){
        cms.messager.confirm("确定","提交后不可修改账单，确认提交？",function() {
            if($("#pushButton").disabledButton(true)){
                return;
            }
            var href = window.location.href;
            var editTr = $("#editTr");
            var editTd = $(".editTd");
            editTr.hide();
            editTd.hide();
            $(".edit").attr("contentEditable","false");
            $(".time").unbind("click");
            var data = getDateFromTable('dateTable');
            submit(data,"save",href);
        });
    });
});