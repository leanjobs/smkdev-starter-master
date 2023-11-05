import axios  from "axios"


const apiKey = '4e6b08918eca383d59db313ffcbc7e95'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl  = 'https://image.tmdb.org/t/p/original'

const apiAxios = axios.create(
    {
        baseURL : baseUrl,
        params: {
            api_key: apiKey,
        }
    }
)

export default apiAxios