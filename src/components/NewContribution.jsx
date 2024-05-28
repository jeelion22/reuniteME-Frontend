import { useState } from "react";
import { contributionValidationSchema } from "../validataionSchema/contributionValidation";
import { Formik } from "formik";
import userServices from "../../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NewContribution = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        phone: "",
        description: "",
        file: null,
      }}
      validationSchema={contributionValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("address", values.address);
        formData.append("phone", values.phone);
        formData.append("description", values.description);

        if (values.file) {
          formData.append("file", values.file);
        }

        try {
          setLoading(true);
          const response = await userServices.uploadImage(formData);
          console.log(response.data);

          alert(response.data.message);
          resetForm();
          navigate("/users/contributions");
        } catch (error) {
          console.log(error);
          alert(error.response.data.message);
          
        } finally {
          setLoading(false);
          resetForm();
        }
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div
            className="container-md-12 border rounded p-5 text-white bg-opacity-50"
            style={{
              backgroundColor: "#6f42c1",
            }}
          >
            <div className="row">
              <div className="col-12">
                <div className="row text-center mt-1">
                  <div className="col-md-6">
                    <h4>Add Reunite Seeker Details</h4>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-7 p-4 border rounded bg-dark bg-opacity-50">
                    <div className="row  mt-4">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="name"
                          id="name"
                          {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-danger">
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="row  mt-3">
                      <div className="col-md-12">
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

                    <div className="row mt-3">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone e.g. +919677061448"
                          aria-label="phone"
                          id="phone"
                          {...formik.getFieldProps("phone")}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <div className="text-danger">
                            {formik.errors.phone}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="row  mt-3">
                      <div className="col-md-12">
                        <input
                          type="file"
                          className="form-control"
                          aria-label="file"
                          id="file"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "file",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        {formik.touched.file && formik.errors.file ? (
                          <div className="text-danger">
                            {formik.errors.file}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="row  mt-3">
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          placeholder="Description"
                          aria-label="description"
                          id="description"
                          rows={5}
                          {...formik.getFieldProps("description")}
                        />
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div className="text-danger">
                            {formik.errors.description}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="row mt-3 text-center ">
                      <div className="col-md-12">
                        <button type="submit" className="btn btn-primary">
                          {loading ? (
                            <FontAwesomeIcon icon={faSpinner} spinPulse />
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-5 text-start border rounded bg-body-tertiary text-dark p-2"
                    style={{
                      height: "50%",
                    }}
                  >
                    <ul>
                      <li>Name, Address, and Phone are optional</li>
                      <li>
                        The picture of reunite seeker should be either of the
                        following format
                        <ul>
                          <li>jpeg, png, or gif</li>
                          <li>Size should not exceed 5MB</li>
                        </ul>
                      </li>
                      <li>
                        <span className="text-danger">**</span>
                        <em>
                          The picture should be taken with location enabled.
                        </em>
                      </li>
                    </ul>
                    <p>
                      ( <span className="text-danger">*</span>{" "}
                      <em>
                        {" "}
                        The picture to be upload should not be shared via
                        WhatsApp){" "}
                      </em>
                    </p>
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

export default NewContribution;
