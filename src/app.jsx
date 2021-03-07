import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {

  //리액트훅에서 state를 사용할 수 있는 방법 useState
  const [videos, setVideos] = useState([]); //비디오 목록
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
    youtube.search(query)
      .then(videos => setVideos(videos));
  };

  // 컴포넌트가 마운트, 업데이트 될 때마다 호출
  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  //  selectedVideo가 있다면 div를 보여주고 없다면 안 보여지도록
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>

        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>);
}

export default App;
