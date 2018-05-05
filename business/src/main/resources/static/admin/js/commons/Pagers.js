/**
 * 一个页面里可多个分页。
 */
function Pagers(pagerContainerId){
	//===当前分页栏相关标识=====
	//分页栏容器ID

	var pagerContainerId=pagerContainerId;
	var pagebarId=pagerContainerId+"pagebar";
	var currentpageId=pagerContainerId+"currentpage";
	var pagersizeId=pagerContainerId+"pagersize";
	var clickablePagerClass=pagerContainerId+"clickablePager";
	
	
	
	//函数
	this.event_Pager=event_Pager;
	this.off_Pager=off_Pager;
	this.getPagerData=getPagerData;
	this.setPagerHtml=setPagerHtml;
	this.resetPagination=resetPagination;
	
	
	
	//分页条
	function selectPagerH(){return $("#"+pagebarId);}
	
	
    /**====================================================Event_ElementH =========================================================
     */
	
	
	
    function event_Pager(pageSize,callbackFunction,callbackFunctionParams){
    	
    	//初始化分页
    	var initialisePager=new Object;
    	initialisePager.totalPage=1;
    	initialisePager.pageSize=pageSize;
    	initialisePager.currentPage=1;
    	setPagerHtml(initialisePager);
    	
    	var callbackFunctionData={callbackFunction:callbackFunction,callbackFunctionParams:callbackFunctionParams};
    	
        //分页
    	$(document).on("click","."+clickablePagerClass,callbackFunctionData,quickToPage);
    	
    	//去指定页
    	$(document).on("change","#"+currentpageId,callbackFunctionData,toWritePage);
    	
    	
    	//设定每页大小
        $(document).on("change","#"+pagersizeId,callbackFunctionData,channgePageSise);
   } 
    
    
    function off_Pager(){
        //分页
    	$(document).off("click","."+clickablePagerClass,quickToPage);
    	
    	
    	//去指定页
    	$(document).off("change","#"+currentpageId,toWritePage);
    	
    	
    	//设定每页大小
        $(document).off("change","#"+pagersizeId,channgePageSise);
    	
    }
    
    
    
	/**====================================================Operation_Event============================================================
	 */
	//channgePageSise
    function channgePageSise(event){
    	var initialisePager=new Object;
    	initialisePager.totalPage=1;
    	initialisePager.pageSize=$("#"+pagersizeId).val();
    	initialisePager.currentPage=1;
    	setPagerHtml(initialisePager);
    	event.data.callbackFunction(event.data.callbackFunctionParams);
	}
    
    
    //toWritePage
    function toWritePage(event){
    	var target=$("#"+currentpageId).val();
    	gotopage(target,event.data.callbackFunction,event.data.callbackFunctionParams);
    }
    
    
    //quickToPage
    function quickToPage(event){
    	var target=$(event.target).attr("count");
    	gotopage(target,event.data.callbackFunction,event.data.callbackFunctionParams);
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
	function gotopage(target,callbackFunction,callbackFunctionParams){
		var pagerData=getPagerData();
		pagerData.currentPage=target;
		setPagerHtml(pagerData);
		callbackFunction(callbackFunctionParams);
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
			                outstr = outstr + "<a href='javascript:void(0)'  count='"+count+"' class='"+clickablePagerClass+"' >"+count+"</a>"; 
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
	                    outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='"+clickablePagerClass+"'>"+count+"</a>"; 
	                }else{ 
	                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
	                } 
	            } 
	            outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='"+clickablePagerClass+"'> >> </a>"; 
	        } 
	        else if(parseInt((cpage-1)/10) == parseInt(totalpage/10)) 
	        {     
	            outstr = outstr + "<a href='javascript:void(0)' count='"+(parseInt((cpage-1)/10)*10)+"' class='"+clickablePagerClass+"' > << </a>"; 
	            for (count=parseInt(totalpage/10)*10+1;count<=totalpage;count++) 
	            {    if(count!=cpage) 
	                { 
	                    outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='"+clickablePagerClass+"'>"+count+"</a>"; 
	                }else{ 
	                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
	                } 
	            } 
	        } 
	        else 
	        {     
	            outstr = outstr + "<a href='javascript:void(0)' count='"+(parseInt((cpage-1)/10)*10)+"' class='"+clickablePagerClass+"'> << </a>"; 
	            for (count=parseInt((cpage-1)/10)*10+1;count<=parseInt((cpage-1)/10)*10+10;count++) 
	            {         
	                if(count!=cpage) 
	                { 
	                    outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='"+clickablePagerClass+"'>"+count+"</a>"; 
	                }else{ 
	                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
	                } 
	            } 
	            outstr = outstr + "<a href='javascript:void(0)' count='"+count+"' class='"+clickablePagerClass+"'> >> </a>"; 
	        } 
	    }     
	    
	    var pagerHtmlStr="<div id='"+pagebarId+"' obj='"+JSON.stringify(pagerData)+"'>" +
	    					outstr + 
	    					"<span> </span>" +
	    					"<span>去第<input id='"+currentpageId+"' name='"+currentpageId+"' value='"+cpage+"' style='width:30px;text-align:right'/>/"+totalpage+"页</span>" + 
	    					"<span> </span>" +
	    					"<span>每页<input id='"+pagersizeId+"' name='"+pagersizeId+"' value='"+pagesize+"' style='width:30px;text-align:right'/>条 &nbsp; 共"+totalSize+"条</span>" +
	    				"</div>";
	    
	    //return pagerHtmlStr;
	    $("#"+pagerContainerId).html(pagerHtmlStr);
	}
	
}