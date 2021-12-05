import Layout from '../component/Layout';
import Head from 'next/head';
import styles from './Contact.module.css';
import Image from 'next/image';
import contactMe from '../public/contact.svg';
import ContactForm from '../component/ContactForm';

const contact = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <Image src={contactMe} />
        </div>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
};

export default contact;
