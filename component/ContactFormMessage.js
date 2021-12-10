import styles from './ContactFormMessage.module.css';
import { FaWindowClose } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactFormMessage = ({ children, type, popupHandler }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${styles.message} ${styles[type]}`}
    >
      <FaWindowClose className={styles.close} onClick={popupHandler} />
      {children}
    </motion.div>
  );
};

export default ContactFormMessage;
