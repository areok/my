//加载图片
$(function(){
	jQuery.extend({
		loadingShow:function(){
			var $d = $('loadingDiv');
			if($d.length == 0)
			{
				$('<div id="loadingDiv" style="background:#000 url(../img/loading-cms.gif) no-repeat center center; opacity:0.6; width:100%; height:100%; position:absolute; left:0; top:0; z-index:3000; display:none;"></div>').appendTo('body');
			}

			$('#loadingDiv').show();
		},
		loadingHide:function(){
			$('#loadingDiv').hide();
		}
	});
});