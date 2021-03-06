("use strict");

// Set current page indicator in navigation menu
setCurrentPageIndicator();

// To top button
const toTopElement = document.querySelector(".to-top__link");
scrollToTop(toTopElement);

// Scroll to top animation
toTopElement.addEventListener("click", function(e) {
  e.preventDefault();
  scrollTo(0, 1000);
});

// Scroll to theme section
setThemeLinks();

// Awesomplete - for autocompleting form fields
const inputCandidatesElement = document.querySelector(".input__text");

if (inputCandidatesElement !== null) {
  inputCandidatesElement.addEventListener("awesomplete-select", function(e) {
    const form = document.querySelector("form");
    inputCandidatesElement.value = e.text.value;
    form.submit();
  });

  const candidates = list => {
    new Awesomplete(inputCandidatesElement, {
      list,
      minChars: 2,
      maxItems: 30,
      autoFirst: true
    });
  };

  if (
    !window.location.href.indexOf("http://localhost:3000/") > -1 &&
    !window.location.href.indexOf("192.168.30.24:3000/") > -1
  ) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Clean up responseText
        const res = this.responseText.toString();
        const data = res.split("|");

        candidates(data);
      }
    };
    request.open(
      "GET",
      window.location.protocol === "https:"
        ? "https://dev2.lescommunales2018.be/generate_all.php"
        : "http://dev2.lescommunales2018.be/generate_all.php",
      true
    );
    request.send();
  } else {
    candidates(["data", "Wouter"]);
    // generateListUrl(inputCandidatesElement);
  }
}

// End awesomplete

// Clean url's in candidate table
cleanUrls();

// Show related engagement on Province page
toggleEngagementsProvinces();

// Simulate 'background: cover' with img inside .two-col-skew__skewed--image
window.addEventListener("load", setImgCover);

// Add items to filterbar => RUN THIS FUNCTION WHEN LOADING MORE NEWS ITEMS ONTO THE PAGE HAS FINISHED
setActuaFilterBarItems();
