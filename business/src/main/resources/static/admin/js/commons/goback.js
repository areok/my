$(function(){ //等界面加载完成后，执行下面内容
	(function (){ // 闭包，防止下面定义的变量泄露到整个页面


        var paramAll =  {type:'ALL'}
        var timer = null;
        var hearBeat = null;
        function initWs() {
            //check if your browser supports WebSocket
            if ('WebSocket' in window) {
                websocket = new WebSocket("ws://"+window.location.host+"/websocket");
            }
            else {
                cms.messager.alert('Sorry, websocket not supported by your browser.')
            }

            //Error callback
            websocket.onerror = function () {
                console.log('error')
                if(hearBeat!=null){
                    clearInterval(hearBeat);
                }
                if(timer!==null){
                    clearInterval(timer);
                }
                timer = setInterval(function () {
                    initWs();
                },10*1000);
            };

            //socket opened callback
            websocket.onopen = function (event) {
                console.log('open')
                if(timer!==null){
                    clearInterval(timer);
                    timer = null;
                }
                //redis 每次过期前5s刷新数据

                sendMsg(JSON.stringify(paramAll))


                //界面加锁的情况下
                if(lockMessage){
                    setMessageContent("websocket opened"+lockMessage);
                    setMessageContent("notify"+lockMessage);
                    sendMsg(lockMessage);


                    setInterval(function(){
                        sendMsg(lockMessage);
                        setMessageContent("notify"+lockMessage);
                    },(lockedTime*1000-5000));
                }


                if(hearBeat!=null){
                    clearInterval(hearBeat);
                }
                //心跳 60
                hearBeat = setInterval(function(){
                    var paramBeat = {
                        type:"BEAT"
                    }
                    sendMsg(JSON.stringify(paramBeat));
                },(60*1000));


            }

            //message received callback
            websocket.onmessage = function (event) {

                var message = eval("("+event.data+")");
                //添加的消息
                //标记消息已读
                //标记消息已处理
                alertW(message);

            }



            //socket closed callback
            websocket.onclose = function () {
                console.log('closed')
                if(hearBeat!=null){
                    clearInterval(hearBeat);
                }
                if(timer!==null){
                    clearInterval(timer);
                }
                timer = setInterval(function () {
                    initWs();
                },10*1000);
            };

            //when browser window closed, close the socket, to prevent server exception
            window.onbeforeunload = function () {
                websocket.close();
            }
        }

        //update message to vue and then in div
        function setMessageContent(content) {
            console.log(content);
        }

        //click to close the websocket
        function closeWS() {
            websocket.close();
        }

        //click to open the websocket
        function openWS() {
            initWs();
        }

        //click to send message
        function sendMsg(message) {
            websocket.send(message);
        }
        openWS();




        var bussNoSearchDom = $('#websock-bussno-search');
        var search = $('#websocket-ul .searchIcon');
        var searchLi =$('#websocket-ul .search');

        var containUl = $('#websocket-ul');
        bussNoSearchDom.on('input propertychange',function () {
            containUl.children('li').each(function () {
                checkShow($(this));
            })
        })
        search.on('click',function (e) {
            e.preventDefault();
            e.stopPropagation();
            containUl.children('li').each(function () {
                checkShow($(this));
            })
            return false;
        })



        function checkShow(li) {
            if(li.is('.search')){
                return;
            }
            var search = bussNoSearchDom.val()||'';
            if(!search){
                li.show();
            }
            if(li.attr('data-bussNo').indexOf(search)>=0){
                return li.show();
            }
            return li.hide();

        }


        function alertW(message){

            var content = '<span class="websocket-ul-top">'+
                '您有一笔'+message.taskName+'任务待处理  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 借款人'+message.custName+'</span>'+'订单编号'+message.bussNo;
            var id = message.id;
            var li = $("#"+id);
            // if(li.size()==0) {
            //     li=$('<li id="'+id+'" class="news-item" > </li>');
            //     $("#websocket-ul").prepend(li);
            // }
            console.log(message);
            var handlUrl = message.handleUrl+'?bussNo='+message.bussNo+'&taskType='+message.taskType+'&wbMsgId='+message.id;


            if(message.type == "HANDLE"){
                var content = content +
                    '<span class="pull-right"><span class="detail-status">'+message.handler+'已处理</span>' +
                    '<span class="websock-remove" data-id="'+id+'"></span></span>';
                li.html(content);
                messageCountSup();
                return;
            }
            if(message.type == "EMPTY"){
                $("#websocket-ul li").not('.search').remove();
                messageCountSup();
                return;
            }
            if(message.type=="REMOVE"){
                li.remove();
                messageCountSup();;
                return;
            }



            if(li.size()==0) {
                li=$('<li id="'+id+'" data-bussno="'+message.bussNo+'" class="news-item" style="list-style-type:none;"> </li>');
                li.insertAfter(searchLi);
            }
            checkShow(li);
            //已读
            if(message.type == "CHECK"){
                var content = content +
                    '<span class="pull-right"><span class="detail-status websockcount">已读</span>' +
                    '<span class="cute-off">|</span>' +
                    '<a href="'+handlUrl+'" class="websockhandle" data-dismiss="alert">去处理</a>' +
                    '<span class="websock-remove" data-id="'+id+'"></span></span>';
                li.html(content);
                messageCountSup();
                return;
            }
            //未处理信息

            var content = content +
                '<span class="pull-right"><a href="#" class="websockread websockcount" data-dismiss="alert">我知道了</a>' +
                '<span class="cute-off">|</span>' +
                '<a href="'+handlUrl+'" class="websockhandle" data-dismiss="alert">去处理</a>' +
                '<span class="websock-remove" data-id="'+id+'"></span></span>';
            li.html(content);
            messageCountSup();
            messageBlink(true);

        }
        var blink = null;
        function messageBlink(start){
            if(blink != null){
                clearInterval(blink);
                blink = null;
                document.title = '全流程系统';
                $('#websocket-message').find('i').stop().fadeIn();
            }
            if(start){
                messageCountSup();
                var i = $('#websocket-message').find('i');
                blink = setInterval(function(){
                    i.fadeOut(500,function () {
                        document.title ='全流程系统';
                        i.fadeIn(500,function () {
                            document.title = '全流程系统[您有'+$("#websocket-ul li .websockcount").size()+'条新消息]';
                        });
                    })

                    },1500);
            }
            return "";
        }
        function messageCountSup(){
            var size = $("#websocket-ul li .websockcount").size();
            if(size==0){
                size = '';
            }
            $('#websocket-message').find('i>SUP').text(size);
            var cannotblink =  $("#websocket-ul li .websockread").size()>0;
            if(!cannotblink){
                messageBlink(false)
            }
        }
        $("#websocket-message").click(
            function(){
                messageBlink(false);
            });

        //消息标记为已读
        $(document).delegate('.websockread', 'click',function (e) {
            e.preventDefault();
            e.stopPropagation();
            var self = $(this);
            var id = self.closest('li').attr('id');
            var paramRead = {
                type:"READ",
                id:id
            }
            sendMsg(JSON.stringify(paramRead));
            return false;
        })

        //消息清空
        $(document).delegate('.websockempty', 'click',function (e) {
            e.preventDefault();
            e.stopPropagation();
            var paramEmpty = {
                type:"EMPTY"
            }
            sendMsg(JSON.stringify(paramEmpty));
            return false;
        })

        //消息清空
        $(document).delegate('.websock-remove', 'click',function (e) {
            e.preventDefault();
            e.stopPropagation();
            var self = $(this);
            var id = self.closest('li').attr('id');
            var paramRemove = {
                type:"REMOVE",
                id:id
            }
            sendMsg(JSON.stringify(paramRemove));
            return false;
        })



    }())
})