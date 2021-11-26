import { useState } from 'react';
import Modal from './Modal';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal />}
      <nav className={styles.nav}>
        <span className={styles.info}>
          <span className={styles.name}>Lisa Borrelli</span>
          <span className={styles.detail}>DIGITAL & GRAPHIC DESIGNER</span>
        </span>
        <span
          className={styles.hamburger}
          onClick={() => setShowModal(!showModal)}
        >
          <span
            className={`${styles.line} ${showModal ? styles.animated : null}`}
          />
        </span>
      </nav>
    </>
  );
};

export default Navbar;
