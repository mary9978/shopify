import {useAuth} from "../../Context/AuthProvider";
import CheckoutContainer from "./CheckoutContainer";

const Checkout = () =>{
    const auth =useAuth();
    return(
       <div>
           {
               auth
               ?
               <>
                <CheckoutContainer/>
               </>
                 :
               ''
           }
       </div>
    )
}
export default Checkout;