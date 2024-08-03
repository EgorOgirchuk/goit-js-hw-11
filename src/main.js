import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesFromPixabay } from './js/pixabay-api';
import { render } from './js/render-functions';

document.querySelector('#search-form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.loader').style.display = 'block';
  let query = document.querySelector('.search').value;

  getImagesFromPixabay(query).then(response => {
    const images = response.hits;

    document.querySelector('.loader').style.display = 'none';
    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    let gallery = document.querySelector('.gallery');
    document.querySelector('.search').value = '';

    gallery.innerHTML = render(images);

    const lightbox = new SimpleLightbox('.gallery a', {
      captionDelay: 250,
    });
  });
});
