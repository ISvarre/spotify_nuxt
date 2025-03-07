export interface Artist {
    name: string
    images: Array<{ url: string }>
    followers: { total: number }
    external_urls: { spotify: string }
}

export interface Track {
    id: string;
    name: string;
    album: {
        images: { url: string }[];
    };
    external_urls: {
        spotify: string;
    };
    artists: { name: string }[];
    uri: string;
}