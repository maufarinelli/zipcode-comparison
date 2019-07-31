export default function fetchResults(value) {
  return fetch(`/api/results?value=${value}`).then(async response => {
    return await response.json();
  });
}
