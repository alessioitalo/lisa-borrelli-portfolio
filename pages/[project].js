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

const project = ({ project }) => {
  //   console.log(project);
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
          {/* <Image
            src={`https:${project.fields.mainImage.fields.file.url}`}
            layout='fill'
          /> */}
        </div>
        <div className={styles.description}>{project.fields.description}</div>
      </div>
    </Layout>
  );
};

export default project;
