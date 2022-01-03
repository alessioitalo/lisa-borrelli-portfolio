import Layout from '../component/Layout';
import styles from './Contact.module.css';
import ContactForm from '../component/ContactForm';
import Circle from '../component/Circle';

const contact = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Circle style='light' text='Contact me' />
        </div>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
};

export default contact;
