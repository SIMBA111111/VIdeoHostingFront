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
    thumbnailurl: string
    videourl: string
    playlisturl: string
    video_preview_url: string
    views: number
    channel: IChannel
    date_publication?: string
    fragments?: IFragments[] 
}