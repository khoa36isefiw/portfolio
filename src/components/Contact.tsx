"use client";
import React, { JSX, useRef } from "react";
import Container from "./Container";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import HeadingH1 from "./HeadingH1";
type ContactInfor = {
  text: string;
  icon: JSX.Element;
};
const contactInfor: ContactInfor[] = [
  {
    text: "0828 545 739",
    icon: <PhoneCall />,
  },
  {
    text: "im.hdkhoa@gmail.com",
    icon: <Mail />,
  },
];

function Contact() {
  const form = useRef(null);

  // const sendEmail = (e:) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       form.current,
  //       "YOUR_PUBLIC_KEY",
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       },
  //     );
  // };
  return (
    <div className="z-1 relative mt-[60px] min-h-[300px] bg-[#3d3e42]">
      <h1 className="relative left-1/2 top-0 translate-x-[-50%] translate-y-[-50%] text-center text-[46px] font-bold text-white before:absolute before:left-0 before:top-1/2 before:h-[3px] before:w-[35%] before:bg-primary-color before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-[3px] after:w-[35%] after:bg-primary-color after:content-['']">
        Contact Me
      </h1>

      <Container className="grid grid-cols-1 gap-10 p-8 md:grid-cols-3">
        {/* Contact Information */}
        <div className="flex flex-col items-center text-white md:col-span-1">
          <h2 className="mb-6 text-[24px] font-semibold text-primary-color">
            Contact information
          </h2>
          {contactInfor.map((contact, index) => (
            <div
              key={index}
              className="mb-4 flex w-full max-w-[320px] items-center gap-4 rounded-md bg-[#66676b] p-2 shadow-md"
            >
              {contact.icon}
              <span className="text-[18px] font-bold text-primary-color">
                {contact.text}
              </span>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-[24px] font-bold text-primary-color">
            Send me a Message
          </h2>
          <form ref={form} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Input */}
            <div className="col-span-1">
              <label className="text-md block font-bold text-primary-color">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="mt-2 w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary-color focus:ring-primary-color dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            {/* Email Input */}
            <div className="col-span-1">
              <label className="text-md block font-bold text-primary-color">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="mt-2 w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary-color focus:ring-primary-color dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            {/* Message Input */}
            <div className="col-span-2">
              <label className="text-md block font-bold text-primary-color">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary-color focus:ring-primary-color dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="hover:bg-primary-color-dark rounded-md bg-primary-color px-6 py-3 text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 w-full translate-x-0 translate-y-1/2 text-[36px] text-white">
        <div className="relative flex items-center justify-center gap-4">
          <div className="absolute left-0 top-1/2 h-[3px] w-[40%] -translate-y-1/2 bg-primary-color"></div>
          <div className="absolute right-0 top-1/2 h-[3px] w-[40%] -translate-y-1/2 bg-primary-color"></div>
          <Linkedin />
          <Github />
          <PhoneCall />
          <Mail />
        </div>
      </div>
    </div>
  );
}

export default Contact;
