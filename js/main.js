$(function() {
	// 声明变量
		var timer1 = null,
			timer2 = null,
			timer3 = null; // page3计时器
	
	// 如下为swiper关键参数设置
	 var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
         }, 
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(swiper.activeIndex == 1 ) {
             	fst_ani();
            } else if(swiper.activeIndex == 2) {
             	sec_ani();
            }else if(swiper.activeIndex == 3) {
             	third_ani();
            }else if(swiper.activeIndex == 4) {
        	   	fourth_ani();
            }else if(swiper.activeIndex == 5) {
            	fifth_ani();
            }
            
        } 
	})   
		
		
	// 预载图片
	var loadImgArr = [
		"images/down.png",
		"images/fourth_bac.png",
		"images/fst_back_bottom.png",
		"images/fst_back_middle.png",
		"images/fst_back_top.png",
		"images/fst_car_left.png",
		"images/fst_cover.png",
		"images/fst_front.png",
		"images/fst_front_inside.png",
		"images/fst_hightlight.png",
		"images/fst_side.png",
		"images/fst_text_bac.png", 	
		"images/fstpage_bac.png",
		"images/fstpage_car.png",
		"images/light.png",
		"images/load_bac.png",
		"images/load_bac2.png",
		"images/load_bar.png",
		"images/load_logo.png",
		"images/load_pic.png",
		"images/load_point.png",
		"images/sec_bac1.png",
		"images/sec_bac2.png",
		"images/sec_bac3.png",
		"images/sec_circle.png",
		"images/sec_detail1.png",
		"images/sec_detail2.png",
		"images/sec_detail3.png",
		"images/sec_detail4.png",
		"images/sec_detail5.png",
		"images/sec_detail6.png",
		"images/sec_hand.png",
		"images/sec_hand_select.png",
		"images/third_bac.png",
		"images/third_car.png",
		"images/third_left.png",
		"images/third_right.png"
	];
	
	// preloadImage函数
	function preImgLoad(imgList, infoEle) {
	    var imgCount    = 0,
	        lsPt        = 90,
	        imgAll      = imgList.length,
	        percent     = "0%";
	    // 图片加载函数
	    function load() {
	        var len = imgList.length;
	        for(var i = 0; i < len; i++) {
	            var img = new Image();
	            img.src = imgList[i];
	            // 如果缓存中已经有当前图片，直接调用回调函数
	            if(img.complete) {
	                loadImgCount();
	            } else {
	                img.onload = function() {
	                    // 当IE6/7加载gif图片的时候，onload事件一直执行
	                    if (imgCount < imgAll) {
	                        loadImgCount();
	                    };
	                };
	                // 如果下载发生错误则报错
	                img.onerror = function() {
	                	alert("加载出错了！请刷新试试~")
	                }
	            }
	        }
	
	    }
	    var timer = null;
	    // 图片加载统计张数
	    function loadImgCount() {
	        imgCount++;
	        percent = Math.floor(imgCount * 100 / imgAll);
	        if(percent < 98) {
	        	// 加载动画
	        	barScroll();
	        };
	    };
	    return {
	        load: load
	    };
	};
	preImgLoad(loadImgArr, $(".bar span")[0]).load();
    // 预载页面滚动条动画
    function barScroll() {
		mySwiper.lockSwipes();
//		   	var load_ina = document.getElementById("loadani");
//		   load_ina.innerHTML =	'@keyframes move {0% {left: -15.12%;bottom: -1.87rem;opacity: 1;}4.8% {bottom: -1.15rem;opacity: 1;}14.98% {bottom: -0.8rem;opacity: 1;}29% {bottom: 0.99rem;opacity: 1;	}50% {bottom: 0.95rem;opacity: 1;}85% {bottom: -0.8rem;opacity: 1;}90% {bottom: -0.81rem;}100% {left: 84.88%;bottom: -0.8rem;opacity: 0;}}'
		$(".load h2").css({
			"animation": "zoomIn 1s",
			"-webkit-animation": "zoomIn 1s",
			"-moz-animation": "zoomIn 1s",
			"-ms-animation": "zoomIn 1s"
//			"visibility": "visible"
	   	});
		$(".bar span").css({
			"animation": "move 3500ms ease-out 1",
			"-webkit-animation": "move 3500ms ease-out 1",
			"-moz-animation": "move 3500ms ease-out 1",
			"-ms-animation": "move 3500ms ease-out 1"
		});
	   setTimeout(function() {
	   		$(".bar").fadeOut("fast",function() {
	   			$(".load h2").text('新英菲尼迪Q70L，坚信初心之美');
	   			$(".load h2").css({
	   				"animation": "slideInUp 2s"
	   			})
	   			$(".load_pic").fadeIn();
	   			
	   			$(".down").fadeIn();
	   		});
	   		mySwiper.unlockSwipes();
	   },3000)
    }

	// page1 动画
	function fst_ani() {
		console.log("page1");
		// 初始化
		$(".down").css({
			"display": "none"
		})
		$(".showdetail-b").css({
			"display": "none"
		});
		$(".showdetail-a").css({
			"display": "block"
		});
		$(".showdetail-a").children().css({
			"display": "none"
		});
		// 大灯
		$(".light").css({
			"display": "block"
		});
		$(".light").children("span").eq(0).css({
			"animation": "flyleft 1s ease-in 2s",
			"-webkit-animation": "flyleft 1s ease-in 2s",
			"-ms-animation": "flyleft 1s ease-in 2s",
			"-moz-animation": "flyleft 1s ease-in 2s"
		});
		$(".light").children("span").eq(1).css({
			"animation": "flyright 1s ease-in 2s",
			"-webkit-animation": "flyright 1s ease-in 2s",
			"-moz-animation": "flyright 1s ease-in 2s",
			"-ms-animation": "flyright 1s ease-in 2s"
			
		});
		$(".detail").children("p").eq(0).css({
			"display": "block"
		});
		// 鹰眼
		$(".light").children("span")[0].addEventListener("webkitAnimationEnd",eye_fn);
		$(".light").children("span")[0].addEventListener("animationend",eye_fn);
		// 栅格
		$(".eye").children("span")[0].addEventListener("webkitAnimationEnd",front);
		$(".eye").children("span")[0].addEventListener("animationend",front);
		
		// 中网
		$(".front span")[0].addEventListener("webkitAnimationEnd",front_inside);
		$(".front span")[0].addEventListener("animationend",front_inside);
		
		// 机盖
		$(".front_inside span")[0].addEventListener("webkitAnimationEnd",cover);
		$(".front_inside span")[0].addEventListener("animationend",cover);
		
		// showdetail-b 车身介绍
		$(".cover span")[0].addEventListener("webkitAnimationEnd",side);
		$(".cover span")[0].addEventListener("animationend",side);
		
		// 车尾 顶
		$(".side span")[0].addEventListener("webkitAnimationEnd",back_top);
		$(".side span")[0].addEventListener("animationend",back_top);
		
		// 车尾 中
		$(".back-top span")[0].addEventListener("webkitAnimationEnd", back_middle);
		$(".back-top span")[0].addEventListener("animationend", back_middle);
		
		// 车尾 底部
		$(".back-middle span")[0].addEventListener("animationend", back_bottom);
		$(".back-middle span")[0].addEventListener("webkitAnimationEnd", back_bottom);
		
		// 动画结束后的处理
		$(".back-bottom span")[0].addEventListener("webkitAnimationEnd", end);
		$(".back-bottom span")[0].addEventListener("animationend", end);
	}
	
	// page2 动画
	function sec_ani() {
		console.log("page2");
		$(".down").hide();
		// 初始化
	}
	// 第二页  点击门把手进入车内
    $(".touch .sec-point").on("tap",function() {
    	$(".touch").fadeOut("fast",function() {
    		$(".innershow ").fadeIn(); 
    		$(".down").show();
    	});
    });
    // 第二页 点击圆点展示对应介绍
    $(".innershow ").on("tap",".sec-point",function() {
		var _this = this;
		// 如果是点击最后一个圆点，则弹出另一个页面，此时禁止滚动页面
		if($(this).index() == 6) {
    		mySwiper.lockSwipes();
    		$(".down").hide();
    		$(".handle").show();
    		
    	} else {
    		$(".innerdetail").css({
    			"display": "none"
    		});
			$(_this).children("div").css({
					"display":"block"
			});
   		};
  	});
    
    // sec 内饰页 档把滑动隐藏此页
    $(".handle").on("touchstart",function() {
      	event.preventDefault();
      	$(".handle").hide(function() {
      		mySwiper.unlockSwipes();
      		$(".down").show();
      	});
    });
	
	// page3动画
	function third_ani() {
		console.log("page3");
		// 初始化
		$(".down").hide();
		clearTimeout(timer1);
		clearTimeout(timer2);
		clearTimeout(timer3);
		$(".car-front, .car-back").fadeOut("fast");
		$(".num").fadeIn();
		$(".showcar").animate({
			"margin-left": "-50%"
		});
		timer1 = setTimeout(function() {
			$(".showcar").animate({
				"margin-left": "-21%"
			});
			$(".num").fadeOut();
			// 前面内容介绍显示
		timer2 = setTimeout(function() {
			$(".car-front").fadeIn();
			// 车后内容显示
		timer3 = setTimeout(function() {
			$(".car-front").fadeOut("fast",function() {
				$(".showcar").animate({
					"margin-left": "-98%"
				});
				$(".car-back").fadeIn(function() {
					$(".down").show();
				});
			});
		},2000);
		},1000);
		},3000);
	}
	// 第四页 动画
	function fourth_ani() {
		$(".down").show();
	}
	// 第五页 动画
	function fifth_ani() {
		$(".down").hide();
	}
	//	第一页具体动画： 栅格，中网，机盖，侧身，车尾
	function eye_fn() {
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".light").fadeOut("fast",function() {
			$(".eye").css({
				"display": "block"
			});
			$(".detail").children("p").eq(1).css({
				"display": "block"
			});
			$(".eye span").css({
				"animation": "eye_ani 1.5s linear 1 2s",
				"-webkit-animation": "eye_ani 1.5s linear 1 2s",
				"-moz-animation": "eye_ani 1.5s linear 1 2s",
				"-ms-animation": "eye_ani 1.5s linear 1 2s"
			});
		});
	}
	function front(){
		$(".detail").children("p").css({
			"display": "none"
		})
		$(".eye").fadeOut("fast",function() {
			$(".front").css({
				"display": "block"
			});
			$(".detail").children("p").eq(2).css({
				"display": "block"
			});
			$(".front span").css({
				"animation": "circle 1.5s linear 1 2s",
				"-webkit-animation": "circle 1.5s linear 1 2s",
				"-moz-animation": "circle 1.5s linear 1 2s",
				"-ms-animation": "circle 1.5s linear 1 2s"
			});
		});
	};
	function front_inside() {
		console.log("中网");
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".front").fadeOut("fast",function() {
			$(".front_inside").css({
				"display": "block"
			});
			$(".detail").children("p").eq(3).css({
				"display": "block"
			});
			$(".front_inside span").css({
				"animation": "wave 2s linear 1 2s",
				"-webkit-animation": "wave 2s linear 1 2s",
				"-moz-animation": "wave 2s linear 1 2s",
				"-ms-animation": "wave 2s linear 1 2s"
			});
			$(".front_inside span")[0].addEventListener("webkitAnimationEnd",function() {console.log("22dd3")});
		});
	};	
	function cover() {
		console.log("jigai")
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".front_inside").fadeOut("fast",function() {
			$(".cover").css({
				"display": "block"
			});
			$(".detail").children("p").eq(4).css({
				"display": "block"
			});
			$(".cover span").css({
				"animation": "cover_ani 1s linear 1 2s",
				"-webkit-animation": "cover_ani 1s linear 1 2s",
				"-moz-animation": "cover_ani 1s linear 1 2s",
				"-ms-animation": "cover_ani 1s linear 1 2s"
			});
		});
	}
	function side() {
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".showdetail-a").css({
			"display": "none"
		})
		$(".cover").fadeOut("fast",function() {
			$(".showdetail-b").css({
				"display": "block"
			});
			$(".side").css({
				"display": "block"
			});
			$(".detail").children("p").eq(5).css({
				"display": "block"
			});
			$(".side span").css({
				"animation": "side_ani 2s linear 1 1s",
				"-webkit-animation": "side_ani 2s linear 1 1s",
				"-moz-animation": "side_ani 2s linear 1 1s",
				"-ms-animation": "side_ani 2s linear 1 1s"
			});
		});
	}
	function back_top() {
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".side").fadeOut("fast",function() {
			$(".back-top").css({
				"display": "block"
			});
			$(".detail").children("p").eq(6).css({
				"display": "block"
			});
			$(".back-top span").css({
				"animation": "back-top_ani 2s linear 1 1s",
				"-webkit-animation": "back-top_ani 2s linear 1 1s",
				"-ms-animation": "back-top_ani 2s linear 1 1s",
				"-moz-animation": "back-top_ani 2s linear 1 1s"
			});
		});
	}
	function back_middle() {
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".back-top").fadeOut("fast",function() {
			$(".back-middle").css({
				"display": "block"
			});
			$(".detail").children("p").eq(7).css({
				"display": "block"
			});
			$(".back-middle span").css({
				"animation": "back-middle_ani 2.5s linear 1 1s",
				"-webkit-animation": "back-middle_ani 2.5s linear 1 1s",
				"-moz-animation": "back-middle_ani 2.5s linear 1 1s",
				"-ms-animation": "back-middle_ani 2.5s linear 1 1s"
			});
		});
	}
	function back_bottom() {
		$(".detail").children("p").css({
			"display": "none"
		});
		$(".back-middle").fadeOut("fast",function() {
			$(".back-bottom").css({
				"display": "block"
			});
			$(".detail").children("p").eq(8).css({
				"display": "block"
			});
			$(".back-bottom span").css({
				"animation": "back-bottom_ani 1.5s linear 1 1s",
				"-webkit-animation": "back-bottom_ani 1.5s linear 1 1s",
				"-moz-animation": "back-bottom_ani 1.5s linear 1 1s",
				"-ms-animation": "back-bottom_ani 1.5s linear 1 1s"
			});
		});
	}
	function end() {
		$(".back-bottom span").css({
			"display": "none"
		})
		$(".down").fadeIn("slow");
	}
})

