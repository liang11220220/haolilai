define(function(){
	function Testlogin(){

	}
	Testlogin.prototype.init=function(ele){
		var _this=this;
		this.zhanghao=ele.zhanghao;
		this.ts1=ele.ts1;
		var pattern = /^1[34578]\d{9}$/;
		this.zhanghao.focus(function(){
			_this.ts1.css({
				"display": "block"
			});
		})
		this.zhanghao.blur(function(){
			if(pattern.test(_this.zhanghao.val())){
				_this.ts1.css({
					"display": "none"
				});
			}
			else{
				_this.ts1.css({
					"display": "block"
				});
			}
		})
	}
	return new Testlogin();
})