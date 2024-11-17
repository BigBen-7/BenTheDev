/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    emailjs
      .send("service_qqfn6ob", "template_out9qj2", formData, "dxNnAOq7bOLlGkZsT")
      .then((response) => {
        toast.success("Sent Successfully, will get back to you shortly");
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#19191D] py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl w-96 text-wrap font-bold text-[#FF8E5E] mb-8 text-center">
        Let&apos;s build your  project together
      </h2>
      <div className="flex flex-col md:flex-row">
        <img
          src={contact}
          alt=""
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8  rounded-lg shadow-lg relative"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="py-12">
              <label className="block text-white mb-1">
                Your Name <span className="text-[#FF8E5E]">*</span>
              </label>
              <input
                type="text" 
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 placeholder:text-gray-500 placeholder:text-sm bg-transparent border-b rounded-none text-white focus:outline-none focus:ring-2 focus:ring-[#FF8E5E]"
              />
            </div>
            <div className="py-12">
              <label className="block text-white mb-1">
                Your Email <span className="text-[#FF8E5E]">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 placeholder:text-gray-500 placeholder:text-sm bg-transparent border-b rounded-none text-white focus:outline-none focus:ring-2 focus:ring-[#FF8E5E]"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Your Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 placeholder:text-gray-500 placeholder:text-sm bg-transparent border-b rounded-none text-white focus:outline-none focus:ring-2 focus:ring-[#FF8E5E]"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Budget Range</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b rounded-none text-white focus:outline-none focus:ring-2 focus:ring-[#FF8E5E]"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-1">Message *</label>
            <textarea
              name="message"
              placeholder="Type here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full placeholder:text-gray-500 placeholder:text-sm bg-transparent border-b rounded-none text-white focus:outline-none focus:ring-2 focus:ring-[#FF8E5E]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-[#FF8E5E] rounded font-semibold text-gray-900 flex justify-center items-center hover:bg-orange-600 transition"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v3.5a4.5 4.5 0 000 9V20a8 8 0 01-8-8z"
                ></path>
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
