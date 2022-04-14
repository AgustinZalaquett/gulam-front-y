// import React, { useState } from 'react';
import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function LogIn() {
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState('');

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  // falta manejar toda la lógica una vez teniendo la api

  return (
    <div className="form">
      <h2>Log In to Gulam!</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({

          email: Yup.string()
            .email('invalid email address')
            .required('this file is required'),
          password: Yup.string()
            .min(6, 'Your password must be at least 6 characters')
            .max(15, 'Tour password must be 15 characters long or less'),

        })}
      >
        {({ errors, touched }) => (
          <Form>

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
              <button type="submit">Log In</button>
            </div>
          </Form>
        )}

      </Formik>
      {/* <p>{message}</p> */}
    </div>
  );
}
