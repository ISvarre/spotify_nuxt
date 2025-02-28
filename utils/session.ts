import axios from 'axios';

let session: string | null = null;
let expiration: number = 0;

export const fetchSpotifySession = async (): Promise<string> => {
    const config = useRuntimeConfig();
    const url = 'https://accounts.spotify.com/api/token';

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: config.spotify.clientId,
        client_secret: config.spotify.clientSecret,
    });

    const response = await axios.post(url, body.toString(), { headers });
    return response.data.access_token;
};

export const getSession = async (): Promise<string> => {
    if (session && expiration > Date.now()) {
        return session;
    }

    session = await fetchSpotifySession();
    expiration = Date.now() + 1000 * 60 * 60; // 1 hour

    return session;
};