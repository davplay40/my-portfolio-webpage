document.getElementById("about-me-btn").addEventListener("click", function () {
  addingText(this.id);
})

function addingText(id) {

  if (id === "about-me-btn") {
    document.getElementById("about-me-more").innerHTML =
      "I like making game and working out how games and other tech are made.\n" +
      "                    I can learn and program in any coding language.";
  }

}

