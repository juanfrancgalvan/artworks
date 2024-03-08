const covers = [
  {
    "name": "A perfect coffee",
    "cover": "/build/assets/images/cover1.webp",
  },
  {
    "name": "Isaac's monster",
    "cover": "/build/assets/images/cover2.webp",
  },
  {
    "name": "Pizza Stellar",
    "cover": "/build/assets/images/cover3.webp",
  },
  {
    "name": "Scary monsters",
    "cover": "/build/assets/images/cover4.webp",
  },
  {
    "name": "Remote work",
    "cover": "/build/assets/images/cover5.webp",
  },
  {
    "name": "Design patters",
    "cover": "/build/assets/images/cover6.webp",
  },
  {
    "name": "Preparing to migrate",
    "cover": "/build/assets/images/cover7.webp",
  },
  {
    "name": "For the power of love",
    "cover": "/build/assets/images/cover8.webp",
  },
];

function createCovers() {

  // Create covers
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

    // Show image
    section.addEventListener('click', function showImage() {
      const body = document.querySelector('body')
      const overlay = document.createElement('div')
      overlay.classList.add('overlay')
      const image = document.createElement('img')
      image.src = cover.cover
      image.alt = `${cover.name} cover`
      overlay.appendChild(image)
      body.appendChild(overlay)
      
      // Close image
      overlay.addEventListener('click', function closeImage() {
        overlay.remove()
      })
    })
  });
}
createCovers();
