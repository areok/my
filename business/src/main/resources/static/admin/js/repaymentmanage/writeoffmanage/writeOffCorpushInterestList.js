$(function(){ //等界面加载完成后，执行下面内容
	(function (){ // 闭包，防止下面定义的变量泄露到整个页面
		var table = $('#corpusInterestTable');
        var reducebuttons = table.find('button').filter(function(index){return $(this).html()=="减免"});
        var correctbuttons = table.find('button').filter(function(index){return $(this).html()=="冲正"});
        // var writeoffbuttons = table.find('button').filter(function(index){return $(this).html()=="核销"});
		reducebuttons.on('click',function(){
        	var button = $(this);
        	cms.dialog({
					titleText : "减免",
					width : "800px",
					disFooter : true,
					data:getBussNoPeriods(button),
					saveDom : '#modalsubmit',
					cancelDom : '#cancel',
					url : "/writeoffmanage/writeoffcorpusinterest/reducePage",
					save:function(e,dialog){
						var modaltable = dialog.modal.find('#modalTable');
						var data = modaltable.bootstrapTable('getData');
						if(!modaltable.attr('data-reduce')){
							cms.messager.alert('未计算结果，无法提交!');
							return false;
						}
						$.ajax({
					 		url         :  button.attr('data-href'),
					 		contentType : 'application/x-www-form-urlencoded',
					 		type        : 'post',
					 		data        :  getBussNoPeriods(button)+'&reduce='+modaltable.attr('data-reduce'),
					 		success : function (result) {
								if(result && result.resultCode && result.resultCode=="0000"){
									if(result.resultMsg){
										cms.messager.alert(result.resultMsg);
									}
									return;
								}
								if(result && result.resultMsg){
									cms.messager.alert(result.resultMsg);
									return;
								}
					 		}
					 	})
					}
				});
        })
        
        function getBussNoPeriods(button){
        	return 'bussNo='+button.attr('data-buss-no')+'&periods='+button.attr('data-periods');
        }
        
        
		correctbuttons.on('click',function(){
        	var button = $(this);
        	
        	cms.messager.prompt('冲正原因',function(e,remark){
        		if(!remark){
					cms.message.alert('请填写冲正原因!');
					return false;
				}
				$.ajax({
			 		url         :  button.attr('data-href'),
			 		contentType : 'application/x-www-form-urlencoded',
			 		type        : 'post',
			 		data        :  getBussNoPeriods(button)+'&remark='+remark,
			 		success : function (result) {
						if(result && result.resultCode && result.resultCode=="0000"){
							if(result.resultMsg){
								cms.messager.alert(result.resultMsg);
							}
							return;
						}
						if(result && result.resultMsg){
							cms.messager.alert(result.resultMsg);
							return;
						}
			 		}	
			 	});
				return true;
        	});
        });
        // writeoffbuttons.on('click',function(){
			// var button = $(this);
        // 	location.href= button.attr('data-href')+'?'+getBussNoPeriods(button);
        // });
       
	}())
})
