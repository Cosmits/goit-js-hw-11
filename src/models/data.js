export const refs = {
  searchForm: document.getElementById('search-form'),
  searchQueryInput: document.querySelector('.search-form input'),
  SearchButton: document.querySelector('.search-form button'),
  galleryDiv: document.querySelector('.gallery'),
}

// https://pixabay.com/api/?key=36447145-713fd0865ba966cc8244c878c&q=cats&image_type=photo&orientation=horizontal&safesearch=true

export const URL_API = 'https://pixabay.com/api/';
export const API_key = '36447145-713fd0865ba966cc8244c878c';

export const anySearchParam = {
  currentPage: 0,
  currentQuery: "",
  isDone: false,
} 