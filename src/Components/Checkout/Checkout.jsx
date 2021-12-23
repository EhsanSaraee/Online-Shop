import { useAuth } from '../../Contexts/Auth/AuthProvider';

const Checkout = () => {
   const auth = useAuth();
   return (
      <>
         {auth ? (
            <>
               <p>Name : {auth.name}</p>
               <p>Email : {auth.email}</p>
               <p>Phone : {auth.phoneNumber}</p>
            </>
         ) : (
            <p>Please Login</p>
         )}
      </>
   );
};

export default Checkout;
