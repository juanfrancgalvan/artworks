function createCovers() {
  const main = document.querySelector('main');
  covers.forEach(cover => {
    const section = document.createElement('section');
    section.classList.add('cover');
    section.innerHTML = `
      <h2>${cover.name}</h2>
      <p>Lorem ipsum dolor sit</p>
      <img src="${cover.cover}" alt="${cover.name} cover">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      `;
    main.append(section);

    section.addEventListener('click', function showImage() {
      const body = document.querySelector('body')
      const overlay = document.createElement('div')
      overlay.classList.add('overlay')
      const image = document.createElement('img')
      image.src = cover.cover
      image.alt = `${cover.name} cover`
      overlay.appendChild(image)
      body.appendChild(overlay)

      overlay.addEventListener('click', function closeImage() {
        overlay.remove()
      })
    })
  });
}
createCovers();
