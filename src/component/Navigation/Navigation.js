import './navigation.css';
import { NavLink,useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartProvider';
import { useAuth } from '../../Context/AuthProvider';
// import styled from 'styled-components';
import styled from 'styled-components';
import Dropdown from "react-bootstrap/Dropdown";
import UserIcon from '../../images/icons8-user-32.png';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import EnterIcon from '../../images/icons8-enter-24.png';
import LogOutIcon from "../../images/icons8-logout-24.png";


import { AppBar, Toolbar } from "@mui/material";
const AppBarStyle = styled(AppBar)`
display:flex;
align-items:center;
justify-content: space-between;
background-color: powderblue !important;
height:80px
`;

const Navigation = () => {
  const cartItem = useCart().total;
  const auth = useAuth();
  const navigate = useNavigate();
  const LogOutHandler = () => {
    localStorage.removeItem("AuthState");
    navigate("/")
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <AppBarStyle>Mari site</AppBarStyle>
      </Toolbar>
    </AppBar>
    // <header className="mainNavigation">
    //   <nav>
    //     <ul>
    //       <li>
    //         <NavLink activeClassName={"active"} to={"/"}>
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink activeClassName={"active"} to={"/cart"}>
    //           <ShoppingBasketTwoToneIcon />
    //           {cartItem}
    //         </NavLink>
    //       </li>
    //       <li>
    //         {auth !== null && localStorage.getItem("AuthState")!== null ? (
    //           <Dropdown>
    //             <Dropdown.Toggle id="dropdown-basic">
    //               <img src={UserIcon} alt={""} width={"25px"} />
    //             </Dropdown.Toggle>

    //             <Dropdown.Menu>
    //               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //               <Dropdown.Item href="#/action-2">
    //                 Another action
    //               </Dropdown.Item>
    //               <Dropdown.Item onClick={() => LogOutHandler()}>
    //                 <img src={LogOutIcon} alt="" />
    //                 Sign Out
    //               </Dropdown.Item>
    //             </Dropdown.Menu>
    //           </Dropdown>
    //         ) : (
    //           <NavLink activeClassName={"active"} to={"/signup"}>
    //             signup
    //             <img src={EnterIcon} alt="" />
    //           </NavLink>
    //         )}
    //       </li>
    //     </ul>
    //     <div>Mari shop</div>
    //   </nav>
    // </header>
  );
}
 
export default Navigation;