/*
 *
 * Copyright (c) 2017 All Rights Reserved.
 */
		//用户进行登录时使用
		$('#login').click(function () {
			var username = $("#username").val();
			var password = $("#password").val();
			if(username == null || username == undefined || username.length==0){
				alert("请填写用户名");
				return false;
			}
			if(password == null || password == undefined || password.length == 0){
				alert("请填写密码");
				return false;
			}
			var data = {};
			data.loginName = username;
			data.password = password;

			$.ajax({
				url         : '/businessUserLogin/login',
				contentType : 'application/x-www-form-urlencoded',
				type        : 'post',
				data        :  data,
				success : function (result) {
					if(result.success){
						window.location.href = result.data;
					}else{
						alert(result.data);
						window.location.href = '/';
					}
				}
			})
		});
