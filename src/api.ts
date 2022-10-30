export const fetchDataFromLocal = () => {
  return fetch('./mockedData.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
}