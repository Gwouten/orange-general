// Engagements filter
const buttons = Array.prototype.slice.call(
  document.querySelectorAll(".filter__button")
);

const engagements = Array.prototype.slice.call(
  document.querySelectorAll(".engagements__item")
);
const activeClass = "filter__button--active";

const filterEngagements = (tag, isActive) => {
  if (isActive) {
    engagements.forEach(engagement => {
      engagement.style.cssText = "";
    });
    document.querySelector(`.${activeClass}`).classList.remove(activeClass);
  } else {
    engagements.forEach(engagement => {
      engagement.style.display = "block";
      if (engagement.dataset.tag.indexOf(tag) > -1) {
        engagement.style.display = "none";
      }
    });
  }
};

const setBtnActive = () => {};

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    setBtnActive();
    const activeBtn = document.querySelector(`.${activeClass}`);
    const isTargetActive =
      Array.prototype.slice.call(e.target.classList).indexOf(activeClass) > -1;

    if (activeBtn) {
      activeBtn.classList.remove(activeClass);
    }
    e.target.classList.toggle(activeClass);
    filterEngagements(e.target.dataset.tag, isTargetActive);
  });
});
