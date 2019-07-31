const qs = require("qs");
const fetch = require("node-fetch");

const hereRequest = value => {
  const url =
    "https://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json?";
  const referer =
    "https://developer.here.com/api-explorer-examples/template-rest-default/examples/geocoding-suggestions-by-country/index.html";
  const params = qs.stringify({
    app_id: process.env.REACT_APP_HERE_APP_ID,
    app_code: process.env.REACT_APP_HERE_APP_CODE,
    country: "USA", // Restrict the results to the US
    maxresults: 10,
    query: value.trim()
  });

  return fetch(url + params, {
    headers: { referer }
  })
    .then(async response => {
      const { suggestions } = await response.json();
      const results = suggestions.map(suggestion => {
        const {
          address: { city, state }
        } = suggestion;

        return `${city}, ${state}`;
      });

      return [...new Set(results)];
    })
    .catch(error => [error]);
};

module.exports = hereRequest;
