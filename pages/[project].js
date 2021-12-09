import Image from 'next/image';
import styles from './Project.module.css';
import Layout from '../component/Layout';
import { createClient } from 'contentful';

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
    'fields.url': params.project,
  });

  return {
    props: {
      project: response.items[0],
    },
  };
};

{
  /* <Image src={`https:${image.fields.file.url}`} layout='fill' /> */
}

const project = ({ project }) => {
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
      </div>
    </Layout>
  );
};

export default project;
