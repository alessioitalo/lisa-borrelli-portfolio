import styles from './ContactFormMessage.module.css';
import { FaWindowClose } from 'react-icons/fa';

const ContactFormMessage = ({ children, type, popupHandler }) => {
  return (
    <div className={`${styles.message} ${styles[type]}`}>
      <FaWindowClose className={styles.close} onClick={popupHandler} />
      {children}
    </div>
  );
};

export default ContactFormMessage;
