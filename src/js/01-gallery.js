import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallryRef = document.querySelector('.gallery');

function galleryMarkup(items) {
  return items
    .map(
      item => `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}"  alt="${item.description}">
    </a></li>`
    )
    .join('');
}

const addMarkup = galleryMarkup(galleryItems);
gallryRef.insertAdjacentHTML('beforeend', addMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'alt',
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
  maxZoom: 2,
  scrollZoomFactor: 0.1,
});
