import './VideoSidebar.css'
import {useState} from 'react';
import { HeartIcon, HandThumbUpIcon, ShareIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'

function VideoSidebar({likes, shares, messages}){
    const [liked, setLiked]=useState(false);
    return(
        <div className="videoSidebar">
            <div className="videosidebar__button">
                {liked?<HandThumbUpIcon onClick={e=>setLiked(false)} />:
                <HeartIcon onClick={e=>setLiked(true)}/>}
                <p>{liked?likes+1:likes}</p>
            </div>
            <div className="videosidebar__button">
                <ChatBubbleBottomCenterIcon className="icon" />
                <p>{messages}</p>
            </div>
            <div className="videosidebar__button">
                <ShareIcon className="iconn" />
                <p>{shares}</p>
            </div>
        </div>
    )
}
export default VideoSidebar;