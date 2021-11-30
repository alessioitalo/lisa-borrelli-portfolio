import styles from './CarouselItem.module.css';

const CarouselItem = ({ src }) => {
  return (
    <div className={styles.item} style={{backgroundImage: `url("https:${src}")`}} />
//   <img src={`https://${src}`} className={styles.item}/>
    );
};

export default CarouselItem;
