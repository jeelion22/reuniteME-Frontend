import * as Yup from "yup";

export const reuniteSeekerResponseValidationSchema = Yup.object().shape({
  relationship: Yup.string().required(
    "Please specify your relationship with the person"
  ),

  lastSeen: Yup.date().required("Last seen date must be entered"),

  purpose: Yup.string().required("Describe your purpose"),

  contactNo: Yup.string()
    .required("Your contact number is required for further communication")
    .matches(/^[0-9]{10}$/, "Contact number must be 10 digits"),

  meetingDate: Yup.date().required("Meeting date must be entered"),

  willUpdate: Yup.string()
    .oneOf(["yes", "no"], "You must select whether you will update or not")
    .required("You must select whether you will update or not"),
});
