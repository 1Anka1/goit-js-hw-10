import '../css/styles.css';
import debounce from 'lodash.debounce';
import { Notiflix } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { refs } from './get-refs';
import {
  renderMarkupCountryList,
  renderMarkupCountryInfo,
} from './markup-template';

const DEBOUNCE_DELAY = 300;

let limit = 10;

refs.searchForm.addEventListener(
  'input',
  debounce(onCountrySearchForm, DEBOUNCE_DELAY)
);

function onCountrySearchForm() {
  const name = refs.searchForm.value.trim();

  if (name === '') {
    clearMarkup();
    return;
  }

  fetchCountries(name)
    .then(showCountryCard)
    .catch(error => {
      clearMarkup();
      Notify.failure('Oops, there is no country with that name');
    });
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function showCountryCard(countries) {
  if (countries.length > limit) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    clearMarkup();
    return;
  } else if (countries.length === 1) {
    refs.countryInfo.innerHTML = renderMarkupCountryInfo(countries[0]);
  } else {
    let countriesListMarkup = '';
    countries.map(country => {
      countriesListMarkup += renderMarkupCountryList(country);
    });
    refs.countryList.insertAdjacentHTML('beforeend', countriesListMarkup);
  }
}
