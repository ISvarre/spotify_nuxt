export interface Artist {
    name: string
    images: Array<{ url: string }>
    followers: { total: number }
    external_urls: { spotify: string }
}