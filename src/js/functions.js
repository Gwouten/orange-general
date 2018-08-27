// Animated scrolling
const scrollTo = function(to, duration) {
  const element = document.scrollingElement /*|| document.documentElement*/,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    animateScroll = function() {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
};

// Scroll to theme section
const setThemeLinks = function() {
  const themesLinks = Array.prototype.slice.call(
    document.querySelectorAll(".carousel--themes a")
  );
  if (themesLinks !== null) {
    themesLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        let headerHeight = -160;
        if (windowWidth < 975) {
          headerHeight = 100;
        }
        const id = e.target.href.split("#")[1];
        const target = document.querySelector(`#${id}`);
        const dist =
          target.offsetTop - target.scrollTop + target.clientTop - headerHeight;
        scrollTo(dist, 1000);
      });
    });
  }
};

// Siema slider
function siema(
  element,
  autoplay = true,
  draggable = true,
  interval = 5000,
  smallCount = 2,
  medCount = 3,
  largeCount = 4,
  startIndex = 0
) {
  const sliderContainer = document.querySelector(`.${element}`);
  let sliderButtons = [];

  function setActiveButton() {
    if (sliderButtons.length) {
      const activeClass = "carousel--pagination__button--fill";
      const slide = this.currentSlide;

      document.querySelector(`.${activeClass}`).classList.remove(activeClass);
      sliderButtons[slide].classList.add(activeClass);
    }
  }

  if (sliderContainer !== null) {
    const slider = new Siema({
      selector: `.${element}`,
      duration: 1000,
      easing: "ease-in-out",
      perPage: {
        600: smallCount,
        900: medCount,
        1200: largeCount
      },
      loop: true,
      draggable,
      onChange: setActiveButton
    });

    if (!sliderContainer.classList.contains("carousel--pagination")) {
      // Create next/prev buttons
      Siema.prototype.createButtons = function(element) {
        const nextButton = document.createElement("button");
        nextButton.classList.add("btn");
        nextButton.classList.add("btn--carousel");
        nextButton.classList.add("carousel__next");
        nextButton.classList.add(`${element}__next`);
        sliderContainer.appendChild(nextButton);

        const prevButton = document.createElement("button");
        prevButton.classList.add("btn");
        prevButton.classList.add("btn--carousel");
        prevButton.classList.add("carousel__prev");
        prevButton.classList.add(`${element}__prev`);
        sliderContainer.appendChild(prevButton);

        // callback to bind functionality to buttons
        slider.bindButtons(element);
      };

      // Make buttons work
      Siema.prototype.bindButtons = function(element) {
        const carouselPrev = document.querySelector(`.${element}__prev`);
        const carouselNext = document.querySelector(`.${element}__next`);

        carouselPrev.addEventListener("click", () => slider.prev());
        carouselNext.addEventListener("click", () => slider.next());
      };

      slider.createButtons(element);
      window.addEventListener("resize", () => {
        slider.createButtons();
      });
    } else {
      // setup pagination buttons
      Siema.prototype.addPagination = function() {
        const innerElements = Array.prototype.slice.call(this.innerElements);
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("carousel--pagination__buttons");
        sliderContainer.appendChild(buttonContainer);

        innerElements.forEach((innerElement, i) => {
          const pageButton = document.createElement("button");
          pageButton.classList.add("carousel--pagination__button");
          pageButton.addEventListener("click", () => this.goTo(i));
          sliderButtons.push(pageButton);
          buttonContainer.appendChild(pageButton);
          if (i === 0) {
            pageButton.classList.add("carousel--pagination__button--fill");
          }
        });
      };

      slider.addPagination();
    }

    if (autoplay) {
      let autoSlide = setInterval(function() {
        slider.next();
      }, interval);

      sliderContainer.addEventListener("mouseenter", () =>
        clearInterval(autoSlide)
      );
      sliderContainer.addEventListener(
        "mouseleave",
        () =>
          (autoSlide = setInterval(function() {
            slider.next();
          }, interval))
      );
    }
  }
}

// Scroll to top animation
const scrollToTop = function(el) {
  window.addEventListener("scroll", () => {
    let timeout = false;
    const delay = 250;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const fromTop = window.scrollY;
      if (fromTop < 200) {
        el.classList.remove("to-top__link--visible");
      } else if (fromTop >= 200) {
        el.classList.add("to-top__link--visible");
      }
    }, delay);
  });
};

// helper function for setCurrentPageIndicator
const setActiveItem = (array, tag, newClass) => {
  array.forEach(item => {
    if (item.innerText.toLowerCase().indexOf(tag.toLowerCase().trim()) > -1) {
      item.classList.add(`${newClass}--active`);
    }
  });
};

