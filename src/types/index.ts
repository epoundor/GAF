export interface Post {
    slug?: string,
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
    },
    tags:number[]
}