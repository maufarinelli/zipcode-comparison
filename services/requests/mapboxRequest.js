const qs = require("qs");
const fetch = require("node-fetch");

const mapboxRequest = value => {
  const mapboxApiKey = process.env.REACT_APP_MAPBOX_API_KEY;
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
      const results = features.map(feature =>
        feature.place_name.replace(", United States", "")
      );

      return results;
    })
    .catch(error => [error]);
};

module.exports = mapboxRequest;
