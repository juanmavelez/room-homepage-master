/* Used for the nav function*/
const burgerNavbutton = document.getElementsByClassName('header__hamburger__container');
const closeNavButton = document.getElementsByClassName('header__nav__close__container');
const headerNav = document.getElementsByClassName('header__nav');
const main = document.getElementsByClassName('main');

/* variables used for the slider function*/
const sliderLeft = document.getElementsByClassName('slider--left');
const sliderRight = document.getElementsByClassName('slider--right');

/**
 * Opens the Nav once the user clicks the burger
 */
const openNav = () => {
  nav[0].style.display = 'flex';
  main[0].style.background = 'rgba(0, 0, 0, 0.65)';
  main[0].style.filter = 'brightness(0.4)';
  burgerNavbutton[0].style.display = 'none';
  burgerNavbutton[0].removeEventListener('click', openNav, false);
  closeNavButton[0].addEventListener('click', closeNav, false);
};

/**
 * Closes the nav once the user clicks the close icon
 */
const closeNav = () => {
  nav[0].style.display = 'none';
  burgerNavbutton[0].style.display = 'block';
  main[0].style.filter = 'brightness(1)';
  main[0].style.background = 'rgba(255, 255, 255, 1)';
  closeNavButton[0].removeEventListener('click', closeNav, false);
  burgerNavbutton[0].addEventListener('click', openNav, false);
};
/**
 * Adds to the section a style display=block
 * @param {*} section
 */
const visibleSlider = (section) => {
  section.style.display = 'grid';
};

/**
 * Adds to the section a style display=none
 * @param {*} section
 */
const hideSlider = (section) => {
  section.style.display = 'none';
};

/**
 *  Moves the array scoped in the switchSlider one position forward
 */
const nextSlider = (sectionArray) => {
  for (let i = sectionArray.length - 1; i >= 0; i--) {
    if (i === sectionArray.length - 1) {
      console.log(sectionArray[0]);
      console.log(sectionArray[i]);
      hideSlider(sectionArray[0]);
      visibleSlider(sectionArray[i]);
      storage = sectionArray[i];
      sectionArray[i] = sectionArray[i - 1];
    } else if (i === 0) {
      sectionArray[i] = storage;
    } else {
      sectionArray[i] = sectionArray[i - 1];
    }
  }
};

/**
 *  Moves the array scoped in the switchSlider one position backwards
 */
const beforeSlider = (sectionArray) => {
  for (let i = 0; i < sectionArray.length; i++) {
    if (i === 0) {
      hideSlider(sectionArray[i]);
      storage = sectionArray[i];
      sectionArray[i] = sectionArray[i + 1];
      visibleSlider(sectionArray[i]);
    } else if (i === sectionArray.length - 1) {
      sectionArray[i] = storage;
    } else {
      sectionArray[i] = sectionArray[i + 1];
    }
  }
};

/**
 *  Creates a constant that will mutate depending the value that is recived
 */
const switchSlider = (value) => {
  const section1 = document.getElementById('section__1');
  const section2 = document.getElementById('section__2');
  const section3 = document.getElementById('section__3');
  let sectionArray = [section1, section2, section3];
  return {
    switcher: (value) => {
      let storage = 0;
      if (value === 'next') {
        nextSlider(sectionArray);
      } else if (value === 'back') {
        beforeSlider(sectionArray);
      } else {
        console.log('Slider is providing a wrong option');
      }
    },
  };
};

// Listeners
/* ExlementByclass brings back an array, so it is requite to use the first element to add the listener */
const a = switchSlider();
burgerNavbutton[0].addEventListener('click', openNav, false);

sliderLeft[0].addEventListener(
  'click',
  function () {
    a.switcher('next');
  },
  false
);
sliderRight[0].addEventListener(
  'click',
  function () {
    a.switcher('back');
  },
  false
);
