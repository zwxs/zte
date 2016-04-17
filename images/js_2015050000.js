$(function(){
			var userAgent = navigator.userAgent.toLowerCase(); 
			// Figure out what browser is being used 
			jQuery.browser = { 
			version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 
			safari: /webkit/.test( userAgent ), 
			opera: /opera/.test( userAgent ), 
			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 
			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 
			}; 
			
			if($.browser.msie){
				if($.browser.version == "7.0" || $.browser.version == "8.0"){
					$("#index-cont-one form .form-control").addClass("ie-form-control");
					$("#index-cont-one form .input-group-addon").addClass("ie-group-addon");
					$("#index-cont-one form .input-group-btn").addClass("ie-group-btn");
					$("#index-cont-one form .input-group-btn .btn").addClass("ie-btn");
					$("#index-cont-one .four-cont-two").addClass("ie-four-cont-two");
					$("#index-cont-one .four-cont-one").css("border-right","none");
					
					}	
				    // 此浏览器为 IE
				}
			else{
				$("#index-cont-one #more-job").css("clear","both");
				}
			
			var $banerli=$("#index-baner ul li").length;
			var  now=0;
			var timer=setInterval(next,3000);
			
			ChanPlay("#index-baner ul li","#index-baner ol li")
			function ChanPlay(obj,chrenobj){
				for(var i=0;i<$banerli;i++){
					$(chrenobj).removeClass("specrlie");
					$(obj).removeClass("show-block");
				}
				if($.browser.msie && ($.browser.version == "7.0") ){
						$(obj).css("display","none");
						$(obj).eq(now).css("display","block");
				    // 此浏览器为 IE
				} else{
						$(obj).eq(now).addClass("show-block");
				}
					$(chrenobj).eq(now).addClass("specrlie");
			}
			function next(){
				now++;
				if(now==$banerli){
					now=0;
				}
				ChanPlay("#index-baner ul li","#index-baner ol li");
			}
			$("#index-baner ol li").click(function(){
				now=$(this).index();
				next();
			})
			$("#index-cont-two li").hover(function(){
				$liobjindex=$(this).index();
				$("#index-cont-two li").children().children(".down-ul-menu").css("display","none");
				$(".down-zindex").removeClass("down-zindex-hover");
				if($liobjindex!=2){
					$(this).children(".down-zindex").addClass("down-zindex-hover");
					$(this).children().children(".down-ul-menu").css("display","block");
				}
			},function(){
				$(".down-zindex").removeClass("down-zindex-hover");
				$("#index-cont-two li").children().children(".down-ul-menu").css("display","none");
			})
			
			$("#super-seach").hover(function(){
					$(this).addClass("super-seachhover");
				},function(){
					$(this).removeClass("super-seachhover");
				})
			$("#index-1-pora ul li").mouseover(function(){
				$("#index-1-pora ul li").children(".po-title").removeClass("show-none");
				$("#index-1-pora ul li").children(".po-pala-cont").addClass("show-none");
				$(this).children(".po-title").addClass("show-none");
				$(this).children(".po-pala-cont").removeClass("show-none");
			})
			$("#hire-menu-one li").mouseover(function(){
				var $objindex=$(this).index();
			})
			
			$("#commun-menu ul li").hover(function(){
				var objIndex=$(this).index();
				$("#commun-menu ul li").children(".center-sanjiao").removeClass("show-block");
				$(this).children(".center-sanjiao").addClass("show-block");
				$("#commun-cont-par").children(".commun-cont-one").removeClass("show-block");
				$("#commun-cont-par").children(".commun-cont-one").eq(objIndex).addClass("show-block")
			},function(){
				
			})
			
			
		})


