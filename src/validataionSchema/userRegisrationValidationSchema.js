import * as Yup from "yup";

export const userRegistrationValidationSchema = Yup.object({
  firstname: Yup.string()
    .min(3, "* First name must be atleast 3 characters.")
    .max(12, "* Last name should not exceed 12 characters.")
    .required("* First name should not empty."),
  lastname: Yup.string()
    .min(1, "* Last name should be at least 1 character.")
    .max(15, "* Last name should not exceed 15 characters.")
    .required("* Last name should not empty."),
  email: Yup.string()
    .email("* Invalid email address.")
    .required("* Email address should not be empty."),
  phone: Yup.string().required("* Phone number should not be empty"),
  userCategory: Yup.string().required("* Please select user category"),
  // .default("community uploader"),
});
