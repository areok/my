/**
 * ajax global setting
 * author:shuzongrui
 */


var JSONRESULT_FAILED_CODE = 0;
var JSONRESULT_SUCCESS_CODE = 1;

$(function(){
	$.ajaxSetup({
		type        : 'post',
		contentType : 'application/json;charset=UTF-8',
		cache       : false
//	    success     : _successFun,
//	    error       : _errorFun
	});
});
/**
 * the default success function for ajax
 * @param data
 * @param successFunc that will be execute if success, usually ,the code = 1;
 * @param failedFunc that will be execute if failed, usually ,the code = 0;
 */
$(function(){
	if($.ui){  // jquery-ui 引入后  jquery.bootstrap.js 插件无法正常使用
		$.messager = {}
		$.messager.alert = function(str){
			alert(str)
		}
		$.messager.confirm = function(title, mess, callback) {
			if(confirm(mess)){
				callback();
			}
		}
	}
	
});

function _successFun(result) {
	var msg = (result.code == 1 ? "操作执行成功！" : "操作执行失败！" + result.msg);
	alert(msg)
//	$.messager.alert(result.code == 1 ? "操作执行成功！" : "操作执行失败！" + result.msg);
}

/**
 * the default failed function for ajax
 * @param data
 */
function _errorFun(ajax, textStatus, ex) {
	var desc = '操作执行失败，请联系系统管理员!';
    if(ex == 'Unauthorized') 
    	desc = '您没有执行该操作的权限!';
}

String.prototype.trimComma = function(){
	var str = this.trim().replace(/\,$/g,""); 
	return str.replace(/^\,/g,"");
}

String.prototype.endWith=function(str){
	  if(str==null||str==""||this.length==0||str.length>this.length)
	     return false;
	  if(this.substring(this.length-str.length)==str)
	     return true;
	  else
	     return false;
	  return true;
	 }
String.prototype.startWith=function(str){
  if(str==null||str==""||this.length==0||str.length>this.length)
   return false;
  if(this.substr(0,str.length)==str)
     return true;
  else
     return false;
  return true;
 }


//1个月 怎么算 本月x日到次月x日  次月没有x号 日期前提到 次月最后一日
Date.prototype.addMulMonth = function(mouthes){
	var target = new Date(this.getTime());
	mouthes = parseInt(mouthes) + target.getMonth();
	var mouthesadd = mouthes % 12;
	var yearsadd = (mouthes - mouthesadd) / 12;
	var day = this.getDate();
	target.setDate(1);
	
	target.setMonth(mouthesadd);
	
	target.setFullYear(yearsadd+target.getFullYear());
	var maxday = getLastDay(target.getFullYear(), target.getMonth()+1);
	if(maxday < day) {
		target.setMonth(mouthesadd);
		target.setDate(maxday);
	}else{
		target.setDate(day);
	}
	return target;
}

function getLastDay(year,month)   
{   
	 var new_year = year;  //取当前的年份   
	 var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）   
	 if(month>12)      //如果当前大于12月，则年份转到下一年   
	 {   
	 new_month -=12;    //月份减   
	 new_year++;      //年份增   
	 }   
	 var new_date = new Date(new_year,new_month,1);        //取当年当月中的第一天   
	 return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期   
}  


//yyyy-MM-dd hh:mm:ss
Date.prototype.format = function(strFormat){
	try{  
        var fmt = strFormat == undefined? 'yyyy-MM-dd': strFormat;  
        var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
     }catch(e){  
        this.debug('格式化日期出现异常：' + e.message);  
     } 
}




/**
 * 禁止重复提交
 * @param bool
 * @returns {boolean}
 */

$.fn.disabledButton = function(bool) {
    if(bool){
        var dis =  $(this).attr("disabled");
        if(!dis){
            $(this).attr("disabled",true);
            return false;
        }
        return true;
    }else{
        $(this).attr("disabled",false);
    }

}



/**
 * 表单序列化为对象
 * @param 
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





/**
 * 对bootstraptable的封装
 * @param 
 * {
 * 	  type:"remove" or "append" or 没有
 * 	  removeId:removeId 删除数据 时依赖的行的名称
 *    data:data
 *    
 * }
 */

