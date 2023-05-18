import axios from 'axios';
import { URL_API, API_key } from '../models/data'

async function getImages(searchQuery, page = 1) {

  return axios({
    method: `GET`,
    url: `${URL_API}`,
    headers: {
      'Content-Type': `application/json`,
      'Accept': `application/json`, 
    },
    
    // ?key=36447145-713fd0865ba966cc8244c878c&q=cats&image_type=photo&orientation=horizontal&safesearch=true
    params: {
      key: `${API_key}`,
      q: `${searchQuery}`,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
      per_page: 40,
      page: +`${page}`,

    },
  })

}

export default getImages;