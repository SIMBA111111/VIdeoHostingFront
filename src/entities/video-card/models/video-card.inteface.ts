interface IFragments {
    start: number
    end: number
    title: string
}

interface IChannel {
    id: string
    name: string
    avatarUrl?: string
}

export interface IVideo {
    id: string
    title: string
    duration: number
    thumbnail: string
    videoPreview: string
    views: number
    channel: IChannel
    date_publication?: string
    fragments?: IFragments[] 
}