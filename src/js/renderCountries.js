import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderCountries (dataCountries) {
    const list = document.querySelector('.country-list');
    const info = document.querySelector('.country-info');

    let countries = [];


    let numberOfCountries = dataCountries.length;
    if (numberOfCountries > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
    } else if (numberOfCountries <= 10 && numberOfCountries > 2) {
        dataCountries.map(country => {
            countries += `
            <li>
            <img src="${country.flags.svg}" class="flag">
            <span class="name">${country.name}</span>
            </li>`
            list.innerHTML = countries;
        })
        info.innerHTML = ""
    } else {
        let country = dataCountries[0];
        let languages = [];

        country.languages.map(language => {
            languages.push(language.name)
        })

        info.innerHTML = `
        <div class="country-name">
        <img src="${country.flags.svg}" class="flag">
        <h2 class="name">${country.name}></h2>
        </div>
        <ul class="countries-list">
        <li><span>Capital: </span>${country.capital}</li>
        <li><span>Population: </span>${country.population}</li>
        <li><span>Languages: </span>${languages.join(', ')}</li>
        </ul>
        `
        list.innerHTML = ""
    }
}
