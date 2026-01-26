import { title } from "process";
import { Requests } from "./requests";

const VIDEO_LIST = [
    {
        id: '14253647567453454234',
        title: 'питон для чайников',
        duration: 85.233,
        thumbnail: 'путь к превьюшке', // при открытии видео тоже должен отобразиться, затем только проигрывание видео. (т.е. до загрузки буфера)
        videoPreview: 'путь к предпросмотру видео', // используется только при наведении на тамбнэйл, к самому плееру отношения не имеет
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'не начало'
            },
            {
                start: 40.000,
                end: 85.233,
                title: 'начало'
            }
        ]
    }
]

export default class VideosAPI extends Requests {
    static videoUrl = 'api/v1/videos'
    
    static getVideoList = async () => {
        try {
            // const res = await this.GET()            
            // return await res
            return VIDEO_LIST
        } catch (error) {
            console.error('getVideoList: ', error)
        }
    }

    static getVideoRetrieve = async (url: string) => {
        try {
            const res = await this.GET(url)            
            return await res
        } catch (error) {
            console.error('getVideoRetrieve: ', error)
        }
    }
}