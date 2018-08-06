("use strict");

// Set current page indicator in navigation menu
setCurrentPageIndicator();

// Rotate slogan
const phrases = ["des communes", "des provinces"];
const headline = new RotateSlogan(phrases, "rw", 6000);

headline.rotatePhrases();
// End rotate slogan

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

// Check what list to use based on data-source attribute
// const generateListUrl = element => {
//   const source = element.dataset.source;
//   switch (source) {
//     case "all":
//       console.log("http://dev2.lescommunales2018.be/generate_all.php");
//       return "http://dev2.lescommunales2018.be/generate_all.php";
//     case "candidats":
//       console.log("http://dev2.lescommunales2018.be/generate_candidats.php");
//       return "http://dev2.lescommunales2018.be/generate_candidats.php";
//     case "communes":
//       console.log("http://dev2.lescommunales2018.be/generate_cp.php");
//       return "http://dev2.lescommunales2018.be/generate_cp.php";
//     case "provinces":
//       console.log("http://dev2.lescommunales2018.be/generate_all.php");
//       return "http://dev2.lescommunales2018.be/generate_all.php";
//     default:
//       console.log("default");
//       return "http://dev2.lescommunales2018.be/generate_all.php";
//   }
// };

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
        ? "https://dev2.lescommunales2018.be/generate_all.php" // for production, replace 'dev2' with 'www"
        : "http://dev2.lescommunales2018.be/generate_all.php", // for production, replace 'dev2' with 'www"
      true
    );
    request.send();
  } else {
    candidates(["data", "Wouter"]);
    // generateListUrl(inputCandidatesElement);
  }
}

// End awesomplete

// Set margin for u-wrapper--followed-by-quote
let windowWidth = window.innerWidth;

const getMargin = function(width) {
  return (width - 1000) / 2;
};

const setQuoteHeight = function(element, height) {
  element.parentNode.children[0].style.paddingTop = `${height}px`;
};

const setQuoteMargin = () => {
  const element = document.querySelector(".u-wrapper--followed-by-quote");
  if (element !== null) {
    if (windowWidth >= 1200) {
      element.style.marginLeft = `${getMargin(windowWidth)}px`;
    } else if (windowWidth < 975) {
      element.style.marginLeft = `auto`;
    } else {
      return;
    }
  }
};

// Setup textblock when preceded by quoteblock element
const setTextblockSize = function(element) {
  if (windowWidth >= 1200) {
    element.style.marginRight = `${getMargin(windowWidth)}px`;
  } else if (1200 > windowWidth && windowWidth >= 975) {
    const siblingWidth = document.querySelector(".candidate-body__textblock")
      .offsetWidth;
    element.style.width = `${siblingWidth}px`;
  }

  setQuoteHeight(element, element.offsetHeight);
};

const onLoad = function() {
  const textAfterQuote = document.querySelector(
    ".quoteblock + .candidate-body__textblock"
  );

  if (textAfterQuote !== null) {
    if (windowWidth >= 975) {
      setQuoteMargin();
      setTextblockSize(textAfterQuote);
    } else {
      textAfterQuote.style.cssText = "";
      setQuoteHeight(textAfterQuote, textAfterQuote.offsetHeight);
    }
  }
};
document.addEventListener("DOMContentLoaded", onLoad());
window.addEventListener("resize", function() {
  windowWidth = window.innerWidth;
  let timeout;
  const delay = 250;

  clearTimeout(timeout);
  timeout = setTimeout(onLoad(), delay);
});

// Clean url's in candidate table
cleanUrls();

// Show related engagement on Province page
toggleEngagementsProvinces();

// set up commune header images

setCommuneImages();
window.addEventListener("resize", setCommuneImages);
