import axios from "axios";
import { getQuery } from "h3";
import {fetchSpotifySession, getSession} from "~/utils/session";

export default defineEventHandler(async (event) => {
    try {
        let token = await getSession();

        // If token is not present, fetch a new one
        if (!token) {
            token = await fetchSpotifySession();
        }

        const query = getQuery(event);

        const response = await axios.get(`https://api.spotify.com/v1/artists/${query?.['id']}/top-tracks`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching artist:', error);
        throw error;
    }
});