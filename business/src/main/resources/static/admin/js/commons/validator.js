/* 
 *  Created on : 2014-11-1
 *  Author     : czw
 */

//在此扩展方法     
 if (jQuery.validator) {


	 //effectiveNum

	 //integer

	 jQuery.validator.addMethod(
		 "number",
		 function(value, element, param) {
			 //
			 if(value &&  /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/.test(value)){
				 return true;
			 } else{
				 return false;
			 }
		 },
		 function(param){
			 return '无效的数字!'
		 });
	 jQuery.validator.addMethod(
			 "need",
			 function(value, element, param) {
				 var ele = $(element);
				 var name = ele.attr('name');
				 ele.addClass('initneed');
				 //触发其他的校验
				 $('[name="'+name+'"]').not(ele).not('.initneed').blur();
				 if(value == ""){
					 return false;
				 }
				 return true;
			 },
			 function(param){
				 return '必选字段'
			 });
	 jQuery.validator.addMethod(
		 "posInteger",
		 function(value, element, param) {
			 var ele = $(element);
			 var name = ele.attr('name');
			 ele.addClass('initposInteger');
			 //触发其他的校验
			 $('[name="'+name+'"]').not(ele).not('.initposInteger').blur();
			 if(value &&  /^\d+$/.test(value)){
				 return true;
			 } else{
				 return false;
			 }
		 },
		 function(param){
			 return '请输入有效正整数!'
		 });

	 jQuery.validator.addMethod(
		 "integer",
		 function(value, element, param) {
			 //
			 if(value &&  /^[\-\+]?\d+$/.test(value)){
				 return true;
			 } else{
				 return false;
			 }
		 },
		 function(param){
			 return '请输入有效整数!'
		 });

	 jQuery.validator.addMethod(
		 "effectiveNum",
		 function(value, element, param) {
		 	//
			 if(value && /^((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/.test(value)){
				 return true;
			 } else{
				 return false;
			 }
		 },
		 function(param){
			 return '请输入有效数字!'
		 });


		//phone
	 jQuery.validator.addMethod(
		 "phoneValidator",
		 function(value, element, param) {
			 if(value == "")
			 return true;
			 if(value && /(^1[34578][0-9]{9}$)|(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)/.test(value)){
				 return true;
			 } else{
				 return false;
			 }
		 },
		 function(param){
			 return '手机号码格式不对!'
		 });
	 
	//mobliephone
	 jQuery.validator.addMethod(
		 "phoneStartValidator",
		 function(value, element, param) {
			 value = $(element).attr('data-value');
			 if(value && /^1[34578][0-9]{9}$/.test(value)){
				 return true;
			 } else{
				 return false;
			 }
		 },
		 function(param){
			 return '手机号码格式不对!'
		 });


 	//
	 jQuery.validator.addMethod(
		 		"dns",
		 		function(value, element, param) { 
		        	 if(! /^((\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3})(\|(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3})*$/.test(value)) return false;
		        	 var arrValue = value.split('|');
		        	 var temp ;
		        	 for(var i in arrValue){
		        		 temp = arrValue[i].split('.');
		        		 
		        		 for(var j in temp){
		        			 if(parseInt(temp[j]) > 255){
		            			 return false;
		            		 } 
		        		 }
		        		 
		        			 
		        	 }
		        	 return true;
		        },
		 		function(param){
		 			return 'IP格式正确，且IP之间用|分割！'
		 		});
	 jQuery.validator.addMethod(
		 		"maxinum",
		 		function(value, element, param) {
		 			value = value - 0;
		 			if(!isNaN(value)) {
		 				if(value <= param){
		 					return true;
		 				}
		 			}
		 			return false;
		 		},
		 		function(param){
		 			return "输入数字，且最大值为"+param;
		 		});
	 
	 
	 jQuery.validator.addMethod(
		 		"userexist",
		 		function(value, element, param) {
		 			data = 'nameEn='+value;
		 			param && (data += '&id='+param);
		 			var flag = true;
		 			
		 			$.ajax({
		 				async: false, 
		 				url         : '/user/userNameEnSingle',
		 				contentType : 'application/x-www-form-urlencoded',
		 				type        : 'post',
		 				data        :  data,
		 				success : function (result) {
		 					flag = result;
		 			    }	
		 			})
		 			return flag;
		 		},
		 		function(param){
		 			return "登录名已存在，请重新命名！";
		 		});
	 jQuery.validator.addMethod(
		 		"certNoValidate",
		 		function(value, element, param) {
		 			if(!param){
		 				return false;
		 			}
		 			data = 'certNo='+value+'&name='+$("#"+param).val();
		 			var flag = false;
		 			$.ajax({
		 				async: false, 
		 				url         : '/mockOuterInterface/mockRealNameAuth',
		 				contentType : 'application/x-www-form-urlencoded',
		 				type        : 'post',
		 				data        :  data,
		 				success : function (result) {
		 					if(result && result.resultCode=="0000"){
		 						flag = true
		 					}
		 			    }	
		 			})
		 			return flag;
		 		},
		 		function(param){
		 			return "身份证和名字不匹配，请重新命名！";
		 		});
	 jQuery.validator.addMethod(
			 "certNoFomart",
		 		function(value, element, param) {
		 			if(value == ""){
		 				return true;
		 			}
		 		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
	 			    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
	 			    return reg.test(value); 
		 		},
		 		function(param){
		 			return "身份证号为15位或18位且只能含有数字和字母x！";
		 		});
	 jQuery.validator.addMethod(
		 "custNameValidate",
		 function(value, element, param) {
			 if(!param){
				 return false;
			 }
			 data = 'name='+value+'&certNo='+$("#"+param).val();
			 var flag = false;
			 $.ajax({
				 async: false,
				 url         : '/mockOuterInterface/mockRealNameAuth',
				 contentType : 'application/x-www-form-urlencoded',
				 type        : 'post',
				 data        :  data,
				 success : function (result) {
					 if(result && result.resultCode=="0000"){
						 flag = true
					 }
				 }
			 })
			 return flag;
		 },
		 function(param){
			 return "身份证和名字不匹配，请重新命名！";
		 });
	 jQuery.validator.addMethod(
		 		"nameSingle",
		 		function(value, element, param) {
		 			var mntId = parseInt($('#updMnId').val()) || 0;
		 			var flag = true;
		 			$.ajax({
		 				async: false, 
		 				url         : '/monitor/bandmonitor/nameSingle',
		 				contentType : 'application/x-www-form-urlencoded',
		 				type        : 'post',
		 				data        : 'mntId='+mntId + '&type=' + param + '&val=' + value,
		 				success : function (result) {
		 					result = result.JSONResult || result;
		 					flag = result.content;
		 			    }	
		 			})
		 			
		 			return flag;
		 		},
		 		function(param){
		 			var map = {
		 					mnName : '中文名称',
		 					mnNameEn: '英文名称',
		 					mnShortName:'简称'
		 			}
		 			return map[param] + "已存在，请重新命名！";
		 		});
	 jQuery.validator.addMethod(
		 		"isExistIsp",
		 		function(value, element, param) {
		 			var flag = true;
		 			$.ajax({
		 				async: false, 
		 				url         : '/dict/area/isExistIsp',
		 				contentType : 'application/x-www-form-urlencoded',
		 				type        : 'post',
		 				data        : 'name='+value,
		 				success : function (result) {
		 					
		 					flag = result.content;
		 			    }	
		 			})
		 			
		 			return flag;
		 		},
		 		function(param){
		 			return "不存在此ISP！";
		 		});
	 jQuery.validator.addMethod(
		 		"mininum",
		 		function(value, element, param) {
		 			value = value - 0;
		 			if(!isNaN(value)) {
		 				if(value >= param){
		 					return true;
		 				}
		 			}
		 			return false;
		 		},
		 		function(param){
		 			return "输入数字，且最小值为"+param;
		 		});
	 jQuery.validator.addMethod(
		 		"miniinteger",
		 		function(value, element, param) {
		 			value = value || '';
		 			if(!value){
		 				return true;
		 			}
		 			if(! /^-?\d+$/.test(value)){
		 				return false;
		 			}
		 			value -= 0;
		 			if(!isNaN(value)) {
		 				if(value >= param){
		 					return true;
		 				}
		 			}
		 			return false;
		 		},
		 		function(param){
		 			return "输入整数，且最小值为"+param;
		 		});
	 jQuery.validator.addMethod(
		 		"maxiinteger",
		 		function(value, element, param) {
		 			value = value || '';
		 			if(!value){
		 				return true;
		 			}
		 			if(! /^-?\d+$/.test(value)){
		 				return false;
		 			}
		 			value -= 0;
		 			if(!isNaN(value)) {
		 				if(value <= param){
		 					return true;
		 				}
		 			}
		 			return false;
		 		},
		 		function(param){
		 			return "输入整数，且最大值为"+param;
		 		});
	 jQuery.validator.addMethod(
		 		"positivetofixed",
		 		function(value, element, param) {
		 			value = value;
		 			if(!value){
		 				return true;
		 			}
		 			var str = '^\\d+(\\.\\d{1,'+param+'})?$';
		 			if(!new RegExp(str).test(value)){
		 				return false;
		 			}
		 			value -= 0;
		 			if(!isNaN(value)) {
		 				if(value >= 0){
		 					return true;
		 				}
		 			}
		 			return false;
		 		},
		 		function(param){
		 			return "非负数，且保留小数点后不超过"+param+"位";
		 		});
	 
	 jQuery.validator.addMethod(
		 		"validatesum",
		 		function(value, element, param) {
		 			var inputs = $(param);
		 			var sum = 0;
		 			inputs.each(function(){
		 				sum += ($(this).val()-0);
		 			})
		 			value -= 0;
		 			if(value == sum){
		 				return true;
		 			}
		 			return false;
		 		},
		 		function(param, element){
		 			return $(element).attr('sumtitle');
		 		});
	 jQuery.validator.addMethod(
		 "notzero",
		 function(value, element, param) {
			 value = parseFloat(value);
			 if(!isNaN(value)) {
				 if(value != parseFloat(param)){
					 return true;
				 }
			 }
			 return false;
		 },
		 function(param){
			 return "输入数字不能为"+param;
		 });
	 jQuery.validator.addMethod(
		 		"sameWith",
		 		function(value, element, param) {
		 			var targetValue = $("#"+param).val();
		 			if(targetValue===value){
		 				return true;
		 			}else{
		 				return false;
		 			}
		 		},
		 		function(param){
		 			return "两次输入不同";
		 		});
	 jQuery.validator.addMethod(
		 		"decimalDigits",
		 		function(value, element, param) {
		 			var str = '^\\d+(\\.\\d{1,3})?$';
		 			if(new RegExp(str).test(value)) return true;
		 			else return false;
		 		},
		 		function(param){
		 			return "最多保留"+param+"位小数！";
		 		});
	 jQuery.validator.addMethod(
		 		"ip",
		 		function(value, element) {
		 			if(/^((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))\.){3}((25[0-5]|(2[0-4][0-9])|([01]?[0-9][0-9]?))){1}$/.test(value)) return true;
		 			else return false;
		 		},
		 		'无效的IP');
	jQuery.validator.addMethod(
	 		"channelDomainName",
	 		function(value, element) {
	 			if(/^[a-z0-9*][-a-z0-9.]*(\.[a-z0-9][-a-z0-9]*){1,}$/.test(value)) return true;
	 			else return false;
	 		},
	 		'无效的域名');
 	jQuery.validator.addMethod(
 		"letterandnum",
 		function(value, element) {
 			if(/^[a-zA-Z][a-zA-Z0-9\-]+$/.test(value)) return true;
 			else return false;
 		},
 		'无效的字符');
 	jQuery.validator.addMethod(
 	 		"port",
 	 		function(value, element) {
 	 			if(/^[0-9]{1,6}$/.test(value)) return true;
 	 			else return false;
 	 		},
 	 		'端口号格式错误');
	jQuery.validator.addMethod(
	 		"advancedconfig-weight",
	 		function(value, element) {
	 			if(/^[0-9\:]*$/.test(value)) return true;
	 			else return false;
	 		},
	 		'只能包含数字和 ：');
	jQuery.validator.addMethod(
	 		"number-maxlength",
	 		function(value, element, param) {
	 			var str = '^[0-9]{1,' + param + '}$';
	 			if(new RegExp(str).test(value)) return true;
	 			else return false;
	 		},
	 		function(param){
	 			var i = parseInt(param);
	 			if(!i) return "input验证参数错误";
	 			var str9 = '';
	 			for(i ; i > 0; i--){
	 				str9 += 9;
	 			}
	 			return '输入整数且 最小为0最大为'+ str9;
	 		});

     jQuery.validator.addMethod(
         "creditAmount",
         function(value, element, param) {
             var res = new Array();
             var pledgeAmounted=$("#pledgeAmounted").val() || 0;
             res[1] = ($("#affirmAmount").val()*$("#riskGuaranteeBaseMortrate").val()-pledgeAmounted)/100;
             res[1] = Math.round(res[1]*10000)/10000;
             return $(element).val() <= res[1];
         },
         function(param){
             var res = new Array()
			 var pledgeAmounted=$("#pledgeAmounted").val() || 0;
             res[1] = ($("#affirmAmount").val()*$("#riskGuaranteeBaseMortrate").val()-pledgeAmounted)/100;
             res[1] = Math.round(res[1]*10000)/10000;
             console.log('123456');
             return "授信金额应该小于等于认定价值*标准抵押率-已抵押金额["+ res[1] +"]";
         });
     jQuery.validator.addMethod(
         "loanAmout",
         function(value, element, param) {
             var self = $(element);
             var res = new Array();
             if(!self.is("input[id^='pBMaxApproveAmount_']")){
                 res[0] = true;
                 return res;
             }
             var pledgeAmounted=$("#pledgeAmounted").val() || 0;
             res[1] = ($("#affirmAmount").val()*$("#riskGuaranteeBaseMortrate").val()-pledgeAmounted)/100;
             res[1] = Math.round(res[1]*10000)/10000;
             return $(element).val() <= res[1];

         },
         function(param){
             var res = new Array();
             var pledgeAmounted=$("#pledgeAmounted").val() || 0;
             res[1] = ($("#affirmAmount").val()*$("#riskGuaranteeBaseMortrate").val()-pledgeAmounted)/100;
             return "用信金额小于等于认定价值*标准抵押率-已抵押金额["+ res[1] +"]";
         });
     jQuery.validator.addMethod(
 		"goodResponseTime",
 		function(value, element) {
 			if(/^[0-9\.%]*$/.test(value)) return true;
 			else return false;
 		},
 		'格式错误');

	jQuery.validator.addMethod(
 		"grab-number-of-bytes",
 		function(value, element) {
 			if(/^((51[2-9]|(5[2-9][0-9])|([6-9][0-9][0-9]))|([1-9][0-9][0-9][0-9])|([1-9][0-9][0-9][0-9][0-9])|([1-9][0-9][0-9][0-9][0-9][0-9])|(4096000|(40[0-9][0-5][0-9][0-9][0-9])|([1-3][0-9][0-9][0-9][0-9][0-9][0-9])))$/.test(value)) return true;
 			else return false;
 		},
 		'抓取字节数的取值范围为512到4096000');

 	
 	jQuery.validator.addMethod(
 		"other-http-code-expression",
 		function(value, element) {
 			if(/^\d[\*\d]{2}(\|\d[\*\d]{2})*$/.test(value)) return true;
 			else return false;
 		},
 		'以数字开头，后边可跟两位，为数字或者*，但不能包括2***，3**，每三位一组后边跟|隔开');
 	jQuery.validator.addMethod(
 		"ipv4-public",
 		function(value, element) {
 			if(value == "") return true;
 			if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value) && !(IP.isInnerIP(value))) return true;
 			else return false;
 		},
 		"无效的公网IP地址");
 	jQuery.validator.addMethod(
 		"ipv4-inner",
 		function(value, element) {
 			if(value == "") return true;
 			if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value) && IP.isInnerIP(value)) return true;
 			else return false;
 		},
 		"无效的私网IP地址");
 	jQuery.validator.addMethod(
 		"ipv4-inner-range",
 		function(value, element, params) {
 			var start = IP.isInnerIP($(params).val());
 			var end = IP.isInnerIP(value);
 			if(start == end) return true;
 			return false;
 		},
 		"私网IP地址选择范围无效");
 	jQuery.validator.addMethod(
 		"ipv4-cidr",
 		function(value, element) {
 			if(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/2[2-8]$/.test(value)) {
 				var arr = value.split("/");
 				if (IP.isInnerIP(arr[0])) {
 					var range = IP.cidrToRange(value);
 					$(".cidrrange").text(range[0] + " - " + range[1]);
 					return true;
 				}
 			}
 			$(".cidrrange").text("");
 			return false;
 		},
 		"无效的内网IPV4 CIDR 或者超出IP选择范围");
 	jQuery.extend(jQuery.validator.messages, {
		required: "必选字段",
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 个字符"),
		minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 个字符"),
		rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: jQuery.validator.format("请输入一个最大为{0} 的值"),
		min: jQuery.validator.format("请输入一个最小为{0} 的值")
    });
 }

 var IP = {
 	innerIpA : {begin:"10.0.0.0", end:"10.255.255.255"},
 	innerIpB : {begin:"172.16.0.0", end:"172.31.255.255"},
 	innerIpC : {begin:"192.168.0.0", end:"192.168.255.255"},
 	getIpNum : function(ip) {
 		var arr = ip.split(".");
	 	if(arr.length != 4) return 0;
	 	for(var i = 0; i < 4; i++) {
	 		arr[i] = parseInt(arr[i], 10);
	 	}
	 	return arr[0] * 256 * 256 * 256 + arr[1] * 256 * 256 + arr[2] * 256 + arr[3];
 	},
 	isInner : function(ip, begin, end) {
		var i = this.getIpNum(ip);
	 	var s = this.getIpNum(begin);
	 	var e = this.getIpNum(end);
	 	return i >= s && i <= e;
 	},
 	isInnerIP : function(ip) {
 		if (this.isInner(ip, this.innerIpA.begin, this.innerIpA.end)) return 1;
 		else if(this.isInner(ip, this.innerIpB.begin, this.innerIpB.end)) return 2;
 		else if(this.isInner(ip, this.innerIpC.begin, this.innerIpC.end)) return 3;
 		else return false;
 	},
 	long2ip : function(proper_address) {
		var output = false;
		if (!isNaN(proper_address) && (proper_address >= 0 || proper_address <= 4294967295)) {
		    output = Math.floor(proper_address / Math.pow(256, 3)) + '.' +
		    Math.floor((proper_address % Math.pow(256, 3)) / Math.pow(256, 2)) + '.' +
		    Math.floor(((proper_address % Math.pow(256, 3)) % Math.pow(256, 2)) / Math.pow(256, 1)) + '.' +
		    Math.floor((((proper_address % Math.pow(256, 3)) % Math.pow(256, 2)) % Math.pow(256, 1)) / Math.pow(256, 0));
		}
		return output;
	},
	ip2long : function(ip) {
		var i = 0;
	  	ip = ip.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i); // Verify ip format.
	  	if (!ip) return false;
		ip[0] = 0;
		for (i = 1; i < 5; i += 1) {
			ip[0] += !! ((ip[i] || '').length);
			ip[i] = parseInt(ip[i]) || 0;
		}
		ip.push(256, 256, 256, 256);
		ip[4 + ip[0]] *= Math.pow(256, 4 - ip[0]);
		if (ip[1] >= ip[5] || ip[2] >= ip[6] || ip[3] >= ip[7] || ip[4] >= ip[8]) {
			return false;
		}
		return ip[1] * (ip[0] === 1 || 16777216) + ip[2] * (ip[0] <= 2 || 65536) + ip[3] * (ip[0] <= 3 || 256) + ip[4] * 1;
	},
	cidrToRange : function(cidr) {
		var range = [2];
	    cidr = cidr.split('/');
	    var start = this.ip2long(cidr[0]);
	    range[0] = this.long2ip(start);
	    range[1] = this.long2ip(Math.pow(2, 32 - cidr[1]) + start - 1);
	    return range;
	}
 };
 
 
 
 
