// src/components/formikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
  const formikSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={formikSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Form submitted successfully!', values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <label>
            Username:
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </label>
          <br />
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </label>
          <br />
          <label>
            Password:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default formikForm;
