import React from "react";
import contactImg from "../assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="mt-16">
      <h2 className="text-4xl text-center mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <img src={contactImg} alt="" />
        <form className="mx-auto w-96 max-w-full">
          <div className="form-control w-full max-w-xs mb-3">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
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
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs mb-3">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input
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