//如若使用validate  form 增加类 form-validate
 $(function(){
	 if (jQuery().validate) {
	     var f = function (e) {
	         $(e).closest('.form-group').removeClass('has-success')
	     };
	     $('.form-validate').each(function(){
	     	var l = $(this).validate({
	             errorElement: 'label',
	             errorClass: 'validerror',
	             errorPlacement: function (label, element) {
//	                 if (t.parent('.input-group').length) {
//	                     e.insertAfter(t.parent())
//	                 } else {
//	                     e.insertAfter(t)
//	                 }
//	            	 $(element).tooltip('hide');
//	            	 $(element).tooltip('destroy'); /*必需*/
	                 $(element).attr('title', $(label).text()).attr('data-original-title',$(label).text()).tooltip({
	                	 trigger:'manual',
	                	 template: '<div class="tooltip validate-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	                		 }); 
	                 $(element).tooltip('show');
	                 $(element).attr('title','');
	             },
	             onfocusout: function(element) { 
	                 $(element).valid(); 
	             },
	             focusInvalid: true,
	             ignore: ".ignore",
	             invalidHandler: function (e, t) {
	             },
	             onsubmit:true,
	             highlight: function (element, errorClass, validClass) {
//	                 $(e).closest('.form-group').removeClass('has-success').addClass('has-error')
//	            	 if($(e))
//	            	 $(e).closest('div').removeClass('has-success').addClass('has-error')
	             },
	             unhighlight: function (element, errorClass, validClass ) {
//	                 $(e).closest('.form-group').removeClass('has-error');
//	            	 $(e).closest('div').removeClass('has-error');
//	            	 $(element).tooltip('destroy').removeClass(errorClass);
//	                 setTimeout(function () {
//	                     f(e)
//	                 }, 3000)
	             },
	             success: function (label, element) {
	            	 $(element).tooltip('destroy');
//	                 e.closest('.form-group').removeClass('has-error').addClass('has-success')
//	            	 $(e).closest('div').removeClass('has-error').addClass('has-success')
	             }
	         })
	     });
	     
	 }

 })

