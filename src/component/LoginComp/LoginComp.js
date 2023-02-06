import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import Input from '../../common/Input';
import { LoginSchema } from '../../schemas/index';
import { useAuthActions } from "../../Context/AuthProvider";
import { LoginService } from '../../services/LoginService';
function LoginComp() {
  const navigate = useNavigate();
  let setState = useAuthActions();
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
        navigate("/");
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
          <Link to="/login">Don't have an account ? Signup ...</Link>
        </div>
        {/* {toastAlert && <Toaster position="bottom-left" reverseOrder={false} />} */}
      </form>
    </>
  );
}

export default LoginComp