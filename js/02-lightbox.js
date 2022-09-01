import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const itemEl = document.querySelector('.gallery');

const galerryEl = galleryItems.map(({preview, original, description}) =>
` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`).join('');
 
 itemEl.insertAdjacentHTML("afterbegin", galerryEl)
 const lightbox = new SimpleLightbox('.gallery a');
 console.log(lightbox);