import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      alert("Formik registration successful!");
      resetForm();
    } catch (error) {
      alert("Submission failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <Field name="username" placeholder="Username" className="border p-2 w-full" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

            <Field name="email" placeholder="Email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

            <Field type="password" name="password" placeholder="Password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white p-2 rounded w-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;