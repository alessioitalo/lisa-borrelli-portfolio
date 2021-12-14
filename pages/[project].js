import { BiArrowToTop } from 'react-icons/bi';
import styles from './Project.module.css';
import Layout from '../component/Layout';
// import Preview from '../component/Preview';
import { createClient } from 'contentful';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

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
    // 'fields.url': params.project,
  });

  return {
    props: {
      // project: response.items[0],
      projects: response.items,
      project: response.items.find(
        (item) => item.fields.url === params.project
      ),
    },
  };
};

const project = ({ projects, project }) => {
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

  // getting slugs for previous and next project. If looking at first project, previous will be the last - if looking at the last, next will be the [0]
  // const currentIndex = projects.indexOf(
  //   projects.find((item) => item.fields.url === project.fields.url)
  // );

  // const previousProject =
  //   projects[currentIndex - 1] || projects[projects.length - 1];

  // const nextProject = projects[currentIndex + 1] || projects[0];

  // projects.splice(projects.indexOf(project), 1);

  return (
    <Layout>
      <div className={styles.container}>
        <div
          className={styles.mainImage}
          style={{
            backgroundImage: `url(https:${project.fields.mainImage.fields.file.url})`,
          }}
        >
          <div className={styles.mainOverlay} />
        </div>
        <div className={styles.description}>
          <h1>{project.fields.description.content[0].content[0].value}</h1>
          <h3>{project.fields.description.content[1].content[0].value}</h3>
          <p>{project.fields.description.content[2].content[0].value}</p>
        </div>

        <div
          className={`${styles.fixedTopButton} ${
            showTopButton ? '' : styles.transparent
          }`}
        >
          <a href='#top'><BiArrowToTop /></a>
        </div>

        {project.fields.video && (
          <ReactPlayer
            url={`https:${project.fields.video.fields.file.url}`}
            playing={true}
            loop={true}
            width='100%'
            height='100%'
            controls={true}
            style={{ lineHeight: '0' }}
          />
        )}
        <div className={`${project.fields.url} ${styles.imagesContainer}`}>
          {project.fields.images.map((image) => {
            return (
              <img
                key={image.fields.file.fileName}
                src={`https:${image.fields.file.url}`}
                loading='lazy'
                alt={image.fields.file.fileName}
              />
            );
          })}
        </div>
        {/* <div className={styles.previewContainer}>
          <h3>You may also be interested in...</h3>
          <div>
            <Preview
              project={projects[Math.floor(Math.random() * projects.length)]}
            />
            <Preview
              project={projects[Math.floor(Math.random() * projects.length)]}
            />
            <Preview
              project={projects[Math.floor(Math.random() * projects.length)]}
            />
          </div>
        </div> */}
        <div className={styles.buttonsContainer}>
          {/* <div className={styles.buttons}>
            <Link href={`/${previousProject.fields.url}`}>
              <a>Previous Project</a>
            </Link>
            <Link href={`/${nextProject.fields.url}`}>
              <a>Next Project</a>
            </Link>
          </div> */}
          {/* <div className={styles.top}>
            <a href='#top'>
              <BiArrowToTop />
            </a>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default project;
