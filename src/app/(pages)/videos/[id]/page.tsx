"use client"

import VideosAPI from "@/shared/api/videos-api";
import { useParams, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";

export default function Video(
// {
    // searchParams,
// }: {
    // searchParams: Promise<{ [key: string]: string}>;
// }
) {
    const [currentVideo, setCurrentVideo] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const { id } = useParams()

    console.log(typeof id);
    console.log(id);
    

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
    
    console.log(currentVideo);
    

    return (
        <div>

        </div>
    )
}