// Функція для HTTP-запитів
const API_KEY = "43048239-bd17c0d5033bfd52479da7a86";
const BASE_URL = "https://pixabay.com/api/";

export function getPhotos(query, page) {
    const params = {
        q: query,
        page,
        per_page:15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: API_KEY,   
  };
  const options = new URLSearchParams(params);
  return fetch(`${BASE_URL}?${options}`).then(res => {
    if (!res.ok) {
      throw new Error('Error!');
    }

    return res.json();
  });
}