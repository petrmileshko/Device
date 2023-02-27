let serviceList = document.querySelectorAll('.service');
let descriptions = document.querySelectorAll('.service-description');

function serviceToggle(service) {
  service.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(service.querySelector('.service-link').getAttribute('href').slice(1));
    if (!service.classList.contains('service-current')) {
      document.querySelector('.description-current').classList.remove('description-current');
      document.querySelector('.service-current').classList.remove('service-current');
      setDescription(service.querySelector('.service-link').getAttribute('href').slice(1));
      service.classList.add('service-current');
    }
  });
}

function setDescription(id) {
  descriptions.forEach((description) => {
    if (description.getAttribute('id') == id) {
      description.classList.add('description-current');
    }
  });
}

serviceList.forEach((service) => {
  serviceToggle(service);
});
