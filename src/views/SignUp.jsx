// import React, { useState } from 'react';
import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState('');

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  // falta manejar toda la lógica una vez teniendo la api

  return (
    <div className="form">
      <h2>Sign Up to Gulam!</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
          acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, 'your name must be at least 3 characters')
            .max(40, 'your name must be 40 character o less')
            .required('this file is required'),
          lastName: Yup.string()
            .min(3, 'your name must be at least 3 characters')
            .max(40, 'your name must be 40 character o less')
            .required('this file is required'),
          email: Yup.string()
            .email('invalid email address')
            .required('this file is required'),
          password: Yup.string()
            .min(6, 'Your password must be at least 6 characters')
            .max(15, 'Tour password must be 15 characters long or less'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password'),
          acceptedTerms: Yup.string()
            .required('Required')
            .oneOf([true], 'please accept terms and conditions'),
        })}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field name="firstName" placeholder="Name" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" placeholder="Last name" />
              {errors.lastName && touched.lastName && (
                <div>{errors.lastName}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="Email" />
              {errors.email && touched.email && (
                <div>{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" placeholder="Password" />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </div>
            <div>
              <label htmlFor="passwordConfirmation">Password Confirmation</label>
              <Field type="password" name="passwordConfirmation" placeholder="Password Confirmation" />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <div>{errors.passwordConfirmation}</div>
              )}
            </div>
            <div>
              <label htmlFor="acceptedTerms">Accept terms and conditions?</label>
              <Field type="checkbox" name="acceptedTerms" />
              {errors.acceptedTerms && touched.acceptedTerms && (
                <div>{errors.acceptedTerms}</div>
              )}
            </div>
            <div>
              <button type="submit">Create account</button>
            </div>
          </Form>
        )}

      </Formik>
      {/* <p>{message}</p> */}
    </div>
  );
}
