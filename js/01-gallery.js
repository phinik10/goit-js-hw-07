import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const createGalleryItemMarkup = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
};

const galleryItemsMarkup = galleryItems
  .map(createGalleryItemMarkup)
  .join('');

galleryRef.innerHTML = galleryItemsMarkup;