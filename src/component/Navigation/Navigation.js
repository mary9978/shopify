import './navigation.css';
import React,{useState} from "react";
import { NavLink,useNavigate } from 'react-router-dom';
import Pacifico from '../../fonts/Pacifico-Regular.ttf';
import PersonIcon from '@mui/icons-material/Person';
import { useCart } from '../../Context/CartProvider';
import { useAuth } from '../../Context/AuthProvider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../../images/logo.svg';
// import styled from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from "styled-components";
import {AppBar, Box, Toolbar,Tabs,Tab,Tooltip,Avatar,IconButton,Menu,MenuItem,Divider,ListItemIcon,Badge,Paper,Button} from "@mui/material";
import OpenSansBold from '../../fonts/OpenSans/OpenSans-Bold.ttf'
import {Typography} from "@mui/material";


const CustomTabs = styled(Tabs)(() => ({
// marginLeft:'auto'
}));
const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        width:"10",
        height:"10",
        right: -3,
        top: 20,
        padding: '0 4px',
    },
}));
const HeaderButton = styled(Button)(() => ({
    backgroundColor:"#c4b5fd !important",
    borderRadius:'15px !important',
    color:"#7938F2 !important",
    textTransform:'none !important',
    fontFamily:OpenSansBold,
    '&:hover':{
        variant:'outlined',
        border:'2px solid #7938F2',
        backgroundColor:'#93c5fd !important',
        textTransform:'none',
        cursor:'pointer',
        borderRadius:'15px !important',
    }

}));
const CustomBox = styled(Box)(() => ({
    marginLeft:'auto'
}));
const CustomTabItem=styled(Tab)(() => ({
    // ...theme.Typography.Tab,
    textTransform:'none',
    fontFamily: OpenSansBold,
    fontWeight:700,
    fontSize: "1rem !important",
    minWidth:'10 !important',
    marginLeft:'15px !important',
}));
const SiteName=styled(Typography)(() => ({
    '.css-d1q4f0-MuiTypography-root':{
        fontFamily:Pacifico
    }
}));

const Navigation = () => {
  const cartItem = useCart().total;
  const auth = useAuth();
  const navigate = useNavigate();
  const LogOutHandler = () => {
    localStorage.removeItem("AuthState");
    navigate("/")
  }
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
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
                  <SiteName variant={'h4'} color={'#7938F2'}>Mari Site</SiteName>
                <CustomTabs value={}>
                    <CustomTabItem label={'Home'}/>
                    <CustomTabItem label={'Blogs'}/>
                    <CustomTabItem label={'Contact Us'}/>
                    <CustomTabItem label={'About Us'}/>
                </CustomTabs>
                <CustomBox sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    {auth !== null && localStorage.getItem("AuthState")!== null ?
                        <Tooltip title={'account-menu'}>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                sx={{ml: 2 , backgroundColor:"none !important",display:'flex',alignItems:'center'}}
                            >
                                <Avatar sx={{background:"none !important"}}>
                                    <ArrowDropDownIcon sx={{color:"#7938F2"}}/>
                                    <PersonIcon sx={{color:"#7938F2"}}/>
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        :
                        <HeaderButton variant="contained" onClick={()=> navigate('/signup')}>
                             <LoginIcon sx={{color:"#7938F2 !important",marginRight:'0.5rem'}}/>
                             <Typography variant={'body'}>Signup | Login</Typography>
                        </HeaderButton>
                    }

                    <IconButton sx={{ml:'2'}}>
                        <StyledBadge badgeContent={cartItem} color="secondary">
                            <LocalMallIcon sx={{color:"#7938F2",fontSize:'28px'}} onClick={()=> navigate('/cart')}/>
                        </StyledBadge>

                    </IconButton>
                </CustomBox>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            width:'200px !important',
                            top: '28px !important',
                            background: '#c4b5fd',
                            right: '72px',
                            overflow: 'visible',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#93c5fd',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => LogOutHandler()}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
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
    //
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