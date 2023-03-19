export interface Post {
    slug?: number | string,
    date?:Date,
    title: {
        rendered: string
    },
    content: {
        rendered: string
    },
    featured_media: number,
    acf: {
        pdf_url: string,
        details: string
    }
}