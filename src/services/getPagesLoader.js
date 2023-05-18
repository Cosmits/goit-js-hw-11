

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs, anySearchParam } from '../models/data';
import getImages from '../api/getImages';
import renderGalleryItems from '../markups/renderGalleryItems';

async function getPagesLoader(event) {

  const { currentQuery: str, currentPage: page, isDone: isDone } = anySearchParam;
  const changeTitleH1TheEnd = str => (refs.titleH1TheEnd.textContent = str);

  // console.log(event);

  if (isDone) return;

  await getImages(str, page + 1)
    .then(({ data: { hits, totalHits }, config: { params: { page } } }) => {

      if (!hits.length) {
        anySearchParam.isDone = true;
        changeTitleH1TheEnd('The End');
        throw new Error(`All ${totalHits} was loaded successfully`);
      }

      anySearchParam.currentPage = page;
      anySearchParam.currentQuery = str;

      renderGalleryItems(hits, refs.galleryDiv, page);

      refs.lightbox.refresh('changed.simplelightbox');

    })
    .catch((err) => Notify.info(err.message));

}

export default getPagesLoader;