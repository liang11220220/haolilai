
define(function(){
	function  Footerhelp(){}

	Footerhelp.prototype.init=function(){
		//在这里定义方法,也就是这个模块要做的事
		//事做完后的交互
	$(".footer-help").load("/html/footer-help.html",function(){

		});
	}
	return new Footerhelp();
})
