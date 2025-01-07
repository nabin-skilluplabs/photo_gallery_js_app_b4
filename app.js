const closeButton = document.querySelector('button');
closeButton.addEventListener('click', closeModal);

function closeModal() {
  const bigImageElement = document.querySelector('.big-image');
  bigImageElement.classList.add('close');
}

const imageElements = document.querySelectorAll('.gallery img');
imageElements.forEach((image) => {
  image.addEventListener('click', showModal);
});

function showModal(event) {
  let element = event.target;
  const src = element.getAttribute('src');
  const bigImageElement = document.querySelector('.big-image img');
  bigImageElement.setAttribute('src', src);

  const bigImage = document.querySelector('.big-image');
  bigImage.classList.remove('close');
}
