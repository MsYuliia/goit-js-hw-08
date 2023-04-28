// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const galleryListItem = galleryItems.map(item => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
         <img
         class="gallery__image"
         src="${item.preview}" 
         alt="${item.description}"
         />
      </a>
    </li>`;
  }).join('');
galleryList.insertAdjacentHTML('beforeend', galleryListItem);

const imgCaption = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});
