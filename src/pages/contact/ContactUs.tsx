import * as yup from "yup";
import { useFormik } from "formik";
import Navbar from "../../components/Navbar";
import { FlexContainer, ErrorContainer } from "../../components/Styles";

const ContactUs = () => {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
    },
    onSubmit: (values) => {
      console.log("Values", values);
    },
    validationSchema: yup.object({
      firstName: yup.string().required("*"),
      lastName: yup.string().required("*"),
      email: yup.string().required("*"),
      phone: yup.string().required("*"),
      details: yup.string().required("*"),
    }),
  });
  return (
    <>
      <Navbar></Navbar>
      <FlexContainer>
        <FlexContainer className="child">
          <div>
            <h1>Contact Us</h1>
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
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </FlexContainer>

        <FlexContainer className="child">
          <p>
            Send us a message using the form below and we’ll get back to you as
            soon as possible.
          </p>
        </FlexContainer>
      </FlexContainer>
    </>
  );
};

export default ContactUs;
