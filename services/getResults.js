const isEmpty = require("lodash/isEmpty");
const mapboxRequest = require("./requests/mapboxRequest");
const hereRequest = require("./requests/hereRequest");

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

module.exports = getResults;
