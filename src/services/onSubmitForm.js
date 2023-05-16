import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from '../models/data';
import getImages from './getImages';
import renderGalleryItems from '../markups/renderGalleryItems';

// Описаний в документації
import SimpleLightbox from "simplelightbox";


async function onSubmitForm(event) {

  event.preventDefault();

  const str = event.target[0].value.trim();

  refs.searchForm.reset();

  if (!str) return;

  const data = await getImages(str)
    .then(({ data: { hits, totalHits }, config: { params: { page } } }) => {

      if (!hits.length) {
        Notify.failure(`Sorry, there are no images matching your search query. Please try again.`);
        return;
      }

      if (page === 1) Notify.success(`Hooray! We found ${totalHits} images.`);

      renderGalleryItems(hits, refs);

      refs.lightbox.refresh('changed.simplelightbox', function (e) {
        console.log(e); // some usefull information
      });
      // console.log(page);

    })
    .catch(Notify.failure);

  refs.searchForm.reset();

}


export default onSubmitForm;