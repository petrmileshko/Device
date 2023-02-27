let modal = document.querySelector('.modal-overlay');
let delivery = document.querySelector('.delivery-button');
let closeButon = document.querySelector('.modal-close');

delivery.addEventListener( 'click', (event)=> {
  event.preventDefault();
  modal.classList.add('modal-open');
});

closeButon.addEventListener( 'click', (event)=> {
  event.preventDefault();
  modal.classList.remove('modal-open');
});
