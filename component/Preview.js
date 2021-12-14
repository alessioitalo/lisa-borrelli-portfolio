import styles from './Preview.module.css';
import Link from 'next/link';

const Preview = ({ project }) => {
  return (
    <Link href={`/${project.fields.url}`}>
      <a>
        <div className={styles.preview}>
          <h5>{project.fields.name}</h5>
          <img src={project.fields.mainImage.fields.file.url} />
        </div>
      </a>
    </Link>
  );
};

export default Preview;
