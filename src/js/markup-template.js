export function renderMarkupCountryInfo({
  flags: { svg },
  name: { official: officialName },
  capital,
  population,
  languages,
}) {
  return `<ul class="country__list-info">
  <li class="country__name">
  <img src="${svg}" alt="flag" width="20" height="20">
    <h2>${officialName}</h2></li>
  <li class="country__info"><b>Capital:</b> ${capital}</li>
  <li class="country__info"><b>Population:</b> ${population}</li>
  <li class="country__info"><b>Languages:</b> ${Object.values(languages)}</li>
</ul>`;
}

export function renderMarkupCountryList(countries) {
  return countries.reduce(
    (acc, { flags: { svg }, name: { official: officialName } }) =>
      acc +
      `<li class="country__item">
      <img src="${svg}" alt="flag" width="20" height="20"> <p><b>${officialName}</b></p>
     </li>`,
    ''
  );
}
