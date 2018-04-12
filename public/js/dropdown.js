/** Outputs selection options depending on first select options */
/** @param {string} s1 - mainCategories value */
/** @param {string} s2 - subCategories value */
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  /** If user picks Photography as mainCategory */
  if (s1.value == "photography") {
    var optionArray = [
      /** The following options will be available as a subCategory */
      "general|General",
      "urban|Urban",
      "nature|Nature",
      "portrait|Portrait"
    ];
    /** If user picks Travel as mainCategory */
  } else if (s1.value == "travel") {
    var optionArray = [
      /** The following options will be available as a subCategory */
      "general|General",
      "nature|Nature",
      "city|City"
    ];
    /** If user picks Food as mainCategory */
  } else if (s1.value == "food") {
    var optionArray = [
      /** The following options will be available as a subCategory */
      "general|General",
      "american|American",
      "european|European",
      "asian|Asian",
      "vegan|Vegan",
      "fastfood|Fast Food"
    ];
    /** If user picks Fashion as mainCategory */
  } else if (s1.value == "fashion") {
    var optionArray = [
      /** The following options will be available as a subCategory */
      "general|General",
      "men|Men",
      "women|Women"
    ];
  }
  /** Injecting HTML statements, left is the output value, right is the display value  */
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}
/** Disable and change background color of next button if form is empty */
function emptyForm() {
  var mainCategories = document.getElementById("mainCategories");
  var subCategories = document.getElementById("subCategories");
  var next = document.getElementById("next");

  var mainIndex = mainCategories.options[mainCategories.selectedIndex].value.length;
  var subIndex = subCategories.options[subCategories.selectedIndex].value.length;

  if (mainIndex > 0 && subIndex > 0) {
    next.style.backgroundColor = "#62b466";
    next.disabled = false;
  }
}
