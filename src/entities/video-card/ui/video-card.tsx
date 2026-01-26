'use client'

import { IVideo } from "../models/video-card.inteface";

export const VideoCard = ({video}: {video: IVideo}) => {

    console.log(video);
    

    return (
        <div>
            {video.title}
        </div>
    )
}