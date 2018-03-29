var style = {
  1: "Caption\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n__________________________________________\n#hashtag1\n#hashtag2\n#hashtag3\n#hashtag4\n#hashtag5\n#hashtag6\n#hashtag7\n#hashtag8\n#hashtag9\n#hashtag10\n#hashtag11\n#hashtag12\n#hashtag13\n#hashtag14\n#hashtag15\n#hashtag16\n#hashtag17\n#hashtag18\n#hashtag19\n#hashtag20\n#hashtag21\n#hashtag22\n#hashtag23\n#hashtag24\n#hashtag25\n#hashtag26\n#hashtag27\n#hashtag28\n#hashtag29\n#hashtag30",
  2: "Caption\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n__________________________________________\n#hashtag1\n#hashtag2\n#hashtag3\n#hashtag4\n#hashtag5\n#hashtag6\n#hashtag7\n#hashtag8\n#hashtag9\n#hashtag10\n#hashtag11\n#hashtag12\n#hashtag13\n#hashtag14\n#hashtag15\n#hashtag16\n#hashtag17\n#hashtag18\n#hashtag19\n#hashtag20\n#hashtag21\n#hashtag22\n#hashtag23\n#hashtag24\n#hashtag25\n#hashtag26\n#hashtag27\n#hashtag28\n#hashtag29\n#hashtag30",
  3: "Caption\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n__________________________________________\n#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5 #hashtag6 #hashtag7 #hashtag8 #hashtag9 #hashtag10 #hashtag11 #hashtag12 #hashtag13 #hashtag14 #hashtag15 #hashtag16 #hashtag17 #hashtag18 #hashtag19 #hashtag20 #hashtag21 #hashtag22 #hashtag23 #hashtag24 #hashtag25 #hashtag26 #hashtag27 #hashtag28 #hashtag29 #hashtag30",
  4: "Caption\n•\n•\n•\n•\n•\n•\n•\n•\n•\n•\n__________________________________________\n#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5 #hashtag6 #hashtag7 #hashtag8 #hashtag9 #hashtag10 #hashtag11 #hashtag12 #hashtag13 #hashtag14 #hashtag15 #hashtag16 #hashtag17 #hashtag18 #hashtag19 #hashtag20 #hashtag21 #hashtag22 #hashtag23 #hashtag24 #hashtag25 #hashtag26 #hashtag27 #hashtag28 #hashtag29 #hashtag30"
};

var strStyle = JSON.stringify(style);
var obj = JSON.parse(strStyle);

let option = 1;

window.onload = function() {
  document.getElementById("captionStyle").value = obj[1];
  document.getElementById("captionIndex").addEventListener("click", function() {
    option = option + 1;
    if (option === 5) {
      option = 1;
    }
    document.getElementById("captionStyle").value = obj[`${option}`];
  });
};