//原本每个页面的js
//$(function(){
//				$("#super-seach").hover(function(){
//					$(this).addClass("super-seachhover");
//				},function(){
//					$(this).removeClass("super-seachhover");
//				})
//			})
//
//$(function(){
//	$("#super-seach").hover(function(){
//		$(this).addClass("super-seachhover");
//	},function(){
//		$(this).removeClass("super-seachhover");
//	})
//})
//
//$(function(){
//			$("#index-1-pora ul li").mouseover(function(){
//				$("#index-1-pora ul li").children(".po-title").removeClass("show-none");
//				$("#index-1-pora ul li").children(".po-pala-cont").addClass("show-none");
//				$(this).children(".po-title").addClass("show-none");
//				$(this).children(".po-pala-cont").removeClass("show-none");
//			})
//			$("#hire-menu-one li").mouseover(function(){
//				var $objindex=$(this).index();
//			})
//			
//		})
//
//$(function(){
//			$("#commun-menu ul li").hover(function(){
//				var objIndex=$(this).index();
//				$("#commun-menu ul li").children(".center-sanjiao").removeClass("show-block");
//				$(this).children(".center-sanjiao").addClass("show-block");
//				$("#commun-cont-par").children(".commun-cont-one").removeClass("show-block");
//				$("#commun-cont-par").children(".commun-cont-one").eq(objIndex).addClass("show-block")
//			},function(){
//				
//			})
//function appen_cs(obj,objclass){
//	$(obj).addClass(objclass);
//}
//<script>
//		$(function(){
//			var userAgent = navigator.userAgent.toLowerCase(); 
//			// Figure out what browser is being used 
//			jQuery.browser = { 
//			version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 
//			safari: /webkit/.test( userAgent ), 
//			opera: /opera/.test( userAgent ), 
//			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 
//			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 
//			}; 
//			
//			if($.browser.msie){
//				if($.browser.version == "7.0" || $.browser.version == "8.0"){
//					$("#index-cont-one form .form-control").addClass("ie-form-control");
//					$("#index-cont-one form .input-group-addon").addClass("ie-group-addon");
//					$("#index-cont-one form .input-group-btn").addClass("ie-group-btn");
//					$("#index-cont-one form .input-group-btn .btn").addClass("ie-btn");
//					$("#index-cont-one .four-cont-two").addClass("ie-four-cont-two");
//					$("#index-cont-one .four-cont-one").css("border-right","none");
//					
//					}	
//				    // 此浏览器为 IE
//				}
//			else{
//				$("#index-cont-one #more-job").css("clear","both");
//				}
//			
//			var $banerli=$("#index-baner ul li").length;
//			var  now=0;
//			var timer=setInterval(next,3000);
//			
//			ChanPlay("#index-baner ul li","#index-baner ol li")
//			function ChanPlay(obj,chrenobj){
//				for(var i=0;i<$banerli;i++){
//					$(chrenobj).removeClass("specrlie");
//					$(obj).removeClass("show-block");
//				}
//				if($.browser.msie && ($.browser.version == "7.0") ){
//						$(obj).css("display","none");
//						$(obj).eq(now).css("display","block");
//				    // 此浏览器为 IE
//				} else{
//						$(obj).eq(now).addClass("show-block");
//				}
//					$(chrenobj).eq(now).addClass("specrlie");
//			}
//			function next(){
//				now++;
//				if(now==$banerli){
//					now=0;
//				}
//				ChanPlay("#index-baner ul li","#index-baner ol li");
//			}
//			$("#index-baner ol li").click(function(){
//				now=$(this).index();
//				next();
//			})
//			$("#index-cont-two li").hover(function(){
//				$liobjindex=$(this).index();
//				$("#index-cont-two li").children().children(".down-ul-menu").css("display","none");
//				$(".down-zindex").removeClass("down-zindex-hover");
//				if($liobjindex!=2){
//					$(this).children(".down-zindex").addClass("down-zindex-hover");
//					$(this).children().children(".down-ul-menu").css("display","block");
//				}
//			},function(){
//				$(".down-zindex").removeClass("down-zindex-hover");
//				$("#index-cont-two li").children().children(".down-ul-menu").css("display","none");
//			})
//			
//		})
//	</script>

