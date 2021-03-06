/** Create caption style as objects */
var style = {
  1: "Caption\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n__________________________________________\n",
  2: "Caption\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n__________________________________________\n",
  3: "Caption\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n",
  4: "Caption\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n",
  5: "Caption\n__________________________________________\n",
  6: "Caption\n",
  7: "Caption\n•••••••••••••••••••••••••\n",
  8: "Caption\n.........................\n"
};

/** Stringify JSON objects */
var strStyle = JSON.stringify(style);
/** Parse JSON keys and values from stringified JSON objects*/
var obj = JSON.parse(strStyle);

/** Option counter */
let option = 1;

window.onload = function() {
  /** Set textarea value to first object */
  document.getElementById("captionStyle").value = obj[1];
  /** If user clicks, option increments by 1 */
  document.getElementById("increment").addEventListener("click", function() {
    option = option + 1;
    /** Set maximum options to 8 */
    if (option === 9) {
      option = 8;
    }
    document.getElementById("captionStyle").value = obj[`${option}`];
  });
  /** Set minimum options to 1 */
  document.getElementById("decrement").addEventListener("click", function() {
    option = option - 1;
    if (option === 0) {
      option = 1;
    }
    document.getElementById("captionStyle").value = obj[`${option}`];
  });
  document.getElementById("decrement-mobile").addEventListener("click", function() {
      option = option - 1;
      if (option === 0) {
        option = 1;
      }
      document.getElementById("captionStyle").value = obj[`${option}`];
    });
};
