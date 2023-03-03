let prevBut = document.querySelector('.prev');
let nextBut = document.querySelector('.next');
let slides = document.querySelectorAll('.slide');
let toggles = document.querySelectorAll('.indicator-toggle');

function toggleClick(toggle,key) {
  toggle.addEventListener('click', (event)=> {
    let indexSlide;
    let indexToggle;
    event.preventDefault();
    indexToggle = toggle.getAttribute('data-toggle');

    if(!toggle.classList.contains('indicator-active')) {
      toggles.forEach((item)=>{
        if(item.classList.contains('indicator-active')) {
          item.classList.remove('indicator-active');
        }
      });
      toggle.classList.add('indicator-active');
    }

    slides.forEach((slide,key)=> {
      if(slide.classList.contains('slide-active')) {
        indexSlide =  key + 1;
        if ( indexSlide != indexToggle) {
          slide.classList.remove('slide-active');
        }
      }
    });

    if ( indexSlide != indexToggle) {
      slides[indexToggle-1].classList.add('slide-active');
    }

    if( !toggle.classList.contains('indicator-active')) {
      toggle.classList.add('indicator-active');
    }

  });
}

prevBut.addEventListener('click', (event)=> {
  event.preventDefault();
  let indexSlide;
  slides.forEach((slide,key)=> {
    if(slide.classList.contains('slide-active')) {
      slide.classList.remove('slide-active');
      indexSlide = key > 0 ? key - 1 : slides.length - 1;
    }
  });

  slides[indexSlide].classList.add('slide-active');
});

nextBut.addEventListener('click', (event)=> {
  event.preventDefault();
  let indexSlide;
  slides.forEach((slide,key)=> {
    if(slide.classList.contains('slide-active')) {
      slide.classList.remove('slide-active');
      indexSlide = key < slides.length - 1 ? key + 1 : 0;
    }
  });

  slides[indexSlide].classList.add('slide-active');
});

toggles.forEach((toggle,key)=>{
  toggleClick(toggle,key);
});
