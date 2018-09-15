define(function(){
	function Lun(){
		}
	Lun.prototype.init=function(lun){
			this.ele=$(lun.id);
			this.ul=$("#lun ul");
			this.ol=$("#lun ol");
			this.goNext=$("#goNext");
			this.goPrev=$("#goPrev");
			this.uli=$("#lun ul li");
			this.oli=$("#lun ol li");
			this.flag=false;
			this.index=0;
			var _this=this;
			this.tis=setInterval(function(){_this.go()},6000)
			this.ele.hover(function(){clearInterval(_this.tis)},function(){_this.tis=setInterval(function(){_this.go()},6000)})
			this.goPrev.on("click",function(){_this.back();})
			this.goNext.on("click",function(){_this.go();})
			this.oli.on("click",function(){_this.oliclick(this.innerHTML)})
		}

		Lun.prototype.oliclick=function(n){
			var _this=this;
			if(!this.flag){
				this.flag=true;
				this.index=n-1;
				this.oli.eq(this.index).addClass("ac").siblings().removeClass("ac");
				this.uli.eq(this.index).fadeIn(4000,"linear",function(){_this.flag=false;}).siblings().fadeOut(4000,"linear",function(){_this.flag=false;})
			}
		}

		Lun.prototype.go=function(){

			var _this=this;
			if(!this.flag){
			this.flag=true;
			this.index++;
			if(this.index==this.uli.length){this.index=0}
			this.uli.eq(this.index).fadeIn(4000,"linear",function(){_this.flag=false;}).siblings().fadeOut(4000,"linear",function(){_this.flag=false;})
			this.oli.eq(this.index).addClass("ac").siblings().removeClass("ac")
			}
		}
		Lun.prototype.back=function(){
			var _this=this;
			if(!this.flag){
			this.flag=true;	
			this.index--;
			if(this.index<=-1){this.index=this.uli.length-1;}
			this.uli.eq(this.index).fadeIn(4000,"linear",function(){_this.flag=false;}).siblings().fadeOut(4000,"linear",function(){_this.flag=true;})
			this.oli.eq(this.index).addClass("ac").siblings().removeClass("ac")
			}
		}
		return new Lun();
})