import styles from './ContactForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter your name'),
      email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Please enter an email address.'),
      message: Yup.string().required('Please enter your message.'),
    }),
    onSubmit: () => {
      console.log('form submitted');
      console.log(formik.values.name);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <span>
        <div className={styles.labelContainer}>
          <label htmlFor='name'>YOUR NAME</label>
          <div className={styles.error}>
            {formik.touched.name && formik.errors.name}
          </div>
        </div>
        <input
          id='name'
          type='text'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </span>
      <span>
        <div className={styles.labelContainer}>
          <label htmlFor='email'>YOUR EMAIL ADDRESS</label>
          <div className={styles.error}>
            {formik.touched.email && formik.errors.email}
          </div>
        </div>
        <input
          id='email'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </span>
      <span>
        <div>
          <label htmlFor='message'>YOUR MESSAGE</label>
          <div className={styles.error}>
            {formik.touched.message && formik.errors.message}
          </div>
        </div>
        <textarea
          id='message'
          value={formik.values.message}
          rows='20'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </span>
      <button type='submit'>SEND</button>
    </form>
  );
};

export default ContactForm;
