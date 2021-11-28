import styles from './Interest.module.css';

const Interest = ({ type, children }) => {
  return <div className={`${styles.interest} ${styles[type]}`}>{children}</div>;
};

export default Interest;