// Indicate current page in navigation
const setCurrentPageIndicator = () => {
  const pageTags = document.querySelector("body").dataset.current.split(",");
  const interiorLinks = Array.prototype.slice.call(
    document.querySelectorAll(".header__interior-links__item")
  );

  // mark current active page in interior links menu
  setActiveItem(interiorLinks, pageTags[0], "header__interior-links__item");

  // mark current active item in subnav menu
  if (document.querySelector(".subnav")) {
    const subnavItems = Array.prototype.slice.call(
      document.querySelectorAll(".subnav__item")
    );
    setActiveItem(subnavItems, pageTags[1], "subnav__item");
  }
};

// clean candidat page urls
const cleanUrls = () => {
  const candidatUrls = Array.prototype.slice.call(
    document.querySelectorAll(".table a")
  );
  if (candidatUrls !== null) {
    candidatUrls.forEach(link => {
      link.innerText = link.innerText
        .replace(/(http)s?\:\/\//gi, "")
        .replace(/\?.*/gi, "")
        .replace(/\/$/gi, "");
    });
  }
};

// Detect portrait or landscape images
const detectImageOrientation = () => {
  const images = Array.prototype.slice.call(
    document.querySelectorAll(".two-col-skew__skewed--image > img")
  );
  if (images.length !== 0) {
    images.forEach(image => {
      const width = image.naturalWidth;
      const height = image.naturalHeight;
      if (height > width) {
        image.classList.add("align-top");
      }
    });
  }
};

// Show Popups
const toggleEngagementsProvinces = () => {
  const engagementContainer = document.querySelector(".engagement");
  const engagementButtons = Array.prototype.slice.call(
    document.querySelectorAll(
      ".section-communales__ordered-list__item--province"
    )
  );
  if (engagementContainer !== null) {
    // Remove child element with fade-out animation
    const removeChild = element => {
      element.classList.add(`${element.classList[0]}--close`);
      element.addEventListener("animationend", () => {
        engagementContainer.removeChild(element);
      });
    };

    engagementButtons.forEach((engagement, index) => {
      engagement.addEventListener("click", () => {
        // Remove currently visible block
        const activeEngagement = document.querySelector(".engagement__active");
        if (activeEngagement !== null) {
          activeEngagement.classList.remove("engagement__active");
        }

        // Add class to show corresponding block
        const currentEngagement = document.querySelector(
          `#engagement${index + 1}`
        );
        currentEngagement.classList.add("engagement__active");

        // Add background and close button on open and remove it when closing
        // - Background
        const background = document.createElement("div");
        engagementContainer.appendChild(background);
        background.classList.add("engagement__background");

        // - Close button
        const setY = element =>
          `${element.offsetTop - element.offsetHeight / 2}px`;
        const setX = element =>
          `${10 + element.offsetLeft + element.offsetWidth / 2}px`;
        const closeButton = document.createElement("button");
        engagementContainer.appendChild(closeButton);
        closeButton.classList.add("engagement__close-btn");
        closeButton.innerText = "X";
        closeButton.style.top = setY(currentEngagement);
        closeButton.style.left = setX(currentEngagement);

        window.addEventListener("resize", () => {
          closeButton.style.top = setY(currentEngagement);
          closeButton.style.left = setX(currentEngagement);
        });

        engagementContainer.addEventListener("click", e => {
          if (
            e.target.id === currentEngagement.id ||
            e.target.parentNode.id === currentEngagement.id ||
            e.target.classList.contains("engagement__background") ||
            e.target.classList.contains("engagement__close-btn")
          ) {
            currentEngagement.classList.remove("engagement__active");

            // Remove background
            removeChild(background);

            // Remove close button
            removeChild(closeButton);
          }
        });
      });
    });
  }
};

// Set up the images in the header of .two-col-skew elements so they always fill their parent element proportionally, like background-size: cover
const setImgCover = () => {
  const images = Array.prototype.slice.call(
    document.querySelectorAll(".two-col-skew__skewed--image img")
  );

  images.forEach(image => {
    if (window.innerWidth > 975) {
      const parent = image.parentNode;
      const reductionFactor = parent.clientWidth / image.width;

      if (image.height * reductionFactor < parent.clientHeight) {
        image.style.height = "100%";
        image.style.width = "auto";
      } else {
        image.style.height = "auto";
        image.style.width = "110%";
      }
    } else {
      image.style.cssText = "";
    }
  });
};
