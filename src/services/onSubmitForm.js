import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs, anySearchParam } from '../models/data';
import getImages from '../api/getImages';
import renderGalleryItems from '../markups/renderGalleryItems';

const changeTitleH1 = (str, totalHits) => {
  refs.titleH1.textContent = str;
  refs.titleH1.insertAdjacentHTML('beforeend', `<sup style="font-size: initial;">  ${totalHits} img</sup>`)
};

const changeTitleH1TheEnd = str => (refs.titleH1TheEnd.textContent = str);

function onSubmitForm(event) {

  event.preventDefault();

  const str = event.target[0].value.trim();

  refs.searchForm.reset();

  if (!str) return;

  getImages(str)
    .then(({ data: { hits, totalHits }, config: { params: { page } } }) => {

      if (!hits.length) throw new Error(`Sorry, there are no images matching your search query. Please try again.`);

      if (page === 1) Notify.success(`Hooray! We found ${totalHits} images.`);
      anySearchParam.currentPage = page;
      anySearchParam.currentQuery = str;

      changeTitleH1(str, totalHits);

      renderGalleryItems(hits, refs.galleryDiv, page);

      refs.lightbox.refresh('changed.simplelightbox');

      if (hits.length < 40) {
        anySearchParam.isDone = true;
        changeTitleH1TheEnd('The End');
      } else {
        anySearchParam.isDone = false;
        changeTitleH1TheEnd('');
      }
    })
    .catch((err) => Notify.failure(err.message));

  refs.searchForm.reset();

}

export default onSubmitForm;