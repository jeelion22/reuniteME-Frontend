import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userServices from "../../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const UpdateReuniteSeekerStatus = ({
  contributionId,
  setContributions,
  setShowResponse,
  handleStatus,
}) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    status: "",
  };

  const validationSchema = Yup.object({
    status: Yup.string()
      .oneOf(["rescued", "not-rescued"], "Status must be updated")
      .required("Status is required"),
  });

  async function getAllContributions() {
    try {
      const response = await userServices.getAllContributions();

      setContributions(response.data);
      // setShowResponse(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          setLoading(true);

          const response = await userServices.updateStatus(
            contributionId,
            values
          );

          // if (response.status === 200) {
          await getAllContributions();
          await handleStatus(contributionId);

          alert(response?.data?.message);
          // navigate(0);
          // }

          resetForm();
          setLoading(false);
          setShowResponse(false);
        } catch (error) {
          console.log(error);
          alert(error.response.data.message);
        }
      }}
    >
      {(formik) => (
        <Form>
          <div className="form-check border m-2 p-2 rounded">
            <label htmlFor="status-not-rescued">Update your status: </label>

            <div className="form-check">
              <Field
                className="form-check-input"
                type="radio"
                name="status"
                id="status-not-rescued"
                value="not-rescued"
              />
              <label className="form-check-label" htmlFor="status-not-rescued">
                Not Rescued
              </label>
            </div>
            <div className="form-check">
              <Field
                className="form-check-input"
                type="radio"
                name="status"
                id="status-rescued"
                value="rescued"
              />
              <label className="form-check-label" htmlFor="status-rescued">
                Rescued
              </label>
            </div>
          </div>
          <ErrorMessage name="status" component="div" className="text-danger" />

          <div className="text-end m-2">
            <button type="submit" className="btn btn-primary">
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateReuniteSeekerStatus;
