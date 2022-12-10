import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./ContactUsForm.css";

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  companyWebsite: Yup.string().url("Invalid URL").required("Required"),
  phone: Yup.string()
    .min(10, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  chatType: Yup.string()
    .required("Required")
    .notOneOf(["Select one..."], "Please select other value than default"),
  budget: Yup.string()
    .required("Required")
    .notOneOf(["Select one..."], "Please select other value than default"),
  message: Yup.string().required("Required"),
});

const TextAreaField = ({ field, form, ...props }) => {
  return (
    <>
      <textarea
        placeholder="Your Message"
        className="input-textarea "
        {...field}
        {...props}
      />
      {form.errors[field.name] && form.touched[field.name] && (
        <span className="input-error">{form.errors[field.name]}</span>
      )}
    </>
  );
};

const ContactUsForm = () => {
  return (
    <>
      <div className="contactus-form_wrapper">
        <h1 className="contactus-form_heading">
          Let’s make cool stuff together 🖤
        </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            companyWebsite: "",
            phone: "",
            chatType: "",
            budget: "",
            message: "",
          }}
          validationSchema={ContactUsSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="contactus-form">
              <div className="contactus-form_input-group">
                <label htmlFor="name">Name</label>
                <Field
                  className="input-textfield"
                  placeholder="Jon Snow"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <span className="input-error">{errors.name}</span>
                ) : null}
              </div>
              <div className="contactus-form_input-group">
                <label htmlFor="email">Email</label>
                <Field
                  placeholder="jon@thewall.com"
                  className="input-textfield"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <span className="input-error">{errors.email}</span>
                ) : null}
              </div>
              <div className="contactus-form_input-group">
                <label htmlFor="companyWebsite">Company Website</label>
                <Field
                  placeholder="thewall.com"
                  className="input-textfield"
                  name="companyWebsite"
                />
                {errors.companyWebsite && touched.companyWebsite ? (
                  <span className="input-error ">{errors.companyWebsite}</span>
                ) : null}
              </div>
              <div className="contactus-form_input-group">
                <label htmlFor="phone">Phone</label>
                <Field
                  placeholder="401 867 5309"
                  className="input-textfield"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <span className="input-error">{errors.phone}</span>
                ) : null}
              </div>
              <div className="contactus-form_input-group contactus-form_span-1">
                <label htmlFor="chatType">
                  What would you like to chat about?
                </label>
                <Field as="select" name="chatType" className="input-select">
                  <option value="Select one..."> Select one...</option>
                  <option value="brandStrategy">Brand Strategy</option>
                  <option value="marketingAds">Marketing / Ads</option>
                  <option value="development">Development</option>
                  <option value="designUXUI">Design / UX&UI</option>
                  <option value="other">Other</option>
                  <option value="hi">Just want to say hi!</option>
                </Field>
                {errors.chatType && touched.chatType ? (
                  <span className="input-error">{errors.chatType}</span>
                ) : null}
              </div>
              <div className="contactus-form_input-group contactus-form_span-1">
                <label htmlFor="budget">What is your estimated budget?</label>
                <Field as="select" name="budget" className="input-select">
                  <option value="Select one..."> Select one...</option>
                  <option value="under50">Under $50,000</option>
                  <option value="between50and100">$50,000 - $10,0000</option>
                  <option value="between101and250">$101,000 - $250,000</option>
                  <option value="morethan250">+$250,000</option>
                </Field>
                {errors.budget && touched.budget ? (
                  <span className="input-error">{errors.budget}</span>
                ) : null}
              </div>
              <div className="contactus-form_input-group contactus-form_span-1">
                <label htmlFor="message">Message</label>
                <Field name="message" component={TextAreaField} />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default ContactUsForm;
