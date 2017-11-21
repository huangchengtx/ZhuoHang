
//保险详细切换//
function switchtodTag(todtag,todcontent,todk) {
    for(i=1; i <4; i++) {
      if (i==todk) {
        document.getElementById(todtag+i).className="menuOn";document.getElementById(todcontent+i).className="baoxianList";}
      else {
        document.getElementById(todtag+i).className="menuNo";document.getElementById(todcontent+i).className="baoxianList_none";}
    }
  }
  
  

//保险产品详细页面-保险单份额
$(function () {
    var baoxin_down1 = $('.baoxin_down1');
    var baoxin_down2 = $('.baoxin_down2');
	var baoxin_down3 = $('.baoxin_down3');
	var baoxin_down4 = $('.baoxin_down4');
	var baoxin_down5 = $('.baoxin_down5');
    var bg = $('.bgDiv');
	var baoxin_downNav1 = $('.baoxin_downNav1');
	var baoxin_downNav2 = $('.baoxin_downNav2')
	var baoxin_downNav3 = $('.baoxin_downNav3')
	var baoxin_downNav4 = $('.baoxin_downNav4')
	var baoxin_downNav5 = $('.baoxin_downNav5')
	showNav(baoxin_down1, baoxin_downNav1, "baoxin_down1");
	showNav(baoxin_down2, baoxin_downNav2, "baoxin_down2");
	showNav(baoxin_down3, baoxin_downNav3, "baoxin_down3");
	showNav(baoxin_down4, baoxin_downNav4, "baoxin_down4");
	showNav(baoxin_down5, baoxin_downNav5, "baoxin_down5");

    function showNav(btn, navDiv, direction) {
        btn.on('click', function () {
            bg.css({
                display: "block",
                transition: "opacity .5s"
            });
            if (direction == "baoxin_down1") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });	
		    } else if (direction == "baoxin_down2") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });	
		    } else if (direction == "baoxin_down3") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });	
			} else if (direction == "baoxin_down4") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });	
			} else if (direction == "baoxin_down5") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });	
            }
        });
    }

    bg.on('click', function () {
        hideNav();
    });

    function hideNav() {
		baoxin_downNav1.css({
            bottom: "-90%",
            webkitTransition:"bottom .5s",
            oTransition:"bottom .5s",
            mozTransition:"bottom .5s",
            transition: "bottom .5s"
        });
		baoxin_downNav2.css({
            bottom: "-90%",
            webkitTransition:"bottom .5s",
            oTransition:"bottom .5s",
            mozTransition:"bottom .5s",
            transition: "bottom .5s"
        });
		baoxin_downNav3.css({
            bottom: "-90%",
            webkitTransition:"bottom .5s",
            oTransition:"bottom .5s",
            mozTransition:"bottom .5s",
            transition: "bottom .5s"
        });
		baoxin_downNav4.css({
            bottom: "-90%",
            webkitTransition:"bottom .5s",
            oTransition:"bottom .5s",
            mozTransition:"bottom .5s",
            transition: "bottom .5s"
        });
		baoxin_downNav5.css({
            bottom: "-90%",
            webkitTransition:"bottom .5s",
            oTransition:"bottom .5s",
            mozTransition:"bottom .5s",
            transition: "bottom .5s"
        });
        bg.css({
            display: "none",
            transition: "display 1s"
        });
    }
});

 //保险详细-选择本人
$(document).ready(function(){
$(".baoxian_btn-slide").click(function(){//当点击黄色块触发silideToggle
$("#baoxian_panel").slideToggle("slow");
$(this).toggleClass("baoxian_active"); return false;//触发后然后改变小图标方向，css在.active定义的
});
});

 //保险详细-选择多人
$(document).ready(function(){
$(".beibaoren_btn-slide").click(function(){//当点击黄色块触发silideToggle
$("#beibaoren_pane").slideToggle("slow");
$(this).toggleClass("beibaoren_active"); return false;//触发后然后改变小图标方向，css在.active定义的
});
});


//保险详细-选择本人弹出层
   function  open_benren(){
     document.getElementById("benren_divtop2").style.display="block";
	 document.getElementById("baoxian_panel").style.display="none";
	 document.getElementById("duoren_divtop2").style.display="none";
  }
  
    function  open_duoren(){
     document.getElementById("duoren_divtop2").style.display="block";
	 document.getElementById("baoxian_panel").style.display="none";
     document.getElementById("benren_divtop2").style.display="none";
	 document.getElementById("fen").style.display="none";
  } 
  



