import styles from './Splash.module.css';
import Navbar from './Navbar';
import Modal from './Modal';
import { useState } from 'react';

const Splash = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.splash}>
    <video className={styles.video} autoPlay muted loop>
      <source src='video.mp4' type='video/mp4'/>
    </video>
    {/* <Navbar /> */}
     {/* {showModal && <Modal />}
      <nav className={styles.nav}>
        <span className={styles.info}>
          <span className={styles.name}>Lisa Borrelli</span>
          <span className={styles.detail}>DIGITAL & GRAPHIC DESIGNER</span>
        </span>
        <span
          className={styles.hamburger}
          onClick={() => setShowModal(!showModal)}
        >
          <span className={`${styles.line} ${showModal? styles.animated : null}`}/>
        </span>
      </nav> */}
    </div>
  );
};


export default Splash;
