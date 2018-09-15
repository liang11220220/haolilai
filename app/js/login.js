require(["config"],function(){
	require(["jquery","header","footer","fhelp","url","cookie","md5"],function($,header,footer,fhelp,url){
		header.init();
		footer.init();
		fhelp.init();

		$(function(){
			var loginBtn=$("#login");
			var mima=$("#mima1");
			var yonghu=$("#zhanghao1");
			loginBtn.on("click",function(){
				var mimavalue=hex_md5(mima.val());
				var yonghuvalue=yonghu.val();
				$.get(url.url+"login.php",{"yonghu":yonghuvalue,"mima":mimavalue},function(data){
					console.log(data);
					if(data.yonghu){
						alert("登录成功！");

						$.cookie('usercookie',data.yonghu.tel,{
							path:'/'
						});
						window.location.href="/index.html";
					}else{
						alert("登录失败,请重新输入！");
					}
				},"json")
			})
		})


	})

	})
