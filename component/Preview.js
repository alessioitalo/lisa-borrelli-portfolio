import styles from './Preview.module.css';
import Link from 'next/link';

const Preview = ({ project }) => {
  return (
    <Link href={`/${project.fields.url}`}>
      <div className={styles.preview}>
        <h4>{project.fields.name}</h4>
        <img src={project.fields.mainImage.fields.file.url} />
      </div>
    </Link>
  );
};

export default Preview;
