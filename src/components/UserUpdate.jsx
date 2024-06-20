import { Formik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLoaderData } from "react-router-dom";
import userServices from "../../services/userServices";
import { CommunityUploaderValidationSchema } from "../validataionSchema/CommunityUploaderValidationSchema";
import { reuniteSeekerValidationSchema } from "../validataionSchema/reuniteSeekerValidationSchema";

const UserUpdate = () => {
  const { user } = useLoaderData();
  const [initialValues, setInitialValues] = useState(user.data.user);

  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(
    user.data.userCategory
  );
  const [validationSchema, setValidationSchema] = useState(
    CommunityUploaderValidationSchema
  );

  const handleClose = () => {
    navigate("/users/profile");
  };

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
      //   onSubmit={async (values, { resetForm }) => {
      //     userServices
      //       .register(values)
      //       .then((response) => {
      //         alert(response.data.message);
      //         console.log(values);

      //         navigate("/");
      //         resetForm();
      //       })
      //       .catch((error) => {
      //         alert(error.response.data.message);
      //       });
      //   }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className="container-md-6">
            <div className="row">
              <div
                className="col border rounded p-4"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="row justify-content-end ">
                  <div className="col-auto">
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                      onClick={handleClose}
                    ></button>
                  </div>
                </div>

                <div className="row justify-content-center text-center mt-4">
                  <div className="col-md-6">
                    <h4>Profile Update</h4>
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
                {/* <div className="row justify-content-center mt-3">
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
                </div> */}

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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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

                <div className="row justify-content-center mt-3">
                  <div className="col-md-3">
                    <div className=" d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        update
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
  );
};

export default UserUpdate;
