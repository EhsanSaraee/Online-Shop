import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from '../../Common/Input/Input';
import './SignUp.css';

const initialValues = {
   name: '',
   email: '',
   password: '',
   passwordConfirm: '',
   phoneNumber: '',
};

const onSubmit = (values) => {
   console.log(values);
};

const validationSchema = yup.object({
   name: yup
      .string()
      .required('Name is Required')
      .min(6, 'Name length is not valid'),
   email: yup.string().email('Invalid Email').required('Email is Required'),
   password: yup.string().required('Password is Required'),
   passwordConfirm: yup
      .string()
      .required('Password Confirmation is Required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
   phoneNumber: yup
      .string()
      .required('Phone Number is Required')
      .matches(/^[0-9]{11}$/, 'Invalid phone number')
      .nullable(),
});

const SignUp = () => {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });
   return (
      <section className="formContainer">
         <form>
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
         </form>
      </section>
   );
};

export default SignUp;
