import Image from 'next/image';
import Link from 'next/link';
import Layout from '../component/Layout';
import Dots from '../component/Dots';
import styles from './Index.module.css';
import photo from '../public/photo.svg';
import { createClient } from 'contentful';
import Typewriter from 'typewriter-effect';
import Carousel from 'nuka-carousel';

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
  // console.log(projects[0]);
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
            <Image src={photo} alt='profile picture' />
          </div>
        </div>
        <div className={styles.title} />
        <h1>My Projects</h1>
        <Dots />
        <Carousel
          initialSlideHeight={1000}
          className={styles.carousel}
          nextButtonClassName={styles.rightArrow}
          prevButtonClassName={styles.leftArrow}
        >
          {projects.map((project) => {
            return (
              <div
                style={{ height: '100%', width: '100%', position: 'relative' }}
                key={project.sys.id}
              >
                <Link href={`/${project.fields.url}`}>
                  <a>
                    <Image
                      src={`https:${project.fields.mainImage.fields.file.url}`}
                      layout='fill'
                    />
                  </a>
                </Link>
              </div>
            );

            {
              /* return ( */
            }
            {
              /* <div
                className={styles.slide}
                key={project.sys.id}
                style={{
                  backgroundImage: `url(https:${project.fields.mainImage.fields.file.url})`,
                }}
              >
                {projects.indexOf(project)}
              </div> */
            }
            {
              /* ); */
            }
          })}
        </Carousel>
      </Layout>
      {/* <Carousel projects={projects} /> */}
      {/* src={`https:${project.fields.mainImage.fields.file.url}`} */}
    </>
  );
}
