// // Engagements filter
const buttons = Array.prototype.slice.call(
  document.querySelectorAll(".filter__button")
);
console.log(buttons);
const filterTargets = Array.prototype.slice.call(
  document.querySelectorAll(".filter__item")
);

const filterElements = tag => {
  filterTargets.forEach(engagement => {
    engagement.style.display = "block";
    if (engagement.dataset.tag.indexOf(tag) > -1) {
      engagement.style.display = "none";
    }
  });
};

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    if (
      window.location.pathname === "/les-idees.html" ||
      window.location.pathname === "/dernieres-news.html"
    ) {
      const isTargetActive = e.target.control.checked;

      if (isTargetActive) {
        setTimeout(() => {
          e.target.control.checked = false;
        }, 100);

        filterTargets.forEach(engagement => {
          engagement.style.cssText = "";
        });
      } else {
        filterElements(e.target.dataset.tag);
      }
    } else {
      window.location.assign(`les-idees.html?${e.target.dataset.tag}`);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tagFromPrevPage = window.location.search;
  if (tagFromPrevPage !== "") {
    // filter elements
    const tag = tagFromPrevPage.split("?")[1];
    filterElements(tag);

    // set filter menu button active
    buttons.forEach(btn => {
      if (btn.dataset.tag === tag) {
        btn.control.checked = true;
      } else {
        return;
      }
    });
  }
});
