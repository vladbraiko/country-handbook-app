import refs from "./refs";
import countryTmplt from "../tamplates/country-tamplate.hbs";
import countriesTmplt from "../tamplates/countries-tamplate.hbs";
import PNotify from "../js/plugins/pnotify";

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
      title: "Too many matches found. Please, enter a more specific query",
      delay: 1500,
      maxOpen: 1,
      maxStrategy: "close",
    });
    return;
  }

  if (searchResult.status === 404) {
    PNotify.error({
      title: "Sorry :( Such country does not exist.",
      delay: 2000,
      maxOpen: 1,
      maxStrategy: "close",
    });
    return;
  }
}

export default makeMurkup;
