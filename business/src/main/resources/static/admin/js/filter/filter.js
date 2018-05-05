/**
 * filter.win_open(1);
 * filter.conditions_init();
 */
var filter_html_content = '<div style="margin: 20px;"><form method="GET" action=""><input type="hidden" name="field" id="filter-field"><div' +
	' style="border-bottom: 1px solid #CCC; padding: 5px;"><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="up"><img src="/admin/img/filter/sort-up.png" width="15"> 升序</span><br><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="down"><img src="/admin/img/filter/sort-down.png" width="15"> 降序</span><input type="hidden" name="sort" id="filter-sort" value=""></div><div style="border-bottom: 1px solid #CCC; padding: 5px;"><img src="/admin/img/filter/filter.png" width="15"> 筛选<br>内容搜索<input class="form-control" name="content" value=""></div><div style="padding: 5px; text-align: center;"><input type="button" class="save-btn btn btn-default" data-dismiss="modal"  value="取消" /><input type="button" class="save-btn btn btn-default filter-submit" id="filter-submit" value="确定" /></div></form></div>';
var filter_html_date    = '<div style="margin: 20px;"><form method="GET" action=""><input type="hidden" name="field" id="filter-field"><div' +
	' style="border-bottom: 1px solid #CCC; padding: 5px;"><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="up"><img' +
	' src="/admin/img/filter/sort-up.png" width="15"> 升序</span><br><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="down"><img src="/admin/img/filter/sort-down.png" width="15"> 降序</span><input type="hidden" name="sort" id="filter-sort" value=""></div><div style="border-bottom: 1px solid #CCC; padding: 5px;"><img src="/admin/img/filter/filter.png" width="15"> 筛选<br><input type="checkbox" name="isnull"> 空<br>开始时间<input class="form-control" name="time_start" onclick="filter.widget_date()" value=""><br>结束时间<input class="form-control" name="time_end" onclick="filter.widget_date()" value=""></div><div style="padding: 5px; text-align: center;"><input type="button" class="save-btn btn btn-default" data-dismiss="modal"  value="取消" /><input type="button" class="save-btn btn btn-default filter-submit" id="filter-submit" value="确定" /></div></form></div>';
var special_filter_html_date  = '<div style="margin: 20px;"><form method="GET" action=""><input type="hidden" name="field" id="filter-field"><div ' +
	'style="border-bottom: 1px solid #CCC; padding: 5px;"><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="up"><img' +
	' src="/admin/img/filter/sort-up.png" width="15"> 升序</span><br><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="down"><img src="/admin/img/filter/sort-down.png" width="15"> 降序</span><input type="hidden" name="sort" id="filter-sort" value=""></div><div style="border-bottom: 1px solid #CCC; padding: 5px;"><img src="/admin/img/filter/filter.png" width="15"> 筛选<br><input type="checkbox" name="isnull"> 空<br>开始时间<input class="form-control" name="time_start" onclick="filter.special_widget_date()" value=""><br>结束时间<input class="form-control" name="time_end" onclick="filter.special_widget_date()" value=""></div><div style="padding: 5px; text-align: center;"><input type="button" class="save-btn btn btn-default" data-dismiss="modal"  value="取消" /><input type="button" class="save-btn btn btn-default filter-submit" id="filter-submit" value="确定" /></div></form></div>';
var filter_html_money   = '<div style="margin: 20px;"><form method="GET" action=""><input type="hidden" name="field" id="filter-field"><div' +
	' style="border-bottom: 1px solid #CCC; padding: 5px;"><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="up"><img src="/admin/img/filter/sort-up.png" width="15"> 升序</span><br><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="down"><img src="/admin/img/filter/sort-down.png" width="15"> 降序</span><input type="hidden" name="sort" id="filter-sort" value=""></div><div style="border-bottom: 1px solid #CCC; padding: 5px;"><img src="/admin/img/filter/filter.png" width="15"> 筛选<br>从<input class="form-control" name="money_start" value=""><br>到<input class="form-control" name="money_end" value=""></div><div style="padding: 5px; text-align: center;"><input type="button" class="save-btn btn btn-default" data-dismiss="modal"  value="取消" /><input class="save-btn btn btn-default filter-submit" type="button" id="filter-submit" value="确定" /></div></form></div>';
