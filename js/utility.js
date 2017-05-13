var menu_item = null;
var menu_subitem = null;

// navigation menu
$('#site-menu-items').click(function(event) {
  event.preventDefault();
  $.ajax(this.href, {
    success: function() {
      if (event.target.id != "" && event.target.id != "site-menu-items") {
        $( ".site-menu-subitems" ).load( "../contents.html #" + event.target.id );
        $( ".main-content" ).load( "../contents.html #base" );
        menu_item = event.target.id;
        menu_subitem = null;
        //load at top
        $("main-content").scrollTop(0);
        //push if target isn't same as current page
        if (window.location.pathname.split( '/' ).pop() != menu_item) {
          window.history.pushState(
            {url: "" + menu_item + ""},
            menu_item,
            "/" + menu_item);
        }
        //pop
        window.onpopstate = function() {
          loadpage();
        };
      }
    }
  });
});


// navigation submenu
$('#site-menu-subitems').click(function(event) {
  event.preventDefault();
  $.ajax(this.href, {
    success: function() {
      if (event.target.id != "" && event.target.id != "site-menu-subitems") {
        $( ".main-content" ).load( "../contents.html #" + menu_item + "-" + event.target.id );
        menu_subitem = event.target.id;
        //scroll to top
        $("main-content").scrollTop(0);
        //push if target isn't same as current page
        if (window.location.pathname.split( '/' ).pop() != menu_subitem) {
          window.history.pushState(
            {url: "" + menu_subitem + ""},
            menu_subitem,
            "/" + menu_item + "/" + menu_subitem);
        }
        //pop
        window.onpopstate = function() {
          loadpage();
        };
      }
    }
  });
});

function loadpage() {
  var segment_str = window.location.pathname;
  var segment_array = segment_str.split( '/' );
  var last_segment = segment_array.pop();

  if (segment_array.length == 1) {//goes to title or menu
    if (last_segment == "" || last_segment == null) {//title
      menu_item = null;
      menu_subitem = null;
      $('.site-menu-subitems').load("../contents.html #empty");
      $( ".main-content" ).load( "../contents.html #site-title" );
    } else {//menu
      menu_item = last_segment;
      menu_subitem = null;
      $('.site-menu-subitems').load("../contents.html #" + menu_item);
      $( ".main-content" ).load( "../contents.html #base");
    }
  } else {
    if (segment_array.length == 2) {
      menu_item = segment_array[1];
      menu_subitem = last_segment;
      $('.site-menu-subitems').load("../contents.html #" + menu_item);
      $( ".main-content" ).load( "../contents.html #" + menu_item + "-" + menu_subitem);
    }
  }
}
