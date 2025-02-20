import axios from "axios";
import {getQuery} from "h3";

export default defineEventHandler(async (event) => {
    try {
        const authResponse = await $fetch('/api/auth')

        const type  = "artist"

        const query = getQuery(event);
        console.log('query:', query)

        const response = await axios.get(`https://api.spotify.com/v1/search?q=artist:${query?.['name']}&type=${type}&limit=10`, {
            headers: {
                'Authorization': `Bearer ${authResponse.access_token}`
            }
        })
        return response.data
    } catch (error) {
        console.error('Error fetching artist:', error)
        throw error
    }
})