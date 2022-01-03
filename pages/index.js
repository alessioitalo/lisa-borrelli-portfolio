import Image from 'next/image';
import Link from 'next/link';
import Layout from '../component/Layout';
import Dots from '../component/Dots';
import styles from './Index.module.css';
import photo from '../public/photo.svg';
import { createClient } from 'contentful';
import Typewriter from 'typewriter-effect';
import Carousel from 'nuka-carousel';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

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
      <Layout>
        <div className={styles.splash}>
          <div className={styles.halfSplash}>
            <h1>Ciao, I am Lisa</h1>
            <Dots />
            <h4>{writer}</h4>
          </div>
          <div className={styles.halfSplash}>
            <Image src={photo} alt='lisa' />
          </div>
        </div>
        <div className={styles.title}>
          <h1>My Projects</h1>
          <Dots />
        </div>
        {/* <Carousel
          heightMode='first'
          framePadding='20px'
          defaultControlsConfig={{
            pagingDotsStyle: { fill: '#fe5f55' },
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <BsFillArrowLeftCircleFill
              className={`${styles.arrow} ${styles.left}`}
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <BsFillArrowRightCircleFill
              className={`${styles.arrow} ${styles.right}`}
              onClick={nextSlide}
            />
          )}
        >
          {projects.map((project) => (
            <Link href={`/${project.fields.url}`} key={project.sys.id}>
              <img
                src={`https:${project.fields.mainImage.fields.file.url}`}
                alt='project preview'
              />
            </Link>
          ))}
        </Carousel> */}
      </Layout>
    </>
  );
}