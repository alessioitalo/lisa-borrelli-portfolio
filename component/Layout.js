import Head from 'next/head';
import styles from './Layout.module.css';
import Splash from './Splash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lisa Borrelli</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Splash />
        <main className={styles.content}>{children}</main>
      </main>
      <footer className={styles.footer}>
        ©2021 Lisa Borrelli
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faBehance} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faDribbble} />
        </div>
      </footer>
    </>
  );
};

export default Layout;
