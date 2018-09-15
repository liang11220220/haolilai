
//detail页面的业务逻辑代码 实现的功能和过程，所需要涉及到的操作
//但是需要模块，所以业务逻辑就是实用模块进行拼装来达到功能的环节
require(["config"],function(){
	require(["jquery","header","footer","fhelp","cookie"],function($,header,footer,fhelp){
		header.init();
		footer.init();
		fhelp.init();

		$(function(){

			cookieche();
			if($(".dd-main").children().length==0){
						$(".dd-sell").css({
						"display":"none"
						})
						$(".total").css({
						"display":"none"
						})
					}

			$(".dd-sell").on("click",function(){
				console.log($.cookie('usercookie'));
				if($.cookie('usercookie')!="" && $.cookie('usercookie')!=null){
					alert("购买成功");
					
				}
				else{
					alert("请先登录账号");
					window.location.href="/html/login.html";
				}
			})

			$(".dd-main").html("");
			var str;
			var wuarr;
			var ss="";
			var sum=0;

			function cookieche(){

				 str=$.cookie('che');
				 wuarr=JSON.parse(str);
			for(var i=0;i<wuarr.length;i++){
				ss+=`<li>
				<span class="name"><img src="${wuarr[i].src}" alt=""><h3>${wuarr[i].name}</h3></span>
				<span class="shuxing">${wuarr[i].sx}</span>
				<span class="danjia" id="danjia">${wuarr[i].price}</span>
				<span class="shu" >
					<a href="javascript:;" class="jian">-</a>
					<input id="thingsum" type="text" value="${wuarr[i].num}">
					<a class="add" href="javascript:;">+</a>
				</span>
				<span class="xiaoji" id="xiaoji">${wuarr[i].prices}</span>
				<span class="shanchu">
					<a id="delbtn" href="javascript:;" class="delBtn">删除</a>
				</span>
					</li>`
			}
			$(".dd-main").html(ss);
			for(var i=0;i<wuarr.length;i++){
				sum=parseInt(sum);
				var num=parseInt(wuarr[i].prices);
				sum+=num;
			}
			$("#total").html(sum);
			}

			cookieche();



			//数量的操作


			for(let i=0;i<wuarr.length;i++){

				//增加的操作
				$(".add").eq(i).on("click",function(){
					var total=0;
					var num=$(".add").eq(i).parent().children().eq(1).val();
					var price=$(".add").eq(i).parent().parent().children().eq(2).html();
					num=parseInt(num);
					price=parseInt(price);
					num++;
					$(".add").eq(i).parent().children().eq(1).val(num);
					$(".add").eq(i).parent().parent().children().eq(4).html(num*price);

					for(let j=0;j<wuarr.length;j++){
						var snum=$(".xiaoji").eq(j).html();
						snum=parseInt(snum);
						total+=snum;
					}
					$("#total").html(total);

					//更新cookie

					var cookie=$.cookie('che');
					var arr=JSON.parse(cookie);
					var newname=$(".add").eq(i).parent().parent().children().eq(0).children().eq(1).html();
					var newnum=$(".add").eq(i).parent().parent().children().eq(3).children().eq(1).val();
					var newprices=$(".add").eq(i).parent().parent().children().eq(4).eq(0).html();
					for(var k=0;k<arr.length;k++){
						if(arr[i].name==newname){
							arr[i].num=newnum;
							arr[i].prices=newprices;
						}
					}
					$.cookie('che',JSON.stringify(arr),{path:'/'});
				})

				//减的操作
				$(".jian").eq(i).on("click",function(){
					var total=0;
					var num=$(".jian").eq(i).parent().children().eq(1).val();
					var price=$(".jian").eq(i).parent().parent().children().eq(2).html();
					num=parseInt(num);
					price=parseInt(price);
					if(num==0){num=0}
					else{num--;}
					$(".jian").eq(i).parent().children().eq(1).val(num);
					$(".jian").eq(i).parent().parent().children().eq(4).html(num*price);

					for(let j=0;j<wuarr.length;j++){
						var snum=$(".xiaoji").eq(j).html();
						snum=parseInt(snum);
						total+=snum;
					}
					$("#total").html(total);

					//更新cookie
					//
					var cookie=$.cookie('che');
					var arr=JSON.parse(cookie);
					var newname=$(".add").eq(i).parent().parent().children().eq(0).children().eq(1).html();
					var newnum=$(".add").eq(i).parent().parent().children().eq(3).children().eq(1).val();
					var newprices=$(".add").eq(i).parent().parent().children().eq(4).eq(0).html();
					console.log(newprices);
					for(var k=0;k<arr.length;k++){
						if(arr[i].name==newname){
							arr[i].num=newnum;
							arr[i].prices=newprices;
						}
					}
					$.cookie('che',JSON.stringify(arr),{path:'/'});

				})

				//删除操作
				$(".delBtn").eq(i).on("click",function(){
					var total=0;
					var delname=$(".delBtn").eq(i).parent().parent().children().eq(0).children().eq(1).html();
					$(".delBtn").eq(i).parent().parent().remove();
					console.log(delname);
					var cookie=$.cookie('che');
					var arr=JSON.parse(cookie);
					for(let t=0;t<arr.length;t++){
						if(arr[t].name==delname){
							total=$("#total").html();
							total=total-arr[t].prices;
							arr.splice(t,1);
						}
					}
					$("#total").html(total);
					$.cookie('che',JSON.stringify(arr),{path:'/'});

					if($(".dd-main").children().length==0){
						$(".dd-sell").css({
						"display":"none"
						})
						$(".total").css({
						"display":"none"
						})
					}

			})
			}
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