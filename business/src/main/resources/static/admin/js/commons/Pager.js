/**
 * 
 */
function Pager(){

	this.event_Pager=event_Pager;
	this.getPagerData=getPagerData;
	this.setPagerHtml=setPagerHtml;
	this.resetPagination=resetPagination;
	this.pageModelAdapter=pageModelAdapter;
	this.pagingModelAdapter=pagingModelAdapter;
	
	
	//分页栏容器
	function selectPagerContainer(){return $("#pagerContainer");}
	//分页条
	function selectPagerH(){return $("#pagebar");}
	//可点击的分页按钮
	function getClickablePagerb(){return $(".clickablePager");}
	
	
    /**====================================================Event_ElementH =========================================================
     */
	
	
	
    function event_Pager(pageSize,callbackFunction){
    	
    	//初始化分页
    	var initialisePager=new Object;
    	initialisePager.totalPage=1;
    	initialisePager.pageSize=pageSize;
    	initialisePager.currentPage=1;
    	setPagerHtml(initialisePager);
    	
    	
        //分页
    	//getClickablePagerb().live("click",function(){gotopage($(this).attr("count"),callbackFunction);});
    	//getClickablePagerb().on("click",function(){gotopage($(this).attr("count"),callbackFunction);});
    	$(document).on("click",".clickablePager",function(){gotopage($(this).attr("count"),callbackFunction);});
    	
    	
    	//去指定页
    	//$("#currentpage").on("change",function(){
    	$(document).on("change","#currentPage",function(){
    		var ccpage=$("input[name='currentPage']").val();
    		gotopage(ccpage,callbackFunction);
    		});
    	
    	
    	//设定每页大小
        //$("#pagersize").on("change",function(){
        $(document).on("change","#totalPage",function(){
	        	var initialisePager=new Object;
	        	initialisePager.totalPage=1;
	        	initialisePager.pageSize=$("input[name='numPerPage']").val();
	        	initialisePager.currentPage=1;
	        	setPagerHtml(initialisePager);
	        	callbackFunction();
        	});
    	
        
   } 
    
	/**====================================================Operation_Event============================================================
	 */
	
    
    
    

  	
	/**
	 * 数据模型适配器  cms 平台paging模型适配
	 * param paging{totalRecord,pageSize,pageIndex,result}
	 * return :result{page,list}
	 */
  	function pageModelAdapter(paging){
  		
  		var page=new Object;
  		page.totalSize=paging.totalRecord;
  		page.pageSize=paging.pageSize;
  		page.currentPage=paging.pageIndex;
  		page.totalPage=paging.totalPage;
  		
  		
  		var result=new Object;
  		result.page=page;
  		result.list=paging.result;
  		
  		return result;
  	}
	
  	function pagingModelAdapter(page){
  		var paging =new Object;
  		paging.totalRecord=page.totalSize;
  		paging.pageSize=page.pageSize;
  		paging.pageIndex=page.currentPage;

  		return paging;
  	}
    
    
    
	/**
	 * 重置分页
	 */
    function resetPagination(){
    	var initialisePager=getPagerData();
    	initialisePager.totalPage=1;
    	initialisePager.currentPage=1;
    	setPagerHtml(initialisePager);
    }
	
	/**
	 * 选择页码
	 */
	function gotopage(target,callbackFunction){
		var pagerData=getPagerData();
		pagerData.currentPage=target;
		setPagerHtml(pagerData);
		callbackFunction(pagerData);
	}
	
	/**
	 * 获取分页数据
	 */
	function getPagerData(){
		var pagerH=selectPagerH();
		return jsUtilExtend.getObjFromHtml(pagerH);
	}
	
	/**
	 * 展示分页
	 * pagerData{totalSize,totalPage,pageSize,currentPage}
	 */
	function setPagerHtml(pagerData){
		var totalSize=0;
		if(pagerData.hasOwnProperty("totalSize")){
			totalSize=pagerData.totalSize;
		}
		
		var totalpage=pagerData.totalPage;
		var pagesize=pagerData.pageSize;
		var cpage=pagerData.currentPage;
		
		var outstr = ""; 
		
		var count;
	    if(totalpage<=10){        //总页数小于十页 
	        for (count=1;count<=totalpage;count++) 
		        {    if(count!=cpage) 
			            { 
			                outstr = outstr + "<a href='javascript:void(0)'  count='"+count+"' class='clickablePager' >"+count+"</a>"; 
			            }else{ 
			                outstr = outstr + "<span class='current' >"+count+"</span>"; 
			            } 
		        } 
	    } 
	    
	    
	    if(totalpage>10){        //总页数大于十页 
	        if(parseInt((cpage-1)/10) == 0) 
	        {             
	            for (count=1;count<=10;count++) 
	            {    if(count!=cpage) 
	                { 
	                    outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='clickablePager'>"+count+"</a>"; 
	                }else{ 
	                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
	                } 
	            } 
	            outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='clickablePager'> >> </a>"; 
	        } 
	        else if(parseInt((cpage-1)/10) == parseInt(totalpage/10)) 
	        {     
	            outstr = outstr + "<a href='javascript:void(0)' count='"+(parseInt((cpage-1)/10)*10)+"' class='clickablePager' > << </a>"; 
	            for (count=parseInt(totalpage/10)*10+1;count<=totalpage;count++) 
	            {    if(count!=cpage) 
	                { 
	                    outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='clickablePager'>"+count+"</a>"; 
	                }else{ 
	                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
	                } 
	            } 
	        } 
	        else 
	        {     
	            outstr = outstr + "<a href='javascript:void(0)' count='"+(parseInt((cpage-1)/10)*10)+"' class='clickablePager'> << </a>"; 
	            for (count=parseInt((cpage-1)/10)*10+1;count<=parseInt((cpage-1)/10)*10+10;count++) 
	            {         
	                if(count!=cpage) 
	                { 
	                    outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='clickablePager'>"+count+"</a>"; 
	                }else{ 
	                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
	                } 
	            } 
	            outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='clickablePager'> >> </a>"; 
	        } 
	    }     
	    
	    var pagerHtmlStr="<div id='pagebar' obj='"+JSON.stringify(pagerData)+"'>" +
	    					outstr + 
	    					"<span> </span>" +
	    					"<span>去第<input id='currentpage' name='currentpage' value='"+cpage+"' style='width:30px;text-align:right'/>/"+totalpage+"页</span>" + 
	    					"<span> </span>" +
	    					"<span>每页<input id='numPerPage' name='numPerPage' value='"+pagesize+"' style='width:30px;text-align:right'/>条 &nbsp; 共"+totalSize+"条</span>" +
	    				"</div>";
	    
	    //return pagerHtmlStr;
	    selectPagerContainer().html(pagerHtmlStr);
	}
	
}