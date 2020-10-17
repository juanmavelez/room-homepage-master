/* Used for the nav in the header */
const burgerNavbutton = document.getElementsByClassName('header__hamburger__container');
const closeNavButton = document.getElementsByClassName('header__nav__close__container');
const header = document.getElementsByClassName('header__nav');

/* used for the slider */

const section1 = document.getElementById('section__1');
const section2 = document.getElementById('section__2');
const section3 = document.getElementById('section__3');
const sliderLeft = document.getElementsByClassName('slider--left');
const sliderRight = document.getElementsByClassName('slider--right');

/**
 * Opens the Nav once the user clicks the burger
 */
const openNav = () => {
  header[0].style.display = 'flex';
  burgerNavbutton[0].removeEventListener('click', openNav, false);
  closeNavButton[0].addEventListener('click', closeNav, false);
};

/**
 * Closes the nav once the user clicks the close icon
 */
const closeNav = () => {
  header[0].style.display = 'none';
  closeNavButton[0].removeEventListener('click', closeNav, false);
  burgerNavbutton[0].addEventListener('click', openNav, false);
};

const visibleSlider = (section) => {
  section[0].style.display = 'block';
};
const hideSlider = (section) => {
  section.style.display = 'none';
};

const switchSlider = (value) => {
  let sectionArray [ section1, section2, section3 ];
  const switcher = (value) =>{
    let storage;
    if (value === 'next') {
      for (let i = 0; i < sectionArray.length; i++){
          storage = sectionArray[i+1]
          sectionArray[i+1] = sectionArray[i]
        }

      }
    }
  }
};

// Listeners
/* ElementByclass brings back an array, so it is requite to use the first element to add the listener */
burgerNavbutton[0].addEventListener('click', openNav, false);
sliderLeft[0].addEventListener(
  'click',
  function () {
    switchSlider('next');
  },
  false
);
sliderRight[0].addEventListener(
  'click',
  function () {
    switchSlider('back');
  },
  false
);
