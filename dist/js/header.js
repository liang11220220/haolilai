
require(["config"],function(){
	require(["jquery","cookie"],function($){
		if($.cookie('usercookie')){
			$("#kong").css({"display":"none"});
			$("#user").css({"display":"block"});
			//console.log($.cookie("usercookie"));
			$("#user").children().eq(0).html($.cookie("usercookie"));
			$("#exit").on("click",function(){
				$.cookie('usercookie', '', { expires: -1 ,path:"/"});
				$("#kong").css({"display":"block"}),
				$("#user").css({"display":"none"})})
		}
		else{
			$("#kong").css({"display":"block"});
			$("#user").css({"display":"none"});
		}

		$(function(){
			$("#search-btn").on("click",function(){
				$.cookie('searchfood', '', { expires: -1 ,path:"/"});
				$.cookie('searchfood',$("#search-input").val(),{path:"/"});
				window.location.href="/html/food.html";
			})

			var checookie=$.cookie('che');
			var arr=JSON.parse(checookie);
			var spsum=0;
			for(var i=0;i<arr.length;i++){
				spsum+=Number(arr[i].num);
			}
			console.log(spsum);
			$("b").html(spsum);
		})

	})
})