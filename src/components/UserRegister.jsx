import { Formik } from "formik";
import { useState } from "react";
// import { usePhoneValidation } from "react-international-phone";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { userRegistrationValidationSchema } from "../validataionSchema/userRegisrationValidationSchema";
import userServices from "../../services/userServices";

const UserRegister = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userCategory, setUserCategory] = useState("");

  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Formik
        initialValues={{ firstname, lastname, email, phone, userCategory }}
        validationSchema={userRegistrationValidationSchema}
        onSubmit={async (values) => {
          const { firstname, lastname, email, phone, category } = values;
          userServices
            .register(firstname, lastname, email, phone, category)
            .then((response) => {
              alert(response.data.message);

              setFirstname("");
              setLastname("");
              setEmail("");
              setPhone("");
              setUserCategory("");
              navigate("/");
            })
            .catch((error) => {
              alert(error.response.data.message);
            });
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="container-md-6  p-5">
              <div className="row">
                <div className="col">
                  <div className="row justify-content-center text-center mt-4">
                    <div className="col-md-6">
                      <h4>Register</h4>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="firstname"
                        id="firstname"
                        {...formik.getFieldProps("firstname")}
                      />
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div className="text-danger">
                          {formik.errors.firstname}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="lastname"
                        id="lastname"
                        {...formik.getFieldProps("lastname")}
                      />
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div className="text-danger">
                          {formik.errors.lastname}
                        </div>
                      ) : null}
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
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone e.g. +919677061448"
                        aria-label="phone"
                        id="phone"
                        {...formik.getFieldProps("phone")}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-danger">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-md-6">
                      <select
                        className="form-select"
                        aria-label="category"
                        {...formik.getFieldProps("userCategory")} // Add this line
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        <option value="communityUploader">
                          Community Uploader
                        </option>
                        <option value="reuniteSeeker">Reunite Seeker</option>
                        <option value="both">Both</option>
                      </select>
                      {formik.touched.userCategory &&
                      formik.errors.userCategory ? (
                        <div className="text-danger">
                          {formik.errors.userCategory}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-md-3 d-flex">
                      <div className="existing-account">
                        <span>Already have an account? </span>
                        <span>
                          <Link to={"/users/login"}>Log In</Link>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 justify-content-end">
                      <div className=" d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">
                          Create An Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default UserRegister;
