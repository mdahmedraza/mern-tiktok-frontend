import Video from "./components/Video";
import './App.css'
import {useState, useEffect} from 'react';
// import videoFile from './video/downloaded_video/khabib.mp4'
// import videoFiles from './video/downloaded_video/chori_patata_hai.mp4'

function App(){
  const [videos, setVideos]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:9000/video')
      .then((response)=>response.json())
      .then((data)=>{
        setVideos(data)
      })
      .catch((error)=>{
        console.log('error', error)
      })
  }, []);
  console.log(videos);
  return(
    <div className="app">
      <div className="app__videos">
        {videos.map(({_id, url, channel, description, song, likes, shares, messages})=>(
          <Video
          key={_id}
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          shares={shares}
          messages={messages}
          />
        ))}
       
        {/* <Video
          url={videoFile}
          channel="my channel"
          description="my description"
          song="my song"
          likes="12"
          shares="23"
          messages="12"
          />
        <Video
          url={videoFiles}
          channel="my channel"
          description="my description"
          song="my song"
          likes="12"
          shares="23"
          messages="12"
          /> */}
        </div>
    </div>
  )
}
export default App;