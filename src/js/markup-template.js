export function renderMarkupCountryInfo({
  name,
  capital,
  population,
  languages,
  flags,
}) {
  return `
    <div class="country-info__card">
    <h2 class="country-info__name">${name.common}</h2>
    <img src="${
      flags.svg
    }" class="country-info__flag" width="220px" height="140px">
    <ul class="country-info__features">
        <li class="country-info__feature">
            <h3>Capital:&nbsp;</h3>
            <p>${capital}</p>
        </li>
        <li class="country-info__feature">
            <h3>Population:&nbsp;</h3>
            <p>${population}</p>
        </li>
        <li class="country-info__feature">
            <h3>Languages:&nbsp;</h3>
            <p>${Object.values(languages)}</p>
        </li>
    </ul>
    </div>
    `;
}

export function renderMarkupCountryList({ name, flags }) {
  return `
    <li class="country__item">
        <img src="${flags.svg}" alt="flag" width="20" height="20"> <p><b>${name.common}</b></p>
    </li>`;
}
