import { createTheme } from '@mui/material/styles';
import {orange} from "@mui/material/colors";
import OpenSansBold from './fonts/OpenSans/OpenSans-Bold.ttf';
import OpenSans from './fonts/OpenSans/OpenSans-Medium.ttf';
import pacifico from './fonts/Pacifico-Regular.ttf';
import {Tab} from "@mui/material";
 export default createTheme({
    status: {
        danger: orange,
    },

     palette:{
         common:{
             main:"#3b82f6",
             lightBlue:"#93c5fd",
             darkBlue:"#1d4ed8"
         },
         primary: {
             // light:"#93c5fd",
             // main: "#3b82f6",
             // main: "#93c5fd",
             main: "#93c5fd",
         },
         secondary: {
             main: "#1d4ed8",
         },
     },
     Typography:{
        fontFamily:OpenSans,
        color:'black',
        Tab:{
            fontFamily: OpenSansBold,
            fontWeight:700,
            fontSize: "1.3rem !important",
        },
        h4:{
            fontWeight:300,
            fontSize:"23px",
            fontFamily:pacifico
        }
     }

});