$.fn.cmsTable = function(obj) {
	obj = obj || {};
	var table = $(this);
	table.bootstrapTable();
	if(obj.url){
		if(obj.form){
			obj.sendObj = $(obj.form).serializeObject();
		}
		obj.sendObj = obj.sendObj || {} ;
		table.bootstrapTable('destroy');
		table.bootstrapTable({
			url:obj.url,
			queryParams: function (params) {
  					//jQuery.extend(obj.sendObj, params);
  					obj.sendObj.limit = params.limit;
  					obj.sendObj.offset = params.offset;
  					return JSON.stringify(obj.sendObj);
  				},
  			sidePagination: 'server', // client or server
	        pagination: true,
	        pageList: [10, 25, 50, 100, 200],
		});
		return;
	}
	if(obj === 'getSelections') return table.bootstrapTable('getSelections');
	if(obj === 'getData') return table.bootstrapTable('getData');
	
	var data = obj.data || [];
	var removeId = obj.removeId;
	switch(obj.type){
	case'remove':
		var removeId = obj.removeId || 'id';
		data = table.bootstrapTable('getData');
		selectData = table.bootstrapTable('getSelections');
		$.arrDelById(data, selectData, removeId);
		break;
	case'append':
		allData = table.bootstrapTable('getData');
		data = jQuery.merge(data,allData);
		break;
	}
	
	table.find('tbody').empty();
	table.bootstrapTable('destroy');
	table.find('tbody').empty();
	table.bootstrapTable({
		
        pagination: true,
        pageSize: 10,
        pageList: [10, 25, 50, 100, 200],
	});
	for(var i = 0; i < data.length; i++){
		table.bootstrapTable('append',data[i]);
	}
		
}

/**
 * 公共方法 根据数组元素（对象）的某个属性 来查重 删除 合并数组
 */
$.isArrExsitById = function(arr, att, id) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] && arr[i][id] === att){
			return true;
		}
	}
	return false;
	
}

$.arrDelById = function(all, del, id) {
	var result = [];
	for(var i=del.length-1; i >= 0; i-- ){
		for(var j=all.length-1; j>=0; j--){
			if( del[i][id] === all[j][id] && del[i][id] != 'null'){
				  result.push(all.splice(j,1));
				
			}
		}
	}
	return result;
	
}
$.arrMergeById = function(arr1, arr2, id){
	$.arrDelById(arr1, arr2, id);
	return jQuery.merge(arr1, arr2);
}

$.preventDefault = function(){
	var e = arguments.callee.caller.arguments[0] || window.event;
	if(e.preventDefault){
		e.preventDefault()
	}else{
		e.returnValue = false;
	}
}

$.fn.cmsForm = function(obj,callback) {
    var arr = [];
    var self_form = $(this);
    var objback = {};

    _parseObj(obj);
    for(var i = 0; i < arr.length; i++){
        _initForm(arr[i]);
        objback[arr[i].name] = arr[i].val;
    }
    
    if($.isFunction(callback)){
    	callback(objback, self_form);
    }

    function _initForm(obj){
        var name = obj.name;
        var value = obj.val;
        var select = self_form.find('select[name="'+name+'"]');
        if(select.length){
            select.val(value);
            return;
        }
        var input = self_form.find(':input[name="'+name+'"]');
        switch(input.attr('type')){
            case'radio':
            input.attr("checked",value);
            break;
            case'checkbox':
            if(input.length == 1){
                input.attr('checked',true);
                if(value == false)
                    input.removeAttr('checked');
            }else{
                if(typeof value === "string"){
                    value = value.split(',');
                }
                
                input.each(function(){
                    var self = $(this);
                    self.removeAttr('checked');
                    for (var i = value.length - 1; i >= 0; i--) {
                        if(self.val() == value[i])
                            self.attr('checked',true);
                    };
                });
            }
            break;
            default:
            input.val(value);
        }
    }

    function  _parseObj(obj, name){
        var name = name || "";
        var temp = {};
       // Handle the 3 simple types, and null or undefined 
        if (null == obj || "object" != typeof obj) {
            arr.push({name:name,val:obj});
            return;
        }
        // Handle Date 
        if (obj instanceof Date) { 
           arr.push({name:name,val:obj});
            return ; 
        } 

        // Handle Array 
        if (obj instanceof Array) { 
            arr.push({name:name,val:obj});
            return ; 
        } 

        // Handle Object 
        if (obj instanceof Object) { 
            name = name === "" ? name : name + "." 
            for (var attr in obj) { 
                if (obj.hasOwnProperty(attr)) 
                    _parseObj(obj[attr],name + attr); 
                } 
            return;
        } 

        throw new Error("Unable to parse obj! Its type isn't supported."); 
    }
        
        
}



