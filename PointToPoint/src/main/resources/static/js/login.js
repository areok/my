/**
 * Created by 马宇驰 on 2017/11/14.
 */
$(function(){
    var form = $("#login");
    var register = $("#register");

    var login = function(){
        var validator = form.serializeObject();
        console.log(form.serialize());
        console.log(JSON.stringify(validator))
        $.ajax({
            url         : '/chat/register',
            contentType : 'application/json',
            type        : 'post',
            data        :  JSON.stringify(validator),
            success : function (result) {
                if(result=="ok"){
                    alert('保存成功!')
                    location.href="/route/toIndex";
                }
                else{
                    alert(result.resultMsg);
                }
            }
        })
    }
    register.on("click",login);
})
