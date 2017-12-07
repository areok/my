/**
 * Created by 马宇驰 on 2017/12/7.
 */
$(function(){
    var button = $("#button");
    var click = function(){
        alert("test2");
    }
    button.on("click",click);
})