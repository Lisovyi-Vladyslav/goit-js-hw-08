// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const mainGalarry = document.querySelector(".gallery");
const galleryMarkup = createGalarryMarkup(galleryItems);

mainGalarry.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalarryMarkup(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `
    <div class="gallery__item">
    
      <a class="gallery__item" href="${original}">
  <img class="gallery__image"
   src="${preview}"
   alt="${description}" />
</a>
    </div>`;
        })
        .join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

 lightbox.open();
