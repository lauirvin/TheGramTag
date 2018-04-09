function getStarted() {
  document.getElementById("3").scrollIntoView({ behavior: "smooth" });
}

function scrolltoCard1() {
  document.getElementById("1").scrollIntoView({ behavior: "smooth" });
}

function scrolltoCard2() {
  document.getElementById("2").scrollIntoView({ behavior: "smooth" });
}

function scrolltoCard3() {
  document.getElementById("3").scrollIntoView({ behavior: "smooth" });
}

function regenerate() {
  window.location.reload();
}

function copytoClipboard() {
  var copyText = document.getElementById("generated-text");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied to clipboard");
}