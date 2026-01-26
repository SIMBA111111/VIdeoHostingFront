'use client'

import { useState, useEffect } from "react";

import VideosAPI from "@/shared/api/videos-api";
import { VideoCard } from "@/entities/video-card";
import { IVideo } from "@/entities/video-card/models/video-card.inteface";

export const VideoList = () => {
    const [videoList, setVideoList] = useState<any>()
    
    useEffect(() => {
        const handleGetVideoList = async () => {
            const videoList = await VideosAPI.getVideoList()
            setVideoList(videoList)
        };

        handleGetVideoList()
    }, []);

    return (
        <div>
            {videoList ? videoList.map((video: IVideo) => {
                return (
                    <VideoCard video={video} key={video.id}/>
                )
            }) : 'загрузка...'}
            
        </div>
    )
}