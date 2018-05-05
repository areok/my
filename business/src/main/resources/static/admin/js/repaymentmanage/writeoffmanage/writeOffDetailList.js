$(function(){ //等界面加载完成后，执行下面内容
    (function (){ // 闭包，防止下面定义的变量泄露到整个页面
        var table = $('#billsDetailTable');
        var writeoffbuttons = table.find('button').filter(function(index){return $(this).html()=="详情"});

        function getBussNoPeriods(button){
            return 'bussNo='+button.attr('data-buss-no');
        }

        writeoffbuttons.on('click',function(){
            var button = $(this);
            location.href= button.attr('data-href')+'?'+getBussNoPeriods(button);
        });

    }())
})
