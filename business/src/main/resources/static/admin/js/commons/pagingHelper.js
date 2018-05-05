$(function() {
	$('#pageSize').change(function(){
        $("[name='pageNum']").val();
        $("[name='pageSize']").val($(this).val());
		_paging();
	})
	if($("#searchForm").size()>0){
    	var $pageNum = $("<input/>").attr("type","hidden").attr("name","pageNum").attr("value",$("#pageNum").val());
        var $pages = $("<input/>").attr("type","hidden").attr("name","pages").attr("value",$("#pages").val());
        if($("#pageSize").val()==undefined  || $("#pageSize").val()=='') {
            var $pageSize = $("<input/>").attr("type","hidden").attr("name","pageSize").attr("value",10);
		}else{
            var $pageSize = $("<input/>").attr("type","hidden").attr("name","pageSize").attr("value",$("#pageSize").val());
		}

        $("#searchForm").append($pageNum).append($pages).append($pageSize);
	}
	var options = {
			bootstrapMajorVersion : 3,
	        numberOfPages         : 10,//影响末页显示
			currentPage           : parseIntById('pageNum'),
        	totalPages            : parseIntById('pages'),
	        useBootstrapTooltip   : true,
	        itemTexts             : function (type, page, current) {
	            switch (type) {
		            case "first":
		                return "首页";
		            case "prev":
		                return "上一页";
		            case "next":
		                return "下一页";
		            case "last":
		                return "末页";
		            case "page":
		                return page;
	            }
	        },
	        onPageClicked : function(event, originalEvent, type, page) {
                $("[name='pageNum']").val(page);
	        	_paging()
	        }
		}
	$('#paginator').bootstrapPaginator(options);
	var go = $('#goPage');
	var gonum = $('#goNumPage');

	gonum.on('input propertychange',function(){
		var self = $(this);
		var val = self.val();
		val = val.replace(/\D/g,'');
		self.val(val);
	})

	go.click(function(){
		var num = gonum.val();
		if(!num){
			return;
		}
		var pages = parseIntById('pages');
		if( pages < num){
			num = pages;
		}
		$("[name='pageNum']").val(num);
		_paging();
	})
	
})

function _paging(id) {
	console.log(1111)
	if(!_hasText(id))
		id = 'searchForm';
		var form = $(_preId(id));
		if(location.href.indexOf('?')!=-1){
			form.attr('action',form.attr('action').split('?')[0]+'?'+location.href.split('?')[1]);
		}
	$(_preId(id)).submit();
}

function _parseIntById(id) {
	var text = $(_preId(id)).val();
        console.log("分页参数  id:" + id + "   data:" + _hasText(text) ? parseInt(text) : 1);
	return _hasText(text) ? parseInt(text) : 1;
}

function _preId(id) {
	return id.indexOf('#') == -1 ? '#' + id : id;
}

function _hasText(text) {
	var result = true;
	if(typeof text == "undefined" || text == null || $.trim(text) == "") {
		result = false;
	}
	return result;
}
