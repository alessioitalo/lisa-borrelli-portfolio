import styles from './Modal.module.css';
import Link from 'next/link';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <Link href='/'>
        <a>Homepage</a>
      </Link>
      <Link href='/about'>
        <a>About Me</a>
      </Link>
      <Link href='/contact'>
        <a>Get in Touch</a>
      </Link>
    </div>
  );
};

export default Modal;
