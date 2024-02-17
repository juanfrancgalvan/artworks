document.addEventListener('DOMContentLoaded', function () {
  const imagenes = document.querySelectorAll('img');
  const modal = document.querySelector('#modal');
  const expandirImagen = document.querySelector('#expandir-imagen');
  const botonCerrar = document.querySelector('#cerrar');

  imagenes.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      expandirImagen.src = this.src;
    });
  });

  botonCerrar.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});