import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {

  //리액트훅에서 state를 사용할 수 있는 방법 useState
  const [videos, setVideos] = useState([]); //비디오 목록

  // 컴포넌트가 마운트, 업데이트 될 때마다 호출
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCRtqw_64AyzaJRP21VSLyFZkfcxRNdB-E",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []);

  return <VideoList videos={videos} />;
}

export default App;
