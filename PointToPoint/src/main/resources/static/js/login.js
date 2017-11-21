/**
 * Created by 马宇驰 on 2017/11/14.
 */
$(function(){
    var form = $("#login");
    var login_user = $("#login_user");
    var login_regist = $("#login_register");
    var login = function(){
        var validator = form.serializeObject();
        console.log(form.serialize());
        console.log(JSON.stringify(validator))
        $.ajax({
            url         : '/chat/login',
            contentType : 'application/json',
            type        : 'post',
            data        :  JSON.stringify(validator),
            success : function (result) {
                if(result=="ok"){
                    alert('登录成功!')
                    location.href="/route/toMain";
                }
                else{
                    alert("账户不存在！");
                }
            }
        })
    }
    login_user.on("click",login);
    login_regist.on("click",function(){
        location.href = "/regist.html";
    })
})
