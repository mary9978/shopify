import React, {useEffect, useState} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom';
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import Input from '../../common/Input';
import { LoginSchema } from '../../schemas/index';
import { useAuthActions,useAuth } from "../../Context/AuthProvider";
import { LoginService } from '../../services/LoginService';
function LoginComp() {
  const [searchParams]= useSearchParams() ;
  const redirect = searchParams.get('redirect') || '/';
  const navigate = useNavigate();
  let setState = useAuthActions();
  //TODO: check if auth dont show sign up page and redirect to checkout page
  const auth = useAuth();
  useEffect(()=>{
    if(auth) navigate(`/${redirect}`);
  },[redirect,auth]);

    const [err,setErr]=useState('');
    const onSubmit = async (values, actions) => {
      const {email, password } = values;
      const userData = {
        email,
        password,
      };
      try {
        const { data } = await LoginService(userData);
        setState(data);
        //localStorage.setItem("AuthState", JSON.stringify(data));
        setErr("");
        actions.resetForm();
        navigate(redirect);
      } catch (error) {
        if (error.response && error.response.data.message)
          setErr(error.response.data.message);
      }
    };
    const initialValues = {
      email: "",
      password: "",
    };
    const formik = useFormik({
      initialValues:  initialValues,
      onSubmit,
      validationSchema: LoginSchema,
      enableReinitialize: true,
    });
  return (
    <>
      <form className="form--basic" onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name={"email"}
          label={"email"}
          placeholder={"enter your email"}
          formik={formik}
        />
        <Input
          type="password"
          name={"password"}
          label={"password"}
          placeholder={"enter your password"}
          formik={formik}
        />
        <div className="col-12">
          <button
            className="btn btn-primary my-3 btn--basic w-50"
            disabled={!formik.isValid}
            type="submit"
          >
            Next
          </button>
          {err && (
            <p style={{ backgroundColor: "red", color: "white" }}>{err}</p>
          )}
          <Link to={redirect ==='/'? '/signup' : `/signup?redirect=${redirect}`}>Don't have an account ? Signup ...</Link>
        </div>
      </form>
    </>
  );
}

export default LoginComp