export default function fetchCountries(country) {
   return fetch (`https://restcountries.com/v2/name/${country}?fields=capital,population,flags.svg,languages`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }); 
}





