import { Formik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import userServices from "../../services/userServices";
import { CommunityUploaderValidationSchema } from "../validataionSchema/CommunityUploaderValidationSchema";
import { reuniteSeekerValidationSchema } from "../validataionSchema/reuniteSeekerValidationSchema";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  userCategory: "",
  address: "",
  authorizedIdType: "",
  authorizedIdNo: "",
};

const UserRegister = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [validationSchema, setValidationSchema] = useState(
    CommunityUploaderValidationSchema
  );

  useEffect(() => {
    if (selectedCategory === "reuniteSeeker" || selectedCategory === "both") {
      setValidationSchema(reuniteSeekerValidationSchema);
    } else {
      setValidationSchema(CommunityUploaderValidationSchema);
    }
  }, [selectedCategory]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        userServices
          .register(values)
          .then((response) => {
            alert(response.data.message);
            console.log(values);

            navigate("/");
            resetForm();
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="container">
            <div className="row border rounded p-4 mt-2 ">
              <div className="col">
                <div className="row text-center">
                  <div className="col">
                    <h4>Register</h4>
                  </div>
                </div>

                <div className="row justify-content-center mt-4">
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
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
                  <div className="col">
                    <select
                      className="form-select"
                      aria-label="category"
                      {...formik.getFieldProps("userCategory")}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setSelectedCategory(e.target.value);
                      }}
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

                {(selectedCategory === "reuniteSeeker" ||
                  selectedCategory === "both") && (
                  <>
                    <div className="row justify-content-center mt-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          aria-label="address"
                          id="address"
                          {...formik.getFieldProps("address")}
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div className="text-danger">
                            {formik.errors.address}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                      <div className="col">
                        <select
                          className="form-select"
                          aria-label="authorizedIdType"
                          {...formik.getFieldProps("authorizedIdType")}
                        >
                          <option value="" disabled>
                            Select Government authorized ID
                          </option>
                          <option value="aadhaar">Aadhaar</option>
                          <option value="voter_id">Voter ID</option>
                          <option value="driving_license">
                            Driving License
                          </option>
                          <option value="pan_card">PAN Card</option>
                          <option value="ration_card">Ration Card</option>
                          <option value="passport">Passport</option>
                        </select>
                        {formik.touched.authorizedIdType &&
                        formik.errors.authorizedIdType ? (
                          <div className="text-danger">
                            {formik.errors.authorizedIdType}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={
                            formik.values.authorizedIdType
                              .split("_")
                              .join(" ")
                              .toLocaleUpperCase() + " Number"
                          }
                          aria-label="authorizedId"
                          id="authorizedId"
                          {...formik.getFieldProps("authorizedIdNo")}
                        />
                        {formik.touched.authorizedIdNo &&
                        formik.errors.authorizedIdNo ? (
                          <div className="text-danger">
                            {formik.errors.authorizedIdNo}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </>
                )}

                <div className="row justify-content-around mt-3">
                  <div className="col-auto p-1">
                    <span>Already have an account? </span>
                    <span>
                      <Link to={"/users/login"}>Log In</Link>
                    </span>
                  </div>

                  <div className="col-auto p-1">
                    <button type="submit" className="btn btn-primary">
                      Create An Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default UserRegister;
