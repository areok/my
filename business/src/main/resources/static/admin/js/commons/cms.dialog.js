/* 
 * 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

var cms = (function(cms, $){
    
    var _dialog_stack = [];
    
    var _z_index   = 1200;
    var _startLoad = "加载内容中。。。。。。"
    var _failLoad  = '加载失败！！！'
    var _failHandled  = '操作失败！！！'

    function _dialogHtml(title,options){
       var _dialog_html_content = 
       "<div class='modal fade'  id = '"+ options.id +"' style='z-index:" + _z_index++   + "' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"
           +"<form  class='form-horizontal form-validate' method='post' role='form'  onsubmit='return false;' action="+ options.action +">"
       		+ "<div class='modal-dialog'  style='width:" + options.width + ";height:" + options.height + "'>"
                + "<div class='modal-content'>"
                    + "<div class='modal-header'>"
                    + "<h4>" + title + "</h4>"
                + "</div>"
                + "<div class='modal-body'>"
                    + "<div class='dialog_content'>"
                    + _startLoad
                    + "</div>"
                + "</div>";
       if(!options.disFooter){
    	   if(options.saveBtnShow && !options.cancelBtnShow){
    		   _dialog_html_content = _dialog_html_content 
						    	   + "<div class='modal-footer'>"
						           + "<button  class='save-btn btn btn-default'>保存</button>"
						           + "</div>";
    	   }else if(!options.saveBtnShow && options.cancelBtnShow){
    		   _dialog_html_content = _dialog_html_content 
						    	   + "<div class='modal-footer'>"
						           + "<button  class='btn btn-default cancel-btn'>取消</button>"
						           + "</div>";
    	   }else{
    		   _dialog_html_content = _dialog_html_content 
						    	   + "<div class='modal-footer'>"
						           + "<button  class='btn btn-default cancel-btn'>取消</button> <button  class='save-btn btn btn-default'>保存</button>"
						           + "</div>";
    	   }
    	   
       }
       _dialog_html_content = _dialog_html_content + "</div></form></div>";
       return _dialog_html_content;
    }

    function Dialog(){
        
    }

   

    Dialog.prototype.initDialog = function(options){
        var options       = options || {};
        var self          = this;
        this.self         = this;
        this.titleText    = options.titleText || "新建";
        //alert(_dialogHtml(this.titleText));
        this.modal        = $(_dialogHtml(this.titleText,options)).appendTo(document.body);
        this.url          = options.url;
        //add by chentianyu 2015-05-07 为弹出层添加id，用于在弹出页内进行移除使用
        this.id 		  = options.id || '';
        //add by chentianyu 2015-06-09 单独控制保存、取消按钮是否显示，默认都显示
        this.cancelBtnShow = options.cancelBtnShow || true;
        this.saveBtnShow = options.saveBtnShow || true;
        this.saveBtn = this.modal.find('.save-btn');
        this.cancelBtn = this.modal.find('.cancel-btn');
        options.saveBtnText && this.saveBtn.html(options.saveBtnText);
        options.cancelBtnText && this.cancelBtn.html(options.cancelBtnText);
        this.saveDom = options.saveDom;//其他的保存按钮
        this.cancelDom = options.cancelDom;//其他取消按钮
        this.contentHtml  = this.modal.find('.dialog_content');
        this.cancel       = this.close       = options.cancel || function(){_removeModal(self)};
        this.save         = options.save || function(){_submit(self)};
        this.data         = options.data;
        this.action       = options.action;
        this.invokeModal  = $(options.invokeModal);
        this.ajaxSuccess  = options.ajaxSuccess ? function(d){ options.ajaxSuccess(d,self)} :false;
        this.contentType  = 'application/x-www-form-urlencoded';
        if(options.contentType != undefined ){
            this.contentType = options.contentType;
        }
        this.invokeModal.modal('hide');
        this.modal.modal({backdrop:false});
        _initEvent(self);
        _remoteContent(self);
        this.modal.on('hidden.bs.modal', function () {
        	self.invokeModal.modal('show');
        	self.modal.remove();
        	})
        options.content && this.contentHtml.html(options.content);
        if(options.initCallback){
        	options.initCallback();
        }
        return this;
    }
    function _removeModal(dialog){
        dialog.modal.modal('hide');
        $(document).trigger('maysubmit');
        
    }
    function _submit(dialog){
        dialog.modal.modal('hide');
        $(document).trigger('maysubmit');
        
    }
    function _defaltEvent(e){
        var e = e || window.event;
        if(e.stopPropagetion){
            e.stopPropagetion()
        }else{
            e.re
        }

    }
    function _initEvent(dialog){
    	dialog.saveBtn.unbind().bind('click',function(e){dialog.save(e,dialog)});
        dialog.cancelBtn.unbind().bind('click',dialog.cancel);
        
        $(dialog.saveDom).unbind().bind('click',function(e){dialog.save(e,dialog)});
        $(dialog.cancelDom).unbind().bind('click',dialog.cancel);
    }
    function _content(dialog, content){
        dialog.contentHtml.html(content);
        _initEvent(dialog);
    }

    function _remoteContent(dialog){
    	if(!dialog.url) return;
        _content(dialog, _startLoad);
        $.ajax({
            url         : dialog.url,
            contentType : dialog.contentType,
            type        : 'post',
            data        :  dialog.data,
            success     : dialog.ajaxSuccess ? dialog.ajaxSuccess : function (result) {
                var content = result.content ? result.content : result;
                _content(dialog, content);
            },
            error       : function(){
                _content(dialog, _failLoad);
            }
        })
    }
        
        function _submit(dialog){
        	if(!dialog.action)  return;
        	var form = dialog.modal.find("form");
        	if(form.validate){
        		form.validate();
        		if(!form.valid()){
        			return;
        		}
        	}
        	var formData = form.serialize();
	        _content(dialog, _startLoad);
	        $.ajax({
	            url         : dialog.action,
	            contentType : dialog.contentType,
	            type        : 'post',
	            async       : true,
	            data        : formData,
	            success     :  function (result) {
	                var content = result.content ? result.content : result;
	                _content(dialog, content);
	                setTimeout(function(){ location.reload()},1000);
	            },
	            error       : function(){
	                _content(dialog, _failHandled);
	            }
	        })
	  }




    if(cms.dialog){
//        throw new Error("cms.dialog 已经存在，不能重复添加！")
    }else{
        cms.dialog = function(obj){
            new Dialog().initDialog(obj);
        }
        
    }
    if(cms.messager){
    	
    }else{
    	cms.messager = {};
    	cms.messager.alert  = function(message, callback) {
    		cms.dialog({
				titleText : "消息",
				width : "400px",
				disFooter : false,
				cancelBtnShow : false,
				content:message,
				saveBtnShow : true ,
                saveBtnText : "确定",
				save:function(e,dialog){
					if(typeof callback == 'function'){
						callback();
					}
					dialog.close();
				}
    		});
    	}
    	cms.messager.confirm  = function(title, message, callback) {
    		cms.dialog({
				titleText : title,
				width : "500px",
				disFooter : false,
				cancelBtnShow : true,
				content:message,
				cancelBtnText : "否",
				saveBtnShow : true,
				saveBtnText : "是",
				save:function(e,dialog){callback(e,dialog);dialog.close();}
    		});
    	}
    	cms.messager.prompt  = function(title, callback) {
    		cms.dialog({
				titleText : title,
				width : "400px",
				disFooter : false,
				cancelBtnShow : true,
				cancelBtnText : "取消",
				content:'<textarea placeholder="'+title+'" style="width:369px;height:100px"></textarea>',
				saveBtnShow : true,
				saveBtnText : "确定",
				save:function(e,dialog){if(callback(e,dialog.contentHtml.find('textarea').val()))dialog.close();}
    		});
    	}
    	
    }
    return cms;
}(cms || {}, jQuery))



