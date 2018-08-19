var PAGETYPE_WATCH = "watch";
var PAGETYPE_HOME = "home";

window.setInterval(function() {
  if (pageType() == PAGETYPE_HOME) {
    // Remove the pages of recommendations
    var content = document.getElementById("primary")
    if (content) {
      content.innerHTML = mainPageHTML()
    }

    var guides = document.querySelector("ytd-guide-renderer")
    if (guides) {
      guides.innerHTML = ""
    }
  }

  if (pageType() == PAGETYPE_WATCH) {
    // Remove the side bar
    var sideItem = document.querySelector("ytd-watch-next-secondary-results-renderer")
    if (sideItem) {
      sideItem.innerHTML = ""
    }

    // Remove the comment section
    var comments = document.querySelector("ytd-comments")
    if (comments) {
      comments.innerHTML = ""
    }
  }
}, 100)

function pageType() {
  var href = window.location.href;
  if (href.includes("/watch?")) {
    return PAGETYPE_WATCH
  }
  if (window.location.pathname.split("/").length <= 2) {
    return PAGETYPE_HOME
  }
}

function mainPageHTML() {
  return `
  <div>
    <h3 style="text-align: center;">You probably didn't come here to waste the next hour of your life.</h3>
    <h4 style="text-align: center;">Please try to think of what you came here for, write that in the search box above, find your vidoe, and learn something new.</h4>
    <div>Probably the only things that should be clicked on that appear on this page:</div>
    <ul>
      <li><a href="/feed/history">History</a></li>
      <li><a href="/account">Account</a></li>
    </ul>
  </div>
  `
}
