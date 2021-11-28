import Layout from '../component/Layout';
import Dots from '../component/Dots';
import Interest from '../component/Interest';
import Head from 'next/head';
import Image from 'next/image';
import styles from './About.module.css';
import skills from '../public/skills.svg';
import music from '../public/music.svg';
import camera from '../public/camera.svg';
import travel from '../public/travel.svg';
import drink from '../public/drink.svg';
import aboutImg from '../public/about.svg';
// import { useState } from 'react';

const about = () => {
  // const [showInterest, setShowInterest] = useState();
  return (
    <>
      <Head>
        <title>Lisa Borrelli - About Me</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <div className={styles.container}>
          <Image src={aboutImg} />
        </div>
        <div className={styles.container}>
          <div className={styles.bio}>
            <Dots />
            Ciao, I am Lisa Borrelli and I am based in London. My aim is to use
            my variety of skills to help businesses grow with visual impactful
            design.
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
              <label htmlFor='photography'>PHOTOGRAPHY</label>
              <span className={styles.skill} id='mailchimp'></span>
            </div>
            <div>
              <label htmlFor='infographic'>INFOGRAPHIC</label>
              <span className={styles.skill} id='infographic'></span>
            </div>
          </div>
          <Image src={skills} />
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>A little more about me</h1>
            <Dots />
          </div>
          <div className={styles.icons}>
            <Image
              src={travel}
              className={styles.icon}
              // onMouseEnter={() => {
              //   setShowInterest('travel');
              // }}
              // onMouseLeave={() => {
              //   setShowInterest();
              // }}
            />
            {/* {showInterest === 'travel' && (
              <Interest type={'travel'}>I love traveling!</Interest>
            )} */}
            <Image
              src={music}
              className={styles.icon}
              // onMouseEnter={() => {
              //   setShowInterest('music');
              // }}
              // onMouseLeave={() => {
              //   setShowInterest();
              // }}
            />
            {/* {showInterest === 'music' && (
              <Interest type={'music'}>I love music!</Interest>
            )} */}
            <Image
              src={camera}
              className={styles.icon}
              // onMouseEnter={() => setShowInterest('camera')}
              // onMouseLeave={() => setShowInterest()}
            />
            {/* {showInterest === 'camera' && (
              <Interest type={'photo'}>I love taking photos!</Interest>
            )} */}
            <Image
              src={drink}
              className={styles.icon}
              // onMouseEnter={() => setShowInterest('movies')}
              // onMouseLeave={() => setShowInterest()}
            />
            {/* {showInterest === 'drink' && (
              <Interest type={'drink'}>I love wine!</Interest>
            )} */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default about;
