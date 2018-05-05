/*
 *
 *
 */

$('#exportBankStatement').click(function(){
	var bbussNo = $("#bbussNo").val();
	var bcustName = $("#bcustName").val();
	StandardPost('exporBankStatementData',{bbussNo:bbussNo,bcustName:bcustName});
});


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
	loca
}

