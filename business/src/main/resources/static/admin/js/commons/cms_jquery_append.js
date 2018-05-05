/* 
 * 
 *  张振建收费使用，未经授权 禁止使用，保护版权人人有责
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */
function CmsDialog(){
    this._zindex = 1100;
    this.uuidId = "";
}

CmsDialog.prototype.showDialog = function(options){
    var self = this;
    this._zindex = this._zindex + 1;
    var remoteUrl = options["url"];
    console.log("url = " + remoteUrl);
    var param = "date=" + new Date();
    if(options["data"] != "undefined"){
        console.log("param != undefine");
        console.log("options['data']=" + options["data"]);
        param += "&" + options["data"];
    }
    console.log("param = " + param);
    var callbackFunc = function(){
        console.log("框体load加载结束");
    };
    if(options["call"] != "undefined"){
        callbackFunc = options["call"];
    }
    //var data = options.data;
    this.uuidId = new UUID();
    var _dialog_html_content = 
            "<div class='modal fade' id='" + this.uuidId + "_mydialog' style='z-index:" + this._zindex + ";' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"
            + "<div class='modal-dialog'>"
                + "<div class='modal-content'>"
                    + "<div class='modal-header'>"
                    + "<h4>操作窗口</h4>"
                + "</div>"
                + "<div class='modal-body'>"
                    + "<div id='cms_dialog_content_" + this.uuidId + "'>"
                    + "</div>"
                + "</div>"
                + "<div class='modal-footer'>"
                    + "<button id='btn_cms_dialog_close_" + this.uuidId + "' dialogid='" + this.uuidId + "_mydialog' type='button' class='btn btn-default'>关闭</button>"
                + "</div>"
            + "</div>"
          + "</div>";
    $(document.body).append(_dialog_html_content);
    $("#" + this.uuidId + "_mydialog").modal({
        backdrop:false
    });
    $("#btn_cms_dialog_close_" + this.uuidId).click(function(){
        var dialogId = $(this).attr("dialogid");
        console.log("要关闭的弹框 :" + dialogId);
        $("#" + dialogId).remove();
    });
    console.log("开始load框体内容");
    $("#cms_dialog_content_" + this.uuidId).load(remoteUrl,param,callbackFunc);
}

CmsDialog.prototype.closeDialog = function(){
    $("#" + this.uuidId + "_mydialog").remove();
}

var Cmsdialog = new CmsDialog();