var filter_html_option  = '<div style="margin: 20px;"><form method="GET" action=""><input type="hidden" name="field" id="filter-field"><div' +
	' style="border-bottom: 1px solid #CCC; padding: 5px;"><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="up"><img src="/admin/img/filter/sort-up.png" width="15"> 升序</span><br><span style="color: #888888; cursor: pointer;" class="filter-sort-ctrl" sort="down"><img src="/admin/img/filter/sort-down.png" width="15"> 降序</span><input type="hidden" name="sort" id="filter-sort" value=""></div><div style="border-bottom: 1px solid #CCC; padding: 5px;"><img src="/admin/img/filter/filter.png" width="15"> 筛选<div style="width: 100%; text-align: right;"><a href="javascript:void(0)" class="filter-option-ctrl" ctrl="all">全选</a>&nbsp;<a href="javascript:void(0)" class="filter-option-ctrl" ctrl="none">取消</a></div><div id="filter-option-area"></div></div><div style="padding: 5px; text-align: center;"><input type="button" class="save-btn btn btn-default filter-submit" data-dismiss="modal"  value="取消" /><input type="button" class="save-btn btn btn-default" id="filter-submit" value="确定" /></div></form></div>';

var filter = {

	options: {
		bussNo: {
			'num': 'bussNo',
			'field': '业务编号',
			'html': filter_html_content,
			'options': {}
		},
		custName: {
			'num': 'custName',
			'field': '借款人姓名',
			'html': filter_html_content,
			'options': {}
		},
		bussArea:{
			'num': 'bussArea',
			'field': '所在地区',
			'html': filter_html_option,
			'options': {'110100':'北京', '310100':'上海'}
		},
		notarizeTime:{
			'num': 'notarizeTime',
			'field': '公证登记完成时间',
			'html': filter_html_date,
			'options': {}
		},
		preNotarizeTime:{
			'num': 'preNotarizeTime',
			'field': '预计取全委时间',
			'html': filter_html_date,
			'options': {}
		},
		giveCond:{
			'num': 'giveCond',
			'field': '放款条件',
			'html': filter_html_option,
			'options': {'0':'见单', '1':'见证'}
		},
		assignDetentionTime:{
			'num': 'assignDetentionTime',
			'field': '分配权证时间',
			'html': filter_html_date,
			'options': {}
		},
		preGetOtherTime:{
			'num': 'preGetOtherTime',
			'field': '预计取他证时间',
			'html': special_filter_html_date,
			'options': {}
		},
		detentionTime:{
			'num': 'detentionTime',
			'field': '权证登记完成时间',
			'html': filter_html_date,
			'options': {}
		},
		payServicefeeTime:{
			'num': 'payServicefeeTime',
			'field': '缴纳服务费时间',
			'html': filter_html_date,
			'options': {}
		},
		moneyPlanTime:{
			'num': 'moneyPlanTime',
			'field': '资金计划时间',
			'html': filter_html_date,
			'options': {}
		},
		giveAffirm:{
			'num': 'giveAffirm',
			'field': '是否放款确认',
			'html': filter_html_option,
			'options': {'1':'是', '0':'否'}
		},
		grantBegDate:{
			'num': 'grantBegDate',
			'field': '放款确认时间',
			'html': filter_html_date,
			'options': {}
		},
		productOrg: {
			'num': 'productOrg',
			'field': '信托公司',
			'html': filter_html_content,
			'options': {}
		},
		productName: {
			'num': 'productName',
			'field': '信托计划',
			'html': filter_html_content,
			'options': {}
		},
		taskStatus:{
			'num': 'taskStatus',
			'field': '状态',
			'html': filter_html_option,
			'options': {'00':'待匹配', '01':'进行中','02':'已提交'}
		}
		
	},

	win_open: function(fieldnum){
		if (typeof this.options[fieldnum] == 'undefined') {
			alert('field error');return;
		}

		cms.dialog({
			titleText:'筛选条件',
			width:'450px',
			content:filter.options[fieldnum].html,
			disFooter:true
		});
		

		$('#filter-field').val(this.options[fieldnum].num);

		// 排序操作
		$('.filter-sort-ctrl').click(function(){
			$('.filter-sort-ctrl').css('color', '#888888');
			if ($('#filter-sort').val() != $(this).attr('sort')){
				$('#filter-sort').val($(this).attr('sort'));
				$(this).css('color', '#000');
			}else{
				$('#filter-sort').val('');
				$(this).css('color', '#888888');
			}
		});
		
		// 添加可选项
		var options = this.options[fieldnum].options;
		for (k in options){
			$('#filter-option-area').append('<input type="checkbox" class="filter-options" name="content" value="'+k+'"> '+options[k]+' <br>');
		}
		$('.filter-option-ctrl').click(function(){
			if ($(this).attr('ctrl') == 'all'){
				$('.filter-options').prop('checked', true);
			}else{
				$('.filter-options').prop('checked', false);
			}
		});

		// 提交操作
		var timeCommit = 0;
		var timeAlert = false;
		$(document).delegate('.filter-submit','click',function(){
			// var self = $(this);
			// if(!self.is(':visible')){
			// 	return;
			// }
			// console.log(self.is(':visible'))
			var data = {}, _name = '';
			$(this).parent().parent().find(':input').each(function(){
				_name = $(this).attr('name');
				if ($(this).attr('type') == 'checkbox'){
					if($(this).prop('checked')){
						if (typeof data[_name] == 'undefined'){
							data[_name] = $(this).val();
						}else{
							data[_name] += ',' + $(this).val();
						}
					}
				}else{
					data[_name] = $(this).val();
				}
			});

			//验证开始时间早于结束时间
			var parent = $(this).parent().parent();
			var time_start = $('[name="time_start"]');
			var time_end = $('[name="time_end"]');
			if(time_start.length && time_end.length){
				var start=new Date(time_start.val().replace("-", "/").replace("-", "/"));
				var end=new Date(time_end.val().replace("-", "/").replace("-", "/"));
				if(end<start && timeCommit<1){
					timeCommit++;
					if(!timeAlert){
						alert("起始时间应小于截止时间");
						timeAlert = true;
					}
					return false;
				}else if(end<start && timeCommit>=1){
					timeCommit = 0;
					timeAlert = true;
					return false;
				}
			}




			var field = {}, _k, len = 0;
			for (_k in data){
				if (_k == 'undefined' || data[_k].length == 0) continue;
				field[_k] = data[_k];
			}
			var str = JSON.stringify(field)
			
			//处理重复的字段信息
			var searchs = decodeURIComponent(document.location.search);
			searchs = searchs.replace('?filter=', '');
			var fileds = JSON.parse('[' + searchs + ']');

			var query = [];
			var cached = {};
			cached[field.field] = true;
			for(var i in fileds){
				var tmp = fileds[i];
				if(cached[tmp.field]){
					continue;
				}
				query.push(encodeURIComponent(JSON.stringify(tmp)));
			}
			
			query.push(encodeURIComponent(JSON.stringify(field)));
			
			query = query.join('%2C');
			
			query = '?filter=' + query;
			if(query == searchs){
				document.location.reload();
			}
			document.location.href = query;
			
		});
	},

	widget_date: function(){
		WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})
	},

	special_widget_date: function(){
		laydate({format: 'YYYY-MM-DD'})
		// WdatePicker({dateFmt: 'yyyy-MM-dd'})
	},

	/*
	<div id="filter-conditions"></div>
	<div style="clear: both;"></div>
	*/
	conditions_init: function(){
		var searchs = decodeURIComponent(document.location.search);
		if (searchs.length < 15 || searchs.indexOf('?filter={') != 0) return;
		searchs = searchs.replace('?filter=', '');
		var fileds = JSON.parse('[' + searchs + ']');
		console.log(fileds);

		var _k = 0, field = content = sort = time_start = time_end = '';
		for (_k in fileds) {
			field = fileds[_k].field;
			var content = fileds[_k].content;
			var transfer = false;
			var contentTemp;
			if(field.indexOf("bussArea")>-1){
				transfer = true;
				if(content.indexOf("110100")>-1 && content.indexOf("310100")>-1){
					contentTemp = content.replace("110100","北京").replace("310100","上海");
				}else if(content.indexOf("110100")>-1){
					contentTemp = content.replace("110100","北京")
				}else if(content.indexOf("310100")>-1){
					contentTemp = content.replace("310100","上海");
				}
			}

			if(field.indexOf("giveCond")>-1){
				transfer = true;
				if(content.indexOf("0")>-1 && content.indexOf("1")>-1){
					contentTemp = content.replace("0","见单").replace("1","见证");
				}else if(content.indexOf("0")>-1){
					contentTemp = content.replace("0","见单")
				}else if(content.indexOf("1")>-1){
					contentTemp = content.replace("1","见证");
				}
			}

			if(field.indexOf("giveAffirm")>-1){
				transfer = true;
				if(content.indexOf("1")>-1 && content.indexOf("0")>-1){
					contentTemp = content.replace("1","是").replace("0","否");
				}else if(content.indexOf("1")>-1){
					contentTemp = content.replace("1","是")
				}else if(content.indexOf("0")>-1){
					contentTemp = content.replace("0","否");
				}
			}

			if(field.indexOf("taskStatus")>-1){
				transfer = true;
				if(content.indexOf("00")>-1 && content.indexOf("01")>-1 && content.indexOf("02")>-1){
					contentTemp = content.replace("00","待匹配").replace("01","进行中").replace("02","已提交");
				}else if(content.indexOf("00")>-1){
					if(content.indexOf("01")>-1){
						contentTemp = content.replace("00","待匹配").replace("01","进行中");
					}else if(content.indexOf("02")>-1){
						contentTemp = content.replace("00","待匹配").replace("02","已提交");
					}else{
						contentTemp = content.replace("00","待匹配");
					}
				}else if(content.indexOf("01")>-1){
					if(content.indexOf("02")>-1){
						contentTemp = content.replace("01","进行中").replace("02","已提交");
					}else{
						contentTemp = content.replace("01","进行中");
					}
				}else if(content.indexOf("02")>-1){
					contentTemp = content.replace("02","已提交");
				}
			}



			time_start = fileds[_k].time_start;
			time_end = fileds[_k].time_end;

			sort = typeof fileds[_k].sort == 'undefined' ? '' : (fileds[_k].sort == 'up' ? '↑' : '↓');
			if(transfer){
				$('#filter-conditions').append('<a class="crumb-select-item" href="' + this.conditions_build_query(fileds, field) + '" rel="nofollow" title="' + this.conditions_val_conv(field, contentTemp, time_start, time_end) + '"><b>' + this.conditions_field_conv(field) + '：</b><em>' + this.conditions_val_conv(field, contentTemp, time_start, time_end) + '</em><i>' + sort + '</i></a>');
			}else{
				$('#filter-conditions').append('<a class="crumb-select-item" href="' + this.conditions_build_query(fileds, field) + '" rel="nofollow" title="' + this.conditions_val_conv(field, content, time_start, time_end) + '"><b>' + this.conditions_field_conv(field) + '：</b><em>' + this.conditions_val_conv(field, content, time_start, time_end) + '</em><i>' + sort + '</i></a>');
			}
		}
	},
	conditions_field_conv: function(field) {
		if (typeof filter.options[field] == 'undefined'){
			return '未知';
		}
		return filter.options[field].field;
	},
	conditions_val_conv: function(field, content, time_start, time_end) {
		if (typeof filter.options[field] == 'undefined'){
			return '未知';
		}
		var options = filter.options[field].options;

		var _k = '', len = 0;
		for (_k in options){len ++; break;}
		if (len == 0){
			if (typeof content != 'undefined'){
				return content;
			}
			if(typeof time_start == 'undefined' && typeof time_end != 'undefined'){
				return '空' + ' - ' + time_end;
			}
			if(typeof time_start != 'undefined' && typeof time_end == 'undefined'){
				return time_start + ' - ' + '空';
			}
			if(typeof time_start != 'undefined' && typeof time_end != 'undefined'){
				return time_start + ' - ' + time_end;
			}
			return '';
		}

		var conts = [];
		var vals = content.split('|');
		for (_k in vals){
			conts[conts.length] = typeof options[vals[_k]] == 'undefined' ? vals[_k] : options[vals[_k]];
		}
		return conts.join(',');
	},
	conditions_build_query: function(fileds, filter) {
		var _k = 0, vals = [];
		for (_k in fileds) {
			if (fileds[_k].field == filter) continue;
			vals[vals.length] = fileds[_k];
		}
		var str = JSON.stringify(vals);
		return '?filter=' + encodeURIComponent(str.substr(1, (str.length-2)));
	},
	substr: function(str, len){
		return str.substr(0, len);
	}
}
$(function(){
	$('[plug-filter]').each(function(){
		var self = $(this);
		self.append('<i class="fa fa-search"></i>');
		self.click(function(){
			var self = $(this);
			var name = self.attr('plug-filter');
			if(name){
				filter.win_open(name);
			}
			return false;
		});
		
		
	})
})
