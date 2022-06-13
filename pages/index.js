import { createClient } from 'contentful';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../component/Layout';
import Dots from '../component/Dots';
import styles from './Index.module.css';
import photo from '../public/photo.svg';


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
        'I am a Brand Designer',
        'I am a UI Designer',
      ],
      autoStart: true,
      loop: true,
    }}
  />
);

export default function Home({ projects }) {

  const [hoverEffect, setHoverEffect] = useState(null)
  return (
      <Layout>
        <div className={styles.splash}>
          <div className={styles.halfSplash}>
            <h1>Ciao, I am Lisa</h1>
            <Dots />
            <h4>{writer}</h4>
          </div>
          <div className={styles.halfSplash}>
            <Image src={photo} alt='lisa' priority={true} />
          </div>
        </div>
        <div className={styles.title} id='projects'>
          <h1>My Projects</h1>
          <Dots />
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link href={`/${project.fields.url}`} key={project.sys.id} passHref>
              <div className={styles.imageContainer} onMouseEnter={()=>{setHoverEffect(project.sys.id)}} onMouseLeave={()=>{setHoverEffect(null)}}>
                <Image
                  src={`https:${project.fields.mainImage.fields.file.url}`}
                  alt={project.fields.description.content[0].content[0].value}
                  width={500}
                  height={300}
                />
                <div className={styles.imageOverlay} style={{opacity: `${hoverEffect === project.sys.id? 0.8 : 0}`}}>
                  <h2>
                    {project.fields.description.content[0].content[0].value}
                  </h2>
                  <h5>{project.fields.description.content[1].content[0].value}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Layout>
  );
}
