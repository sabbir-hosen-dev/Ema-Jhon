import { useFormik } from "formik";
import * as yup from "yup";

const useLoginFormik = (onSubmitCallback) => {
  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().min(2,"Name must be at least 6 characters"),
      email: yup.string().email("Invalid email address").required("Email is required"),
      password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (onSubmitCallback) {
        onSubmitCallback(values);
      }
      // Reset form fields after submission
      resetForm({
        name:"",
        email: "",
        password: "",
      });
    },
  });

  return formik;
};

export default useLoginFormik;
