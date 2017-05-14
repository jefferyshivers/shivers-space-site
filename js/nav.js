
var menuOpenClose = 0;
var aboutOpenClose = 0;
var connectOpenClose = 0;

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
  } else {
    // close the menu
    itemWidth("leftnav", "0");
    itemWidth("rightnav", "0");
    menuOpenClose = 0;
    presentSidebars("none");
  }
}

$(document).ready(function(){
   $("#header-title a").mouseover(function(){
       $(".topdrop").css("height", "calc(100% - 94px)");
       $(".topdrop").css("background-color", "rgba(1,1,1,0.5)");

   });
   $("#header-title a").mouseout(function(){
       $(".topdrop").css("height", "0px");
   });
});

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
