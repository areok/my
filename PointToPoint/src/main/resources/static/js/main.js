/**
 * Created by 马宇驰 on 2017/11/21.
 */
function bindOnclick(userId,userName) {
    var targetUserId = $("#targetUserId").val(userId);
    var targetUserName = $("#targetUserName").val(userName);
    console.log(targetUserId);
    console.log(targetUserName);
    console.log(userId);
    console.log(userName);
}
function queryGroup(){
    $.ajax({
        url: '/chat/queryGroup',
        contentType: 'application/json',
        type: 'post',
        dataType: 'json',
        success: function (result) {
            var contactsdiv = $("#contactsdiv");
            for (var i = 0; i < result.length; i++) {
                var groupdiv = '<div>'
                var groupName = result[i].groupName;
                groupdiv += groupName + '</div>';
                var userList = result[i].userList;
                for (var j = 0; j < userList.length; j++) {
                    var id = userList[j].id;
                    var name = userList[j].name;
                    groupdiv += '<li' + ' class=li onclick=bindOnclick(' + id + ',"'+name+'")>' + name + '</li>'
                }
                groupdiv += '</div>';
            }
            contactsdiv.append(groupdiv);
        }
    })
}

    var websocket = null;

    //判断当前浏览器是否支持WebSocket
    if ('WebSocket' in window) {
        websocket = new WebSocket("ws://localhost:8082/websocket");
    }
    else {
        alert('Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function () {
        setMessageInnerHTML("error");
    };

    //连接成功建立的回调方法
    websocket.onopen = function (event) {

    }

    //接收到消息的回调方法
    websocket.onmessage = function (event) {
        var contentdiv = $("#contentdiv");
        var message = event.data;
        console.log(message)
        if(message=='-----------------------------------'){
            return
        }
        console.log(message);
        var parse = JSON.parse(message);
        var messagediv = '<div>'+parse.fromUserName+':'+parse.msg+'</div>';
        contentdiv.append(messagediv);
    }

    //连接关闭的回调方法
    websocket.onclose = function () {

    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        websocket.close();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML) {
        /*document.getElementById('message').innerHTML += innerHTML + '<br/>';*/
    }

    //关闭连接
    function closeWebSocket() {
        websocket.close();
    }

    //发送消息
    function send() {
        var targetUserId = $("#targetUserId").val();
        var targetUserName = $("#targetUserName").val();
        console.log(targetUserId);
        console.log(targetUserName);
        var message = $("#inputarea").val();
        var json = {
            toUserId:targetUserId,
            msg:message,
            toUserName:targetUserName,
        }
        message = JSON.stringify(json);
        websocket.send(message);
    }

queryGroup();
