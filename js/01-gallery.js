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

galleryList.addEventListener('click', handleGalleryItemClick);

function handleGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageSource = event.target.dataset.source;
    const imageAlt = event.target.alt;
    const instance = basicLightbox.create(`
      <img src="${imageSource}" alt="${imageAlt}">
    `);
    instance.show();
  }
}