/*以下方法目录
 * 1、通过截取身份证得到年龄和性别。
 * 2、四舍五入，并保存几位小数。
 * 3、检查字符串是否为数字
 * 4、过滤特殊字符，例如$ ，等，便于计算（注，未完善全）
 * 5、批量得到checkBox中value值。
 * 6、jquery批量得到checkBox中value值（需要jQuery环境）。
 * 7、jQuery的日期控件（需要jQuery环境）。
 * 8、表单只能输入一定长度的 
 * 9、计算两个数，相加，精确到浮点，四舍五入，保留自定义几位小数。
 * 10、计算两个数，相减，精确到浮点，四舍五入，保留自定义几位小数。
 * 11、计算两个数，相乘，精确到浮点，四舍五入，保留自定义几位小数。
 * 12、计算两个数，相除，精确到浮点，四舍五入，保留自定义几位小数。
 * 13、验证数字,保留N位小数 参数为String,默认两位小数。
 * 14、格式化钱，如10000格式化为10,000,保留n位小数后，进行显示。
 * 15、判断一个字符是否包含在另一字符中。。。。参数无顺序。
 * 16、把页面上所有表单值，拼接成一个JSON对象。
 * 17、给BODY加入监听，例如做只能输入数字的验证，或者自动计算和等。
 * 18、去掉字符串的前面空格。
 * 19、去掉字符串的结尾空格。
 * 20、去掉字符串的首尾空格。
 * 21、判断IE浏览器的版本     注：参数格式为："MSIE 7"，或者"MSIE 6"，"MSIE 5".......
 * 22、获取radio列表中被选择项的值，如未选中返回-1。
 * 23、点击一个表单域，会自动在该tr下面显示出一个div或者table等，再次点击，这个div会隐藏起来.
 * 24、功能如上，但是可以把方法的返回页面，加载放入下面
 * 25、把页面上，所有一定范围内<tr>下的的值，拼接成json传输到后台，后台解析JSON对象.
 * 26、在页面上打开一个弹出层。（需要jQuery环境）
 * 27、关闭弹出层.（需要jQuery环境）
 * 28、JSP还原页面原始值
 * 29、清空一定范围内的，所有包含name的，值，同时可以选择性的进行清空（需要jQuery环境）
 * 
 * 31、dateFormString 把日期格式化成字符串,例如"yyyy-MM-dd"转换成"yyyyMMdd"
 * 
 * 
 * 34、compareDate 比较两个日期大小
 * 
 * 35、StandardPost jquery 实现form表单提交并跳转页面 
 * 
 * 36、 getAccountForm  设定银行卡号每四位一空格的规则显示
*/

/*1、通过截取身份证得到年龄和性别*/
function showBirthday(val) {
    var birthdayValue;
    var age;
    var sex;
    var json = {};
    var today = new Date();
    if (15 == val.length) { //15位身份证号码
        birthdayValue = val.charAt(6) + val.charAt(7);
        if (parseInt(birthdayValue) < 10) {
            birthdayValue = '20' + birthdayValue;
        }
        else {
            birthdayValue = '19' + birthdayValue;
        }
        if (parseInt(val.charAt(14) / 2) * 2 != val.charAt(14)){
        	sex = '1';
        }else{
        	sex = '0';
        }
        age =today.getFullYear()- birthdayValue;
        birthdayValue += '-' + val.charAt(8) + val.charAt(9)+ '-' + val.charAt(10) + val.charAt(11);
    }
    if (18 == val.length) { //18位身份证号码
        birthdayValue = val.charAt(6) + val.charAt(7) + val.charAt(8) + val.charAt(9);
        if (parseInt(val.charAt(16) / 2) * 2 != val.charAt(16)){
        	sex = '1';
        } else{
        	sex = '0';
        }
        age = today.getFullYear()- birthdayValue;
        birthdayValue += '-' + val.charAt(10) + val.charAt(11)+ '-' + val.charAt(12) + val.charAt(13);
    }
    json['birthday'] = birthdayValue;
    json['age'] = age;
    json['sex'] = sex;
    return json;
    //return sex;
}

/*2、四舍五入 最多保留N位小数,  N由pointNum这个决定*/
function forDight(value,pointNum){
	var flage = Math.pow(10,pointNum);
	var result = Math.round(value*flage)/flage;
	return result;
}
/*3、检查字符串是否为数字:未去掉特殊字符进行验证*/
function checkNumber(checkStr){
    var regex = /^[\+\-]?\d+(\.\d+)?$/;
    return regex.test(checkStr);
}
/*4、过滤特殊字符：主要是过滤一些财务记法的数字，美元符、人民币符*/
function verifyNumber3(value) {
    value = value.trim();
   // var regex= [`~!@#$%^&*()+=|{}':;',\\[\\]<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]
    value = value.replace(/[￥,$。，、:;]/g, '');
    if (checkNumber(value)) {
        if (value.substring(0,1) != '0') {
            value = value.replace(/^0+/g, '');
        }
        return value;
    } else {
        return false;
    }
}
/*5、批量得到checkbox，里面的value值[正常方法],这样在前台页面需要切割*/
function getSomeId(checkBoxName){
	var arrayId = [];
	var f = document.getElementsByName(checkBoxName);
	for(var a=0;a<f.length;a++){
		if(f[a].checked){
			var idValue = f[a].value
			arrayId[arrayId.length] = idValue;
		}
	}
	return arrayId;
}
/*6、jquery的批量得到checkBox中的value的方法,中间已,
 * checkBoxName:要查找的checkbox的name名
 * flag：分割符，每个value直接的分割符号
 * */
function getAllValue(checkBoxName,flag){
	var allValue = "";
	var size = $("[name="+checkBoxName+"]:checked").size();
	$("[name="+checkBoxName+"]:checked").each(function(i){
		if(size==(i+1)){
			allValue += $(this).val();
		}else{
			allValue += $(this).val()+flag;
		}
	});
	return allValue;
}
/*6.1  jquery的批量得到checkBox中的value的方法,中间已,
 * checkBoxName:要查找的checkbox的name名
 * attrName :获取checkBox中属性 attrName
 * flag：分割符，每个value直接的分割符号
 * */
function getAllAttrValue(checkBoxName,attrName,flag){
	var allValue = "";
	var size = $("[name="+checkBoxName+"]:checked").size();
	$("[name="+checkBoxName+"]:checked").each(function(i){
		if(size==(i+1)){
			allValue += $(this).attr(attrName);
		}else{
			allValue += $(this).attr(attrName)+flag;
		}
	});
	return allValue;
}

