import music from '../public/music.svg';
import camera from '../public/camera.svg';
import travel from '../public/travel.svg';
import drink from '../public/drink.svg';
import Interest from './Interest';
import { useState } from 'react';
import styles from './InterestsList.module.css';
import Image from 'next/image';

const InterestsList = () => {
  const [showTravel, setShowTravel] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  return (
    <div className={styles.icons}>
      <Image
        src={travel}
        alt='travel icon'
        className={styles.icon}
        onMouseEnter={() => {
          setShowTravel(true);
        }}
        onMouseLeave={() => {
          setShowTravel(false);
        }}
      />
      {showTravel && <Interest type={'travel'}>I love traveling! </Interest>}
      <Image
        src={music}
        alt='music icon'
        className={styles.icon}
        onMouseEnter={() => {
          setShowMusic(true);
        }}
        onMouseLeave={() => {
          setShowMusic(false);
        }}
      />
      {showMusic && (
        <Interest type={'music'}>I love listening to Rock music! </Interest>
      )}
      <Image
        src={camera}
        alt='photo icon'
        className={styles.icon}
        onMouseEnter={() => {
          setShowPhoto(true);
        }}
        onMouseLeave={() => {
          setShowPhoto(false);
        }}
      />
      {showPhoto && (
        <Interest type={'photo'}>I love taking pictures! </Interest>
      )}
      <Image
        src={drink}
        alt='drink icon'
        className={styles.icon}
        onMouseEnter={() => {
          setShowDrink(true);
        }}
        onMouseLeave={() => {
          setShowDrink(false);
        }}
      />
      {showDrink && (
        <Interest type={'drink'}>I love a glass of red wine! </Interest>
      )}
    </div>
  );
};

export default InterestsList;
