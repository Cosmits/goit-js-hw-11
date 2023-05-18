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
import OnlyScroll from 'only-scrollbar';

//* OnlyScroll
const scroll = new OnlyScroll(document.scrollingElement);

//* Render
renderSearchBtn(refs.SearchButton);
renderGalleryTitle(refs);

//* Listener
refs.searchForm.addEventListener("submit", onSubmitForm);

//! Infinite scroll
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 200) {
    getPagesLoader();
  }
}
window.addEventListener("scroll", handleScroll);

//! Normal scroll
//window.addEventListener("scroll", debounce(getPagesLoader, 50));

//* Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});

refs.lightbox = lightbox;