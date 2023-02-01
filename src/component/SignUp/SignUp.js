import { useFormik } from "formik";
import { useState } from "react";
import Input from "../../common/Input";
import { signUpServices } from "../../services/SignupService";
import { Link } from "react-router-dom";
import { basicSchema } from "../../schemas";
const SignUp = () => {
  //const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(null);
  const [err, setErr] = useState("");
  const [toastAlert, setToast] = useState(true);
  const onSubmit = async (values, actions) => {
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      const { data } = await signUpServices(userData);
      setErr("");
      actions.resetForm();
    } catch (error) {
      if (error.response && error.response.data.message) setErr(error.response.data.message);
    }
  };
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  };
  //   const notify = () => toast.success("Successfully Submitted!");

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
        {err && <p style={{ backgroundColor: "red", color: "white" }}>{err}</p>}
        <Link to="/login">Already have an account ? Login ...</Link>
      </div>
      {/* {toastAlert && <Toaster position="bottom-left" reverseOrder={false} />} */}
    </form>
  );
};

export default SignUp;
