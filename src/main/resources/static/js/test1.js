/**
 * Created by 马宇驰 on 2017/12/7.
 */
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};
alert(object.getNameFunc()());  //The Window


function outerFun()
{
    var a =0;
    alert(a);
}
var a=4;
outerFun();
alert(a);
