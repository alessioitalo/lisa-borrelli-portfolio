import CarouselItem from './CarouselItem';
import styles from './Carousel.module.css';
import Dots from './Dots';
import { useState } from 'react';

const Carousel = ({ projects }) => {
  const [counter, setCounter] = useState(0);
  const [animation, setAnimation] = useState(false);

  const nextImage = () => {
    if (counter >= projects.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const previousImage = () => {
    if (counter < 1) {
      setCounter(projects.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <h1>My Projects</h1>
        <Dots />
        <div className={styles.arrows}>
          <span
            className={`${styles.arrow} ${styles.left}`}
            onClick={previousImage}
          />
          <span
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextImage}
          />
        </div>
        <div className={styles.container}>
          {/* {projects.map((project) => {
            return (
              <CarouselItem
                key={project.sys.id}
                src={project.fields.mainImage.fields.file.url}
              />
            );
          })} */}
          <CarouselItem
            src={projects[counter].fields.mainImage.fields.file.url}
          />
          {/* <h1>{counter}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
