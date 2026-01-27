import { title } from "process";
import { Requests } from "./requests";

const VIDEO_LIST = [
    {
        id: '142536shj47567453454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
    {
        id: '1425shj3647567453454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
        {
        id: '14253647sgh567453454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
        {
        id: '14253647567ddd453454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
        {
        id: '142fff53647567453454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
        {
        id: '14253647sdf567453454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
        {
        id: '142536475674sdf53454234',
        title: 'Питон для чайников: полный курс от нуля до героя за 3 часа',
        duration: 8523, // 2 часа 22 минуты 3 секунды
        thumbnail: 'https://i.ytimg.com/vi/bY6m6_IIN94/maxresdefault.jpg',
        videoPreview: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        views: 23937,
        channel: {
            id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
            name: 'IT Overone',
            avatarUrl: 'https://yt3.googleusercontent.com/ytc/APkrFKYSOZ9w-PiZ1V8nflw2mFuyqy8yJVCa3mVL4F_H=s176-c-k-c0x00ffffff-no-rj'
        },
        date_publication: '2024-01-15T10:30:00Z',
        fragments: [
            {
                start: 0.000,
                end: 40.000,
                title: 'Введение и установка Python'
            },
            {
                start: 40.000,
                end: 8523.000,
                title: 'Основы программирования на Python'
            }
        ]
    },
]

export default class VideosAPI extends Requests {
    static videoUrl = '/api/videos'
    
    static getVideoList = async () => {
        try {
            const res = await this.GET(this.videoUrl)            
            return await res.json()
            
        } catch (error) {
            console.error('getVideoList: ', error)
        }
    }

    static getVideoById = async (id: string) => {
        const fullUrl = `${this.videoUrl}/${id}`
        
        try {
            const res = await this.GET(fullUrl)            
            return await res.json()
        } catch (error) {
            console.error('getVideoRetrieve error: ', error)
        }
    }

    static createVideo = async (formData: FormData) => {
        const fullUrl = this.videoUrl + '/create'
        console.log(fullUrl);
         console.log("formData as object:", Object.fromEntries(formData.entries()));
        
        try {
            const res = await this.POST(fullUrl, formData)            
            return await res.json()
        } catch (error) {
            console.error('createVideo error: ', error)
        }
    }
}