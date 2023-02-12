import './navigation.css';
import React from "react";
import { NavLink,useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartProvider';
import { useAuth } from '../../Context/AuthProvider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../../images/logo.svg';
import styled from '@mui/material';
import {AppBar, Box, Toolbar,Tabs,Tab} from "@mui/material";
import OpenSansBold from '../../fonts/OpenSans/OpenSans-Bold.ttf'
import {Typography} from "@mui/material";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
const AppBarStyle = styled(AppBar)`
display:flex;
align-items:center;
justify-content: space-between;
`;
const CustomTabs = styled(Tabs)(() => ({
marginLeft:'auto'
}));
const CustomTabItem=styled(Tab)((theme) => ({

    ...theme.Typography.Tab,
    textTransform:'none',
    // fontFamily: OpenSansBold,
    // fontWeight:700,
    // fontSize: "1.3rem !important",
    minWidth:'10 !important',
    marginLeft:'15px !important',
}));
const Navigation = (props) => {

  const cartItem = useCart().total;
  const auth = useAuth();
  const navigate = useNavigate();
  const LogOutHandler = () => {
    localStorage.removeItem("AuthState");
    navigate("/")
  }
  function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  return (
      <>
        <ElevationScroll>
          <AppBar position="fixed" color={'primary'}>
            <Toolbar>
                  <img src={Logo} alt={'maris website'}/>
                  <Typography variant={'h4'} color={'#7938F2'}>Mari Site</Typography>
               <CustomTabs>
                <CustomTabItem label={'Home'}/>
                 <CustomTabItem label={'Blogs'}/>
                 <CustomTabItem label={'Contact Us'}/>
                 <CustomTabItem label={'About Us'}/>
                 <CustomTabItem label={'SignIN'}/>
               </CustomTabs>

            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </>


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