
//detail页面的业务逻辑代码 实现的功能和过程，所需要涉及到的操作
//但是需要模块，所以业务逻辑就是实用模块进行拼装来达到功能的环节
require(["config"],function(){
	require(["header","footer","fhelp","cookie"],function(header,footer,fhelp){
		header.init();
		footer.init();
		fhelp.init();
	})
})







//去配置模块