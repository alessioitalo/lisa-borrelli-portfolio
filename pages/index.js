import Image from 'next/image';
import Layout from '../component/Layout';
// import Head from 'next/head';
import Dots from '../component/Dots';
import styles from './Index.module.css';
import photo from '../public/photo.svg';
import { createClient } from 'contentful';
import Typewriter from 'typewriter-effect';
import Carousel from '../component/Carousel';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const response = await client.getEntries({ content_type: 'project' });
  return {
    props: {
      projects: response.items,
    },
  };
}

const writer = (
  <Typewriter
    options={{
      strings: [
        'I am a Digital Designer',
        'I am a Graphic Designer',
        'I am a Branding Designer',
        'I am a UI Designer',
      ],
      autoStart: true,
      loop: true,
    }}
  />
);

export default function Home({ projects }) {
  return (
    <>
      {/* <Head>
        <title>Lisa Borrelli</title>
        <meta
          name='description'
          content='Digital and Graphic Designer based in London, UK.'
        />
        <meta property="og:url" content="www.lisa-borrelli.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={photo} />
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <Layout>
        <div className={styles.splash}>
          <div className={styles.halfSplash}>
            <h1>Ciao, I am Lisa</h1>
            <Dots />
            <h4>{writer}</h4>
          </div>
          <div className={styles.halfSplash}>
            <Image src={photo} />
          </div>
        </div>
        <Carousel projects={projects} />
        
        {/* {projects.map((project) => {
          return (
            <div key={project.sys.id} className='image'>
              <div className='main-project-overlay' />
              <Image
                className='main-project-img'
                src={`https:${project.fields.mainImage.fields.file.url}`}
                layout='fill'
                objectFit='cover'
              />
            </div>
          );
        })} */}
      </Layout>
    </>
  );
}
