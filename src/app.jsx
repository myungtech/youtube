import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({ youtube }) {

  //리액트훅에서 state를 사용할 수 있는 방법 useState
  const [videos, setVideos] = useState([]); //비디오 목록
  const search = (query) => {
    youtube.search(query)
      .then(videos => setVideos(videos));

  }
  // 컴포넌트가 마운트, 업데이트 될 때마다 호출
  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>);
}

export default App;
