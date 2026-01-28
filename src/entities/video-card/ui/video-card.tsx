'use client'

import { IVideo } from "../models/video-card.inteface";
import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const BACKEND_URL = 'http://localhost:8080'

export const VideoCard = ({ video }: { video: IVideo }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    // Форматирование времени
    const formatDuration = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    // Форматирование числа просмотров
    const formatViews = (views: number): string => {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1).replace('.0', '') + 'M';
        }
        if (views >= 1000) {
            return (views / 1000).toFixed(1).replace('.0', '') + 'K';
        }
        return views.toString();
    };

    // Форматирование даты публикации
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'сегодня';
        if (diffDays === 1) return 'вчера';
        if (diffDays < 7) return `${diffDays} дня назад`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} недели назад`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} месяца назад`;
        return `${Math.floor(diffDays / 365)} года назад`;
    };

    return (
        <Link 
            href={`videos/${video.id}`}
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Контейнер для превью */}
            <div className={styles.thumbnailContainer}>
                {/* Превью изображение */}
                <img
                    src={BACKEND_URL+video.thumbnailurl}
                    alt={video.title}
                    className={`${styles.thumbnail} ${isHovered ? styles.thumbnailHover : ''}`}
                />
                
                {/* Видеопревью при наведении */}
                {isHovered && video.video_preview_url && (
                    <video
                        className={styles.videoPreview}
                        src={BACKEND_URL+video.video_preview_url}
                        autoPlay
                        muted
                        loop
                    />
                )}
                
                {/* Длительность видео */}
                <div className={styles.durationBadge}>
                    {formatDuration(video.duration)}
                </div>
                
                {/* Прогресс-бар */}
                <div className={styles.progressBar}>
                    <div className={`${styles.progressFill} ${isHovered ? styles.progressFillActive : ''}`}></div>
                </div>
            </div>

            {/* Информация о видео */}
            <div className={styles.infoContainer}>
                {/* Аватар канала */}
                {video.channel?.avatarUrl ? (
                    <img 
                        src={video.channel.avatarUrl} 
                        alt={video.channel.name}
                        className={styles.channelAvatar}
                    />
                ) : (
                    <div className={styles.channelAvatar}>
                        {video.channel?.name?.charAt(0).toUpperCase() || '?'}
                    </div>
                )}
                
                <div className={styles.infoContent}>
                    {/* Заголовок */}
                    <h3 className={styles.title}>
                        {video.title.length > 60 ? video.title.substring(0, 60) + '...' : video.title}
                    </h3>
                    
                    {/* Название канала */}
                    <p className={styles.channelName}>
                        {video.channel?.name || 'Неизвестный канал'}
                    </p>
                    
                    {/* Статистика */}
                    <div className={styles.stats}>
                        <span>{formatViews(video.views || 0)} просмотров</span>
                        <span className={styles.dot}></span>
                        <span className={styles.datePublication}>
                            {video.date_publication ? formatDate(video.date_publication) : 'давно'}
                        </span>
                    </div>
                </div>
                
                {/* Меню (три точки) */}
                <button className={`${styles.menuButton} ${isHovered ? styles.menuButtonVisible : ''}`}>
                    <svg className={styles.menuIcon} viewBox="0 0 24 24">
                        <circle cx="12" cy="6" r="1.5"/>
                        <circle cx="12" cy="12" r="1.5"/>
                        <circle cx="12" cy="18" r="1.5"/>
                    </svg>
                </button>
            </div>
        </Link>
    );
};