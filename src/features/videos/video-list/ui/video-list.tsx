'use client'

import { useState, useEffect } from "react";
import VideosAPI from "@/shared/api/videos-api";
import { VideoCard } from "@/entities/video-card";
import { IVideo } from "@/entities/video-card/models/video-card.inteface";
import styles from "./styles.module.scss";

export const VideoList = () => {
    const [videoList, setVideoList] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const handleGetVideoList = async () => {
            try {
                setIsLoading(true);
                const videos = await VideosAPI.getVideoList();
                
                setVideoList(videos.videos);
            } catch (error) {
                console.error("Ошибка при загрузке видео:", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleGetVideoList();
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p className={styles.loadingText}>Загрузка видео...</p>
            </div>
        );
    }

    if (!videoList || videoList.length === 0) {
        return (
            <div className={styles.emptyContainer}>
                <div className={styles.emptyIcon}>📹</div>
                <h3 className={styles.emptyTitle}>Видео не найдены</h3>
                <p className={styles.emptyText}>Попробуйте обновить страницу или зайти позже</p>
            </div>
        );
    }

    console.log('videoList = ', videoList);
    

    return (
        <div className={styles.container}>
            <div className={styles.videoGrid}>
                {videoList.map((video: IVideo) => (
                    <div key={video.id} className={styles.videoCardWrapper}>
                        <VideoCard video={video} />
                    </div>
                ))}
            </div>
        </div>
    );
};