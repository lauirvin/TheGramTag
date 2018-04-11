function getStarted() {
  document.getElementById("3").scrollIntoView({ behavior: "smooth" });
}

function scrolltoLeft() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  document.getElementById("carousel-container").scrollTo(-width - width, 0);
}

function scrolltoRight() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  document.getElementById("carousel-container").scrollTo(width + width, 0);
}

function regenerate() {
  window.location.reload();
}

function copytoClipboard() {
  var copyText = document.getElementById("generated-text");
  copyText.focus();
  copyText.setSelectionRange(0, 2200);
  document.execCommand("Copy");
}
