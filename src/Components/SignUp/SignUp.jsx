import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../Common/Input/Input';
import { signUpUser } from '../../Services/signUpServices';
import './SignUp.css';

const initialValues = {
   name: '',
   email: '',
   password: '',
   passwordConfirm: '',
   phoneNumber: '',
};

const validationSchema = yup.object({
   name: yup
      .string()
      .required('Name is required')
      .min(6, 'Name length is not valid'),
   email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
   phoneNumber: yup
      .string()
      .required('Phone Number is required')
      .matches(/^[0-9]{11}$/, 'Invalid Phone Number')
      .nullable(),
   password: yup.string().required('Password is required'),
   passwordConfirm: yup
      .string()
      .required('Password Confirmation is Required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   const onSubmit = async (values) => {
      const { name, email, password, phoneNumber } = values;
      const userData = {
         name,
         email,
         password,
         phoneNumber,
      };
      try {
         const { data } = await signUpUser(userData);
         setError(null);
         navigate('/');
      } catch (error) {
         if (error.response && error.response.data.message)
            setError(error.response.data.message);
      }
   };

   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });

   return (
      <section className="formContainer">
         <form onSubmit={formik.handleSubmit}>
            <Input formik={formik} type="text" name="name" label="Name" />
            <Input formik={formik} type="email" name="email" label="Email" />
            <Input
               formik={formik}
               type="tel"
               name="phoneNumber"
               label="Phone Number"
            />
            <Input
               formik={formik}
               type="password"
               name="password"
               label="Password"
            />
            <Input
               formik={formik}
               type="password"
               name="passwordConfirm"
               label="Password Confirm"
            />
            <button
               type="submit"
               disabled={!formik.isValid}
               className="btn primary"
            >
               Submit
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link to="/login">
               <p style={{ marginTop: '10px' }}>Already Registered ?</p>
            </Link>
         </form>
      </section>
   );
};

export default SignUp;
