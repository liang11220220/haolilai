define(function(){
	function Testzhuce(){

	}
	Testzhuce.prototype.init=function(ele){
		var _this=this;
		this.id=ele.id;
		var zhreg = /^1[34578]\d{9}$/;
		var emailreg=/^\w{3,}@\w+(\.\w+)+$/;
		var	mimareg=/^\w{6,10}$/;

			//用户验证
			this.id.children('dl').eq(0).children('dd').children('input').focus(function(){
				_this.id.children('dl').eq(0).children('#ts1').css({
					"display":"block"
				})
			})
			this.id.children('dl').eq(0).children('dd').children('input').blur(function(){
				if(zhreg.test(_this.id.children('dl').eq(0).children('dd').children('input').val())){
					_this.id.children('dl').eq(0).children('#ts1').css({
					"display":"none"
				})
				}
				else{
					_this.id.children('dl').eq(0).children('#ts1').css({
					"display":"block"
				})
				}
			})


			//email验证
			this.id.children('dl').eq(1).children('dd').children('input').focus(function(){
				_this.id.children('dl').eq(1).children('#ts2').css({
					"display":"block"
				})
			})
			this.id.children('dl').eq(1).children('dd').children('input').blur(function(){
				if(emailreg.test(_this.id.children('dl').eq(1).children('dd').children('input').val())){
					_this.id.children('dl').eq(1).children('#ts2').css({
					"display":"none"
				})
				}
				else{
					_this.id.children('dl').eq(1).children('#ts2').css({
					"display":"block"
				})
				}
			})

			//密码验证

			this.id.children('dl').eq(2).children('dd').children('input').focus(function(){
				_this.id.children('dl').eq(2).children('#ts3').css({
					"display":"block"
				})
			})
			this.id.children('dl').eq(2).children('dd').children('input').blur(function(){
				if(mimareg.test(_this.id.children('dl').eq(2).children('dd').children('input').val())){
					_this.id.children('dl').eq(2).children('#ts3').css({
					"display":"none"
				})
				}
				else{
					_this.id.children('dl').eq(2).children('#ts3').css({
					"display":"block"
				})
				}
			})

			//密码二次验证
			this.id.children('dl').eq(3).children('dd').children('input').focus(function(){
				_this.id.children('dl').eq(3).children('#ts4').css({
					"display":"none"
				})
			})
			this.id.children('dl').eq(3).children('dd').children('input').blur(function(){
				if(_this.id.children('dl').eq(3).children('dd').children('input').val()==_this.id.children('dl').eq(2).children('dd').children('input').val()){
					_this.id.children('dl').eq(3).children('#ts4').css({
					"display":"none"
				})
				}
				else{
					_this.id.children('dl').eq(3).children('#ts4').css({
					"display":"block"
				})
				}
			})


	}

	return new Testzhuce();
})