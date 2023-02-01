import * as yup from "yup";
const phoneNumberRegex =
  /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/;
export const AdvancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "username must be at least 4 characters long")
    .required("Required"),
  jobType: yup.string().oneOf(["designer", "Grapghic", "developer", "other"]),
  acceptedRules: yup
    .boolean()
    .oneOf([true], "Please check the terms of service"),
});

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("please enter valid email").required("Required"),
  phoneNumber: yup.string().required("Required").nullable(),
  password: yup.string().required("Required"),
});


export const LoginSchema = yup.object().shape({
  email: yup.string().email("please enter valid email").required("Required"),
  password: yup.string().required("Required"),
});


