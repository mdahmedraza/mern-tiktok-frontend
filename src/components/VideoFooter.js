
import './VideoFooter.css';
import { MusicalNoteIcon } from '@heroicons/react/24/solid'



function VideoFooter({channel, description, song}){
    return(
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                   <MusicalNoteIcon className='videoFooter__icon' />
                   <p>{song}</p>
                </div>
            </div>
            <img className="videoFooter__record" src="https://th.bing.com/th/id/R.e9b67d4889f6ae1d112e9dc52c97a91b?rik=ewb2%2bysE07n7DA&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fbd9996e24bc43bf94.png&ehk=SwALci3b1Qk3hgY37iuLK1ep0edgilkzHSWKUEgcAXg%3d&risl=&pid=ImgRaw&r=0" alt="cd" />
        </div>
    )
}
export default VideoFooter;

