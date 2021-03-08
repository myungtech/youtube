import React, { memo } from 'react';
import styles from './video_item.module.css';

// 다시 re-render될 이유가 없음 >> memo사용 
// deconstruncting 가능하다. 
//props 안에 video바로 받아오자 ( 이름이동일해야함 )
const VideoItem = memo(
    ({ video, video: { snippet }, onVideoClick, display }) => {
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
            <li
                className={`${styles.container} ${displayType}`}
                onClick={() => onVideoClick(video)}
            >
                <div className={styles.video}>
                    <img
                        className={styles.thumbnail}
                        src={snippet.thumbnails.medium.url}
                        alt="video thumbnail"
                    />
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </div>
            </li>
        )
    }
);
export default VideoItem;