/**
 * 表单序列化为json字符串
 * @param data
 */

$.fn.serializeJSONString = function() {
	var objectStr=$(this).serializeObject();
    return JSON.stringify(objectStr);
}
/**
 * 根据url返回对象或者对象 填充表单属性
 * @param data
 */
$.fn.loadForm = function(urlOrObj, callback){
	var obj ;
	var self = $(this);
	if(typeof urlOrObj == "string"){
		$.ajax({
			url         : urlOrObj,
			type        : 'POST',
			contentType : 'application/x-www-form-urlencoded',
			data        : null,
			success : function (result) {
				if(result.content){
					obj = result.content;
				}else{
					obj = result;
				}
				_LoadFormWithObj(self, obj);
				
			}
		});
	}else{
		obj = urlOrObj;
		_LoadFormWithObj(self, obj)
	}
	
	function  _LoadFormWithObj(form, obj){
		if(!obj) return;
		for(var attr in obj){
		    if(typeof(obj[attr])=='function'){                     
		      continue; 
		    } 
		    var $input = self.find(":input[name='"+attr+"']"); 
		    if($input.length == 0){
		    	continue;
		    }
		    var type = $input.attr("type");    

		    if(type=="checkbox" ||type=="radio"){ 
		        var avalues = (obj[attr]+"").split(","); 
		        for(var v=0; v<avalues.length;v++){ 
		          $input.each(function(i,n){ 
		              var value = $(n).val();                         
		              if(value == avalues[v]){                        
		                $(n).attr("checked","checked"); 
		              } 
		          }); 
		      } 
		    }else{ 
		      $input.val(obj[attr]+"");
		      if(self.find("#"+attr+"Checkbox").length && obj[attr]+"" == 'true'){
		    	  self.find("#"+attr+"Checkbox").removeAttr('checked');
		    	  self.find("#"+attr+"Checkbox").click();
		      }
		    } 
		      
		  } 
		if($.isFunction(callback)){
				callback(self, obj);
		}
	}
	return this;
	
}

$.fn.validateErrorMessage = function(obj,callback) {
	var message = "校验未通过!信息详情：<br/>";
	var map = {};
	$(this).find('label.validerror').filter(function(index){ return $(this).css('display')!=='none' }).each(function(){
		var self = $(this);
		var div = self.parents('.tab-pane');
		var idtext = $('a[href="#'+div.attr('id')+'"').text() || "内容如下";
		var parent = self.parent();
		if(!parent.is('div')){
			parent = parent.parent();
		}
		map[idtext] = map[idtext] || (map[idtext] = '');
		map[idtext] += parent.prev().html() + ":" + self.text() +"<br/>";
	});
	for(idtext in map){
		message += idtext + "<br/>" + map[idtext] + "----------------------------------<br/>";
	}
	return message;
}          

function checkAll(id) {
	$(preId(id)).click(function () {
		if($(this).attr('value') == 0) {
			$(this).parents('thead').next().find(':checkbox').not('[disabled]').prop('checked', true);
			$(this).attr('value', 1);
		}
		else {
			$(this).parents('thead').next().find(':checkbox').prop('checked', false);
			$(this).attr('value', 0);
		}
	});
	$('#tbody>tr').each(function(){
		var tr = $(this);
		tr.add(tr.find('input')).click(function(){
			var checkbox = tr.find('input');
			if(checkbox.prop('checked'))
				checkbox.prop('checked', false);
			else 
				checkbox.prop('checked', true);
		})	
	})
}

function hasChecked(id){
	return $(preId(id)).find(':checkbox:checked').length > 0;
}

function isMutiChecked(id){
	return $(preId(id)).find(':checkbox:checked').length > 1;
}

function isSingleChecked(id){
	return $(preId(id)).find(':checkbox:checked').length == 1;
}

function getAllCheckboxByChecked(id){
	var checkboxs = [];
	$(preId(id)).find(':checkbox:checked').each(function() {
		checkboxs.push($(this));
	});
	return checkboxs;
}

function getAllTrByChecked(id){
	var trs = [];
	$(preId(id)).find(':checkbox:checked').each(function() {
		trs.push($(this).parents('tr'));
	});
	return trs;
}

function getIdsByChecked(id){
	var ids = [];
	$(preId(id)).find(':checkbox:checked').each(function() {
		ids.push($(this).val());
	});
	return ids;
}

