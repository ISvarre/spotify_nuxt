import axios from "axios";

export default defineEventHandler(async () => {
    try {
        const authResponse = await $fetch('/api/auth')

        const response = await axios.get('https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C', {
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