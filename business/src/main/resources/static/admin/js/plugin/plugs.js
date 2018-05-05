$(function(){ //等界面加载完成后，执行下面内容
	(function ($){ // 闭包，防止下面定义的变量泄露到整个页面
		
		$.tableDataFormatter = function(value, row, index){
			var th  = $(this);
			var type = th[0].type;
			var optionMap = {};
			var optionsArr = [];
			if(type.startWith('select:')){
				var optionsArr = type.substr(7).split(',');
			}else 
			if(type.startWith('radio:')){
				var optionsArr = type.substr(6).split(',');
			}
			for(var opt in optionsArr){
				var key = optionsArr[opt].split('=')[0];
				var val = optionsArr[opt].split('=')[1];
				optionMap[val] = key;
			}
			var values = value.split(',');
			var result = null;
			for(var i in values){
				var one = optionMap[values[i]] || values[i];
				if(result==null){
					result = one;
				}else{
					result += ','+one;
				}
			}
			return result;
			
		}
		/**
		 * table只显示一行
		 */
		var hidetablerow = function(ab){
			//只初始化一次
			if(!ab.attr('data-hidetablerow-init') || ab.attr('data-hidetablerow-init')=='false'){
				ab.attr('data-hidetablerow-init',true)
			}else{
				return;
			}
			var hidetable = $("#"+ab.attr('plug-hidetablerow'));
			var a = $('<a herf="#"> (点击查看更多)</a>');
			var span = $('<span class="fa fa-angle-left"></span>');
			
			hidetable.bootstrapTable({
				pagination:true,
				pageSize:1,
				sidePagination:'client'
			});
			hidetable.bootstrapTable('refreshOptions',{
				pagination:true,
				pageSize:1,
				sidePagination:'client'
			});
			hidetable.parents('.fixed-table-container').find('.fixed-table-pagination').css('display','none');
			
			if(!hidetable || hidetable.bootstrapTable('getData').length==0){
				return;
			}
			a.append(span);
			ab.append(a);
			
			
			a.click(function(){
				if(span.hasClass('fa-angle-down')){
					span.removeClass('fa-angle-down').addClass('fa-angle-left');
					hidetable.bootstrapTable('refreshOptions',{
						pagination:true,
						pageSize:1,
						sidePagination:'client'
					});
					
					hidetable.parents('.fixed-table-container').find('.fixed-table-pagination').css('display','none');
					return;
				}
				span.removeClass('fa-angle-left').addClass('fa-angle-down');
				hidetable.bootstrapTable('refreshOptions',{
					pagination:false
				});
			})
		}
		
		/**
		 * 异步界面拼装
		 */
		function ajaxTargetDom(ajh){
			return $("#"+ajh.attr('plug-action'));
		}
		function ajaxHtml(ajh){
			//只初始化一次
			if(!ajh.attr('ajax-action-init') || ajh.attr('ajax-action-init')=='false'){
				ajh.attr('ajax-action-init',true)
			}else{
				return;
			}
			var targetDom =  ajaxTargetDom(ajh);
			targetDom.addClass('in').addClass('active');
			var once = ajh.attr('action-times') != 'always';//默认只进行一次请求
			var actionOff = ajh.attr('action-off');//关闭异步
			var actionUrl = ajh.attr('action-url');
			var actionData = null;
			
			var clickButton = $(ajh.attr('action-button'));
			if(actionOff){
				return;
			}
			
			reloadHtml();
			$('body').delegate(ajh.attr('action-button'),"click",function(){
				var form = $(ajh.attr('action-form'));
				return reloadHtml(true,form);
				});
			
			function reloadHtml(isSearch, form){
				alert(12);
				if(isSearch && !ajh.parent().hasClass('active')){
					return;
				}
				var dataA = ajh.data();
				var actionData = '';
				for(var key in dataA){
					if(actionData==''){
						actionData += key + '=' + dataA[key];
					}else{
						actionData += '&' + key + '=' + dataA[key];
					}
				}
				if(form && form.length!=0){
					if(actionData==''){
						actionData = form.serialize();
					}else{
						actionData += '&' + form.serialize();
					}
				}
	            $.ajax({
	                url: actionUrl,
	                cache: false,
	                contentType : 'application/x-www-form-urlencoded',
	                type:'POST',
	                data: actionData
	            }).done(function (html) {
	            	targetDom.html(html);
	            	targetDom.addClass('in').addClass('active');
	            	$(document).trigger('pageChange');
	            });
	            if(once){
	            	ajh.attr('action-off',true);
	            }
	            return false;
			}
		}
		
		
		function showNextTab(li){
			if(!li.hasClass('active')){
				return;
			}
			var next = li.prev();
			if(next.length == 0){
				next = li.next();
			}
			if(next.length != 0){
				var div = $(next.find('a').attr('href'))
				div.addClass('active').addClass('in');
				next.addClass('active');
			}
		}
		
		//动态增删tab
		function dynamicTab(ul){
			//只初始化一次
			if(!ul.attr('dynamic-tab-init') || ul.attr('dynamic-tab-init')=='false'){
				ul.attr('dynamic-tab-init',true)
			}else{
				return;
			}
			var liForClone = null;
			var divForClone = null;
			var id = ul.attr('plug-dynamic-tab');
			
			//添加按钮
			var add = $('<li class="removeDom"><a  >添加 <span class="fa fa-plus"></span></a></li>');
			
			//li 如果第一个可以删除
			if(id && id!=''){
				liForClone = $('<li><a href="#'+ ul.attr('plug-dynamic-tab') +'"  data-toggle="tab">'+ul.attr('data-text-prefix')+'</a></li>');
				divForClone = $('#'+ul.attr('plug-dynamic-tab'));
				
			}
			//li 如果第一个不能删除
			if(!id || id==''){
				liForClone = ul.find('li').first()
				divForClone = $(liForClone.find('a').attr('href'));
				id = liForClone.find('a').attr('href').replace(/([0-9]+$)/g,'').replace('#','');
			}
			//
			var numPrefix = ul.attr('data-num-prefix');
			
			var namePrefix = ul.attr('data-name-prefix');
			
			var title = liForClone.find('a').html().replace(/([0-9]+$)/g,'');
			
			var canRemoveLi = ul.find('li').not(liForClone);
			liForClone.add(divForClone).addClass('removeDom');
			canRemoveLi.each(function(){
				var self = $(this);
				var remove = $('<span class="fa fa-times"></span>');
				var a = self.find('a');
				a.append(remove);
				remove.click(function(){
					showNextTab(self);
					$(a.attr('href')).remove();
					self.remove();
					ul.trigger('indexchange');
				});
				if(!self.hasClass('removeDom')){
					self.addClass('removeDom');
				}
			});
			//文档 + 添加按钮
			ul.append(add);
			
			if(!ul.attr('data-index')){
				ul.attr('data-index',canRemoveLi.length);
			};
			add.click(function(){
				var cloneLi = liForClone.clone();
				var cloneDiv = divForClone.clone();
				var index = ul.attr('data-index');
				ul.attr('data-index',++index);
				cloneLi.attr('data-index',index);
				var suffix = numPrefix != undefined ? numPrefix + '_' + index:index;
				var remove = $('<span class="fa fa-times"></span>');
				cloneLi.find('a').html(title+suffix);
				cloneLi.find('a').attr('href','#'+id+suffix);
				cloneLi.find('a').append(remove);
				cloneLi.insertBefore(add);
				ul.next().append(cloneDiv);
				cloneDiv.attr('id',id+suffix);
				cloneDiv.find('.removeDom').remove();
				cloneLi.find('.removeDom').remove();
				cloneDiv.find('[data-index]').each(function(){
					$(this).attr('data-index',0);
				})
				cloneDiv.find('[dynamic-tab-init]').each(function(){
					$(this).attr('dynamic-tab-init',false);
				})
				cloneDiv.find('[data-num-prefix]').each(function(){
					$(this).attr('data-num-prefix',index);
				})
				cloneDiv.find('input,select,radio,checkbox').each(function(){
					var self = $(this);
					if(self.is('[type="text"]') || self.is('[type="hidden"]')){
						(self.attr('plug-dynamic-stay') == 'true') || self.val("");
					}
					self.attr('name',self.attr('name').replace(/\[[0-9]+\]/g,'[' + (index-1) + ']'));
					if(namePrefix){
						self.attr('name',self.attr('name').replace(eval('/'+ namePrefix +'\[[0-9]+\]/g'),namePrefix+'[' + (numPrefix-1) + ']'));
					}
				});
				cloneLi.parent().children().removeClass('active');
				cloneDiv.parent().children().removeClass('active').removeClass('in');
				
				cloneLi.addClass('active');
				cloneDiv.addClass('active').addClass('in');
				
				remove.click(function(){
					showNextTab(cloneLi);
					cloneDiv.remove();
					cloneLi.remove();
					ul.trigger('indexchange');
				});
				
				$(document).trigger('pageChange');
			});
			
			//调整index
			ul.on('indexchange',function(){
				var numPrefix = ul.attr('data-num-prefix');
				ul.find('li').not(add).each(function(index){
					var li = $(this);
					li.attr('data-index',++index);
					var index = li.attr('data-index');
					var namePrefix = ul.attr('data-name-prefix');
					var tarDiv = $(li.find('a').attr('href'));
					
					tarDiv.find('input,select,radio,checkbox').each(function(){
						var self = $(this);
						self.attr('name',self.attr('name').replace(/\[[0-9]+\]/g,'[' + (index-1) + ']'));
						if(namePrefix){
							self.attr('name',self.attr('name').replace(eval('/'+ namePrefix +'\[[0-9]+\]/g'),namePrefix+'[' + (numPrefix-1) + ']'));
						}
					});
					tarDiv.find('[data-num-prefix]').each(function(){
						$(this).attr('data-num-prefix',index);
						$(this).trigger('indexchange');
					})
				});
			})
		}
		
		
		
		//动态添加删除Table数据
		function dynamicTableRows(table){
			//只初始化一次
			if(!table.attr('dynamic-row-init') || table.attr('dynamic-row-init')=='false'){
				table.attr('dynamic-row-init',true)
			}else{
				return;
			}
			var transform = $(table.attr('data-transform'));
			var namePrefix = table.attr('data-name-prefix');
			var ths = table.find('th');
			var title = table.attr('data-title') || '';
			var div = $('<div class="form-group">'+(title?'<label class="col-xs-2 control-label">'+title+'</label>':'')+'</div>');
            var add = $('<div class="col-xs-2"><button type="button" class="btn btn-sm btn-block btn-info" >新增</button></div>');
            var update = $('<div class="col-xs-2"><button type="button" class="btn btn-sm btn-block btn-info" >修改</button></div>');
            var del = $('<div class="col-xs-2"><button type="button" class="btn btn-sm btn-block btn-info" >删除</button></div>');
            if(!table.attr('dynamic-row-curd') || table.attr('dynamic-row-curd')!='false'){
            	div.append(add).append(update).append(del);
                div.insertBefore(table);
            }
            var inputs = getDataForCreateInputs(ths);
			
			table.bootstrapTable();
			var tableData = table.bootstrapTable('getData');
			for(var i in tableData){
				tableData[i].data_id=i;
			}
			table.bootstrapTable('load',tableData);
			
			add.click(function(){
				var obj = {};
				var inputDoms = creatInputDoms(inputs);
				cms.dialog({
					titleText : "新建",
					width : "800px",
					disFooter : false,
					cancelBtnShow : true,
					content       : inputDoms,
					saveBtnShow   : true,
					save          : function(e,dialog){
						var form = dialog.modal.find("form");
						var formdata = form.serializeObject();
						table.bootstrapTable('prepend',[formdata]);
						table.trigger('rowchange');
						dialog.close();
					}
				});
			});
			
			update.click(function(){
				var obj = table.bootstrapTable('getSelections');
				if(obj.length!=1){
					cms.messager.alert('请选择一个进行修改！！！');
					return;
				}
				obj = obj[0];
				var inputDoms = creatInputDoms(inputs, obj);
				cms.dialog({
					titleText : "修改",
					width : "800px",
					disFooter : false,
					cancelBtnShow : true,
					content       : inputDoms,
					saveBtnShow   : true,
					save          : function(e,dialog){
						var form = dialog.modal.find("form");
						var formdata = form.serializeObject();
						console.log([{row:formdata,id:formdata.data_id}]);
						table.bootstrapTable('updateByUniqueId',[{row:formdata,id:formdata.data_id}]);
						table.trigger('rowchange');
						dialog.close();
					}
				});
			});
			
			del.click(function(){
				var objs = table.bootstrapTable('getSelections');
				if(objs.length==0){
					cms.messager.alert('请选择至少1行进行删除！！！');
					return;
				}
				for(var i in objs){
					table.bootstrapTable('removeByUniqueId',objs[i].data_id);
				}
				table.trigger('rowchange');
			});
			
			table.on('rowchange',function(){
				if(!transform.length){
					return;
				}
				var data = table.bootstrapTable('getData');
				addDataToForm(transform, data, namePrefix);
			});
			table.trigger('rowchange');
		}
		function creatInputDoms(inputsdata, obj){
			var inputDoms = [];
			var obj = obj || {};
			for(var i in inputsdata){
				var inputDom = null;
				switch(inputsdata[i].type)
				{
				case 'text':
					inputDom = textDom(inputsdata[i], obj);
				  break;
				case 'select':
					inputDom = selectDom(inputsdata[i], obj);
				  break;
				case 'radio':
					inputDom = radioDom(inputsdata[i], obj);
				  break;
				case 'checkbox':
					inputDom = checkboxDom(inputsdata[i], obj);
				  break;
				case 'id':
					inputDom = idDom(inputsdata[i], obj);
				  break;
				default:
					inputDom = hiddenDom(inputsdata[i], obj);
				}
				inputDoms.push(inputDom);
			}
			return inputDoms;
		}
		
		function getDataForCreateInputs(doms){
			var inputs = [];
			doms.each(function(){
				var dom = $(this);
				var input = {};
				var type = dom.attr('data-type');
				var index = 0;
				input.name=dom.attr('data-field');
				if(dom.is('th')){
					input.label = dom.html();
				}
				if(input.name=='0'){
					input.type='hidden';
				} else
				if(input.name=='data_id'){
					input.type='id';
				} else
				if(dom.attr('data-visible') && dom.attr('data-visible') == 'false'){
					input.type='hidden';
				}else
				if(!type){
					input.type='text';
				}else{
					//处理 select radio checkbox
					var index = 0;
					if(type.startWith('select:')){
						input.type='select';
						index = 7;
					}else 
					if(type.startWith('radio:')){
						input.type='radio';
						index = 6;
					}else
					if(type.startWith('checkbox:')){
						input.type='checkbox';
						index = 9;
					}
					var options = [];
					var optionsArr = type.substr(index).split(',');
					for(var opt in optionsArr){
						var option = {};
						var key = optionsArr[opt].split('=')[0];
						var value = optionsArr[opt].split('=')[1];
						option[key] = value;
						options.push(option);
					}
					input.options = options;
					dom.attr('data-formatter','$.tableDataFormatter');
				}
				
				inputs.push(input);
			})
			return inputs;
		}
		
		function addDataToForm(form, data, namePrefix){
			var dels = form.find($('[name^="'+namePrefix+'"]'));
			dels.remove();
			var inputs = [];
			for(var i in data){
				var obj = data[i];
				for(var pro in obj){
					if(pro != '0' && pro != 'data_id' && !pro.startWith('_')){
						inputs.push(hiddenDataDom(namePrefix+'['+i+'].'+pro, obj[pro]));
					}
				}
			}
			form.prepend(inputs);
		}
		
		
		function idDom(input, obj){
			var value = obj[input.name] || new UUID().createUUID();
			var inputStr = '<input type="hidden" name="'+input.name+'" class="form-control" value="'+value+'" placeholder="'+input.label+'"  required />';
			return $(inputStr);
		}
		function hiddenDataDom(name, value){
			var inputStr = '<input type="hidden" name="'+name+'" class="form-control" value="'+value+'" />';
			return $(inputStr);
		}
		function hiddenDom(input, obj){
			var value = obj[input.name] || '';
			var inputStr = '<input type="hidden" name="'+input.name+'" class="form-control" value="'+value+'" placeholder="'+input.label+'"  required />';
			return $(inputStr);
		}
		function textDom(input, obj){
			var value = obj[input.name] || '';
			var hasLabel = input.label || '';
			var inputStr = '<input type="text" name="'+input.name+'" class="form-control" value="'+value+'" placeholder="'+input.label+'"  required />';
			if(!hasLabel){
				return $(inputStr);
			}
			var inputWapperStr = '<div class="form-group">'+
				    '<label class="col-sm-3 control-label">'+input.label+'</label>'+
				    '<div class="col-sm-9">'+
				    	inputStr+
				    '</div>'+
				'</div>';
			return $(inputWapperStr);
		}
		
		function selectDom(select, obj){
			var hasLabel = select.label || '';
			var selectStr =  '<select name="'+select.name+'" class="form-control" >'+
							  '</select>';
			if(hasLabel){
				selectStr = '<div class="form-group">'+
					'<label class="col-sm-3 control-label">'+select.label+'</label>'+
				    '<div class="col-sm-9">'+
				    	selectStr +
					'</div>'+
				'</div>';
			}
			var $result = $(selectStr);
			var $select = hasLabel ? $result.find('select') : $result;
			var selectValue = obj[select.name] || '';
			$select.append($('<option value="">请选择</option>'));
			for(var opt in select.options){
				for(var key in select.options[opt]){
					var value = select.options[opt][key];
					$select.append($('<option value="'+value+'"'+ (value!==selectValue ? '' : ' selected="selected"')+ '>'+key+'</option>'))
				}
			}
			return $result;
		}
		
		
		function radioDom(radio, obj){
			var hasLabel = radio.label || '';
			var radioValue = obj[radio.name] || '';
			var radios = [];
			for(var opt in radio.options){
				for(var key in radio.options[opt]){
					var value = radio.options[opt][key];
					radios.push($('<label class="control-label"><input type="radio" value="'+value+'" '+ (value!==radioValue?'': 'checked="checked"')+ ' class="minimal" name="'+radio.name+'">'+key+'</label>'))
				}
			}
			if(!hasLabel){
				return radios;
			}
			var radioWapperStr = '<div class="form-group">'+
					'<label class="col-sm-3 control-label">'+radio.label+'</label>'+
					'<div class="col-sm-9">'+
					'</div>'+
				'</div>';
			var $radioWapper = $(radioWapperStr);
			$radioWapper.find('.col-sm-9').append(radios);
			return $radioWapper;
		}
		function checkboxDom(checkbox, obj){
			var hasLabel = checkbox.label || '';
			var checkboxValue = obj[checkbox.name] || '';
			var checkboxMap = {};
			var values = checkboxValue.split(',');
			for(var i in values){
				checkboxMap[values[i]]=true;
			}
			var checkboxs = [];
			for(var opt in checkbox.options){
				for(var key in checkbox.options[opt]){
					var value = checkbox.options[opt][key];
					checkboxs.push($('<label class="control-label"><input type="checkbox" ' + (key=='其他'?'plug-other-remark="1"':'') + ' value="'+value+'" '+ (!checkboxMap[value]?'': 'checked="checked"')+ ' class="minimal" name="'+checkbox.name+'">'+key+'</label>'))
				}
			}
			if(!hasLabel){
				return checkboxs;
			}
			var checkboxWapperStr = '<div class="form-group">'+
										'<label class="col-sm-3 control-label">'+checkbox.label+'</label>'+
										'<div class="col-sm-9">'+
					        			'</div>'+
					        		'</div>';
			var $checkboxWapper = $(checkboxWapperStr);
			$checkboxWapper.find('.col-sm-9').append(checkboxs);
			return $checkboxWapper;
		}
		
		//根据数据数据
		function createInput(dom){
			//只初始化一次
			if(!dom.attr('create-input-init') || dom.attr('create-input-init')=='false'){
				dom.attr('create-input-init',true)
			}else{
				return;
			}
			var inputdata = getDataForCreateInputs(dom);
			var name = dom.attr('data-field');
			var obj = {};
			obj[name] = dom.attr('data-value');
			var inputdom = creatInputDoms(inputdata,obj);
			dom.prepend(inputdom[0]);
		}
		function localTextArea(checkbox){
			return checkbox.nextAll('textarea').
			add(checkbox.nextAll().find('textarea')).
			add(checkbox.parent().nextAll('textarea')).
			add(checkbox.parent().nextAll().find('textarea'));
		}
		function plugIntegration(dom){
			//只初始化一次
			if(!dom.attr('integration-init') || dom.attr('integrationt-init')=='false'){
				dom.attr('integration-init',true)
			}else{
				return;
			}
			var targetDom = $(dom.attr('plug-integration'));
			var trs = dom.find('.data-integration');
			trs.find(':radio :checkbox').filter(':visible').click(change);
			trs.find('textarea').not(targetDom).change(change);
			
			
			function change(){
				var str = '发放条件: ';
				trs.each(function(){
					var tr = $(this);
					tr.find('td').each(function(index){
						var th = $(this);
						if(index==0){
							str += th.text() + ":";
						}else{
							var result = [];
							var pass = null;
							th.find('input').each(function(){
								var input = $(this);
								if(input.attr('type') == 'radio' || input.attr('type') == 'checkbox'){
									if(input.is(':checked')){
										var content = input.parent().text();
										if(content!='其他'){
											result.push(content);
										}else{
											content +='('+ localTextArea(input).val()+')';
											result.push(content);
											if(pass==null){
												pass = localTextArea(input);
											}else{
												pass.add(localTextArea(input));
											}
										}
										
									}
								}
							});
							th.find('textarea').filter(':visible').not(pass).each(function(){
								var textarea = $(this);
								result.push(textarea.val());
							});
							str += result.join('、') + ' ';
						}
					});
					str += '。';
				});
				targetDom.val(str);
			}
			
		}
		
		function otherText(checkbox){
			var checked = checkbox.is(':checked');
			var textarea = checkbox.nextAll('textarea').
						add(checkbox.nextAll().find('textarea')).
						add(checkbox.parent().nextAll('textarea')).
						add(checkbox.parent().nextAll().find('textarea'));
			console.log( checkbox.parent().text());
			if(checked){
				textarea.fadeIn().removeClass('ignore');
			}else{
				textarea.fadeOut().addClass('ignore').val('');
			}
		}
		
		$(document).delegate('[plug-other-remark]','click',function(){
			otherText($(this));
		});
		
		//三级tab bug 无法显示 二级以下active tab
		$(document).delegate('[data-toggle="tab"]','click',function(){
			var self = $(this);
			var div = $(self.attr('href'));
			var contains = div.find('[data-toggle="tab"]').filter(function(){
				return $(this).parent().hasClass('active');
			});
			contains.each(function(){
				$($(this).attr('href')).addClass('in').addClass('active');
			});
			
		});
		
		//页面变成详情页
		function detailPage(form){
			form.find('input,select,textarea,radio,checkbox').prop('disabled',true);
			var target = form.attr('plug-detail-page');
			if(target){
				$(target).fadeOut();
			}
		}
		function formatAmountUpper(dom){
			var num = dom.attr('plug-amount-upper');
			if(num==undefined||num==''||num==null){
				return '零';
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
			var result = prefix + suffix.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
			if(dom.is('input') || dom.is('textarea')){
				dom.val(result);
			}else{
				dom.html(result);
			}
		}
		
		
		
		$(document).bind('pageChange', function(){
			$("[plug-dynamic-tab]").each(function(){
				dynamicTab($(this));
			});
			$("[plug-dynamic-row]").each(function(){
				dynamicTableRows($(this));
			})
			
			$('[plug-create-input]').each(function(){
				createInput($(this));
			});
			//table只显示一行
			$("[plug-hidetablerow]").each(function(){
				hidetablerow($(this));
			})
			
			//异步加载dom
			$("[plug-action]").each(function(){
				var self = $(this);
				if(ajaxTargetDom(self).is(':visible') || self.parent().hasClass('active')){
					ajaxHtml(self);
				}
				self.click(function(){
					ajaxHtml(self);
				});
			})
			$('[plug-other-remark]').each(function(){
				otherText($(this));
			});
			$('[plug-integration]').each(function(){
				plugIntegration($(this));
			});
			$('[data-toggle="table"]').each(function(){
				var table = $(this);
				//只初始化一次
				if(!table.attr('dynamic-table-init') || table.attr('dynamic-table-init')=='false'){
					table.attr('dynamic-table-init',true)
				}else{
					return;
				}
				table.bootstrapTable();
			});
			
			$('[plug-detail-page]').each(function(){
				detailPage($(this));
			});
			
			$("[plug-amount-upper]").each(function(){
				formatAmountUpper($(this));
			});
			
		});
		$(document).trigger('pageChange');
		
	}($))
})
