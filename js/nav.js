
var menuOpenClose = 0;
var aboutOpenClose = 0;
var connectOpenClose = 0;
var topdropExpired = false;


function itemWidth(item, len) {
  document.getElementById(item).style.width = len;
}
function itemHeight(item, len) {
  document.getElementById(item).style.height = len;
}
function presentSidebars(border) {
  itemHeight("bottom-about", "0");
    aboutOpenClose = 0;
  itemHeight("bottom-connect", "0");
    connectOpenClose = 0;
    document.getElementById("leftnav").style.borderRight = border;
    document.getElementById("rightnav").style.borderLeft = border;
}

function toggleNav() {
  if (menuOpenClose === 0) {
    // open the menu
    itemWidth("leftnav", "calc(50% - 1px)");
    itemWidth("rightnav", "calc(50% - 1px)");
    menuOpenClose = 1;
    presentSidebars("1px solid rgba(144, 208, 233, 0.4)");

    topdropExpired = true;
    $(".topdrop").css("height", "0");
    $(".topdrop").css("background", "none");
    $(".topdrop-textbg").css("height", "0");
    $(".topdrop-textbg").css("background", "none");
    $(".topdrop-textbg").css("border", "none");

  } else {
    // close the menu
    itemWidth("leftnav", "0");
    itemWidth("rightnav", "0");
    menuOpenClose = 0;
    presentSidebars("none");

    topdropExpired = true;
    $(".topdrop").css("height", "0");
    $(".topdrop").css("background", "none");
    $(".topdrop-textbg").css("height", "0");
    $(".topdrop-textbg").css("background", "none");
    $(".topdrop-textbg").css("border", "none");

  }
}


// fade sections out of focus
$(document).ready(function(){
  //
  function coverSideL() {
    $(".sidenavLcurtain").css("height", "calc(100% - 94px)");
    $(".sidenavLcurtain").css("background-color", "rgba(1,1,1,0.8)");
  }
  function coverSideR() {
    $(".sidenavRcurtain").css("height", "calc(100% - 94px)");
    $(".sidenavRcurtain").css("background-color", "rgba(1,1,1,0.8)");
  }
  function uncoverSideL() {
    $(".sidenavLcurtain").css("height", "0px");
  }
  function uncoverSideR() {
    $(".sidenavRcurtain").css("height", "0px");
  }

  // hover over title, show "select to toggle content", fade all
  $("#header-title a").mouseover(function(){
    if (topdropExpired === false) {
       $(".topdrop").css("height", "calc(100% - 94px)");
       $(".topdrop").css("background", "radial-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0))");
       $(".topdrop-textbg").css("height", "8em");
       $(".topdrop-textbg").css("border", "3px solid rgba(255,255,255,0.5)");
       $(".topdrop-textbg").css("background", "radial-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5))");
       coverSideR();
       coverSideL();
    }
  });
  $("#header-title a").mouseout(function(){
     $(".topdrop").css("height", "0px");
     $(".topdrop-textbg").css("border", "none");
     $(".topdrop-textbg").css("height", "0");
     uncoverSideR();
     uncoverSideL();
     topdropExpired = false;
  });


  // hover over either side section, fade the other
  //
  // left, fade right
  $(".sidenavL").mouseover(function(){
     coverSideR();
  });
  $(".sidenavL").mouseout(function(){
     uncoverSideR();
  });
  // right, fade left
  $(".sidenavR").mouseover(function(){
     coverSideL();
  });
  $(".sidenavR").mouseout(function(){
     uncoverSideL();
  });
  //
  // hover over bottom section
  //
  // bottom about, fade left and right
  $("#bottom-about").mouseover(function(){
     coverSideL();
     coverSideR();
  });
  $("#bottom-about").mouseout(function(){
     uncoverSideL();
     uncoverSideR();
  });
  // bottom connect, fade left and right
  $("#bottom-connect").mouseover(function(){
     coverSideL();
     coverSideR();
  });
  $("#bottom-connect").mouseout(function(){
     uncoverSideL();
     uncoverSideR();
  });
});





// bottom sections
// "about"
function toggleAbout() {
  if (aboutOpenClose === 0) {
    itemHeight("bottom-about", "60%");
    itemHeight("bottom-connect", "0");
    aboutOpenClose = 1;
    connectOpenClose = 0;
  } else {
    itemHeight("bottom-about", "0");
    aboutOpenClose = 0;
  }
}
// "connect"
function toggleConnect() {
  if (connectOpenClose === 0) {
    itemHeight("bottom-connect", "60%");
    itemHeight("bottom-about", "0");
    connectOpenClose = 1;
    aboutOpenClose = 0;
  } else {
    itemHeight("bottom-connect", "0");
    connectOpenClose = 0;
  }
}
