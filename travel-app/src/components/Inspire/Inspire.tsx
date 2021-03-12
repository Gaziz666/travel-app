import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import classes from './inspire.module.css';

const Inspire: React.FC = () => {
  return (
    <div className={classes.player__wrapper}>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      >
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
};

export default Inspire;
