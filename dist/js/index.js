
//detail页面的业务逻辑代码 实现的功能和过程，所需要涉及到的操作
//但是需要模块，所以业务逻辑就是实用模块进行拼装来达到功能的环节
require(["config"],function(){
	require(["jquery","header","footer","fhelp","lunbo","cookie"],function($,header,footer,fhelp,lunbo){
		header.init();
		footer.init();
		fhelp.init();
		lunbo.init({id:"#lun"})

		var len1=$(".lunimg li").length;
			for(let i=0;i<len1;i++){
					$(".lunimg li").eq(i).on("click",function(){
						$.cookie('imgid',$(".lunimg li").eq(1).children().eq(0).children().attr("id"),{
							path:'/'
						});
						window.location.href='/html/goumai.html';
						//console.log($.cookie('imgid'))
					})
				}
	})
})







//去配置模块