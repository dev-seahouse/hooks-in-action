export default function getData(url: string, signal?: AbortSignal) {
  return fetch(url, { signal }).then(resp => {
    if (!resp.ok) {
      throw new Error('There was a problem fetching data');
    }
    return resp.json();
  });
}
