//在这里是最底层的模型的设计，注意的是这里只涉及到方法和功能，但不涉及调用
//也就是说这个部分相当于一个构造体，定义

define(function(){
	function  Header(){}

	Header.prototype.init=function(){
		//在这里定义方法,也就是这个模块要做的事
		//事做完后的交互
		$("header").load("/html/header.html",function(){

		});
	}
	return new Header();
})