//插件改编
//(function($){
//	jQuery.fn.extend({
//		appencs_a:function(obj,objclss){
//			$(obj).addClass(objclss);
//		},
//		appencs_b:function(obj,objchildren,objclss){
//			$(obj).children(objchildren).addClass(objclss);
//		},
//		removecs_a:function(obj,objclss){
//			$(obj).removeClass(objclss);
//		},
//		removecs_b:function(obj,objchildren,objclss){
//			$(obj).children(objchildren).removeClass(objclss);
//		},
//		removecs_c:function(obj,objchildren,children_one,objclss){
//			$(obj).children(objchildren).children(chiled_one).removeClass(objclss);
//		},
//		hover_a:function(obj,thing,objclass){
//			$(obj).thing(function(){
//				$(this).addClass(objclass);
//			},function(){
//				$(this).removeClass(objclass);
//			})
//		}
//	})
//})(jQuery)
//
//
//$(function(){
//			var userAgent = navigator.userAgent.toLowerCase(); 
//			// Figure out what browser is being used 
//			jQuery.browser = { 
//			version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 
//			safari: /webkit/.test( userAgent ), 
//			opera: /opera/.test( userAgent ), 
//			msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 
//			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 
//			}; 
//			
//			if($.browser.msie){
//				if($.browser.version == "7.0" || $.browser.version == "8.0"){
//					jQuery.fn.appencs_a("#index-cont-one form .form-control","ie-form-control");
//					jQuery.fn.appencs_a("#index-cont-one form .input-group-addon","ie-group-addon");
//					jQuery.fn.appencs_a("#index-cont-one form .input-group-btn","ie-group-addon");
//					jQuery.fn.appencs_a("#index-cont-one form .input-group-btn .btn","ie-btn");
//					jQuery.fn.appencs_a("#index-cont-one .four-cont-two","ie-four-cont-two");
//					$("#index-cont-one .four-cont-one").css("border-right","none");
//					
//					}	
//				    // 此浏览器为 IE
//				}
//			else{
//				$("#index-cont-one #more-job").css("clear","both");
//				}
//			
//			var $banerli=$("#index-baner ul li").length;
//			var  now=0;
//			var timer=setInterval(next,3000);
//			
//			ChanPlay("#index-baner ul li","#index-baner ol li")
//			function ChanPlay(obj,chrenobj){
//				for(var i=0;i<$banerli;i++){
//					$(chrenobj).removeClass("specrlie");
//					jQuery.fn.removecs_a(obj,"show-block")
//				}
//				if($.browser.msie && ($.browser.version == "7.0") ){
//						$(obj).css("display","none");
//						
//						$(obj).eq(now).css("display","block");
//				    // 此浏览器为 IE
//				} else{
//						$(obj).eq(now).addClass("show-block");
//				}
//					$(chrenobj).eq(now).addClass("specrlie");
//			}
//			function next(){
//				now++;
//				if(now==$banerli){
//					now=0;
//				}
//				ChanPlay("#index-baner ul li","#index-baner ol li");
//			}
//			$("#index-baner ol li").click(function(){
//				now=$(this).index();
//				next();
//			})
//			$("#index-cont-two li").hover(function(){
//				$liobjindex=$(this).index();
//				$("#index-cont-two li").children().children(".down-ul-menu").css("display","none");
//				jQuery.fn.removecs_a(".down-zindex","down-zindex-hover")
//				if($liobjindex!=2){
//					$(this).children(".down-zindex").addClass("down-zindex-hover");
//					$(this).children().children(".down-ul-menu").css("display","block");
//				}
//			},function(){
//				jQuery.fn.removecs_a(".down-zindex","down-zindex-hover")
//				$("#index-cont-two li").children().children(".down-ul-menu").css("display","none");
//			})
//			
//			jQuery.fn.hover_a("#super-seach","hover","#super-seach");
//			
//			$("#index-1-pora ul li").mouseover(function(){
//				jQuery.fn.removecs_b("#index-1-pora ul li",".po-title","show-none");
//				jQuery.fn.appencs_b("#index-1-pora ul li",".po-pala-cont","show-none")
//				jQuery.fn.appencs_b($(this),".po-title","show-none")
//				jQuery.fn.removecs_b($(this),".po-pala-cont","show-none");
//			})
//			$("#hire-menu-one li").mouseover(function(){
//				var $objindex=$(this).index();
//			})
//			
//			$(function(){
//			$("#commun-menu ul li").hover(function(){
//				var objIndex=$(this).index();
//				jQuery.fn.removecs_b("#commun-menu ul li",".center-sanjiao","show-block");
//				jQuery.fn.appencs_b($(this),".center-sanjiao","show-block");
//				jQuery.fn.removecs_b("#commun-cont-par","..commun-cont-one","show-block");
//				$("#commun-cont-par").children(".commun-cont-one").eq(objIndex).addClass("show-block")
//			},function(){
//				
//			})
//			
//})
//
