import styles from './Modal.module.css';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Modal = ({ modalHandler }) => {
  const router = useRouter();

  const routerHandler = (route) => {
    // closing modal if the current route is the same as the one being linked to
    if (route === router.pathname) {
      modalHandler();
    }
  };

  return (
    <div className={styles.modal}>
      <Link href='/'>
        <a onClick={() => routerHandler('/')}>Homepage</a>
      </Link>
      <Link href='/about'>
        <a onClick={() => routerHandler('/about')}>About Me</a>
      </Link>
      <Link href='/contact'>
        <a onClick={() => routerHandler('/contact')}>Get in Touch</a>
      </Link>
    </div>
  );
};

export default Modal;
