/** Scroll to Get Started button */
function getStarted() {
  /** Scroll to ID #3 */
  document.getElementById("3").scrollIntoView({ behavior: "smooth" });
}

/** Scrolls to the left side of the carousel container */
function scrolltoLeft() {
  /** Initialize 'width' to device screen width */
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  /** Scroll to negative screen width on the x-axis */
  document.getElementById("carousel-container").scrollTo(-width - width, 0);
}

/** Scrolls to the right side of the carousel container */
function scrolltoRight() {
  /** Initialize 'width' to device screen width */
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  /** Scroll to screen width on the x-axis */
  document.getElementById("carousel-container").scrollTo(width + width, 0);
}

/** Reloads page for form resubmission, only works for Desktop and Laptops */
function regenerate() {
  window.location.reload();
}

/** Copy textarea to device clipboard */
function copytoClipboard() {
  var copyText = document.getElementById("generated-text");
  copyText.focus();
  /** Selects 2200 characters from 'generated-text' (Instagram caption character limit) */
  copyText.setSelectionRange(0, 2200);
  /** Executes 'Copy' command */
  document.execCommand("Copy");
}
