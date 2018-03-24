function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if (s1.value == "photography") {
    var optionArray = [
      "|",
      "general|General",
      "urban|Urban",
      "nature|Nature",
      "portrait|Portrait"
    ];
  } else if (s1.value == "travel") {
    var optionArray = [
      "|",
      "general|General",
      "nature|Nature",
      "city|City"
    ];
  } else if (s1.value == "food") {
    var optionArray = [
        "|", 
        "general|General",
        "american|American",
        "european|European",
        "asian|Asian",
        "vegan|Vegan",
        "fastfood|Fast Food"
    ];
  } else if (s1.value == "fashion") {
  var optionArray = [
      "|",
      "general|General",
      "men|Men",
      "women|Women",
  ];
}
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}
