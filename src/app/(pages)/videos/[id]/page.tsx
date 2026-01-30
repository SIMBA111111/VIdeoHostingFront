"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react";

import { Player } from "Player/src/component";

import VideosAPI from "@/shared/api/videos-api";
import { IVideo } from "@/entities/video-card/models/video-card.inteface";


export default function Video() {
    const [currentVideo, setCurrentVideo] = useState<IVideo>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const { id } = useParams()

    useEffect(() => {
        const handleGetVideo = async () => {
            try {
                setIsLoading(true);
                const video = await VideosAPI.getVideoById(String(id));
                setCurrentVideo(video);
            } catch (error) {
                console.error("Ошибка при загрузке видео:", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleGetVideo();
    }, []);
    
    if(isLoading || !currentVideo) {
        return 'ЗАГРУЗКаа'
    }
    
    const fullUrlPlaylist = process.env.NEXT_PUBLIC_BACKEND_URL + currentVideo.playlisturl;

    return (
        <div>
            <Player playlistUrl={fullUrlPlaylist} duration={currentVideo.duration} fragments={currentVideo.fragments ?? []}/>
        </div>
    )
}