import { BiArrowToTop } from 'react-icons/bi';
import styles from './Project.module.css';
import Layout from '../component/Layout';
import Preview from '../component/Preview';
import { createClient } from 'contentful';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// connecting to Contentful, getting Props and Paths
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: 'project',
  });
  const paths = response.items.map((item) => {
    return { params: { project: item.fields.url } };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const response = await client.getEntries({
    content_type: 'project',
  });
  return {
    props: {
      projects: response.items,
      project: response.items.find(
        (item) => item.fields.url === params.project
      ),
    },
  };
};

// actual component - takes in TWO PROPS: array of projects and selected project
const Project = ({ projects, project }) => {
  // return to Top button must only be visible after scroll. Initializing state, then Effect fired with eventListener
  const [showTopButton, setShowTopButton] = useState(false);
  const topButtonHandler = () => {
    if (window.scrollY >= 400) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', topButtonHandler);
    return () => {
      document.removeEventListener('scroll', topButtonHandler);
    };
  }, [showTopButton]);

  // actual component being returned

  project.fields.description.content.forEach((i)=>{
    console.log(i.content[0].value)
  })
  return (
    <Layout>
      <div className={styles.container}>
        {/* // main image of project */}
        <div
          className={styles.mainImage}
          style={{
            backgroundImage: `url(https:${project.fields.mainImage.fields.file.url})`,
          }}
        >
          <div className={styles.mainOverlay} />
          <div className={styles.arrow}></div>
        </div>
        {/* // description of project */}
        <div className={styles.description}>
          {project.fields.description.content.map((item)=>{
            return documentToReactComponents(item) 
          })}
        </div>
        {/* // return to Top button */}
        <div
          className={`${styles.fixedTopButton} ${
            showTopButton ? '' : styles.transparent
          }`}
        >
          <a href='#top'>
            <BiArrowToTop/>
          </a>
        </div>
        {/* first video */}
        {project.fields.video && (
          <ReactPlayer
            url={`https:${project.fields.video.fields.file.url}`}
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            controls={true}
            style={{ lineHeight: '0', marginBottom: '2.5rem' }}
          />
        )}
        {/* first block of images */}
        {project.fields.images && <div className={`${project.fields.url} ${styles.imagesContainer}`}>
          {project.fields.images.map((image) => {
            return (
              <div key={image.fields.file.fileName}>
                <img
                  src={`https:${image.fields.file.url}`}
                  loading='lazy'
                  alt={image.fields.file.fileName}
                />
              </div>
            );
          })}
        </div>}
        {/* second video */}
        {project.fields.videoMiddle && (
          <ReactPlayer
            url={`https:${project.fields.videoMiddle.fields.file.url}`}
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            controls={true}
            style={{ lineHeight: '0', marginBottom: '2.5rem' }}
          />
        )}
        {/* second block of images */}
        {project.fields.imagesMiddle &&<div className={`${project.fields.url} ${styles.imagesContainer}`}>
          {project.fields.imagesMiddle.map((image) => {
            return (
              <div key={image.fields.file.fileName}>
                <img
                  src={`https:${image.fields.file.url}`}
                  loading='lazy'
                  alt={image.fields.file.fileName}
                />
              </div>
            );
          })}
        </div>}
          {/* third video */}
          {project.fields.videoBottom && (
          <ReactPlayer
            url={`https:${project.fields.videoBottom.fields.file.url}`}
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            controls={true}
            style={{ lineHeight: '0', marginBottom: '2.5rem' }}
          />
        )}
          {/* second block of images */}
        {project.fields.imagesBottom && <div className={`${project.fields.url} ${styles.imagesContainer}`}>
          {project.fields.imagesBottom.map((image) => {
            return (
              <div key={image.fields.file.fileName}>
                <img
                  src={`https:${image.fields.file.url}`}
                  loading='lazy'
                  alt={image.fields.file.fileName}
                />
              </div>
            );
          })}
        </div>}
        {/* // preview container where all the elements of the array projects 
        // that are not the selected projects are mapped and rendered as preview */}
        <div className={styles.previewContainer}>
          <h2>See other projects</h2>
          <div className={styles.previews}>
            {projects
              .filter((item) => item.fields.name !== project.fields.name)
              .map((remainingProject) => {
                return (
                  <Preview
                    project={remainingProject}
                    key={projects.indexOf(remainingProject)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
