import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Ініціалізація бібліотеки SimpleLightbox

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
  captionDelay: 250, });
