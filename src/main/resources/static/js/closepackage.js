/**
 * Created by 马宇驰 on 2017/12/7.
 */
$(function(){

    var n = 999;
    function f1(){
        alert(n);
    }
    f1();




    function f2(){

        var b = 888;
        bAdd = function(){
            b+=1;
        }
        function f3(){
            alert(b);
        }
        return f3;
    }

    var result = f2();
    result();
    bAdd();
    result();
})


