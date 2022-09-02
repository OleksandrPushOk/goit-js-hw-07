import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryMarcup = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

galleryMarcup.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});





