import '../css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { refs } from './get-refs';
import {
  renderMarkupCountryInfo,
  renderMarkupCountryList,
} from './markup-template';

const DEBOUNCE_DELAY = 300;

let limit = 10;

refs.searchForm.addEventListener(
  'input',
  debounce(onCountrySearchForm, DEBOUNCE_DELAY)
);

function onCountrySearchForm() {
  const countryName = refs.searchForm.value.trim();

  if (!countryName) {
    clearMarkup();
    return;
  }

  fetchCountries(countryName)
    .then(showCountryCard)
    .catch(e => {
      clearMarkup();
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function clearMarkup() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

function showCountryCard(arr) {
  clearMarkup();

  if (arr.length > limit) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (arr.length === 1) {
    refs.countryInfo.insertAdjacentHTML(
      'beforeend',
      renderMarkupCountryInfo(arr[0])
    );
  } else {
    refs.countryList.insertAdjacentHTML(
      'beforeend',
      renderMarkupCountryList(arr)
    );
  }
}
