interface IFragments {
    start: number
    end: number
    title: string
}

export interface IVideo {
    id: string
    title: string
    duration: number
    thumbnail: string
    videoPreview: string
    fragments: IFragments[] 
}