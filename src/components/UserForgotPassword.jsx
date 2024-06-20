import { useState } from "react";
import { userForgotPasswordValidationSchema } from "../validataionSchema/userForgotPasswordValidationScheme";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import userServices from "../../services/userServices";

const UserForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {isLoading && (
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-md-12">
              Please wait verifying your account...
            </div>
          </div>
        </div>
      )}
      {isEmailVerified && (
        <div className="container">
          <div className="row text-center mt-5">
            <div className="col-md-12">
              <span>Your account verified successfully! </span> <br />{" "}
              <span>
                {" "}
                Please wait, sending password reset link to your registered
                email address...
              </span>
            </div>
          </div>
        </div>
      )}
      {!isLoading && !isEmailVerified && (
        <Formik
          initialValues={{ email: email }}
          validationSchema={userForgotPasswordValidationSchema}
          onSubmit={async (values) => {
            try {
              setIsLoading(true);
              const response = await userServices.forgotPassword(values);

              if (response.status === 200) {
                setIsLoading(false);
                setIsEmailVerified(true);

                setTimeout(() => {
                  alert(response.data.message);
                  setEmail("");
                  navigate("/");
                }, 5000);
              }
            } catch (error) {
              setIsLoading(false);
              setIsEmailVerified(false);
              console.log(error);

              if (error.response.data) {
                alert(error.response.data.message);
              } else {
                alert(error.message);
              }
            }
          }}
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
                  <div className="d-flex justify-content-end">
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
      )}
    </>
  );
};

export default UserForgotPassword;
