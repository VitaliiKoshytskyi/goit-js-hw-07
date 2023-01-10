import { galleryItems } from './gallery-items.js';
// Change code below this line



const listEl = document.querySelector('.gallery')

galleryItems.forEach(element => {
 
    let markup = `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`
    listEl.insertAdjacentHTML('beforeend',markup)
})


    const lightbox = new SimpleLightbox('.gallery a', {captionsData :'Alt',captionDelay:250 });






