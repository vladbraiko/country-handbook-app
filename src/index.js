import countryTmplt from "./tamplates/country-tamplate.hbs";
import countriesTmplt from "./tamplates/countries-tamplate.hbs";
import refs from "./js/refs";
import PNotify from "./js/plugins/pnotify";
import "./styles.scss";
const debounce = require("lodash.debounce");

refs.searchForm.addEventListener("input", debounce(showResult, 500));

function showResult(event) {
  event.preventDefault();
  const searchRequest = event.target.value;
  if (searchRequest.length === 0) return;

  clearResultContainer();
  makeFetch(searchRequest).then(makeMurkup);
}

function makeFetch(country) {
  return fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((countriesArr) => countriesArr);
}

function makeMurkup(searchResult) {
  if (searchResult.length === 1) {
    const countryMarkup = countryTmplt(searchResult);
    refs.countryContainer.insertAdjacentHTML("beforeend", countryMarkup);
    return;
  }

  if (searchResult.length > 1 && searchResult.length <= 10) {
    const countriesMarkup = countriesTmplt(searchResult);
    refs.countryContainer.insertAdjacentHTML("beforeend", countriesMarkup);
    return;
  }

  if (searchResult.length > 10) {
    PNotify.notice({
      title: "Too many matches found.",
      text: "Enter a more specific query!",
    });
  }
}

function clearResultContainer() {
  refs.countryContainer.innerHTML = "";
}
