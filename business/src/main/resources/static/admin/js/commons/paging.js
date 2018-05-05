/**
 * @yongfang.zhang
 * $pageObj 容器
 * $spanObj 事件
 * path 路径
 * pageSize 页大小
 * paramArr 参数数组
 */
function pageCount($pageObj,$spanObj,path,pageSize,paramArr){
	var spanId = $spanObj.attr('id');
	var currentPage = parseInt($pageObj.attr("currentPage"));
	var totalNumber = parseInt($pageObj.attr("totalNumber"));
	
	var result;
	if(spanId == "headPage"){
		currentPage = headPage();
	}else if(spanId == "lastPage"){
		currentPage = lastPage(currentPage);
	}else if(spanId == "nestPage"){
		currentPage = nextPage(currentPage,totalNumber,pageSize);
	}else if(spanId == "tailPage"){
		currentPage = tailPage(totalNumber,pageSize);
	}else{
		currentPage = headPage();
	}
	
	$.ajax({
        url: path,
        async: false,
        type: "GET",
        data: {currentPage:currentPage,pageSize:pageSize,params:paramArr.join(',')},
        success: function (data){
        	//初始化数据
        	var totalNumberRes = data.content.totalNumber;
        	var remainNumber = totalNumberRes%pageSize;
        	var totalPageNumber = (totalNumberRes-remainNumber)/pageSize;
        	if(remainNumber > 0)
        		totalPageNumber++;
        	$('#showVal').empty();
        	$('#showVal').html("["+currentPage+"/"+totalPageNumber+"] ["+totalNumberRes+"]");
        	$pageObj.attr("currentPage",currentPage);
        	$pageObj.attr("totalNumber",totalNumberRes);
            result = data;
        }
    });
	
	return result;
}

function headPage(){
	return 1;
}

function lastPage(currentPage){
	if(currentPage>1)
		currentPage--;
	return currentPage;
}

function nextPage(currentPage,totalNumber,pageSize){
	var remainNumber = totalNumber%pageSize;
	var totalPageNumber = (totalNumber-remainNumber)/pageSize;
	if(remainNumber > 0)
		totalPageNumber++;
	return currentPage<totalPageNumber?currentPage+1:currentPage;
}

function tailPage(totalNumber,pageSize){
	var remainNumber = totalNumber%pageSize;
	var totalPageNumber = (totalNumber-remainNumber)/pageSize;
	return remainNumber>0?totalPageNumber+1:totalPageNumber;
}