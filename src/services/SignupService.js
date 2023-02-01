import http from "./httpServices";

export const signUpServices = (values) => {
  return http.post("/user/register", values);
};
