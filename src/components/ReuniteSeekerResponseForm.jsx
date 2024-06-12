import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { reuniteSeekerResponseValidationSchema } from "../validataionSchema/reuniteSeekerResponseValidationSchema";
import userServices from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const ReuniteSeekerResponseForm = ({ contribution }) => {
  const [spinner, setSpinner] = useState(false);
  const [location, setLocation] = useState(false);
  const [loadLocation, setLoadLocation] = useState(false);

  const initialValues = {
    relationship: "",
    otherRelationship: "",
    lastSeen: "",
    purpose: "",
    contactNo: "",
    meetingDate: "",
    willUpdate: "",
  };

  const navigate = useNavigate();
  const handleLocation = async (location) => {
    console.log(location);
    try {
      const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
      window.location.href = url;
    } catch (error) {
      console.log("Error fetching Google Maps URL:", error);
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <h2 className="my-4">Fill out the form before accessing the location</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={reuniteSeekerResponseValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          setSpinner(true);
          try {
            const response = await userServices.addVisitor(
              contribution._id,
              values
            );
            resetForm();
            if (response.status === 200) {
              // navigate("");
              // setSpinner(false);
              setLocation(true);
              setLoadLocation(true);
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) =>
          spinner ? (
            <div class="d-flex align-items-center">
              {!location & !loadLocation ? (
                <strong role="status">Submitting your response...</strong>
              ) : (
                <strong role="status">
                  <div className=" text-center">
                    <span>Here is the location</span>
                    <FontAwesomeIcon
                      icon={faMapLocationDot}
                      type="button"
                      className="btn btn-outline-success ms-2"
                      onClick={() => {
                        handleLocation(contribution.location);
                      }}
                    />
                  </div>
                </strong>
              )}
            </div>
          ) : (
            <Form className="needs-validation" onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="relationship" className="form-label">
                  How are you related to the person?
                </label>
                <Field
                  type="string"
                  name="relationship"
                  className="form-control"
                />
                <ErrorMessage
                  name="relationship"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastSeen" className="form-label">
                  When did you last see that person?
                </label>
                <Field type="date" name="lastSeen" className="form-control" />
                <ErrorMessage
                  name="lastSeen"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="purpose" className="form-label">
                  Purpose of inquiry
                </label>
                <Field
                  type="text"
                  name="purpose"
                  className="form-control"
                  placeholder="Enter purpose"
                />
                <ErrorMessage
                  name="purpose"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contactNo" className="form-label">
                  Contact number
                </label>
                <Field
                  type="text"
                  name="contactNo"
                  className="form-control"
                  placeholder="Enter your contact number"
                />
                <ErrorMessage
                  name="contactNo"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="meetingDate" className="form-label">
                  When will you meet or find them?
                </label>
                <Field
                  type="date"
                  name="meetingDate"
                  className="form-control"
                />
                <ErrorMessage
                  name="meetingDate"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="willUpdate" className="form-label">
                  Once you find them, will you update or inform us?
                </label>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="willUpdate"
                    value="yes"
                    id="willUpdateYes"
                  />
                  <label className="form-check-label" htmlFor="willUpdateYes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="willUpdate"
                    value="no"
                    id="willUpdateNo"
                  />
                  <label className="form-check-label" htmlFor="willUpdateNo">
                    No
                  </label>
                </div>
                <ErrorMessage
                  name="willUpdate"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="button" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default ReuniteSeekerResponseForm;
