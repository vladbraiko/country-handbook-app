function makeFetch(country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((countriesArr) => countriesArr);
}

export default makeFetch;
