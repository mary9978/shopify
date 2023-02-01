import './navigation.css';
import { NavLink } from 'react-router-dom';
import {useCart} from '../../Context/CartProvider';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
const Navigation = () => {
    const cartItem =useCart().total;
    return ( 
      <header className='mainNavigation'>
        <nav>
        <ul>
        <li>
            <NavLink activeClassName={'active'} to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName={'active'} to={"/cart"}><ShoppingBasketTwoToneIcon/>{cartItem}</NavLink>
          </li>
          <li>
            <NavLink activeClassName={'active'} to={"/signup"}>signup</NavLink>
          </li>
        </ul>
        <div>Mari shop</div>
        </nav>
      </header>
     );
}
 
export default Navigation;