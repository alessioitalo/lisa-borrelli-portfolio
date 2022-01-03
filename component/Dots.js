import styles from './Dots.module.css';

const Dots = ({ light }) => {
  return (
    <div className={`${styles.dots} ${light === 'light' && styles.light}`}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default Dots;
