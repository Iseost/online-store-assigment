import React, { useState } from "react";

// Full name, Subject, Email, Body, Submit button
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    else if (formData.fullName.length < 3)
      newErrors.fullName = "Full Name must be at least 3 characters";
    if (!formData.subject) newErrors.subject = "Subject is required";
    else if (formData.subject.length < 3)
      newErrors.subject = "Subject must be at least 3 characters";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.body) newErrors.body = "Message body is required";
    else if (formData.body.length < 3)
      newErrors.body = "Message body must be at least 3 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 text-[#3B322F]">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {submitted && (
        <div className="mb-4 p-4 bg-[#F5F3EE] text-[#3B322F] border border-[#E5E2DC] rounded">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } p-2 rounded`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } p-2 rounded`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } p-2 rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold" htmlFor="body">
            Message
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            className={`w-full border ${
              errors.body ? "border-red-500" : "border-gray-300"
            } p-2 rounded`}
            rows="5"
          ></textarea>
          {errors.body && (
            <p className="text-red-500 text-sm mt-1">{errors.body}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#E07A5F] hover:bg-[#C75B3E] text-white font-semibold px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
