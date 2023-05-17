// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import './css/styles.css';
import { refs } from './models/data';
import onSubmitForm from './services/onSubmitForm'
import renderSearchBtn from './markups/renderSearchBtn';

renderSearchBtn(refs.SearchButton);

const titleH1 = `<h1 class="gallery__title"></h1>`;
refs.galleryDiv.insertAdjacentHTML('beforebegin', titleH1);
refs.titleH1 = document.querySelector('.gallery__title');

refs.searchForm.addEventListener("submit", onSubmitForm);

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});

refs.lightbox = lightbox;