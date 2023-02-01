import http from "./httpServices";

export const LoginService = (values) => {
  return http.post("/user/login", values);
};
