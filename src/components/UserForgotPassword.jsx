import { useState } from "react";
import { userForgotPasswordValidationSchema } from "../validataionSchema/userForgotPasswordValidationScheme";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const UserForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Formik
      initialValues={{ email: email }}
      validationSchema={userForgotPasswordValidationSchema}
      onSubmit={() => {}}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="row justify-content-center text-center mt-4">
            <div className="col-md-6">
              <h4>Forgot Password?</h4>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your registered email address"
                aria-label="email"
                id="email"
                {...formik.getFieldProps("email")}
              />

              {formik.touched.email && formik.errors.email ? (
                <div className="email mt-2 text-danger">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <div className=" d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Send Password Reset Link
                </button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center">
              <span>or</span>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-md-3 d-flex">
              <div className="create-account">
                <span>For login your account? </span>
                <span>
                  <Link to={"/users/login"}>Click Here</Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default UserForgotPassword;
