var style = {
  1: "Caption\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n__________________________________________\n",
  2: "Caption\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n__________________________________________\n",
  3: "Caption\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n",
  4: "Caption\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n",
  5: "Caption\n__________________________________________\n",
  6: "Caption\n",
  7: "Caption\n•••••••••••••••••••••••••\n",
  8: "Caption\n.........................\n",
};

var strStyle = JSON.stringify(style);
var obj = JSON.parse(strStyle);

let option = 1;

window.onload = function() {
  document.getElementById("captionStyle").value = obj[1];
  document.getElementById("increment").addEventListener("click", function() {
    option = option + 1;
    if (option === 9) {
      option = 8;
    }
    document.getElementById("captionStyle").value = obj[`${option}`];
  });
  document.getElementById("decrement").addEventListener("click", function() {
    option = option - 1;
    if (option === 0) {
      option = 1;
    }
    document.getElementById("captionStyle").value = obj[`${option}`];
  });
};
