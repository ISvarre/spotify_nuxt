import axios from 'axios';

export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const url = 'https://accounts.spotify.com/api/token'

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }

        const body = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: config.spotify.clientId,
            client_secret: config.spotify.clientSecret,
        })

        const response = await axios.post(url, body.toString(), { headers })
        return response.data
    } catch (error) {
        throw createError({
            statusCode: 401,
            message: 'Failed to obtain Spotify token'
        })
    }
})