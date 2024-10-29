import * as yup from "yup";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import Navbar from "../../components/Navbar";
import { FlexContainer, ErrorContainer } from "../../components/Styles";

export const ContactUs = () => {
  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  };

  const handleSubmit = (values: any) => {
    console.log("Values are", values);
  };

  const schema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup.string().required("email is required"),
    phone: yup.string().required("phone is required"),
    details: yup.string().required("details is required"),
  });

  const form = useFormik({
    initialValues: initValues,
    onSubmit: handleSubmit,
    validationSchema: schema,
  });

  return (
    <>
      <Navbar></Navbar>
      <FlexContainer>
        <FlexContainer className="child">
          <div>
            <h1>Form - with useFormik hook</h1>
            <h3>Have an enquiry?</h3>
            <div>
              <form onSubmit={form.handleSubmit}>
                <FlexContainer className="child">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={form.values.firstName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  ></input>
                  <ErrorContainer>
                    {form.errors.firstName &&
                      form.touched.firstName &&
                      form.errors.firstName}
                  </ErrorContainer>
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={form.values.lastName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  ></input>
                  <ErrorContainer>
                    {form.errors.lastName &&
                      form.touched.lastName &&
                      form.errors.lastName}
                  </ErrorContainer>
                </FlexContainer>
                <FlexContainer className="child">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  ></input>
                  <ErrorContainer>
                    {form.errors.email &&
                      form.touched.email &&
                      form.errors.email}
                  </ErrorContainer>
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.values.phone}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  ></input>
                  <ErrorContainer>
                    {form.errors.phone &&
                      form.touched.phone &&
                      form.errors.phone}
                  </ErrorContainer>
                </FlexContainer>
                <div>
                  <textarea
                    name="details"
                    placeholder="Enter your message here"
                    value={form.values.details}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  ></textarea>
                </div>
                <ErrorContainer>
                  {form.errors.details &&
                    form.touched.details &&
                    form.errors.details}
                </ErrorContainer>
                <div>
                  <button type="submit">Submit - via hook</button>
                </div>
              </form>
            </div>
          </div>
        </FlexContainer>

        <FlexContainer className="child">
          <div>
            <h1>Form - with Formik</h1>
            <h3>Have an enquiry?</h3>
            <div>
              <Formik
                initialValues={initValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
              >
                {() => (
                  <Form>
                    <FlexContainer className="child">
                      <Field name="firstName" placeholder="First Name"></Field>
                      <ErrorMessage
                        name="firstName"
                        component="span"
                      ></ErrorMessage>
                      <Field name="lastName" placeholder="Last Name"></Field>
                      <ErrorMessage
                        name="lastName"
                        component="span"
                      ></ErrorMessage>
                    </FlexContainer>
                    <FlexContainer className="child">
                      <Field
                        name="email"
                        placeholder="Email address"
                        type="email"
                      ></Field>
                      <ErrorMessage
                        name="email"
                        component="span"
                      ></ErrorMessage>
                      <Field name="phone" placeholder="Phone number"></Field>
                      <ErrorMessage
                        name="phone"
                        component="span"
                      ></ErrorMessage>
                    </FlexContainer>
                    <div>
                      <Field
                        component="textarea"
                        name="details"
                        placeholder="Message"
                      ></Field>
                      <ErrorMessage
                        name="details"
                        component="span"
                      ></ErrorMessage>
                    </div>
                    <button type="submit">Submit - via Formik</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </FlexContainer>
      </FlexContainer>
    </>
  );
};
