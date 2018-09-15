
//detail页面的业务逻辑代码 实现的功能和过程，所需要涉及到的操作
//但是需要模块，所以业务逻辑就是实用模块进行拼装来达到功能的环节
require(["config"],function(){
	require(["jquery","header","footer","fhelp","url","template","cookie"],function($,header,footer,fhelp,url,template){
		header.init();
		footer.init();
		fhelp.init();


		$(function(){
			//得到点击图片的cookie值
			var imgid=$.cookie('imgid');
			//console.log(imgcookie);
			$.get(url.url+"goumai.php",{"imgid":imgid},function(data){
				console.log(data);
				var html=template('wu',{data});
				$(".wu").html(html);

				$("#sel").on("change",function(){
				if($("option:selected",this).val()==1){
						$("#price1").css({
							"display":"block"
						})
						$("#price2").css({
							"display":"none"
						})
					}
				if($("option:selected",this).val()==2){
						$("#price2").css({
							"display":"block"
						})
						$("#price1").css({
							"display":"none"
						})
					}
			})

				$(".xq").on("click",function(){
					$(".imgs").css({
						"display":"block"
					})
				})


				function addcookie(){
					var name=$("#wuname").html();
					var sx=$("#wusx").html();
					var price;
					if($("#price1").css("display")=="block"){price=$("#price1").html()}
					else{price=$("#price2").html()};
					var src=$("#tupian").attr("src");
						var cookie=$.cookie('che');
						if(cookie){
							var arr=JSON.parse(cookie);
						}
						else{
							var arr=[];

						}

						for(var i=0;i<arr.length;i++){
							if(arr[i].name==name){
								arr[i].num++;
								arr[i].prices=arr[i].num*arr[i].price;
								cookie=JSON.stringify(arr);
								$.cookie('che',cookie,{path:'/'});

								return;
							}
						}

						var obj={
							name:name,
							src:src,
							sx:sx,
							price:price,
							num:1,
							prices:price,
						}
						arr.push(obj);
						var str=JSON.stringify(arr);
						$.cookie('che',str,{path:'/'})};
				$(".addche").on("click",function(){
						addcookie();
				})

				$(".buy").on("click",function(){
					addcookie();
					window.location.href="/html/gouwuche.html";
				})

			},"json")

			var left;
			var n=1;
			setInterval(function(){
				n++;
				left=-336*(n%2);
				$(".more").css({
				"left":left
			});
			},4000)
		})
	})
})







//去配置模块