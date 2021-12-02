import { useState, useEffect } from 'react';
import Modal from './Modal';
import styles from './Navbar.module.css';


const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [transparentNavbar, setTransparentNavbar] = useState(true);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setTransparentNavbar(false);
    } else {
      setTransparentNavbar(true);
    }
  };

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    document.addEventListener('scroll', changeNavbarColor);
    return () => {
      document.removeEventListener('scroll', changeNavbarColor);
    };
  }, [transparentNavbar]);

  return (
    <>
      {showModal && <Modal modalHandler={modalHandler} />}
      <nav
        className={`${styles.nav} ${transparentNavbar && styles.transparent}`}
      >
        <span className={styles.info}>
          <span className={styles.name}>Lisa Borrelli</span>
          <span className={styles.detail}>DIGITAL & GRAPHIC DESIGNER</span>
        </span>
        <span className={styles.hamburger} onClick={modalHandler}>
          <span
            className={`${styles.line} ${showModal ? styles.animated : null}`}
          />
        </span>
      </nav>
    </>
  );
};

export default Navbar;
