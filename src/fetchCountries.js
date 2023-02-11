export default function fetchCountries (name) {
    fetch (`https://restcountries.com/v3.1/name/${country}`);

    throw new Error(response.status)

}

'lodash.debounce';
export default function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v2/name/${country}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
fetchCountries.js





import debounce from 'lodash.debounce';
import './css/styles.css';
import fetchCountries from './js/fetchCountries';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

function searchCountries(e) {
  let getCountry = e.target.value;

  fetchCountries(getCountry)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('error');
    });
}

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));
