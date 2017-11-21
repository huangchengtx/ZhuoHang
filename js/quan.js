
//优惠券列表切换
function switchmodTag(modtag,modcontent,modk) {
    for(i=1; i <4; i++) {
      if (i==modk) {
        document.getElementById(modtag+i).className="menuOn";document.getElementById(modcontent+i).className="slidingList";}
      else {
        document.getElementById(modtag+i).className="menuNo";document.getElementById(modcontent+i).className="slidingList_none";}
    }
  }

//发布优惠券 底下弹出层
$(function () {

	var down2 = $('.down2');
	var down3 = $('.down3');
    var bg = $('.bgDiv');
	
	var downNav2 = $('.downNav2');
    var downNav3 = $('.downNav3');

	showNav(down2, downNav2, "down2");
	showNav(down3, downNav3, "down3");


    function showNav(btn, navDiv, direction) {
        btn.on('click', function () {
            bg.css({
                display: "block",
                transition: "opacity .5s"
            });
            if (direction == "down2") {
                navDiv.css({
                    bottom: "0px",
                    transition: "bottom 1s"
                });
			
			 } else if (direction == "down3") {
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

		downNav2.css({
            bottom: "-90%",
            webkitTransition:"bottom .5s",
            oTransition:"bottom .5s",
            mozTransition:"bottom .5s",
            transition: "bottom .5s"
        });
		downNav3.css({
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