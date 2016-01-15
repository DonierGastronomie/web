onload = function() {
  // http://stackoverflow.com/questions/8291517/disable-hover-effects-on-mobile-browsers
  var el = document.getElementById("menu-label");
  function setActive() {
    console.log("asdf");
    el.className = "active";
  }
  function setInactive() {
    el.className = "inactive";
  }
  el.addEventListener("touchstart", setActive);
  el.addEventListener("mouseenter", setActive);
  el.addEventListener("mouseleave", setInactive);
  el.addEventListener("touchmove", setInactive);
  el.addEventListener("click", setInactive);
}
