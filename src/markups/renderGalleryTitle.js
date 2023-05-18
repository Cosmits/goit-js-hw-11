function renderGalleryTitle(refs) {
 
  const titleH1 = `<h1 class="gallery__title"></h1>`;
  refs.galleryDiv.insertAdjacentHTML('beforebegin', titleH1);
  refs.titleH1 = document.querySelector('.gallery__title');

  const titleH1TheEnd = `<h1 class="gallery__title__the__end"></h1>`;
  refs.galleryDiv.insertAdjacentHTML('afterend', titleH1TheEnd);
  refs.titleH1TheEnd = document.querySelector('.gallery__title__the__end');


}

export default renderGalleryTitle;