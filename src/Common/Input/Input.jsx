import './Input.css';

const Input = ({ formik, label, name, type }) => {
   const { getFieldProps, errors, touched } = formik;
   return (
      <div className="formControl">
         <label htmlFor={name}>{label}</label>
         <input type={type} id={name} name={name} {...getFieldProps(name)} />
         {errors[name] && touched[name] && (
            <div className="error">{errors[name]}</div>
         )}
      </div>
   );
};

export default Input;
