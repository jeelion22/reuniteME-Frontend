import "../styles/ReuniteSeekerResponseForm.css";
import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { reuniteSeekerResponseValidationSchema } from "../validataionSchema/reuniteSeekerResponseValidationSchema";
import userServices from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PhoneField from "./PhoneField";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const initialValues = {
  relationship: "",
  otherRelationship: "",
  lastSeen: "",
  purpose: "",
  contactNo: "",
  meetingDate: "",
  willUpdate: false,
};

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key] !== undefined ? obj[key] : initialValues[key];
    return acc;
  }, {});
}

function formatDate(dateStr) {
  return dateStr.split("T")[0];
}

function isDefaultValues(currentValues, defaultValues) {
  return Object.keys(defaultValues).every(
    (key) => currentValues[key] === defaultValues[key]
  );
}

const submit = async (values, { resetForm }) => {
  setSpinner(true);
  try {
    const response = await userServices.addVisitor(contribution._id, values);
    resetForm();
    if (response.status === 200) {
      setLocation(true);
      setLoadLocation(true);
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

const ReuniteSeekerResponseForm = ({
  contribution,
  setContributions,
  handleStatus,
}) => {
  const [spinner, setSpinner] = useState(false);
  const [location, setLocation] = useState(false);
  const [loadLocation, setLoadLocation] = useState(false);
  const [formInitialValues, setFormInitialValues] = useState(initialValues);
  const [isEditable, setIsEditable] = useState(
    Object.keys(initialValues).some((key) => formInitialValues[key])
  );

  const navigate = useNavigate();
  const handleLocation = async (location) => {
    try {
      const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
      window.open(url, "_blank");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleEdit = () => setIsEditable(true);

  async function getAllContributions() {
    try {
      const response = await userServices.getAllContributions();
      setContributions(response.data);
      // setShowResponse(false);
      // setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await userServices.getReuniteSeekerFormResponse(
          contribution._id
        );

        const apiData = response.data || {};

        // only keep keys present in the initialValues
        const filtered = pick(apiData, Object.keys(initialValues));

        if (filtered.lastSeen) {
          filtered.lastSeen = formatDate(filtered.lastSeen);
        }

        if (filtered.meetingDate) {
          filtered.meetingDate = formatDate(filtered.meetingDate);
        }

        setFormInitialValues({ ...initialValues, ...filtered });
      } catch (error) {
        // console.log("Error fetching form response:", error);
        setFormInitialValues(initialValues);
      }
    };
    fetchFormData();
  }, [contribution._id]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h2 className="my-4">
          Fill out the form before accessing the location
        </h2>
        {!isDefaultValues(formInitialValues, initialValues) && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            type="button"
            className="btn btn-primary m-2"
            onClick={handleEdit}
          />
        )}
      </div>

      <div>
        <Formik
          initialValues={formInitialValues}
          enableReinitialize={true}
          validationSchema={reuniteSeekerResponseValidationSchema}
          onSubmit={async (values, { resetForm }) => {
            setSpinner(true);
            try {
              const response = await userServices.addVisitor(
                contribution._id,
                values
              );
              await getAllContributions();
              await handleStatus(contribution._id);
              resetForm();
              // if (response.status === 200) {
              setLocation(true);
              setLoadLocation(true);
              // }
            } catch (error) {
              console.log(error);
              alert(error?.response?.data?.message);
            }
          }}
        >
          {(formik) => {
            return spinner ? (
              <div className="d-flex align-items-center">
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
                <fieldSet
                  disabled={
                    !isDefaultValues(formInitialValues, initialValues) &&
                    !isEditable
                  }
                >
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
                    <Field
                      type="date"
                      name="lastSeen"
                      className="form-control"
                    />
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
                      Enter your contact number
                    </label>
                    <Field
                      name="contactNo"
                      component={PhoneField}
                      className="form-control d-flex phone-input-no-border"
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
                    <div className="form-check form-switch">
                      <Field
                        type="checkbox"
                        name="willUpdate"
                        className="form-check-input"
                        id="willUpdate"
                      />
                      <label className="form-check-label" htmlFor="willUpdate">
                        Once you find them, will you update or inform us?
                      </label>
                    </div>
                    <ErrorMessage
                      name="willUpdate"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="d-flex gap-4 justify-content-end">
                    {isEditable && (
                      <button
                        type="submit"
                        className="btn btn-outline-danger rounded-pill "
                        onClick={() => setIsEditable(false)}
                      >
                        Cancel
                      </button>
                    )}

                    {isEditable && (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={
                          !formik.values.willUpdate ||
                          Object.keys(formik.errors).length > 0
                        }
                      >
                        Update
                      </button>
                    )}

                    {isDefaultValues(formInitialValues, initialValues) && (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={
                          !formik.values.willUpdate ||
                          Object.keys(formik.errors).length > 0
                        }
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </fieldSet>
              </Form>
            );
          }}
        </Formik>
      </div>

      {/* {!isDefaultValues(formInitialValues, initialValues) && !loadLocation && (
        <strong role="status">
          <div className=" text-center mt-4">
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
      )} */}
    </div>
  );
};

export default ReuniteSeekerResponseForm;
