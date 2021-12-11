import Layout from '../component/Layout';
import Dots from '../component/Dots';
import Image from 'next/image';
import styles from './About.module.css';
import skills from '../public/skills.svg';
import aboutImg from '../public/about.svg';
import InterestsList from '../component/InterestsList';

const about = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Image src={aboutImg} loading='eager' alt='' />
        </div>
        <div className={styles.container}>
          <div className={styles.bio}>
            <Dots />
            <p>
              Ciao, I am Lisa Borrelli and I am a Digital & Graphic Designer
              based in London. During my 5+ years of experience creating digital
              assets for websites, printing branded POS material, art direction
              for seasonal campaigns and developing user interfaces designs.{' '}
            </p>
            <p>
              New challanges lead me to new ideas and travelling is one my
              source of inspiration. I love visiting museums and exploring
              London in my spare time, but I also enjoy blinge watching series.
            </p>
            <p>
              My aim is to use my variety of skills to help businesses grow with
              visual impactful design.{' '}
            </p>
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
