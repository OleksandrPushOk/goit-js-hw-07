import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const itemEl = document.querySelector('.gallery');

const galleryEl = galleryItems
.map(({ preview, description, original }) =>
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`)
.join('');

itemEl.insertAdjacentHTML('beforeend', galleryEl)

itemEl.addEventListener('click', onClickImage)

function onClickImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
     return;
    }

    const modal =  basicLightbox.create(
        `<img src="${event.target.dataset.sourse}" width="800" height="600">`,
    
        {
            onShow:() => window.addEventListener('keydown', onEscPress),
            onclose:() => window. removeEventListener('keydown', onEscPress),
        }
    );

    modal.show()

    function onEscPress(event) {
        if (event.code === 'Escape') {
            modal.close();
        }
    }
}

