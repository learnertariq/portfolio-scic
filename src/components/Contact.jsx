import React from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";
import { toast } from "react-toastify";

const Contact = () => {
  const handleKnock = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7laxqqs",
        "template_rdh0gfb",
        e.target,
        "74fe7E40bGczDm6QT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("I will contact you soon");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something Wrong");
        }
      );
  };

  return (
    <div id="contact" className="mt-16">
      <h2 className="text-4xl text-center mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <img src={contactImg} alt="" />
        <form onSubmit={handleKnock} className="mx-auto w-96 max-w-full">
          <div className="form-control w-full max-w-xs mb-3">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mb-3">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="btn btn-success mt-3">Knock Me</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
