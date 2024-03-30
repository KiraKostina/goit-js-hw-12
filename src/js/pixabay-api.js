// Функція для HTTP-запитів
import axios from "axios";

const API_KEY = "43048239-bd17c0d5033bfd52479da7a86";
const BASE_URL = "https://pixabay.com/api/";


export async function getPhotos(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        per_page: 15,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key: API_KEY,
      },
    });
    return response.data;
  }
  catch (error) {
    throw Error('Error!');
  }
}
