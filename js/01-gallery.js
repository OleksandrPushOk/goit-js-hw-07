import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryMarcup = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
).join('');

galleryMarcup.insertAdjacentHTML('beforeend', galleryEl);

galleryMarcup.addEventListener('click', onClickImage);

function onClickImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    }
    
    const modal = basicLightbox.create(
`<img src="${event.target.dataset.source}" width='800' height='600'>`,

   {
     onShow: () =>  window.addEventListener('keydown', onEscPress),
     onClose: () => window.removeEventListener('keydown', onEscPress),
   }
);

modal.show();

function onEscPress(event) {
    if(event.code === 'Escape') {
        modal.close();
    }
  }
}



