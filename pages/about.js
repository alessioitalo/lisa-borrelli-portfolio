import { createClient } from 'contentful';
import Layout from '../component/Layout';
import Dots from '../component/Dots';
import Image from 'next/image';
import styles from './About.module.css';
import skills from '../public/skills.svg';
import aboutImg from '../public/about.svg';
import InterestsList from '../component/InterestsList';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const response = await client.getEntries({ content_type: 'bio' });
  return {
    props: {
      bio: response.items[0],
    },
  };
}

const about = ({ bio }) => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Image src={aboutImg} loading='eager' alt='' />
        </div>
        <div className={styles.container}>
          <div className={styles.bio}>
            <Dots />
            {bio.fields.bio.content.map((paragraph) => {
              return (
                <div key={bio.fields.bio.content.indexOf(paragraph)}>
                  {paragraph.content[0].value}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.title} ${styles.second}`}>
            <h1>My Skills</h1>
            <Dots />
          </div>
          <div className={styles.skills}>
            <div>
              <label htmlFor='uiDesign'>UI DESIGN</label>
              <span className={styles.skill} id='uiDesign'></span>
            </div>
            <div>
              <label htmlFor='branding'>BRANDING</label>
              <span className={styles.skill} id='branding'></span>
            </div>
            <div>
              <label htmlFor='wordpress'>WORDPRESS</label>
              <span className={styles.skill} id='wordpress'></span>
            </div>
            <div>
              <label htmlFor='photography'>PHOTOGRAPHY</label>
              <span className={styles.skill} id='photography'></span>
            </div>
            <div>
              <label htmlFor='photography'>MAILCHIMP</label>
              <span className={styles.skill} id='mailchimp'></span>
            </div>
            <div>
              <label htmlFor='infographic'>INFOGRAPHIC</label>
              <span className={styles.skill} id='infographic'></span>
            </div>
          </div>
          <div className={styles.skillsImage}>
            <Image src={skills} alt='skill icons' />
          </div>
          <div className={styles.triangle} />
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Things I like</h1>
            <Dots />
          </div>
          <InterestsList />
          <div className={styles.lines} />
        </div>
      </Layout>
    </>
  );
};

export default about;
