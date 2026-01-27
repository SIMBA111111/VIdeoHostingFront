"use client"

import { useParams } from "next/navigation"

import Player from "Player/src/component";

import VideosAPI from "@/shared/api/videos-api";

import { useState, useEffect } from "react";
// import Player from "../../../../../Player/src/component";

export default function Video(
// {
    // searchParams,
// }: {
    // searchParams: Promise<{ [key: string]: string}>;
// }
) {
    const [currentVideo, setCurrentVideo] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    
    const { id } = useParams()

    useEffect(() => {
        const handleGetVideo = async () => {
            try {
                setIsLoading(true);
                const videos = await VideosAPI.getVideoById(String(id));
                
                setCurrentVideo(videos);
            } catch (error) {
                console.error("Ошибка при загрузке видео:", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleGetVideo();
    }, []);
    
    console.log('currentVideo = ', currentVideo);

    if(!currentVideo) {
        return 'ЗАГРУЗКаа'
    }
    
    return (
        <div>
            <Player playlistUrl={currentVideo.playlistUrl} duration={currentVideo.duration} fragments={currentVideo.fragments}/>
        </div>
    )
}