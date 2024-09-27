import Navbar from "../../components/Navbar";
import { Formik, Form, Field } from "formik";

const ContactUs = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h3>Contact Us</h3>
        <div>
          <h3>Have an enquiry?</h3>
          <p>
            Send us a message using the form below and we’ll get back to you as
            soon as possible.
          </p>
        </div>
        <div>
          <Formik onSubmit={() => {}} initialValues={{}}>
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <Field type="text" name="firstName"></Field>
                  <label htmlFor="lastName">Last Name</label>
                  <Field type="text" name="lastName"></Field>
                </div>
                <div>
                  <label htmlFor="emailAddress">Email Address</label>
                  <Field type="email" name="emailAddress"></Field>
                  <label htmlFor="phone">Phone</label>
                  <Field type="text" name="phone"></Field>
                </div>
                <div>
                  <label htmlFor="details">Description</label>
                  <Field component="textarea" name="details"></Field>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
