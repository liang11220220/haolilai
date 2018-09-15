
//detail页面的业务逻辑代码 实现的功能和过程，所需要涉及到的操作
//但是需要模块，所以业务逻辑就是实用模块进行拼装来达到功能的环节
require(["config"],function(){
	require(["jquery","header","footer","fhelp","url","template","cookie"],function($,header,footer,fhelp,url,template){
		header.init();
		footer.init();
		fhelp.init();

		$(function(){
			var index=1;
			var pagenum=6;
			var pages=0;
			var wutotal=0;
			var type=2;

			function gettu(){

				$.get(url.url+"gettiandian.php",{"type":type,"index":index,"pagenum":pagenum},function(data){
				 wutotal=data.datacount;
				 console.log(wutotal);
				 pages=Math.ceil(wutotal/pagenum);
				var str="";
				for(var i=0;i<pages;i++){
					if(i==index-1){
						str+=`<a class="checked" href="javascript:;">${i+1}</a>`;
					}
					else{
						str+=`<a class="check" href="javascript:;">${i+1}</a>`;
					}
				}
				$(".hao").html(str);

				for(let i=0;i<pages;i++){
					$(".hao").children().eq(i).on("click",function(){
						//alert(1);
						index=$(".hao").children().eq(i).html();
						console.log(index);
						$(".hao").children().eq(index-2).css({"class":"checked"});
						$.get(url.url+"gettiandian.php",{"type":type,"index":index,"pagenum":pagenum},function(data){
							var html=template('addsp',{data:data.data})
							$("#things").html(html);
							//console.log(data);
						},"json")
					})
				}

				var html=template('addsp',{data:data.data})
				$("#things").html(html);

				var len1=$("#things a").length;
				for(let i=0;i<len1;i++){
					$("#things li").eq(i).children().on("click",function(){
						$.cookie('imgid',$("#things li").eq(i).children().attr("id"),{
							path:'/'
						});
						window.location.href='/html/goumai.html';
						//console.log($.cookie('imgid'))
					})
				}
			},"json")

			}

		gettu();


		$("#pre").on("click",function(){
			if(index==1){
				index=1;
			}
			else{
				index--;
				gettu();
			}
			$(".hao").children().eq(index-1).css({"class":"checked"});
		})

		$("#next").on("click",function(){
				index++;
				if(index>=pages){
					index=pages;
				}
				gettu();
				$(".hao").children().eq(index-1).css({"class":"checked"});
		})
		})
	})
})