import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderCountries from './js/renderCountries';


const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries (e) {
   let getCountry = e.target.value.trim();
   if (getCountry) {
    fetchCountries(getCountry)
    .then(dataCountries => {
    renderCountries(dataCountries)
    })
    .catch(error => {
    Notify.failure("Oops, there is no country with that name") 
})
} else {
    list.innerHTML = ""
    info.innerHTML = ""
}
}
