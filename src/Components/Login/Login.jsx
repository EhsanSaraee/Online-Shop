import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../Common/Input/Input';
import './login.css';

const initialValues = {
   email: '',
   password: '',
};

const onSubmit = (values) => {
   console.log(values);
};

const validationSchema = yup.object({
   email: yup.string().email('Invalid Email').required('Email is Required'),
   password: yup.string().required('Password is Required'),
});

const Login = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });
   return (
      <section className="formContainer">
         <form>
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
            <Link to="/sign-up">
               <p style={{ marginTop: '10px' }}>Not Registered ?</p>
            </Link>
         </form>
      </section>
   );
};

export default Login;
