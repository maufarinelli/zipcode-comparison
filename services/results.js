const qs = require("qs");
const isEmpty = require("lodash/isEmpty");
const fetch = require("node-fetch");

const mapboxRequest = value => {
  const mapboxApiKey =
    "pk.eyJ1Ijoic3dlZXRpcSIsImEiOiJjamVhYzd3b2UwMG9uMndxaGpiZ3VjbHBlIn0.JrTJFxVwp6JfQNnEVdMZgQ";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    value.trim()
  )}.json?`;
  const params = qs.stringify({
    access_token: mapboxApiKey,
    autocomplete: true,
    limit: 10,
    country: "us",
    types: ["region", "district", "place", "postcode"]
  });

  return fetch(url + params)
    .then(async response => {
      const { features } = await response.json();

      features.forEach(feature => {
        feature.place_name = feature.place_name.replace(", United States", "");
      });

      return features;
    })
    .catch(error => error);
};

const hereRequest = value => {
  const url =
    "https://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json?";
  const referer =
    "https://developer.here.com/api-explorer-examples/template-rest-default/examples/geocoding-suggestions-by-country/index.html";

  const params = qs.stringify({
    app_id: "DemoAppId01082013GAL",
    app_code: "AJKnXv84fjrb0KIHawS0Tg",
    country: "USA", // Restrict the results to the US
    maxresults: 10,
    query: value.trim()
  });

  return fetch(url + params, {
    headers: { referer }
  })
    .then(async response => {
      const { suggestions } = await response.json();

      return suggestions;
    })
    .catch(error => error);
};

const getResults = async value => {
  let mapboxResults = [];
  let hereResults = [];

  if (!isEmpty(value)) {
    [mapboxResults, hereResults] = await Promise.all([
      mapboxRequest(value),
      hereRequest(value)
    ]);
  }

  return {
    mapbox: mapboxResults,
    here: hereResults
  };
};

module.exports = {
  getResults
};
