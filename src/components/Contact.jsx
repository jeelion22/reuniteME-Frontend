import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_iD;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUPLIC_KEY;

const validationSchema = Yup.object({
  name: Yup.string().required("* Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("* Email is required"),
  subject: Yup.string().required("* Subject is required"),
  message: Yup.string().required("* Message is required"),
});

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, {
        publicKey: PUBLIC_KEY,
      });
      resetForm();
      toast.success("Email sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error?.text || "An error occured, please try again later");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container px-4">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold">Contact Us</h2>
            <p className="lead text-muted mt-3">
              We are here to help. Reach out with any questions or concerns, and
              our team will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card p-4 p-md-5 h-100">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, resetForm }) => (
                  <Form noValidate>
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@example.com"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Subject */}
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <Field
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="How can we help?"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        id="message"
                        placeholder="Your message..."
                        rows="4"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-danger small mt-1"
                      />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2">
                      <button
                        type="submit"
                        className="btn btn-primary px-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                      <button
                        type="button"
                        onClick={() => resetForm()}
                        className="btn btn-outline-secondary rounded-pill px-4"
                      >
                        Reset
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Contact Info + Map */}
          <div className="col-lg-6">
            <div className="d-flex flex-column h-100">
              <div className="card p-4 mb-4">
                <h3 className="h5 fw-bold mb-3">Contact Information</h3>
                <p className="text-muted d-flex align-items-center mb-2">
                  <span className="material-symbols-outlined me-2 text-primary">
                    email
                  </span>
                  contact.reuniteme@gmail.com
                </p>
                <p className="text-muted d-flex align-items-center mb-2">
                  <span className="material-symbols-outlined me-2 text-primary">
                    phone
                  </span>
                  +91-9677061448
                </p>
                <p className="text-muted d-flex align-items-center mb-0">
                  <span className="material-symbols-outlined me-2 text-primary">
                    location_on
                  </span>
                  Dharmapuri, Tamilnadu
                </p>
              </div>

              <div className="map-container flex-grow-1">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6361.4953704565!2d78.54387882001204!3d12.18253163386553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac6743e8aabd5d%3A0x8e3ba9340f9f55c0!2sHanumantheertham%2C%20Tamil%20Nadu%20636902!5e0!3m2!1sen!2sin!4v1759240806221!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
