import { galleryItems } from './gallery-items.js';
// Change code below this line

const commonDivEl = document.querySelector('.gallery')


galleryItems.forEach(element => {
 
    let markup = `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`
    commonDivEl.insertAdjacentHTML('beforeend',markup)
})

const gettingLargePictureHandler = (event) => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
       return
    } 
  const url = event.target.dataset.source
  

const instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`)

instance.show()
}


commonDivEl.addEventListener('click',gettingLargePictureHandler)