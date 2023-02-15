import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function renderCountries (dataCountries) {
    const list = document.querySelector('.country-list');
    const info = document.querySelector('.country-info');

    let countries = [];

    let numberOfCountries = dataCountries.length;
    if (numberOfCountries > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
    } else if (numberOfCountries >= 2 && numberOfCountries <= 10) {
        dataCountries.map(country => {
            countries.push(`
                <li class="country-list">
                    <img src="${country.flags.svg}" class="flag">
                    <span class="name">${country.name}</span>
                </li>`)
        })
        list.innerHTML = countries.join('');
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
                <span class="name">${country.name}</span>
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

