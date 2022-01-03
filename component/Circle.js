import styles from './Circle.module.css';
import Dots from './Dots';

const Circle = ({ style, text }) => {
  return (
    <>
      <div className={styles.circleContainer}>
        <div
          className={`${styles.circle} ${styles.back} ${
            style === 'dark' ? styles.backDark : styles.backLight
          }`}
        />
        <div
          className={`${styles.circle} ${
            style === 'dark' ? styles.dark : styles.light
          }`}
        >
          <h1 className={styles.text}>{text}</h1>
        </div>
        <div className={styles.decorations}>
          <div style={{ display: 'flex' }}>
            <div
              className={`${styles.line} ${
                style === 'dark' ? styles.lineDark : styles.lineLight
              }`}
            />
            <div
              className={`${styles.line} ${
                style === 'dark' ? styles.lineDark : styles.lineLight
              }`}
            />
            <div
              className={`${styles.line} ${
                style === 'dark' ? styles.lineDark : styles.lineLight
              }`}
            />
            <div
              className={`${styles.line} ${
                style === 'dark' ? styles.lineDark : styles.lineLight
              }`}
            />
            <div
              className={`${styles.line} ${
                style === 'dark' ? styles.lineDark : styles.lineLight
              }`}
            />
          </div>
          <Dots light={style} />
        </div>
      </div>
    </>
  );
};

export default Circle;
