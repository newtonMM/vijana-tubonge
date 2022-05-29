import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Location from "../assets/icons/location.png";
import Email from "../assets/icons/mail.png";
import Call from "../assets/icons/call.png";
const ContactSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter your full name"),
  email: Yup.string().trim().email("Invalid email address"),
  message: Yup.string().trim().required("Message cannot be empty!"),
});
const data = [
  {
    icon_url: Location,
    heading: "Location",
    content: "kenya, Kirinyaga Mwea",
  },
  {
    icon_url: Email,
    heading: "Email",
    content: "contactvijanatubonge@gmail.com",
  },
  {
    icon_url: Call,
    heading: "Telephone",
    content: "0708343082",
  },
];
const Contacts = () => {
  const MessageSubmit = () => { };

  const contactCards =
    data &&
    data.map((itms, index) => (
      <div key={index} className="my-5">
        <img className="h-20 w-15" src={itms.icon_url} alt='icon' />
        <h1 className="text-base text-teal-700 ">{itms.heading}</h1>
        <p className="text-base text-teal-700 ">{itms.content}</p>
      </div>
    ));

  return (
    <div id="contacts" className="grid place-items-center mb-24 pt-16">
      <h1 className="text-center text-4xl font-bold text-teal-700 py-12">
        Contacts{" "}
      </h1>
      <div className="place-items-center">
        <div className="grid gap-4 lg:grid-cols-3">
          {contactCards}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex-col ">
          <Formik
            validationSchema={ContactSchema}
            initialValues={{ name: "", phone: "", email: "", message: "" }}
            onSubmit={MessageSubmit}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              errors,
              values,
            }) => (
              <>
                <form>
                  <p className="mt-10 text-bold text-teal-700 text-3xl text-center">
                    Please Leave a Message{" "}
                  </p>
                  <div className="lg:h-auto flex flex-col mt-5">
                    <div className="container max-w-auto mx-auto flex-1 flex flex-col items-center justify-center px-2">
                      <div className="bg-white px-4 py-2 rounded shadow-md text-black w-full lg:ml-2">
                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="firstName"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="lastName"
                          placeholder="Last Name"
                        />

                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="email"
                          placeholder="Email"
                        />

                        <input
                          type="text"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="phone"
                          placeholder="Enter phone number"
                        />

                        <textarea
                          type="textarea"
                          className="block border border-grey-light w-full p-3 rounded mb-4"
                          name="message"
                          placeholder="Message"
                        />

                        <button
                          type="submit"
                          className="w-1/4 text-center lg:mx-96 py-3 rounded bg-teal-700 text-white hover:bg-yellow-500 focus:outline-none my-1"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
