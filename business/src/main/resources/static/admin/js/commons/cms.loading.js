/* 
 * 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

var cms_loading = {
    _dialog_html_content:'<div style="z-index:999999;background:#000 url(/js/commons/loading.gif) no-repeat center center; opacity:0.6; width:100%; height:100%; position:absolute; left:0; top:0"></div>',
    isshow:false,
    contentObj:null,
    load:function(oper){
        if(oper == 'open' && this.contentObj == null){
//        	alert('opening')
            if(this.isshow == false){
//           	alert('opened')
                this.contentObj = $(this._dialog_html_content).appendTo(document.body);
                this.isshow = true;
            }else{
                console.log("不允许的重复显示");
            }
        }
        if(oper == 'close'){
//        	alert('closing')
//            console.log("this.contentObj != null    " + (this.contentObj != null));
//            console.log("this.isshow    " + this.isshow);
            if(this.contentObj != null && this.isshow){
//            	alert('closed')
                this.contentObj.remove();
                this.contentObj = null;
                this.isshow = false;
            }
        }
    }
};