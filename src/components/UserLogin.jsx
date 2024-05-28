import { Formik } from "formik";
import { useState } from "react";
import { useNavigate, Link, useAsyncError } from "react-router-dom";
import { userLoginValidation } from "../validataionSchema/userLoginValidation";
import userServices from "../../services/userServices";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmLogin, setConfirmLogin] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{ email: email, password: password }}
        validationSchema={userLoginValidation}
        onSubmit={(values) => {
          setIsLoading(true);
          const { email, password } = values;

          userServices
            .login(email, password)
            .then((response) => {
              console.log(response);
              if (response.status == 200) {
                setIsLoading(false);
                setConfirmLogin(true);

                setTimeout(() => {
                  navigate("/users/dashboard");
                }, 500);
              } else {
                setIsLoading(false);
                alert("Hi");
              }
            })
            .catch((error) => {
              setIsLoading(false);

              alert(error.response.data.message);
            });
        }}
      >
        {(formik) => {
          if (isLoading) {
            return (
              <div className="container">
                <div className="row text-center mt-5">
                  <div className="col-md-12">
                    Please wait, your account is being verified...
                  </div>
                </div>
              </div>
            );
          }

          if (confirmLogin) {
            return (
              <div className="container">
                <div className="row text-center mt-5">
                  <div className="col-md-12">
                    Your account verified successfully!, please wait,
                    redirecting to your dashboard...
                  </div>
                </div>
              </div>
            );
          }

          return (
            <form onSubmit={formik.handleSubmit}>
              <div className="row justify-content-center text-center mt-4">
                <div className="col-md-6">
                  <h4>Log In</h4>
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="password"
                    id="password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                  )}
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-md-3">
                  <Link to="/users/forgot-password">Forgot Password?</Link>
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn btn-primary float-end">
                    Log in
                  </button>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-md-6 text-center">
                  <span>or</span>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                  <span>For create an account </span>
                  <Link to="/users/register">Click Here</Link>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default UserLogin;
