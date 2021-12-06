import Head from 'next/head';
import styles from './Layout.module.css';
import Navbar from './Navbar';
import { BsInstagram, BsDribbble, BsBehance } from 'react-icons/bs';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta property='og:title' content='Lisa Borrelli' />
        <meta property='og:url' content='www.lisa-borrelli.com' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://lisa-portfolio-aq8ca67ic-alessioitalo.vercel.app/preview.jpg'
        />
        <meta
          property='og:description'
          content='Digital and Graphic Designer based in London, UK.'
        />
        <meta name='twitter:card' content='summary' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <main className={styles.content}>{children}</main>
      </main>
      <footer className={styles.footer}>
        ©2021 Lisa Borrelli
        <div className={styles.icons}>
          {/* <FontAwesomeIcon icon={faBehance} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faDribbble} /> */}
          <Link href='https://www.instagram.com/lisaborrelli90/'>
            <BsInstagram />
          </Link>
          <Link href='https://www.behance.net/lisab90'>
            <BsBehance />
          </Link>
          <Link href='https://dribbble.com/Lisab901'>
            <BsDribbble />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
