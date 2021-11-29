import CarouselItem from './CarouselItem';
import styles from './Carousel.module.css';
import Dots from './Dots';

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <h1>My Projects</h1>
        <Dots />
      </div>
    </div>
  );
};

export default Carousel;
