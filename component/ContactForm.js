import styles from './ContactForm.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import ContactFormMessage from './ContactFormMessage';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

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
      formSubmitHandler();
      formik.resetForm();
    },
  });

  const popupHandler = () => {
    setEmailSent(false);
    setEmailError(false);
  };

  const formSubmitHandler = async () => {
    const formData = {
      name: formik.values.name,
      email: formik.values.email,
      message: formik.values.message,
    };
    emailjs
      .send(
        NEXT_PUBLIC_SERVICEID,
        NEXT_PUBLIC_TEMPLATEID,
        formData,
        NEXT_PUBLIC_EMAIL_USERID
      )
      .then(
        (result) => {
          console.log(result);
          setEmailSent(true);
        },
        (error) => {
          console.log(error);
          setEmailError(true);
        }
      );

    // setEmailSent(true);
    // setEmailError(true)

    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application.json, text/pain, */*',
    //   },
    //   body: JSON.stringify({
    //     name: formik.values.name,
    //     email: formik.values.email,
    //     message: formik.values.message,
    //   }),
    // });
    // console.log(response);
    // if (response.ok) {
    //   console.log('request sent!');
    // } else {
    //   console.log('error');
    // }
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit} method='post'>
      <span>
        <div>
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
        <div>
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
          rows='14'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </span>
      <button type='submit'>SEND</button>
      {emailSent && (
        <ContactFormMessage type='confirm' popupHandler={popupHandler}>
          Your email has been sent!
        </ContactFormMessage>
      )}
      {emailError && (
        <ContactFormMessage type='error' popupHandler={popupHandler}>
          <span>
            Looks like something went wrong. Try clicking{' '}
            <a
              href={`mailto:${NEXT_PUBLIC_EMAIL_ADDRESS}`}
              style={{
                margin: '0 5px',
                textDecoration: 'underline',
                display: 'inline',
              }}
            >
              here
            </a>{' '}
            instead.
          </span>
        </ContactFormMessage>
      )}
    </form>
  );
};

export default ContactForm;
