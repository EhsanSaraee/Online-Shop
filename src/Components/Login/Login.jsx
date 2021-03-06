import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../Common/Input/Input';
import { useAuth, useAuthDispatch } from '../../Contexts/Auth/AuthProvider';
import { useQuery } from '../../Hooks/useQuery';
import { loginUser } from '../../Services/loginServices';
import './login.css';

const initialValues = {
   email: '',
   password: '',
};

const validationSchema = yup.object({
   email: yup.string().email('Invalid Email').required('Email is Required'),
   password: yup.string().required('Password is Required'),
});

const Login = () => {
   const [error, setError] = useState(null);
   const navigate = useNavigate();
   const setAuth = useAuthDispatch();
   const query = useQuery();
   const redirect = query.get('redirect') || '/';
   const auth = useAuth();

   useEffect(() => {
      if (auth) navigate(redirect);
   }, [auth, redirect]);

   const onSubmit = async (values) => {
      try {
         const { data } = await loginUser(values);
         setAuth(data);
         setError(null);
         navigate(redirect);
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
            <Input formik={formik} type="email" name="email" label="Email" />
            <Input
               formik={formik}
               type="password"
               name="password"
               label="Password"
            />
            <button
               type="submit"
               disabled={!formik.isValid}
               className="btn primary"
            >
               Login
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Link to={`/sign-up?redirect=${redirect}`}>
               <p style={{ marginTop: '10px' }}>Not Registered ?</p>
            </Link>
         </form>
      </section>
   );
};

export default Login;