/*7、日期插件 参数必须是class名，且名包含date，不用加"."号*/
function dateUI(flag){
	if(flag==undefined){
		flag="date";
	}
	jQuery("["+flag+"]").datepicker();     //目前为jQuery自带，默认日期插件，改动需要自定义

} 
/*8、只能输入一定长度的文本,如果输入超过，将不能输入进去*/
function maxlength(ele,length){
	ele.value = ele.value.substring(0,length);
}
/*9、精确计算浮点数      两个数相加(保留n位小数，四舍五入),默认保留两位小数*/
function jia(arg1,arg2,n){
	if(n==null||n==""||n==undefined){
		n=2;
	}
	var r1,r2,m;
	try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
	try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
	m = Math.pow(10,Math.max(r1,r2));
	return  forDight((arg1*m+arg2*m)/m,n);
}
/*10、精确计算浮点数  两个数相减(保留flage位小数，四舍五入),默认保留两位小数*/
function jian(arg1,arg2,flage){
	if(flage==null||flage==""||flage==undefined){
		flage=2;
	}
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
    try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
    m = Math.pow(10,Math.max(r1,r2));
    n=(r1>=r2)?r1:r2;
    return forDight(((arg1*m-arg2*m)/m).toFixed(n),flage);
}
/*11、精确计算浮点数    两个数相乘(保留n位小数，四舍五入)，默认保留两位小数 */
function cheng(arg1,arg2,n){
	if(n==null||n==""||n==undefined){
		n=2;
	}
	var m=0,s1=arg1.toString(),s2=arg2.toString();
	try{m+=s1.split(".")[1].length;}catch(e){}
	try{m+=s2.split(".")[1].length;}catch(e){}
	return  forDight(Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m),n);
}
/*12、精确计算    浮点数    两个数     相除(保留n位小数，四舍五入)，默认保留两位小数*/
function chu(arg1,arg2,n){
	if(n==null||n==""||n==undefined){
		n=2;
	}
	var t1=0,t2=0,r1,r2;
	try{t1=arg1.toString().split(".")[1].length;}catch(e){}
	try{t2=arg2.toString().split(".")[1].length;}catch(e){}
	with(Math){
	r1=Number(arg1.toString().replace(".",""));
	r2=Number(arg2.toString().replace(".",""));
	return forDight((r1/r2)*pow(10,t2-t1),n);
	}
} 
/*13、验证数字,保留N位小数 参数为String,默认两位小数*/
function anyString(str,n){
	str=str+"";
	str=str.replace(/\.{2,100}|[a-zA-Z]{1,100}|[\u4e00-\u9fa5]{1,100}|[\+\_\=\!\@\#\$\%\^\&\*\(\)\"\'\?\/\>\<\,\s]{1,100}/,"");
	if(n==null||n.length==0||n==undefined){
		n=2;
	}
	if(str.indexOf('.')!=-1){
		str=str.substring(0,str.indexOf('.')+n+1);
	}
	return str;
}
/*14、格式化钱，如10000格式化为10,000,保留n位小数后，进行显示
 * 注：JSP页面有forMat标签支持
 */
function formatMoney(str,n){
	str= anyString(str,n);
	str = str+"";
	var strInt="";
	var strFloat="";
	var point=str.indexOf(".");   //字符串中，第一次出现的索引值
	if(point!=-1){
		strInt=str.substring(0,point);
		strFloat=str.substring(point,str.length);
	}else{
		strInt= str;
	}
	var count=0;
	var count1=0;
	var targetStr="";
	for(i=0;i<strInt.length;i++){
		targetStr=(strInt+"").substring(strInt.length-count1-1,strInt.length-count1)+targetStr;
		count++;
		count1++;
		if(count==3&&count1!=strInt.length){
			targetStr=","+targetStr;
			count=0;
		}
	}
	targetStr=targetStr+strFloat;
	return targetStr;
}
/*15、判断一个字符是否包含在另一字符中。。。。参数无顺序*/
function strLike(str1,str2){
	if(str1.indexOf(str2)!=-1 || str2.indexOf(str1)!=-1){
		return true;
	}else{
		return false;
	}
}
/*16、把页面上$(str)这个范围内的所有表单值拼接成JSON对象，
 * 注：需json2.js支持，同时后台解析JSON对象，还需一些解析JSON用到的JAR包
 * 注：已经考虑到页面上table套table情况
 * */
function getListData(str){
	var tempData={};
	var isClient = function(ele){
		return $(ele).find("tr").length == 0;
	}
	str.find("tr").each(function(){
		if(isClient(this)){
			$(this).find("[name]").each(function(){				
				if($(this).find("[class*='validate[']")){
					var errorFlag = $(this).validationEngine('validate');
					if(!errorFlag){
						tempData["errorFlag"] = errorFlag;
						return tempData;
					}
				}
				if($(this).is(":checkbox,:radio")){
					if($(this)[0].checked){
						var name = $(this).attr("name").split("#")[0]; //截取#前面字符
						tempData[name] = $.trim($(this).val());
					}
				}else{
					if($(this).is("select")){
						tempData[$(this).attr("name")] = $.trim($(this).find(":selected").val());
					}else{
						tempData[$(this).attr("name")] = $(this).val();
					}
				}
			});
		}
	});
	return tempData;
}


/*16、把页面上$(str)这个范围内的所有表单值拼接成JSON对象，
 * 注：需json2.js支持，同时后台解析JSON对象，还需一些解析JSON用到的JAR包
 * 注：已经考虑到页面上table套table情况
 * */
function getListDataStd(tdObj){
	var tempData={};
	var isClient = function(ele){
		return $(ele).find("td").length == 0;
	}
	tdObj.find("td").each(function(){
		if(isClient(this)){
			$(this).find("[name]").each(function(){				
				if($(this).find("[class*='validate[']")){
					var errorFlag = $(this).validationEngine('validate');
					if(!errorFlag){
						tempData["errorFlag"] = errorFlag;
						return tempData;
					}
				}
				if($(this).is(":checkbox,:radio")){
					if($(this)[0].checked){
						var name = $(this).attr("name").split("#")[0]; //截取#前面字符
						tempData[name] = $.trim($(this).val());
					}
				}else{
					if($(this).is("select")){
						tempData[$(this).attr("name")] = $.trim($(this).find(":selected").val());
					}else{
						tempData[$(this).attr("name")] = $(this).val();
					}
				}
			});
		}
	});
	return tempData;
}

/*18、去掉字符串首部空格*/
function leftTrim(value){
   var re =/^\s*/;
   if(value==null){
       return null;
   }
   return value.replace(re,"");
}

/* 19、去掉字符串尾空格*/
function rightTrim(value){
   var re =/\s*$/;
   if(value==null){
       return null;
   }
   return value.replace(re,"");
}
/* 20、去掉字符串头尾空格*/
function trim(value){
   return leftTrim(rightTrim(value));
}
/*
 * 21、判断IE浏览器版本
 * 注：str格式为"MSIE 7"，或者"MSIE 6"，"MSIE 5".......
 */
function isIECount(str) {
	if (navigator.appVersion.indexOf(str) > -1){
		return true;
	} else {
		return false;
	}
}
/*22、获取radio列表中被选择项的值
*     如果没有选择的radio返回-1
*/
function getRadioSelectedIndex(radioName) {
	var elements = document.getElementsByName(radioName);
	if(elements.length == 0) {
		return -1;
	}
	for(var i=0; i<elements.length; i++) {
		if(elements[i].selected || elements[i].checked) {
			return i;
		}
	}
	return -1;
}
/*23、点击一个表单域，会自动在该tr下面显示出一个div或者table等，再次点击，这个div会隐藏起来
 *    注：需要在该页面引入$(".model")这个页面，例如引入方式
 *   <div style="display:none">
		<%@ include file="/CAR_businessManage/bussinessInsure.jsp"%>
	</div>
 * */
function lookBussiness(ele,value,idValue){     //  ele,为表单域对象，或者td对象等 ,例如ele为<input 表单域。其它参数目前无用
	var e=$(ele).parent().parent();            //  e为表单域所在的tr
	if(e.next().is(".children222")){          
	 	if(e.next().is(":hidden")){
	 		e.next().show();
	 	}else{
	 		e.next().hide();
	 	}
	 }else{
	 	var tr=$("<tr class='children222'></tr>")
		 			.append(
				 		$("<td colspan='8'></td>")
				 			.append(
				 				$(".model").clone().removeClass("model")     //$(".model")为tr下面需要显示的div或者table
				 			)
				 	);
	 	e.after(tr);
	 };
}
/*24、点击一个td或者，其它，在下面自动撑开一个地域显示一个sql返回的页面,功能类似23
 * 注：或者自动加入监听
 * */
function test(ele){
//$(function(){
	//$(".btnShowDetail").click(function(){
		//var t = $(this);
		var t = $(ele);
		var contract = t.attr("contract");   //获得属性值
		t.attr("rowspan",t.attr("rowspan")==2?1:2);             //设置属性
		t.find(".ui-icon").toggleClass("ui-icon-minusthick");   //如果存在就加上，如果不存在就删除
		var td = t.parents("tr").next().toggle().find("td");    //如果隐藏就显示，如果显示就隐藏
		if(!td.data("__isLoad__")){
			$(".waiting").show();
				jQuery.get("TendingManage!EquipmentByContractId.action?contract_id="+contract,function(text){
					$(".waiting").hide();
					td.html(text);
					td.data("__isLoad__",true);
				});
			}
		//});
	//});
}

/*26、页面打开一个新的窗口,弹出层*/
function closeDialog(divId){
	$("#"+divId).dialog({
		modal:true,
		autoOpen: false,
		width: 380
	});
		$("#"+divId).dialog('open');
  }
/*27、关闭弹出层 */
function closeDialog(divId){
	$("#"+divId).dialog('close');
}
/*28、还原整个name=formName的表单里面的所有表单域的值,*/
function onResetClick(formName){
 	if(window.confirm("您要重置整个页面吗?这样页面现在的信息都会丢失!")){
 		formName.reset();
 	}
}
/*29、清空一定范围内的值(这个范围是指$("#divId"))，隐藏表单不清空*/
function clearAll(divId){
	$("#"+divId+" :text[name],:hidden[name],textarea[name],:selected,:checked[name]").each(function(){
		var ele=$(this);
		if(ele.is(":selected")){
			ele.removeAttr("selected");
		}else if(ele.is(":checked")){
			ele.removeAttr("checked");
		}else if(ele.is(":hidden")){
			
		}else{
			ele.val("");
		}
	});
}
/*30、ajax分页公共方法
 * val:查询类型，(1:下一页，-1:上一页，3:go)
 * url:调用分页列表的url, 
 * paramData:json格式的参数
 */
function queryPage(otype,url,paramData){
    var dataList = null ;
	var fgopage = $("#goPage").val();   //页码
	var currentPage = $("#pageNum").val(); //当前页码
	var totalPage = $("#pages").val(); //总页码
    if(fgopage == "" || isNaN(fgopage)){ //如果页码为空，取当前页码
     	fgopage = currentPage;
    }
    var param = {currentPage:currentPage,
    			 totalPage:totalPage,
    			 otype:otype,
    			 goPage:fgopage
    			};
    if(paramData != null){
    	$.extend(param,paramData);
    }
	$.ajax({
		type : 'post',
		dataType : 'json',
		async:false,
		data: param,
		url : url, 
		success : function(data) {
			if(data != null){
				dataList =data;
			}
			$("#pageNum").val(data.currentPage);
            $("#pages").val(data.totalPage);
            $("#curp").html(data.currentPage);
            $("#goPage").val(data.currentPage);
            $("#totalP").html(data.totalPage);
		},
		error : function() {
			dataList="error";
		}
	});
	return dataList;
};
/**
 * 31、dateFormString
 * 把日期格式"yyyy-MM-dd"转换成字符串"yyyyMMdd"
 * @param objDate
 * @returns {String}
 */
function dateFormString(objDate){
	var strDate = "";
	if(objDate!=""&&objDate!=null){
		var date = new Date(objDate);
		var Year = date.getFullYear();
		var Month = (date.getMonth() + 1).toString();
		var Day = (date.getDate()).toString();
		
		if(Month.length == 1){
			Month = "0" + Month;
		}
		if(Day.length == 1){
			Day = "0" + Day;
		}
		strDate = Year + Month + Day;
	}
	return strDate;
}
/**
 * 32、countCurrentPage
 * 计算分页的当前应该加载的当前页
 * @param val，-1：点击上一页；1：点击下一页；3：点击go
 * @returns {String}
 */
function countCurrentPage(val){
	var currPage = $("#curp").text(); //当前页值
	var totalP = $("#totalP").text(); //总页数
	if(val=='-1'){ //上一页
		if(currPage=='1'||currPage=='0'){  //如果第一页
			return;
		}else{
			$("#currPage").val(currPage*1-1); //当前页值
			$("#goPage").val(currPage*1-1); 
		}
	}else if(val=='1'){ //下一页
		if(currPage==totalP){  //如果是最后一页
			return;
		}else{
			$("#currPage").val(currPage*1+1); //当前页值
			$("#goPage").val(currPage*1+1);
		}
	}else{ //如果点击页码查询
		$("#currPage").val($("#goPage").val());
	}
	var formObject = $("form[data-page='pageSubmit']");
	
	console.log(formObject.length);
	if(formObject.lengt!=0){
		formObject.submit();
	}
}

/**
 * 33、numToUpperCase
 * 阿拉伯数字转换成金额大写
 * @param num ： 金额
 * @returns 金额大写
 */
function numToUpperCase(num){
	if(!num.toString()){
		return '金额不正确';
	}
	var fraction = ['角', '分'],
	digit = ['零', '壹', '贰', '叁', '肆','伍', '陆', '柒', '捌', '玖'],
	unit = [['元', '万', '亿'],['', '拾', '佰', '仟']],
	prefix = num < 0 ? '欠' : '',
	suffix = '',
	decimal = num.toString().split('.')[1] || '0';
	num = Math.abs(num);
	for(var i=0; i<2; i++){
		decimal[i] && (suffix += (digit[decimal[i]] + fraction[i]).replace(/零./, ''));
	}
	suffix = suffix || '整';
	num = Math.floor(num);
	for(var i=0, len=unit[0].length, p=''; i<len && num>0; i++){
		for(var j=0, _len=unit[1].length; j<_len && num>0; j++){
			p = digit[num % 10] + unit[1][j] + p;
			num = Math.floor(num / 10);
		}
		suffix = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + suffix;
		p = '';
	}
	return prefix + suffix.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

/**
 * 34、
 * sunzm
 * 比较两个日期大小
 * @param beginDate
 * @param endDate
 * @returns {Boolean}
 */
function compareDate(beginDate,endDate){
	
	var d1 = new Date(beginDate.replace(/\-/g, "\/"));  
	var d2 = new Date(endDate.replace(/\-/g, "\/"));  

	if(beginDate!=""&&endDate!=""&&d1 >d2){  
		alert("开始时间不能大于结束时间！");  
		return false;  
	}else{
		return true;
	}
	
}

/**
 * 34、AddDate
 * sunzm
 * 计算一个日期相加相应的年或月、日
 * @param date : 需要计算的日期，格式支持2014-12-12、20141212
 * @param dateType：0：年，1：月，2：日
 * @param value，需要相加的值
 * @returns 计算后的日期，格式如：2015-12-12
 */
function AddDate(date,dateType,value){
	if(date!=null&&dateType!=null&&value!=null){
		var year,month,day,date;
		if(date.length==10){ //2015-12-12
			year = date.substring(0,4);
			month = date.substring(5,7);
			day = date.substring(8,10);
		}else if(date.length==8){//20151212
			year = date.substring(0,4);
			month = date.substring(4,6);
			day = date.substring(6,8);
		}
	}
	
	var dateDangQian = new Date();
	dateDangQian.setFullYear(year,month,0);
	dateDangQian.getDate();//当前月的天数
	
	
	var date = new Date();
	date.setFullYear(year,month-1,day); //月份要减一 入 2015-06-12  month 应该取5
	if(dateType=='0'){
		date.setFullYear(date.getFullYear()+value*1);
	}else if(dateType=='1'){
		date.setMonth(date.getMonth()+value*1);
	}else{
		date.setDate(date.getDate()+value);
	}
	var newYear = date.getFullYear();
	
	
	var month =date.getMonth()+1;
	var newMonth = (month+"").length==2?month:"0"+month;
	var newDay = (date.getDate()+"").length==2?date.getDate():"0"+date.getDate();
	if(day != newDay){
		var dday = new Date();
		dday.setFullYear(newYear,date.getMonth(),0);
		newMonth = (date.getMonth()+"").length==2?date.getMonth():"0"+date.getMonth();
		newDay = (dday.getDate()+"").length==2?dday.getDate():"0"+dday.getDate();
	}
	
	return (newYear +"-"+newMonth+"-"+ newDay);
	
}	
	

/***
 * 35、StandardPost
 * jquery 实现form表单提交并跳转页面 
 * 调用方法： StandardPost('url/path/req',{arg0:'arg0',arg1:'arg1'});
 */
function StandardPost(url, args) {
	var body = $(document.body);
	var form = $("<form method='post'></form>");
	var input;
	form.attr({
		"action" : url
	});
	if (args) {
		$.each(args, function(key, value) {
			input = $("<input type='hidden'>");
			input.attr({
				"name" : key
			});
			input.val(value);
			form.append(input);
		});
	}
	form.appendTo(body);
	form.submit();
}

/****
 * 36、 getAccountForm 
 * 银行卡号每四位一空格的规则显示
 *
 * */
function getAccountForm(obj){
    var obj = $(obj);
	var value=obj.val().replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");    
    obj.val(value) ;		
}

/****
 * 37、弹出一个小窗口 openNewWindow 
 * title:窗口名称
 * width:宽度
 * height:高度
 * id:弹出窗口的id
 * API:http://www.catic-i.com/UploadFile/html/1.html
 * */
function openNewWindow(title,width,height,object){
	layer.open({
    	type: 1,    //0：信息框（默认），1：页面层，2：iframe层，3：加载层，4：小tips层
     	title: [title, true], //是否显示标题
     	area: [width+"px", height+"px"], //控制宽和高
     	offset: [(height)/2 + 'px', ($(window).width() - width)/2 + 'px'],
        skin: 'layui-layer-rim',  //皮肤
        shade: [0.2, '#111',true],  //控制遮罩。0.2：遮罩透明度，'#111'：遮罩颜色，true：是否遮罩（否：false）
        content: $(object),  //需要加载的HTML代码
        end : function(){ 
	    	    var Id='imageShowDiv1';
	    	    $("#"+Id).find("img").remove();
	    	    $("#"+Id).find("input").remove();
	    	    $("#"+Id).find("tr").html("");
	    	    console.log($("#imageShowDiv1"));
	         },
   	});
}
//减免弹出窗口
function openReduceWindow(title,width,height,object){
	layer.open({
    	type: 1,    //0：信息框（默认），1：页面层，2：iframe层，3：加载层，4：小tips层
     	title: [title, true], //是否显示标题
     	area: [width+"px", height+"px"], //控制宽和高
     	offset: [(height)/3 + 'px', ($(window).width() - width)/2 + 'px'],
        skin: 'layui-layer-rim',  //皮肤
        shade: [0.2, '#111',true],  //控制遮罩。0.2：遮罩透明度，'#111'：遮罩颜色，true：是否遮罩（否：false）
        move: false,
        content: $(object),  //需要加载的HTML代码
        end : function(){ 
	    	    var Id='imageShowDiv1';
	    	    $("#"+Id).find("img").remove();
	    	    $("#"+Id).find("input").remove();
	    	    $("#"+Id).find("tr").html("");
	    	    console.log($("#imageShowDiv1"));
	         },
   	});
}
//新开一个窗口      用于贷款审核和贷款复核
function openNewWindow1(title,width,height,object){
	layer.open({
    	type: 1,    //0：信息框（默认），1：页面层，2：iframe层，3：加载层，4：小tips层
     	title: [title, true], //是否显示标题
     	area: [width+"px", height+"px"], //控制宽和高
        skin: 'layui-layer-rim',  //皮肤
        shade: [0.2, '#111',true],  //控制遮罩。0.2：遮罩透明度，'#111'：遮罩颜色，true：是否遮罩（否：false）
        content: $(object),  //需要加载的HTML代码
        end : function(){
    	    var Id='imageShowDiv';
    	    $("#"+Id).find("img").remove();
    	    $("#"+Id).find("input").remove();
    	    $("#"+Id).find("tr").html("");
        },
   	});
}




function closeWindow(title,width,height,object){	
	layer.closeAll(
	);
}
/****
 * 38、发送ajax请求，并且关闭窗口 openNewWindow 
 * paramJson:传递的参数值
 * url:请求URL
 * */
function colseNewWindow(paramJson,url){
	  var index = layer.getFrameIndex(window.name);
	  layer.closeAll(index);
	  var flag = false;
	  $.ajax({
		type : 'post',
		dataType : 'json',
		async: false,
		data: paramJson,
		url : url,
		success : function(data) {
			flag = true;
			alert("操作成功");
		},
		error : function() {
			alert("操作失败");
			flag = false;
		}
	});
	  return flag;
}

/****
 * 39、异步上传文件
 * url:请求URL
 * inputObj:上传框的jquery对象
 * jsonData:传递的参数值
 * 
 * */
function ajaxFileUpload(url,inputObj,jqueryObj,jsonData) {
	var flag = false;
	    $.ajaxFileUpload({
	        url: url,
	        secureuri: false,
	        fileElementId:inputObj,
	        dataType: 'json',
	        async: false,
	        data:jsonData,
	        success: function(data, status) {           
	        	if(jqueryObj.text() == ""){
	        		jqueryObj.append('<a href="javascript:void(0)" onclick="openWindowShowImg(\''+ data.imageIndex +'\', \'imageShowDiv\')">浏览</a>');  
	        		jqueryObj.next().append('<input type="hidden" name="id" value="'+data.id+'"/>');
	        		jqueryObj.prev().find("input[type='file']").remove();
	        		jqueryObj.prev().text(data.imageName);
	        		jqueryObj.next().find("input[type='button']").attr('onclick','deletetr(this)');
	        	}       	     	     	
	        },
	        error: function(data, status, e) {
	        	alert("文件上传失败,失败原因:"+e);
	        }
	    })
}

function ajaxFileUpload1(url,inputObj,jsonData,obj,src,index) {
	var flag = false;
	    $.ajaxFileUpload({
	        url: url,
	        secureuri: false,
	        fileElementId:inputObj,
	        dataType: 'json',
	        async: false,
	        data:jsonData,
	        success: function(data, status) {   
	        		var content = '<div class="mycss"><a  class ="myacss" href="#" onclick="showImgOne(\''+src+data.imageIndex+'\')" ><img src="'+src+data.imageIndex+'" class="myimagecss" /> </>';
	        		content +='<div hidden class = "mysmallcss"><input type = "button" class = "mydbucss" value="X" onclick="delImage(this)"/><input type = "hidden" value = "'+src+data.imageIndex+'"/></div>';
	        		content += '<div hidden class = "mysmallcss1"><input type = "button" class = "mybucss" value="U"  onclick="updateImage(this)" />';
	        		content += '<input type = "hidden" value = "'+src+data.imageIndex+'"/>';
	        		content += '<input type = "hidden" id = "type1" value = "'+data.imageType+'"/>';
	        		content += '<input type = "hidden" id = "data1" value = "'+data.dataType+'"/>';
	        		content += '	<input type = "hidden" id = "cust1" value = "'+index+'"/></div></div>'; 
	        		$(obj).parents("tr:first").find("#imagetd").append(content);
	        },
	        error: function(data, status, e) {
	        	alert("文件上传失败,失败原因:"+e);
	        }
	    })
}

/****
 * 39、获取数组存放的json集合，例如{"errorFlag":true,"key":"[{},{}]"}
 * eleObj:所有需要组装数据的父类对象
 * jsonArray:json数组集合例如{"errorFlag":true,"key":"[{},{}]"}，errorFlag为验证是否通过标志，true为不通过，false是通过
 * 
 * */
function getJsonArray(eleObj,key){
	var dataJson = {};
	var jsonArray = new Array();
	var errorFlag = false;
	eleObj.each(function(i){
	    var divObj = $(this);
	    var json = getListData(divObj);
	    if(json["errorFlag"]==false){ //验证未通过
	    	errorFlag = true;
	    }else{
	    	jsonArray[i] = json;
	    }
	});
	dataJson[key] = jsonArray;
	dataJson["errorFlag"] = errorFlag;
	return dataJson;
}


function gettableJsonArray(eleObj,key){
	var dataJson = {};
	var jsonArray = new Array();
	var errorFlag = false;
	eleObj.each(function(i){
	    var divObj = $(this);
	    var json = getListDataStd(divObj);
	    if(json["errorFlag"]==false){ //验证未通过
	    	errorFlag = true;
	    }else{
	    	jsonArray[i] = json;
	    }
	});
	dataJson[key] = jsonArray;
	dataJson["errorFlag"] = errorFlag;
	return dataJson;
}
/**
 * 40、通过传文件名和divID 在当前窗口弹出新窗口显示图像
 * openWindow的默认大小是800*600
 * Img：图像在OOS存储的文件名
 * Id：弹出层Id
 */
function openWindowShowImg(Img,Id){
	$("#"+Id).find("#imgv").remove();
	$("#"+Id).find("#imgbut").remove();
	$("#"+Id).append("<div align='center' id='imgbut'><tr><td ><input type='button' class='btn btn-default' value='左转' onclick='Left()' /><input type='button' class='btn btn-default' value='右转' onclick='Right()' /></td></tr></div>");
	$("#"+Id).append("<div align='center' id = 'imgv'><tr><td><img style='width:750px;' src='' alt='影像预览' id='imageShow' /></td></tr></div>");	
	$("#"+Id).find("img").attr("src","/AssetManage/service/creditQuery/ShowImg?imageName='"+Img+"'");
	//打开新窗口
	openNewWindow('影像预览','800','750',$("#"+Id));
//	//获取图像地址
//	$.ajax({
//		type : 'post',
//		dataType : 'json',
//		data: {"imageName":Img},
//		url : "/AssetManage/service/creditQuery/ShowImg", 
//		success : function(data) {
//			
//		},
//		error : function() {
//			alert("预览影像失败");
//		}
//	});
}

/**
 * 41、服务器端返回数据自动赋值页面
 * 注：页面的name名与json对象的key值相同
 * data：服务器端返回的json数据，jsonObj：要赋值的所有对象
 * 
 */
function autoGetValue(data,jsonObj){
	//var countFlag = data["countFlag"];//只读标记：1：只读，其他非只读
	//alert(countFlag);
	jsonObj.each(function(i){
		var eleObj = $(this);
		var name = eleObj.attr("name");//页面元素name
//		if(countFlag == "1"){
//			$("input[name='"+name+"']",eleObj.parent()).attr("readonly",true);
//		}else{
//			$("input[name='"+name+"']",eleObj.parent()).removeAttr("readonly");
//		}
		var key  = name.split('#')[0];//
		var value = data[key];
		if(eleObj.is(":checkbox,:radio")){
//			if(countFlag == "1"){
//				$("input[name='"+name+"']",eleObj.parent()).attr("disabled",true);
//			}else{
//				$("input[name='"+name+"']",eleObj.parent()).removeAttr("disabled");
//			}
			var objVal = eleObj.attr("value");
			if(objVal==value){
				eleObj[0].checked = "checked";
			}
		}else{
			if(eleObj.is("select")){
				var selectEle = eleObj.find("option[value='"+value+"']");
				if(selectEle!=null && selectEle!='' && selectEle!=undefined){
					selectEle[0].selected = "selected";
				}
			}else{
				eleObj.val(data[name]);
			}
		}
	})
}
	/*42、把页面上tdObj这个范围内的所有表单值的检验结果拼接成JSON对象，【"ec":"0","em":"错误信息"】;
	 * 注：已经考虑到页面上table套table情况 ,listflag 1 标题在上面。
	 * */
	function checkInputValidate(title,tdObj,listflag){
		var tempData={"ec":"0","em":""};
		var isClient = function(ele){
			return $(ele).find("td").length == 0;
		}
		var em = "";
		tdObj.find("td").each(function(){
			if(isClient(this)){
				$(this).find("[name][class*='validate[']").each(function(){				
					var errorFlag = $(this).validationEngine('validate');
					if(!errorFlag){
						var showName = "";
						if(listflag=="1"){
							var num = $(this).parent().index()-1;
							showName = $(this).parents("table:first").prev().find("tr td:eq("+num+")").html(); //查找到到标题所在TD的内容
						}else{
							showName = $(this).parents("td:first").prev("td").html()  //td的标签内容
						}
						if(showName!=null && showName!='undefined'){
							showName = showName.replace("<font style=\"color:red\">*</font>","").replace("<font color=\"red\">*</font>","");
						}
						var inputVal = $(this).val();
						if($(this).is(":checkbox,:radio,select")){
							inputVal = "空";
						}
						if(inputVal==null||inputVal==""){
							inputVal = "空";
						}
						em = em + title + showName + "不合法，不合法的值为："+inputVal+";";
						tempData["ec"] = "-1";
					}
				});
			}
		});
		tempData["em"] = em;
		return tempData;
	}
	
	 function Left() {		
         $("#imageShow").rotateLeft();
         var canvas = $("#imageShow");
         var parentObj = canvas.parent();
         var image = new Image();
         image.src = canvas[0].toDataURL("image/png");
     	 $(canvas).remove();
     	 parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("style","width:750px;").attr("id","imageShow");  	
     }
     function Right() {
         $("#imageShow").rotateRight();
         var canvas = $("#imageShow");
         var parentObj = canvas.parent();
         var image = new Image();
         image.src = canvas[0].toDataURL("image/png");
     	 $(canvas).remove();
     	 parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("style","width:750px;").attr("id","imageShow");  	
     
     }   
 	/*img左转*/
 	function Left1(eleObj,i) {
 		 var ele = $(eleObj).parents("tr:first").next().find("img").eq(i);
          ele.rotateLeft();
          var canvas = $(eleObj).parents("tr:first").next().find("canvas");
          var width = canvas.width();       
          var height = canvas.height();
          var temp = 0;
          if(width >= height){
          	 temp = (width/600).toFixed(2);         
 	         canvas.width(600);
 	         canvas.height(Math.round(height/temp));
          }else{
 	         temp = (width/600).toFixed(2)
 	         canvas.width(600);
 	         canvas.height(Math.round(height/temp));
          }
          convertCanvasToImage(canvas,i);
      } 
      /*转换canvas对象为img对象*/
      function convertCanvasToImage(canvas,i) {    
     	var image = new Image();
     	image.src = canvas[0].toDataURL("image/png");
     	var parentObj = canvas.parent();
     	var width = canvas.width();
     	var height =  canvas.height();
     	$(canvas).remove();
     	parentObj.parent().prev().find("td").eq(i).html("");
     	parentObj.append($(image)).find("img").attr("Stretch","Fill").attr("width",width).attr("height",height);
     	parentObj.parent().prev().find("td").eq(i).append("<input type='button' class='btn btn-default' value='左转' onclick='Left1(this,"+i+")' /><input type='button' class='btn btn-default' value='右转' onclick='Right1(this,"+i+")' />");
 	}  
       /*img右转*/
      function Right1(eleObj,i) {
          var ele = $(eleObj).parents("tr:first").next().find("img").eq(i);
          ele.rotateRight();
          var canvas = $(eleObj).parents("tr:first").next().find("canvas");
          var width = canvas.width();       
          var height = canvas.height();
          var temp = 0;        
          if(width >= height){
          	 temp = (width/600).toFixed(2);         
 	         canvas.width(600);
 	         canvas.height(Math.round(height/temp));
          }else{
 	         temp = (width/600).toFixed(2)
 	         canvas.width(600);
 	         canvas.height(Math.round(height/temp));
          }
          convertCanvasToImage(canvas,i);
      } 
      
      /****
       * 导入文件异步上传文件
       * url:请求URL
       * inputObj:上传框的jquery对象
       * jsonData:传递的参数值
       * 
       * */
      function ajaxFileUploadtoexportFile(url,inputObj) {
      	var flag = false;
      	    $.ajaxFileUpload({
      	        url: url,
      	        secureuri: false,
      	        fileElementId:inputObj,
      	        dataType: 'json',
      	        async: false,
      	        success: function(data) { 
      	        	alert("上传成功！");
      	        	StandardPost('foreignTradeTrustExport',{exportType:"3",localName:data.localName});
      	        },
      	        error: function(data, status, e) {
      	        	alert("文件上传失败,失败原因:"+e);
      	        }
      	    })
      }
    /**
     * 下载文件
     * 在日志中显示文件
     * fileUrl：传完整的OSS文件路径
     */
  	function downFile(fileUrl){
  		window.open("/AssetManage/service/creditQuery/ShowImg?fileFlag=txt&imageName="+fileUrl);  
  	}
  	/**
  	 * 查看oss征信
  	 * @param fileUrl
  	 */
  	function showFileCredit(fileUrl){
  		window.open("/AssetManage/service/creditQuery/ShowImg?fileFlag=html&imageName="+fileUrl);  
  	}
  	/**
  	 * 从oss下载文件
  	 * @param index
  	 */
  	function downFileToOSS(index,realName,certNo){
  		var url = "/AssetManage/service/creditQuery/ShowImg?fileFlag=file&realName="+realName+"&certNo="+certNo+"&imageName="+index;
  		window.location.href=url;
  	}
  	
  	/**
	 * 处理抵押物变更情况信息，变化的数据标红
	 * 
	 * @param tdObj
	 *            块对象
	 * @param changeJson
	 *            变化结果json
	 */
  	function getchangeFlag(tdObj, changeJson) {
		var isClient = function(ele) {
			return $(ele).find("tr").length == 0;
		}
		tdObj.find("tr").each(function() {
			if (isClient(this)) {
				$(this).find("[name]").each(function() {
					if ($(this).find("[class*='validate[']")) {
						var flag = changeJson[$(this).attr("name")];
	
						if (flag && flag == '1') {
							if ($(this).is(":checkbox,:radio")) {
								$(this).parent().css("color", "red");
							}else if($(this).hasClass('checkboxcss')){
								$(this).parent().css("color", "red");
							}else {
								$(this).css("color", "red");
							}
						}
					}
	
				});
			}
		});
	}
	     
	function formatDateValue(value){
		var dateTemp = "";
	    if(value != null && value != "" && value!=undefined){
		    if(value.length>=14){
			    var yyyy = value.substring(0,4);
			    var mm = value.substring(4,6);
			    var dd = value.substring(6,8);
			    var hh = value.substring(8,10);
			    var mi = value.substring(10,12);
			    var ss = value.substring(12,14);
			    dateTemp = yyyy+"-"+mm+"-"+dd+" "+hh+":"+mi+":"+ss;
		     }else if(value.length==8){
			    var yyyy = value.substring(0,4);
			    var mm = value.substring(4,6);
			    var dd = value.substring(6,8);
			    dateTemp = yyyy+"-"+mm+"-"+dd;
		        }
		    }
	     return dateTemp;
	}

	//银行卡验证
	function authBankCard(obj, objAcc, objuNo, bankNo, bankName){
		var errorFlag = $(obj).validationEngine('validate');
		if(!errorFlag){
			tempData["errorFlag"] = errorFlag;
			return tempData;
		}
		var resultFlag = false;
		var loanAccount = $("#"+objAcc).val(); //银行卡号
		var loanUserno = $("#"+objuNo).val();  //用户ID
		//var bankCode = $("#"+bankNo).val();  //用户ID
		if(!authBank(loanAccount, bankNo, bankName)){//校验银行信息
			return resultFlag;
		}
		if(loanAccount != '' && loanUserno != ''){
			$.ajax({
				type : 'post',
				dataType : 'json',
				async: false,
				data: {loanUserno:loanUserno,loanAccount:loanAccount},
				url: '/AssetManage/service/commonManage/authBankcard',
				success : function(data) {
					if(data==1){
						resultFlag = true;
					}else{
					    alert("银行卡验证不通过，请检查户名、身份证号或银行卡号！");
					}
				},
				error : function() {
					alert("验证银行卡失败！");
				}
			});
		}
		return resultFlag;
	}
	//银行验证
	function authBank(loanAccount, bankNo, bankName){
		var resultFlag = false;
		if(loanAccount != ''){
			$.ajax({
				type : 'post',
				dataType : 'json',
				async: false,
				data: {loanAccount:loanAccount},
				url: '/AssetManage/service/commonManage/authBank',
				success : function(data) {
					if(data == "" || data == "-1"){
						alert("未找到相应的银行信息，请检查银行卡号！");
						$("#"+bankNo).val("");
						$("#"+bankName).val("");
					}else{
						$("#"+bankNo).val(data);
						$("#"+bankName).val(jQuery.param["BANK_MAP"][data]);
						resultFlag = true;
					}
					/*if(bankCode == data){
						resultFlag = true;
					}else{
						alert("银行验证不通过，请检查银行卡号和开户行！");
					}*/
				},
				error : function() {
					alert("验证银行失败！");
				}
			});
		}
		return resultFlag;
	}
	
	
	//涉诉
	function showLawSuit(obj){
	    var bussNo = $("#bussNo").val();
	    var custName = $(obj).parent().parent().find("#custName").val();
	    var certNo = $(obj).parent().parent().find("#certNo").val();
	    var data = {"bussNo":bussNo,"custName":custName,"certNo":certNo,"status":"01","flag":"1"};
	    var wid = window.screen.availWidth-10;
		var hei = window.screen.availHeight-100;
		showMask();
	    var opt ="";
	    var opt1 = "";
	    $.ajax({
	       type:'post',
	       url:'/AssetManage/service/reviewLoanApproval/showLawSuit',
	       data:data,
	       success : function(data) {	
	           if(data.code=='00'){
	       			//获取涉诉数据
		            var templist = data.queryMap.crawlList;
		            if(templist != null && templist !=''&&typeof(templist)!='undefine' && templist.length>0){      // 查询到涉诉数据
		               for(var i=0;i<templist.length;i++){
		               	  var templistOne = eval(templist[i]);
	               	  	  opt += "<tr class='record'><td style='text-align:center;'>"+(i+1)+"</td><td style='text-align:center;'>"+templistOne.name+"</td><td style='text-align:center;'>"+templistOne.cardNum+"</td><td style='text-align:center;'>"+templistOne.execcourtname+"</td><td style='text-align:center;'>"+templistOne.regdate+"</td><td style='text-align:center;'>"+templistOne.casecode+"</td><td style='text-align:center;'>"+templistOne.execmoney+"</td>";  
			              opt += "<td style='text-align:center;' ><font color='red'>"+formatDateValue(templistOne.createDate)+"</font></td></tr>";
		               }  
		            }else{
		            	opt = "<tr class='record'><td colspan='15' style='text-align:center;'>暂无记录</td></tr>";
		            }
		            
		            //获取涉诉查询记录
		             var temprecord = data.queryMap.bCrawlFlowList;
		             if(temprecord != null && temprecord !='' && temprecord.length>0 && typeof(temprecord)!='undefine'){
		           		for(var i = 0;i< temprecord.length;i++){
		           			var tempone =  eval(temprecord[i]);
		                  	opt1 += "<tr class='record'><td style='text-align:center;'>"+(i+1)+"</td><td style='text-align:center;'>"+tempone.name+"</td><td style='text-align:center;'>"+tempone.cardNum+"</td><td style='text-align:center;'>"+tempone.casecode+"</td><td style='text-align:center;'>"+tempone.opName+"</td><td style='text-align:center;'>"+tempone.status+"</td>";  
		                  	opt1 += "<td style='text-align:center;' ><font color='red'>"+formatDateValue(tempone.createDate)+"</font></td></tr>";
		           		}
		             }else{
		             	opt1 = "<tr class='record'><td colspan='15' style='text-align:center;'>暂无记录</td></tr>";
		             }
		            hideMask();
		            var url = '/AssetManage/js/page/lawsuitcredpag.html?ele='+encodeURI(opt)+'&ele2='+encodeURI(opt1);
	              	window.open(url,'_blank','width='+wid+',height='+hei+',scrollbars=yes,location=no');	
	       		}else{
	       			alert("系统异常");
	       		}
		        $(".record").remove();
			 }
	    });
	} 
	
	//失信
	function showLoseCredit(obj){
	    var bussNo = $("#bussNo").val();
	    var custName = $(obj).parent().parent().find("#custName").val();
	    var certNo = $(obj).parent().parent().find("#certNo").val();
	    if(custName==null||custName==""||certNo==null||certNo==""){
	       alert("请填写用户名或身份证号");
	       return;
	    }
	    var data = {"bussNo":bussNo,"custName":custName,"certNo":certNo,"status":"01","flag":"0"};
	    var wid = window.screen.availWidth-10;
		var hei = window.screen.availHeight-100;
	    var opt="";
	    var opt1 = "";
	    showMask();
	    $.ajax({
	       type:'post',
	       url:'/AssetManage/service/reviewLoanApproval/showLawSuit',
	       data:data,
	       success : function(data) {
	           if(data.code=='00'){
	       			//获取失信数据
	       			var templist = data.queryMap.crawlList;
		            if(templist != null && templist !=''&&typeof(templist)!='undefine' && templist.length>0){      // 查询到失信数据
		               for(var i=0;i<templist.length;i++){
		               	  var templistOne = eval(templist[i]);
		               	  opt += "<tr class='record'><td style='text-align:center;'>"+(i+1)+"</td><td style='text-align:center;'>"+templistOne.name+"</td><td style='text-align:center;'>"+templistOne.sexy+"</td><td style='text-align:center;'>"+templistOne.age+"</td><td style='text-align:center;'>"+templistOne.cardNum+"</td><td style='text-align:center;'>"+templistOne.execcourtname+"</td>";
		                  opt += "<td style='text-align:center;'>"+templistOne.areaname+"</td><td style='text-align:center;'>"+templistOne.gistid+"</td><td style='text-align:center;'>"+templistOne.regdate+"</td><td style='text-align:center;'>"+templistOne.casecode+"</td><td style='text-align:center;'>"+templistOne.gistunit+"</td>";
		                  opt += "<td style='text-align:center;'>"+templistOne.duty+"</td><td style='text-align:center;'>"+templistOne.performance+"</td><td style='text-align:center;'>"+templistOne.disrupttypename+"</td><td style='text-align:center;'>"+templistOne.publishdate+"</td>";
		                  opt += "<td style='text-align:center;' class='date'><font color='red'>"+formatDateValue(templistOne.createDate)+"</font></td></tr>";
		               }  
		            }else{
		            	opt = "<tr class='record'><td colspan='16' style='text-align:center;'>暂无记录</td></tr>";
		            }
		            
	       			 //获取失信查询记录
		             var temprecord = data.queryMap.bCrawlFlowList;
		             if(temprecord != null && temprecord !='' && temprecord.length>0 && typeof(temprecord)!='undefine'){
		           		for(var i = 0;i< temprecord.length;i++){
		           			var tempone =  eval(temprecord[i]);
		                  	opt1 += "<tr class='record'><td style='text-align:center;'>"+(i+1)+"</td><td style='text-align:center;'>"+tempone.name+"</td><td style='text-align:center;'>"+tempone.cardNum+"</td><td style='text-align:center;'>"+tempone.casecode+"</td><td style='text-align:center;'>"+tempone.opName+"</td><td style='text-align:center;'>"+tempone.status+"</td>";  
		                  	opt1 += "<td style='text-align:center;' ><font color='red'>"+formatDateValue(tempone.createDate)+"</font></td></tr>";
		           		}
		             }else{
		             	opt1 = "<tr class='record'><td colspan='7' style='text-align:center;'>暂无记录</td></tr>";
		             }
		            hideMask();
		            var url = '/AssetManage/js/page/creditpage.html?ele='+encodeURI(opt)+'&ele2='+encodeURI(opt1);
	              	window.open(url,'_blank','width='+wid+',height='+hei+',scrollbars=yes,location=no');	
	       		}else{
	       			alert("查询失败");
	       		}
			 }
	    });
	} 
	/*
	 * 1、根据房产证号获取所在区域
	 */
	function getPlace(ownerShip,area,guaProperObj){
		var place = "";
		if(ownerShip!=null&&area!=null&&guaProperObj!=null){
			var map = jQuery.param["OWNER_SHIP_"+area] //所在城市的房产证号读取规则
			if(map!==undefined && map !=null){
				$.each(map,function(key,val){
					if(ownerShip.indexOf(key)>0){
						place = map[key];
					}
				})
			}
			guaProperObj.find("option").remove();
			if(place!=''){
				jQuery.param.getSelect(guaProperObj,'AREA_'+area,place,null,false,null);
			}else{
				jQuery.param.getSelect(guaProperObj,'AREA_'+area,place,null,true,null);
			}
			
		}
	}
	
	/*
	 * 审核网询公共弹窗校验
	 */
	function noticeMessage(){
		var message = "抵押物信息中的"; 
		var areaFlag = true;
		var timeFlag = true;
		var priceFlag = true;
		var periodFlag = true;
		var resultFlag = false;
		$("#cyberTable input[type=checkbox]").each(function(){
			if($(this).is(":checked")){
				var trr = $(this).parents("tr:first");
				var guaDealTime = trr.find("input[name='guaDealTime']").val();
				var guaDealArea  = trr.find("input[name='guaDealArea']").val();
				var guaDealPrice = trr.find("input[name='guaDealPrice']").val();
				var guaDealPeriod = trr.find("select[name='guaDealPeriod']").val();
				if(guaDealPeriod == "" || guaDealPeriod == null){
					periodFlag = false;
				}
				if(guaDealPrice == "" || guaDealPrice == null ||guaDealPrice*1==0 ){
					priceFlag = false;
				}
				if(guaDealArea == "" || guaDealArea == null){
					areaFlag = false;
				}
				if(guaDealTime == "" || guaDealTime == null){
					timeFlag = false;
				}
			}
		});
		if(!areaFlag){
			message = message +"成交面积，";
		}
		if(!priceFlag){
			message = message +"成交价格，";
		}
		if(!periodFlag){
			message = message +"成交周期，";
		}
		if(!timeFlag){
			message = message +"成交时间，";
		}
		message = message.substring(0,message.length-1);
		message = message + "为必填字段，请填写！";
		if(!(areaFlag&&priceFlag&&periodFlag&&timeFlag)){
			alert(message);
			resultFlag = true;
		}
		return resultFlag;
	}	
	
	
	//是否存在网询价格赋值
	function addInternetValue(obj){
		var internetFlag = $(obj).is(":checked");
		if(internetFlag){
			$(obj).parent().find("input[id='internetFlag']").val(1); 
			//如果选中则给网询大家标签添加一个class属性
			$(obj).parent().find("input[id='unitAmount']").addClass("unitAmount");
			$(obj).parent().parent().find("input[name='guaDealTime']").addClass("guaDealTime");
			//获取网询单价 和所有单价的平均值
			getInteUnitPrice(obj);
			//获取最大成交日期
			getMaxDealDate(obj);
		}else{
			//如果选中则给网询大家标签添加一个class属性
			$(obj).parent().find("input[id='internetFlag']").val(0); 
			$(obj).parent().find("input[id='unitAmount']").removeClass("unitAmount");
			$(obj).parent().parent().find("input[id='guaDealTime']").removeClass("guaDealTime");
			//获取网询单价 和所有单价的平均值
			getAverageUnitPrice();
			//获取最大成交日期
			getMaxDealDate(obj);
		}
	}
	 
	//获取网询单价 和所有单价的平均值
	function  getInteUnitPrice(obj){
	
		//先获取网询单价 
		var trr = $(obj).parents("tr:first");
		var checkInfo = trr.find("input[type='checkbox']").is(":checked");
		if(checkInfo){
			var guaDealPrice = trr.find("input[name='guaDealPrice']").val()==""?0:parseInt(trr.find("input[name='guaDealPrice']").val());
			var guaDealArea = trr.find("input[name='guaDealArea']").val();
			if(guaDealArea!=""&&guaDealArea!='undefined'&&guaDealArea!="0"){
				var unitPrice = Number(guaDealPrice)/Number(guaDealArea);
				var reg = /.*\..*/;
			    if(reg.test(unitPrice)){
				   unitPrice = unitPrice.toFixed(4);
			    }
				$(trr).find("input[name='unitAmount']").val(unitPrice);
			}
		  getAverageUnitPrice();
		}
	
	}
	
	//获取网询单价的平均值
	function getAverageUnitPrice(){
	      var  unitLength =  $(".unitAmount").length;
	      if(unitLength*1 > 0){
	      	$("#requestFlag").val("1");
	      }else{
	      	$("#requestFlag").val("0");
	      }
	      var sum=0; 
	      $(".unitAmount").each(function(){ 
	      		var value = $(this).val();
			    if(value !=''){ 
			        sum+= value*1; 
			    } 
	      }); 
		 var avePrice =(unitLength==0||sum==0)?0:sum/unitLength;
		 avePrice = avePrice.toFixed(4);
		 if(unitLength*1 > 0){
		 	 $("#aveUnitPrice").val(avePrice); 
		 }else{
			 $("#aveUnitPrice").val(0); 
		 }
	}
	
	//获取最大成交日期
	function getMaxDealDate(obj){ 
	    var trr = $(obj).parents("tr:first");
		//var dealTime =trr.find(".guaDealTime").val();
		var checkInfo = trr.find("input[type='checkbox']").is(":checked");
		var baseDate = 19700101;
		if(checkInfo){
			$(".guaDealTime").each(function(){
				var dealTime = $(this).val();
				if(dealTime!="" && dealTime != undefined){
					var check = dealTime.replace("-", "").replace("-", "");
					if(baseDate*1 < check*1){
						baseDate = check;
					}
				}				
			});
			$("#maxDealTime").val(baseDate);
		}
	
	}
	//判断是否有文本
	function hasText(text) {
		var result = true;
		if(typeof text == "undefined" || text == null || $.trim(text) == "") {
			result = false;
		}
		return result;
	}

	function parseIntById(id) {
		var text = $(preId(id)).val();
		return hasText(text) ? parseInt(text) : 1;
	}

	function validMail(mail){
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(mail)) {
			return false;
		}
		return true;
	}

	function validTel(tel){
		var pattern=/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[0-9]{10}$)/;
		if(!pattern.test(tel)){
			return false; 
		} 
		return true;
	}

	function nullToEmpty(obj) {
		return hasText(obj) ? obj : '';
	}

	function cleanForm(id){
		alert($(preId(id)).find('input').size());
	}

	function preId(id) {
		return id.indexOf('#') == -1 ? '#' + id : id;
	}

	function preClass(className) {
		return className.indexOf('.') == -1 ? '.' + className : className;
	}

	function isPositiveInteger(number) {
		var result = false;
		var reg = /^[1-9][0-9]*$/;
		if(reg.test(number)) {
			result = true;
		}
		return result;
	}

	var urlRegex = "^((https|http)?://*)"; 
	function isURL(url){
	    var reg = new RegExp(urlRegex);
		if (reg.test(url)){
		    return (true);
		}else{
		    return (false);
		}
	}


	function getChineseLength(str) {
		var length = str.length;
		
		var chinese = str.match(/[\u4e00-\u9fa5]/g);
		if(chinese != null) {
			length += chinese.length;
		}
		
		return length;
	}

	/**
	 * <p>
	 * right ie: (bja,bjbc) or (bja)
	 * wrong ie: (bja,,bjbc) or (bja,bjbc,) or (11jba) ...
	 * @param str
	 * @returns {Boolean}
	 */
	function isWordsDelimitedByComma(str) {
		var reg = /^([a-z]+\,)*([a-z]+)$/g
		return reg.test(str) ? true : false;
	}

	function isLetters(str) {
		var reg = /^[a-z0-9]+$/g
		return reg.test(str) ? true : false;
	}

	function isDomainName(str) {
		var reg = "^[a-z0-9*][-a-z0-9.]*(\\.[a-z0-9][-a-z0-9]*){1,}$";
		return new RegExp(reg).test(str) ? true : false;
	}

	function isAdminEmail(str) {
		var reg = "\\w+([-+.]\\w+)*@\\w+(-.\\w+)*\\.\\w+([-.]\\w+)*";
		return new RegExp(reg).test(str) ? true : false;
	}

	function isCmpIndex(str) {
		var reg = /^[A-Za-z0-9]{1,10}$/;
		return reg.test(str) ? true : false;
	}

	function isCmpIp(str) {
		var reg = "^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}$";
		return new RegExp(reg).test(str) ? true : false;
	}


	function isAclPattern(str) {
		var reg = "^\\/\\S+( \\/\\S+)*$";
		return new RegExp(reg).test(str) ? true : false;
	}

	function isAclIpPattern(str) {
		var reg = "^(((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?)))(\\/\\d+)?){1}(\\s(((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?)))(\\/\\d+)?)){0,}$";
		return new RegExp(reg).test(str) ? true : false;
	}

	function isAclPatternBasic(str) {
		if(str != null) {
			if(str.indexOf(" |") >= 0 || str.indexOf("| ") >= 0) {
				alert("管道符 | 前后不允许有空格", "管道符 | 前后不允许有空格");
				return false;
			}
			else if(str.indexOf("！") >= 0 || str.indexOf("（") >= 0 || str.indexOf("）") >= 0 
					|| str.indexOf("^ ") >= 0 || str.indexOf("^\n") >= 0 || str.indexOf("^\r") >= 0 || str.charAt(str.length - 1) == "^") {
				alert("禁止输入全角字符,'^ ', '^回车'", "禁止输入全角字符,'^ ', '^回车'");	
				return false;
			}
			else if(str.substring(str.length - 1) == "|" || str.substring(str.length - 1) == "｜") {
				alert("不能以管道符结尾！", "不能以管道符结尾！");
				return false;
			}
			else {
				return true;
			}
		}
	}

	function isAclExtension(str) {
		var reg = /^([A-Za-z0-9]+\|)*([A-Za-z0-9]+)$/;
		return reg.test(str) ? true : false;	
	}

	function isBatchPasteChannelNames(str) {
		var reg = "^([a-z0-9][a-z0-9]*:\/\/(([*]\\.[a-z0-9][-a-z0-9]*)|([a-z0-9][-_a-z0-9]*))(\\.[a-z0-9][-_a-z0-9]*){1,}){1}(\r{1,}[a-z0-9][a-z0-9]*:\/\/(([*]\\.[a-z0-9][-a-z0-9]*)|([a-z0-9][-_a-z0-9]*))(\\.[a-z0-9][-_a-z0-9]*){1,}){0,99}$";
		return new RegExp(reg, "m").test(str) ? true : false;
	}	

	/**
	 * json对象向String转化
	 */
	function jsonToString (obj){   
	    var THIS = this;    
	    switch(typeof(obj)){   
	        case 'string':   
	            return '"' + obj.replace(/(["\\])/g, '\\$1') + '"';   
	        case 'array':   
	            return '[' + obj.map(THIS.jsonToString).join(',') + ']';   
	        case 'object':   
	             if(obj instanceof Array){   
	                var strArr = [];   
	                var len = obj.length;   
	                for(var i=0; i<len; i++){   
	                    strArr.push(THIS.jsonToString(obj[i]));   
	                }   
	                return '[' + strArr.join(',') + ']';   
	            }else if(obj==null){   
	                return 'null';   
	  
	                }else{   
	                    var string = [];   
	                    for (var property in obj) string.push(THIS.jsonToString(property) + ':' + THIS.jsonToString(obj[property]));   
	                return '{' + string.join(',') + '}';   
	            }   
	        case 'number':   
	            return obj;   
	        case 'false':   
	            return obj;   
	    }   
	}

	function isNameIDPattern(str) {
		if (str.indexOf("-") == 0)
		{
			alert("nameID名称不能以'-'开头");
			return false;
		}
		if (str.length > 244)
		{
			alert("nameID名称(包括后缀)长度不能超过254个字符");
			return false;
		}
		var reg = /^[a-zA-Z0-9-]{1,63}(\.[a-zA-Z0-9-]{1,63})*$/;
		if (!reg.test(str))
		{
			alert("nameID名称前缀只可以由\"[0-9][a-z][A-Z]-.\"组成，用.分割的每段不超过63个字符，" + "且最小结构为[].[]\n\n举例：www.abc, pic.news.sohu");
			return false;
		}
		return true;
	}


	function isNameIDSuffixPattern(str) {
		//NameID名称以.tel结尾
		var reg_tel = /^.+\.tel$/;
		//NameID名称以.cnc结尾
		var reg_cnc = /^.+\.cnc$/;
		if(reg_tel.test(str) || reg_cnc.test(str)) {
			alert("nameID名称不能以.tel或.cnc结尾");
			return false;
		}
		return true;
	}

	function inArray(current, array) {
	    for (var i = 0; i < array.length; i++) {
		    if (current == array[i].toString()) {
		        return true;
		    }
		}
		return false;
	}

	function isIPPattern(str) {
		var reg = "^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}$";
		return reg.test(str) ? true : false;
	}

	