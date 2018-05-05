/**
 * 
 * Page
 * 
 * Section
 * 
 * Json
 * 
 * All
 */
function JsUtilExtend(){
	//adduction
	
	//All
	this.clone=clone;
	this.showPrompt=showPrompt;
	this.hiddenPrompt=hiddenPrompt;
    this.getCurrentUrl=getCurrentUrl;
    this.executeMethod=executeMethod;
	//Json
	this.isServerRight=isServerRight;
    this.tryServerResponse=tryServerResponse;
	
	//Section

    this.getDataFromHtml=getDataFromHtml;
	this.getObjFromHtml=getObjFromHtml;
    this.getStruFromHtml=getStruFromHtml;
    this.getObjHEfromChildrenHtml=getObjHEfromChildrenHtml;
    this.getObjFromChildrenHtml=getObjFromChildrenHtml;
    this.getStruFromChildrenHtml=getStruFromChildrenHtml;
    this.updateObjOfChildren=updateObjOfChildren;
    this.updateObj=updateObj;
	//Page
	this.getRequestParam=getRequestParam;
	this.getRequestParamObj=getRequestParamObj;
	this.formatDateA=formatDateA;


    //hasOwnProperty
	/**
	 *========================Page ==============================================
	 */
	/**
	 *获取url参数
	 *@return String
	 */
	function getRequestParam(name) {
		var urlParamGeg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(urlParamGeg);
	    if (r != null) return unescape(r[2]);
	    return null;
    }
	
	/**
	 *获取url参数对象
	 *@return Obj
	 */
	function getRequestParamObj(name) {
		var urlParamGeg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var paramStr=window.location.search.substr(1);
	    var r = paramStr.match(urlParamGeg);
	    if (r != null){
	    	var jsonStr=unescape(unescape(r[2]));
	    	return JSON.parse(jsonStr);
    	}
	    return null;
    }
	
	/**获取当前页面的URL
	 * 
	 */
	function getCurrentUrl(){
	    
          var thisHREF = document.location.href;
          var tmpHPage = thisHREF.split( "/" );
          var thisHPage = tmpHPage[ tmpHPage.length-1 ];
          var currentlyUrl=thisHPage;
          
          var indexOfparams=currentlyUrl.indexOf("?");
          if(indexOfparams!=-1){
              currentlyUrl=currentlyUrl.substring(0,indexOfparams);
          }
          
	    return currentlyUrl;
	}
	
	
	
	
	
	/**
	 *========================Section ==============================================
	 */
	
	/**
	 *获取Html里的对象数据
	 *@return jsObj
	 */
	function getObjFromHtml(htmlES){
        return getDataFromHtml(htmlES,"obj");
	}
	
	
    /**
     *获取Html里的页面结构数据
     *@return jsObj
     */
    function getStruFromHtml(htmlES){
        return getDataFromHtml(htmlES,"stru");
    }
	
	
    /**
     *获取Html里的数据
     *@return jsObj
     */
    function getDataFromHtml(htmlES,attrStr){
        var jsObj=null;
        if(htmlES==null){
        }else{
            var objS=$(htmlES).attr(attrStr);
            if(objS==null||""==objS){
            }else{
                jsObj=JSON.parse(objS);
            }
        }
        return jsObj;
    }
	
	
	
	/**从子元素里获取对象数据
	 * 
	 */
    function getObjFromChildrenHtml(childrenH){
        var jsObj=null;
        var objH=getObjHEfromChildrenHtml(childrenH);
        if(objH==null){
        }else{
            jsObj=getObjFromHtml(objH);
        }
        return jsObj;
    }
	
	
    /**从子元素里获取页面结构数据
     * 
     */
    function getStruFromChildrenHtml(childrenH){
        var jsObj=null;
        var objH=getObjHEfromChildrenHtml(childrenH);
        if(objH==null){
        }else{
            jsObj=getStruFromHtml(objH);
        }
        return jsObj;
    }
	
	
	
	/**
	 *更新对象数据 
	 */
	function updateObj(htmlEH,obj){
	    var sign=false;
        if(htmlEH!=null){
            $(htmlEH).attr("obj",JSON.stringify(obj));
            sign=true;
        }
	    return sign;
	}
	
	/**
	 *更新所属的对象数据 
	 */
	function updateObjOfChildren(childrenH,obj){
	    var sign=false;
        var objH=getObjHEfromChildrenHtml(childrenH);
        if(objH!=null){
            $(objH).attr("obj",JSON.stringify(obj));
            sign=true;
        }
	    return sign;
	}
	
	
	
	/**
	 *获取对象所在的元素 
	 */
	function getObjHEfromChildrenHtml(childrenH){
	    var objH=null;
        var selS=$(childrenH).attr("sel");
        if(selS==null){
        }else{
            objH=$(childrenH).parents(selS);
        }
	    return objH;
	}
	
	
	/**
	 *========================Json ==============================================
	 */
	
	
	
	/**
	 *========================All ==============================================
	 */
	
	/*
	 * 克隆自己。
	 */
	function clone(myObj){
	  if(typeof(myObj) != 'object') return myObj;
	  if(myObj == null) return myObj;
	  
	  var myNewObj = new Object();
	  
	  for(var i in myObj)
	    myNewObj[i] = clone(myObj[i]);
	  
	  return myNewObj;
	}
	
	/**
	 * 服务器错误信息提示
	 * 
	 */
	function isServerRight(responseMessage){
			var msgHtml;
  			if(responseMessage.code !="1"){
  				msgHtml=responseMessage.msg==undefined ?"Server wrong format.":responseMessage.msg;
  				alert(msgHtml);
  				return false;
  			}else{
  				return true;
  			}
	}
	
	
	/**获取服务器返回状态
	 * 容纳服务器错误格式
	 */
	function tryServerResponse(responseMessage){
	    if(responseMessage==null){
	        responseMessage=new Object;
	        responseMessage.code=500;
	        responseMessage.msg="Server no response.";
	     }else if(!responseMessage.hasOwnProperty("code")){
	         responseMessage.code=500;
	         responseMessage.msg="Server wrong format.";
	     }
	    return responseMessage;
	}
	
	
	
	
	
	
	/**
	 * 日期显示函数
	 * return String
	 */
	function formatDateA(time, format){
		    var t = new Date(time);
		    var tf = function(i){return (i < 10 ? '0' : '') + i;};
		    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
		        switch(a){
		            case 'yyyy':
		                return tf(t.getFullYear());
		                break;
		            case 'MM':
		                return tf(t.getMonth() + 1);
		                break;
		            case 'mm':
		                return tf(t.getMinutes());
		                break;
		            case 'dd':
		                return tf(t.getDate());
		                break;
		            case 'HH':
		                return tf(t.getHours());
		                break;
		            case 'ss':
		                return tf(t.getSeconds());
		                break;
		        }
		    });
		}	

	/**显示提示框
	 * 
	 */
    function showPrompt(msg,e) {
    	 var tooltipHtml = "<div id='currentlyPrompt'>"+msg+"</div>";
    	 $("body").append(tooltipHtml);
        $("#currentlyPrompt").css({
        	"top": (e.pageY + 15) + "px",
        	"left": (e.pageX + 15) + "px",
        	"position":"absolute",
        	"background-color":"#f2f7f6"
        	}).show("fast");
    }

	/**隐藏提示
	 * 
	 */
	  function hiddenPrompt() {
            $("#currentlyPrompt").remove();
      }
	
	/*执行指定名字的方法
	 * 
	 */
    function executeMethod(className,functionName,pramO) { 
        var classOne=eval( className + "()" );
        return classOne[functionName](pramO); 
    } 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}