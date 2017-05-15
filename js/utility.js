
// extra utility scripts

// populate contents on page load
function loadContentsInit() {
  $('.sidenavR').load("content/code.html");
  $('.sidenavL').load("content/art.html");
  $('#bottom-about').load("content/about.html");
  $('#bottom-connect').load("content/connect.html");
}

// adapt embedded iframe height to width
function adaptIframe() {
  $('.embedded-iframe').css("height", "500px");
  // loop
  // adaptIframe();
}
