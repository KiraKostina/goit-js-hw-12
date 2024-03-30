import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { Spinner } from "spin.js";

import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-gallery');
const target = document.querySelector('.js-backdrop');
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
const loadMorebtn = document.querySelector('.js-load-more');


form.addEventListener('submit', handleSubmit);
loadMorebtn.addEventListener('click', handleClick);


const opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 0.8, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ffffff', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spiner = new Spinner(opts);
let page = 1;
let searchQuery = '';

async function handleSubmit(e) {
  e.preventDefault();
  spinerPlay();
  list.innerHTML = '';
  page = 1;
  searchQuery = e.target['user-search-query'].value.trim();
  try {
    const res = await getPhotos(searchQuery, page);
    if (res.hits.length === 0) {
      loadMorebtn.classList.add('is-hidden');
      return iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    lightbox.refresh();
    list.innerHTML = createMarkup(res.hits);
    lightbox.refresh();
    if (res.total > 15) {
      loadMorebtn.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error);
  }
  finally {
    spinerStop();
  }
}


function spinerPlay() {
  spiner.spin(target);
  target.classList.remove('is-hidden');
}

function spinerStop() {
  spiner.stop();
  target.classList.add('is-hidden');
}

async function handleClick() {
  spinerPlay();
  page += 1;
  try {
    const res = await getPhotos(searchQuery, page)
        console.log(res.total);
      const lastPage = Math.ceil(res.total / 15);
        list.insertAdjacentHTML('beforeend', createMarkup(res.hits));
        lightbox.refresh();
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
      if (lastPage <= page) {
        loadMorebtn.classList.add('is-hidden');
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topLeft',
        });
      }
  } catch (error) {
     console.log(error);
  } finally {
      spinerStop();
    };
}