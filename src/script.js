document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  const modal = document.querySelector('#modal');
  const expandImage = document.querySelector('#expand-image');
  const closeButton = document.querySelector('#close');

  images.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      expandImage.src = this.src;
    });
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});