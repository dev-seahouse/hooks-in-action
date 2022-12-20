export default function getData(url: string) {
  return fetch(url).then(resp => {
    if (!resp.ok) {
      throw new Error('There was a problem fetching data');
    }
    return resp.json();
  });
}
