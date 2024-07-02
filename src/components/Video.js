import React, {useState, useRef} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url, likes, shares, messages, channel, description, song}){
    const [playing, setPlaying]=useState(true);
    const videoRef=useRef(null)
    const handleVideoPress=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return(
        <div className="video">
            <video 
            className='video__player'
            loop
            ref={videoRef}
            onClick={handleVideoPress}
            src={url}
            // src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
            
            />
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}
export default Video;