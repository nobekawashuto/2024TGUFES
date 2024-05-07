import React, { useRef, useEffect } from 'react'
import video_mp4 from "../movie/sample.mp4"
import video_webm from "../movie/sample.webm"

export function Translate() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        videoRef.current?.play();
    }, []);
    return (
        <React.StrictMode>
                    <video controls muted ref={videoRef} >
                        <source src={video_mp4} type="video/mp4" />
                        <source src={video_webm} type="video/webm" />
                        <p>Your browser doesn't support HTML5 video.</p>
                    </video>
        </React.StrictMode>
    );
}
