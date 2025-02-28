import axios from 'axios';
import { setCookie } from 'h3';
import { v4 as uuidv4 } from 'uuid';

const sessionStore = new Map<string, string>();

export default defineEventHandler(async (event) => {
    try {
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
        const token = response.data.access_token;
        const expiresIn = response.data.expires_in;

        // Generate a unique session ID
        const sessionId = uuidv4();

        // Store the token in the session store
        sessionStore.set(sessionId, token);

        // Set the session ID in an HTTP-only cookie
        setCookie(event, 'session_id', sessionId, {
            httpOnly: true,
            secure: true,
            maxAge: expiresIn,
            path: '/',
        });

        return response.data;
    } catch (error) {
        throw createError({
            statusCode: 401,
            message: 'Failed to obtain Spotify token',
        });
    }
});