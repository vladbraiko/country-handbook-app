import refs from "./js/refs";
import "./styles.scss";
import makeMurkup from "./js/update-result-markup";
import makeFetch from "./js/make-fetch";
const debounce = require("lodash.debounce");

refs.searchForm.addEventListener("input", debounce(showResult, 500));

function showResult(event) {
  event.preventDefault();
  const searchRequest = event.target.value;
  if (searchRequest.length === 0) {
    clearResultContainer();
    return;
  }

  clearResultContainer();

  makeFetch(searchRequest).then(makeMurkup);
}

function clearResultContainer() {
  refs.countryContainer.innerHTML = "";
}
