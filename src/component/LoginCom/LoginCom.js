import { Formik, Form, useFormik } from "formik";
import { useState, useEffect } from "react";
import Input from "../../common/Input";
import axios from "axios";
import { AdvancedSchema, basicSchema } from "../../schemas";
const LoginCom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(null);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = { id: Math.floor(Math.random() * 100), ...values };
    console.log("values", values);
    // axios
    //   .post("http://localhost:3001/users", data)
    //   .then((res) => notify())
    //   .catch((errors) => alert("errors", errors));
    //setShowPassword(false);
    // actions.resetForm();
  };
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3000/users/1")
  //       .then((res) => setFormData(res.data))
  //       .catch((error) => console.log(error));
  //   }, []);
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  //   const notify = () => toast.success("Successfully Submitted!");
  const [toastAlert, setToast] = useState(true);
  const formik = useFormik({
    initialValues: formData || initialValues,
    onSubmit,
    validationSchema: basicSchema,
    enableReinitialize: true,
  });
  return (
    <form className="form--basic" onSubmit={formik.handleSubmit}>
      <Input
        type="name"
        name={"name"}
        label={"name"}
        placeholder={"enter your name"}
        formik={formik}
      />
      <Input
        type="email"
        name={"email"}
        label={"email"}
        placeholder={"enter your email"}
        formik={formik}
      />
      <Input
        type="tel"
        name={"phoneNumber"}
        label={"phoneNumber"}
        placeholder={"enter your phoneNumber"}
        formik={formik}
      />
      <div className="col-12">
        <button
          className="btn btn-primary my-3 btn--basic w-50"
          disabled={!formik.isValid}
          type="submit"
        >
          Login
        </button>
      </div>
      {/* {toastAlert && <Toaster position="bottom-left" reverseOrder={false} />} */}
    </form>
  );
};

export default LoginCom;
