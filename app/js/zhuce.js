require(["config"],function(){
	require(["jquery","header","footer","fhelp","zhuceyz","url","cookie","md5"],function($,header,footer,fhelp,zhuceyz,url){
		header.init();
		footer.init();
		fhelp.init();
		zhuceyz.init({
			id:$("#zhuceyz")})

		$(function(){
			var zhuceBtn=$("#zhuce");
			var newyonghu=$("#zhanghao");
			var newemail=$("#email");
			var newpassword=$("#mima");
			zhuceBtn.on("click",function(){
					var newpasswordvalue=hex_md5(newpassword.val());
					var newemailvalue=newemail.val();
					var newyonghuvalue=newyonghu.val();
				//	console.log(newyonghuvalue,newemailvalue,newpasswordvalue);
					//console.log(newpasswordvalue,newemailvalue,newyonghuvalue);
					$.get(url.url+"zhuce.php",{"newyonghu":newyonghuvalue,"newemail":newemailvalue,"newpassword":newpasswordvalue},function(data){
							console.log(data);
							if(data.code){
								alert("注册成功！");
								window.location.href="/html/login.html";
							}
							else{
								console.log(data.code);
								alert("注册失败！请重试");
							}
				},"json")

					/*$.ajax({
						url:url.url+"zhuce.php",
						data:{"newyonghu":newyonghuvalue,"newemail":newemailvalue,"newpassword":newpasswordvalue},
						success:function(data){
							if(data.code==1){
								alert("注册成功！");
							}
							else{
								alert("注册失败！请重试");
							}
						},
						dataType:"json"
					})*/
			})
		})
	})
})
