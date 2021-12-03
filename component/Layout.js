import Head from 'next/head';
import styles from './Layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lisa Borrelli</title>
        <meta
          name='description'
          content='Digital and Graphic Designer based in London, UK.'
        />
        <meta property='og:url' content='www.lisa-borrelli.com' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={photo} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
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
