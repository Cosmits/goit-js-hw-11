function renderGalleryItems(data, galleryDiv, page) {
  const galleryItems = data.map(
    card => `
        <li class='gallery__item' data-id="${card.id}">
          <a class="gallery__link" href="${card.largeImageURL}">
            <img class="gallery__image" src="${card.webformatURL}" alt="${card.tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes:</b> <br>${card.likes}</p>
              <p class="info-item"><b>Views:</b> <br>${card.views}</p>
              <p class="info-item"> <b>Comments:</b> <br>${card.comments}</p>
              <p class="info-item"> <b>Downloads:</b> <br>${card.downloads} </p>
            </div>
          </a>
        </li>`
  ).join('');

  if (page === 1) galleryDiv.innerHTML = galleryItems
  else galleryDiv.insertAdjacentHTML('beforeend', galleryItems);

}

export default renderGalleryItems;
