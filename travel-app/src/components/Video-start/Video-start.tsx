import React from 'react';
import styles from './video-start.module.css';
import shortTrackUrl from '../../assets/video/short-track.mp4';

const VideoStart: React.FC = () => {
  return (
    <div className={styles['video-wrapper']}>
      <video loop autoPlay muted className={styles['video-size']}>
        <source src={shortTrackUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles['video-text']}>
        <h3 className={styles['video-header']}>The Most Beautifully Places</h3>
        <h3 className={styles['video-header']}>in The World</h3>
        <p className={styles['video-ptext']}>
          Plan Your Vacations on the Most Beautifully Places in The World
        </p>
      </div>
    </div>
  );
};

export default VideoStart;
