import "../styles/NewContribution.css";

import { useState } from "react";
import { contributionValidationSchema } from "../validataionSchema/contributionValidation";
import { Formik, Field, ErrorMessage } from "formik";
import userServices from "../../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PhoneField from "./PhoneField";
import { toast } from "react-toastify";

const NewContribution = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container p-0 mb-4">
      <div className="row ">
        {/* Left side: Form */}
        <div className="col-12 col-lg-8">
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

                toast.success(response.data.message);
                resetForm();
                navigate("/users/contributions");
              } catch (error) {
                toast.error(error.response.data.message);
              } finally {
                setLoading(false);
                resetForm();
              }
            }}
          >
            {(formik) => {
              const handlePhoneChange = (value) => {
                formik.setFieldValue("phone", value);
              };
              return (
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className=" border rounded p-4"
                    style={{
                      backgroundColor: "rgba(247, 246, 248, 0.8)",
                    }}
                  >
                    {/* Close Button Row */}

                    <div className="row mb-3">
                      <div className="col text-end">
                        <button
                          type="button"
                          className="btn-close focus-none"
                          aria-label="Close"
                          onClick={() => {
                            navigate("/users/contributions");
                          }}
                        ></button>
                      </div>
                    </div>

                    {/* Title */}

                    <div className="row mb-4 text-center">
                      <div className="col">
                        <h4>Add Reunite Seeker Details</h4>
                      </div>
                    </div>

                    <div className="row  gy-3">
                      <div className="col-12">
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

                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          {...formik.getFieldProps("address")}
                        />
                        {formik.touched.address && formik.errors.address && (
                          <div className="text-danger">
                            {formik.errors.address}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <Field
                          name="phone"
                          className="form-control d-flex phone-input-no-border"
                          component={PhoneField}
                        />
                      </div>

                      <div className="col-12">
                        <input
                          type="file"
                          className="form-control"
                          onChange={(event) =>
                            formik.setFieldValue(
                              "file",
                              event.currentTarget.files[0]
                            )
                          }
                        />
                        {formik.touched.file && formik.errors.file && (
                          <div className="text-danger">
                            {formik.errors.file}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <textarea
                          className="form-control"
                          placeholder="Description"
                          rows={5}
                          {...formik.getFieldProps("description")}
                        />
                        {formik.touched.description &&
                          formik.errors.description && (
                            <div className="text-danger">
                              {formik.errors.description}
                            </div>
                          )}
                      </div>
                      {/* Submit Button */}
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          {loading ? (
                            <FontAwesomeIcon icon={faSpinner} spinPulse />
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>

        {/* === right side: INstructions === */}

        <div className="col-12  col-lg-4">
          <div className="border rounded bg-body-tertiary text-dark p-3 h-100">
            <h4>Instructions</h4>

            <ul>
              <li>Name, Address, and Phone are optional</li>
              <li>
                The picture of reunite seeker should be either of the following
                format
                <ul>
                  <li>jpeg, png</li>
                  <li>Size should not exceed 5MB</li>
                </ul>
              </li>
              <li>
                <span className="text-danger">**</span>
                <em>
                  The picture should be taken with location enabled in the
                  camera setting.
                </em>
              </li>
            </ul>
            <p>
              ( <span className="text-danger">*</span>{" "}
              <em>
                {" "}
                The picture to be upload should not be shared via WhatsApp){" "}
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContribution;
