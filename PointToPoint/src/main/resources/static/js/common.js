/**
 * Created by 马宇驰 on 2017/11/14.
 */
$.fn.serializeObject = function() {
    var obj = {};
    var a = this.serializeArray();

    $.each(a, function() {
        var name = this.name;
        var o = obj;
        //支持中括号
        if(/\[(\S+)\]$/.test(name)){
            var v = name.replace(/\[(\S+)\]$/,"");
            name = name.match(/\[(\S+)\]$/)[1];
            if(!o[v]){
                o[v] = {};
            }
            o = o[v];

        }
        if (o[name]) {
            if (!o[name].push) {

                o[name] = [ o[name] ];
            }

            o[name].push(this.value || '');
        } else {

            o[name] = this.value || '';
        }
    });
    return obj;
}
