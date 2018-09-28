// Engagements filter
const buttons = Array.prototype.slice.call(
  document.querySelectorAll(".filter__button")
);

const filterTargets = Array.prototype.slice.call(
  document.querySelectorAll(".filter__item")
);
const filterElements = tag => {
  filterTargets.forEach(target => {
    target.style.display = "none";
    if (target.dataset.tag.indexOf(tag) > -1) {
      target.style.display = "block";
    }
  });
};

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    if (
      window.location.pathname === "/idees" ||
      window.location.pathname === "/dernieres-news" ||
      window.location.pathname === "/communiques" ||
      window.location.pathname === "/les-idees.html" ||
      window.location.pathname === "/dernieres-news.html" ||
      window.location.pathname === "/communiques.html"
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
      window.location.assign(
        `${window.location.origin}/idees?${e.target.dataset.tag}`
      );
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
