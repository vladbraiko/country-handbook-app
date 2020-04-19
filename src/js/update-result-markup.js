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
      delay: 1000,
      stack: { maxOpen: 1, maxStrategy: "close", dir1: "down" },
    });
    return;
  }

  if (searchResult.status === 404) {
    PNotify.error({
      title: "Sorry :( Such country does not exist.",
      delay: 2000,
      stack: { maxOpen: 1, maxOpenmaxStrategy: "close", dir1: "down" },
    });
    return;
  }
}

export default makeMurkup;
