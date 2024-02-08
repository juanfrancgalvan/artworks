document.addEventListener('DOMContentLoaded', function () {
  const galleryImages = document.querySelectorAll('img');
  const modal = document.getElementById('modal');
  const expandedImage = document.getElementById('expand-image');
  const closeButton = document.getElementById('close');

  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      expandedImage.src = this.src;
    });
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});