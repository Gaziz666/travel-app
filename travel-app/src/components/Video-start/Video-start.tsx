import React from 'react';
import styles from './video-start.module.css';
import shortTrackUrl from '../../assets/video/short-track.mp4';

const VideoStart: React.FC = () => {
  return (
    <div>
      <video loop autoPlay muted className={styles['video-size']}>
        <source src={shortTrackUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoStart;
