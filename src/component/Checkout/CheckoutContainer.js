import {useAuth} from "../../Context/AuthProvider";
import Input from "../../common/Input";
import {useFormik} from "formik";
import Grid from '@mui/material/Grid';
import {InputLabel, Typography} from "@mui/material";
import amexCard from '../../images/amex-card.png';
import discoverCard from '../../images/discover-card.png';
import masterCard from '../../images/master-card.png';
import visaCard from '../../images/visa-card.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from "styled-components";


const TextFieldStyle = styled(TextField, {
    name: "TextFieldStyle",
})({
    width: 300,
    "& .MuiInputBase-root": {
        borderRadius:'20px !important',
        border:'none !important',
        marginTop:'0.5rem !important'
    },
    "& .MuiInputBase-root:hover":{
        borderRadius:'20px !important',
        border:'0px !important',
        marginTop:'0.5rem !important',
        outline:'0px !important'
    }
});


const CheckoutContainer = () =>{
    const auth =useAuth();
    const formik = useFormik({
        initialValues: {
            FullName: '',
            email: '',
            Address: '',
            City:'',
            State:'',
            Zip:''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const formik1 = useFormik({
        initialValues: {
            NameOnCard: '',
            CardNumber: '',
            ExpMonth: '',
            ExpYear:'',
            CV:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return(

        <>
            <Grid container={true} style={{marginTop:'12rem'}}>
              <Grid item sm={12} md={5}>
                  {/*TODO: form Billing*/}
                  <Box component={'form'} onSubmit={formik.handleSubmit}>
                      <Typography variant={'h4'}>Billing Address</Typography>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="FullName"
                              label="FullName"
                              type="text"
                              id="FullName"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoFocus
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="email"
                              label="Email"
                              type="email"
                              id="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoComplete="email"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="Address"
                              label="Address"
                              type="text"
                              id="Address"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoComplete="address"
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="City"
                              label="City"
                              type="text"
                              id="City"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoComplete="off"
                          />
                      </Grid>
                      <Grid container={true}>
                          <Grid item xs={6} md={6} lg={6}>
                              <TextFieldStyle
                                  required
                                  fullWidth
                                  name="State"
                                  label="State"
                                  type="text"
                                  id="State"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  autoComplete="off"
                              />
                          </Grid>
                          <Grid item xs={6} md={6} lg={6}>
                              <TextFieldStyle
                                  required
                                  fullWidth
                                  name="Zip"
                                  label="Zip"
                                  type="text"
                                  id="Zip"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  autoComplete="off"
                              />
                          </Grid>
                      </Grid>

                  </Box>
              </Grid>
              <Grid item sm={12} md={4}>

                  <Box component={'form'} onSubmit={formik1.handleSubmit}>
                      <Typography variant={'h4'}>Payment</Typography>
                      <Typography variant={'body'}>Accepted Card :</Typography>
                      <Grid container={true}>
                          <img src={amexCard} alt=""/>
                          <img src={discoverCard} alt=""/>
                          <img src={masterCard} alt=""/>
                          <img src={visaCard} alt=""/>
                      </Grid>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="NameOnCard"
                              label="Name on card"
                              type="text"
                              id="NameOnCard"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              autoFocus
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="CardNumber"
                              label="Card Number"
                              type="text"
                              id="CardNumber"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                          />
                      </Grid>
                      <Grid item xs={12}>
                          <TextFieldStyle
                              required
                              fullWidth
                              name="ExpMonth"
                              label="Expire Month"
                              type="text"
                              id="ExpMonth"
                              autoComplete="off"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}

                          />
                      </Grid>
                      <Grid container={true}>
                          <Grid item xs={6} md={6} lg={6}>
                              <TextFieldStyle
                                  required
                                  fullWidth
                                  name="ExpYear"
                                  label="Expire Year"
                                  type="text"
                                  id="ExpYear"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  autoComplete="off"
                              />
                          </Grid>
                          <Grid item xs={6} md={6} lg={6}>
                              <TextFieldStyle
                                  required
                                  fullWidth
                                  name="CV"
                                  label="CVV"
                                  type="text"
                                  id="CV"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  autoComplete="off"
                              />
                          </Grid>
                      </Grid>
                  </Box>
              </Grid>
              <Grid item sm={12} md={3}>
                 <Typography variant={'body'}>cart detail</Typography>
              </Grid>
            </Grid>

        </>

    )
}
export default CheckoutContainer;