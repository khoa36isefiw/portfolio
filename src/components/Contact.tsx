"use client";
import React, { JSX, useRef, useState } from "react";
import Container from "./Container";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type ContactInfor = {
  text: string;
  icon: JSX.Element;
};

interface IForms {
  to_name: string;
  from_name: string;
  message: string;
}

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
  const form = useRef<HTMLFormElement | null>(null);

  const [formValues, setFormValues] = useState<IForms>({
    to_name: "",
    from_name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) {
      // check null

      console.error("Form reference is null");
      return;
    }

    if (!formValues.from_name || !formValues.to_name || !formValues.message) {
      toast.warning("Please fill all these fields.");
    } else {
      emailjs
        .sendForm(
          "service_akwt4h9",
          "template_8u12tgt",
          form.current,
          "EIpxo4Zin4OTgUwwK",
        )
        .then(
          (result) => {
            console.log("result", result);
            // reset form
            // Clear form values after successful submission
            setFormValues({
              to_name: "",
              from_name: "",
              message: "",
            });
            toast.success("Email was sent.");
          },
          (error) => {
            console.log(error.text);
            toast.error("Something went wrong");
          },
        );
    }
  };
  return (
    <div className="z-1 relative mt-[60px] min-h-[300px] bg-[#3d3e42]">
      <h1 className="relative left-1/2 top-0 translate-x-[-50%] translate-y-[-50%] text-center text-[46px] font-bold text-white before:absolute before:left-0 before:top-1/2 before:h-[3px] before:w-[15%] before:bg-primary-color before:content-[''] after:absolute after:right-0 after:top-1/2 after:h-[3px] after:w-[15%] after:bg-primary-color after:content-[''] md:before:w-[25%] md:after:w-[25%] lg:before:w-[30%] lg:after:w-[30%] xl:before:w-[40%] xl:after:w-[40%]">
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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {/* Name Input */}
            <div className="col-span-1">
              <label className="text-md block font-bold text-primary-color">
                Name
              </label>
              <input
                type="text"
                name="to_name"
                value={formValues.to_name}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary-color focus:ring-primary-color dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Email Input */}
            <div className="col-span-1">
              <label className="text-md block font-bold text-primary-color">
                Email
              </label>
              <input
                type="email"
                name="from_name"
                value={formValues.from_name}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary-color focus:ring-primary-color dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Message Input */}
            <div className="col-span-2">
              <label className="text-md block font-bold text-primary-color">
                Message
              </label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary-color focus:ring-primary-color dark:bg-gray-800 dark:text-white"
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
          <div className="absolute left-0 top-1/2 h-[3px] w-[25%] -translate-y-1/2 bg-primary-color md:w-[35%]"></div>
          <div className="absolute right-0 top-1/2 h-[3px] w-[25%] -translate-y-1/2 bg-primary-color md:w-[35%]"></div>
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
