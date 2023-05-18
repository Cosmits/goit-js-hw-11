// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import './css/styles.css';
import { refs } from './models/data';
import onSubmitForm from './services/onSubmitForm'
import getPagesLoader from './services/getPagesLoader'

import renderSearchBtn from './markups/renderSearchBtn';
import renderGalleryTitle from './markups/renderGalleryTitle';

import debounce from 'lodash.debounce';

//* Render
renderSearchBtn(refs.SearchButton);
renderGalleryTitle(refs);

//* Listener
refs.searchForm.addEventListener("submit", onSubmitForm);
window.addEventListener("scroll", debounce(getPagesLoader, DEBOUNCE_DELAY = 50));

//* Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});

refs.lightbox = lightbox;