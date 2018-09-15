
define(function(){
	function  Footer(){}

	Footer.prototype.init=function(){
		//在这里定义方法,也就是这个模块要做的事
		//事做完后的交互
	$("footer").load("/html/footer.html",function(){

		})
	}
	return new Footer();
})
