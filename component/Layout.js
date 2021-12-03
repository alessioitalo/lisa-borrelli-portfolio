import Head from 'next/head';
import styles from './Layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property='og:title' content='Lisa Borrelli' />
        <meta property='og:url' content='www.lisa-borrelli.com' />
        <meta property='og:type' content='website' />
        {/* <meta property="og:image" content="http://f97b-2a02-c7f-d493-1300-7c0c-4f4f-efaf-9be4.ngrok.io/preview.jpg" /> */}
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
          <FontAwesomeIcon icon={faBehance} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faDribbble} />
        </div>
      </footer>
    </>
  );
};

export default Layout;