//construct a select
var head = $('<option value="-1">请选择</option>');
function initSelect(selectId, uri, hasHead) {
	if(typeof hasHead == "undefined" || hasHead == null) {
		hasHead = true;
	}
	$.ajax({
		url         : uri,
		success     : function (result) {
			if(result.code == 1) {
				var select = $(preId(selectId));
				select.empty();
				if(hasHead) {
					select.append(head);
				}
				var datas = result.content;
				for(var i = 0; i < datas.length; i++) {
					var option = $('<option/>');
					option.attr('value', datas[i].id);
					option.text(datas[i].name);
					select.append(option);
				}
			}
		}
	})
}

//初始化表格宽度
function initThWidth()
{
	var th_font_size = 19;
	var tableObj = {};
	var thWidth = [];
	var $table = $('table:visible');
	var tObj = {};
	var padding_left = 8*2;
	//第一步求出最小宽度
	$table.each(function( i , table){
		$(table).find('thead th:visible').each(function( j , th){
			var text = $.trim($(th).text());
			var l1 = text.replace(/[A-Za-z0-9_ ():&?#\/.]/g , '').length;//汉子的length
			var l2 = text.length - l1;
			var tLength = l1 + l2/1.5;
			thWidth.push((tLength * th_font_size) + tLength + 2 + padding_left);
		});
		tableObj[("table" + i)] = thWidth//.sort(function(a , b){return 1});
		tObj["table" + i] = table;
		//console.log(table);
		thWidth = [];
	});

	//console.log(tableObj);
	var td_font_size = 13;
	var table2 = {};
	$table.each(function( i , table ){		
		var trArr = [];
		$(table).find('tbody tr:visible').each(function( j , tr){
			var tdArr = [];
			$(tr).children('td:visible').each(function(k , td){
				var text = $.trim($(td).text());
				var l1 = text.replace(/[A-Za-z0-9_ ():&?#\/.]/g , '').length;//汉子的length
				var l2 = text.length - l1;
				var td_legnth = l1 + l2/1.5;
				//var td_legnth = $.trim($(td).text()).length;
				tdArr.push((td_legnth * td_font_size) + td_legnth + 2 + padding_left);
			});

			trArr.push(tdArr);
			//console.log(trArr);
			tdArr = [];
		});
		table2['table' + i] = trArr;
		var trArr = [];
	});
	//console.log(table2);
	var tableObj2 = {};
	var tdObj = {};
	$.each(table2 , function( i , tr){
		$(tr).each(function( j , tdArr){
			$(tdArr).each(function( k , td){
				var tdk = ['td' + k]
				tdObj[tdk]? tdObj[tdk].push(td) : tdObj[tdk] = [td]; 
			});
			
		});
		$(tdObj).each(function( h , td){
				$.each(td , function(u , td2){
					tdObj[u] = td2.sort(function(a,b){return a<b?1:-1})[0];
				});
			});
		tableObj2[i] = tdObj;
		tdObj = {};
	});

	$.each(tableObj2 , function( k , v){
		var _index = 0;
		$.each(v , function( i , v2){
			var width = tableObj[k][_index]<v2?v2:tableObj[k][_index];
			$(tObj[k]).find('thead th:visible').eq(_index).css('width',((width) + "px"));
			_index++;
		});
		_index = 0;
	});

	var maxWidth = 240;
	$('table:visible').each(function(i ,table){
		//var .sort(function(a,b){return a<b?1:-1})[0]
		var width = [];
		var width2 = {};
		var $th = $(table).find('thead th:visible');
		$th.each(function( j , th){
			var w = parseFloat($(th).css('width'));
			width.push(w);
			width2[w] = j;
			if(w >= maxWidth)
			{
				$(th).css('width','');
			}
		})
		$th.eq(width2[width.sort(function(a,b){return a<b?1:-1})[0]]).css('width' , '');
	})
}

//This will trigger "change" event when "val(new_val)" called 
//with value different than the current one
(function($){
  var originalVal = $.fn.val;
  $.fn.valnochange=$.fn.val;
  $.fn.val = function(){
      var prev;
      if(arguments.length>0){
          prev = originalVal.apply(this,[]);
      }
      var result =originalVal.apply(this,arguments);
      if(arguments.length>0 && prev!=originalVal.apply(this,[]))
          $(this).change();  // OR with custom event $(this).trigger('value-changed')
      return result;
  };
})(jQuery);


