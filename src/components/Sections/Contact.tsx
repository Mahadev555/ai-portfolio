import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

const ContactInfo = () => (
  <div className="md:w-1/2">
    <h3 className="text-2xl font-semibold mb-6">Let's Build Something Amazing</h3>
    <p className="text-gray-300 mb-8">
      Interested in collaborating on an AI project? Have questions about my work? Or just want to discuss the latest in technology? Feel free to reach out!
    </p>

    <div className="space-y-6">
      <InfoItem icon="envelope" color="blue" title="Email" value="mahadevmanerikar@gmail.com" />
      <a href="tel:+917588373045" className="block">
        <InfoItem icon="phone" color="green" title="Phone" value="+91 75883 73045" />
      </a>
      <InfoItem icon="map-marker-alt" color="purple" title="Location" value="Pune, India" />
      <a
        href="https://linkedin.com/in/mahadev-manerikar-7636a3207/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <InfoItem icon="linkedin-in" color="blue" title="LinkedIn" value="mahadev-manerikar" />
      </a>
    </div>


  </div>
)

const InfoItem = ({ icon, color, title, value }: { icon: string; color: string; title: string; value: string }) => (
  <div className="flex items-center">
    <div className={`mr-4 text-${color}-400`}>
      <i className={`fas fa-${icon} fa-lg`}></i>
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
)

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnjqvrdg");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation logic
  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    if (!fields.name.trim()) newErrors.name = "Name is required";
    if (!fields.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!fields.subject.trim()) newErrors.subject = "Subject is required";
    if (!fields.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    // Return true if no errors
    return Object.values(newErrors).every((v) => !v);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
    validate();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    } else {
      // Mark all as touched to show errors
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
    }
  };

  if (state.succeeded) {
    return (
      <div className="md:w-1/2">
        <div className="p-6 bg-gray-700 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold text-green-400 mb-2">Thank you!</h3>
          <p className="text-gray-200">Thanks for reaching out! I'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:w-1/2">
      <form className="space-y-6" onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            id="name"
            name="name"
            label="Your Name"
            type="text"
            placeholder="John Doe"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? errors.name : ""}
          />
          <InputField
            id="email"
            name="email"
            label="Your Email"
            type="email"
            placeholder="john@example.com"
            value={fields.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email ? errors.email : ""}
          />
        </div>
        <InputField
          id="subject"
          name="subject"
          label="Subject"
          type="text"
          placeholder="Project Inquiry"
          value={fields.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.subject && errors.subject ? errors.subject : ""}
        />
        <TextArea
          id="message"
          name="message"
          label="Message"
          placeholder="Tell me about your project..."
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.message && errors.message ? errors.message : ""}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <SubmitButton
          disabled={
            state.submitting ||
            !fields.name.trim() ||
            !fields.email.trim() ||
            !fields.subject.trim() ||
            !fields.message.trim() ||
            !!errors.name ||
            !!errors.email ||
            !!errors.subject ||
            !!errors.message
          }
          loading={state.submitting}
        />
      </form>
    </div>
  );
};

const InputField = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-3 bg-gray-700 border ${error ? "border-red-500" : "border-gray-600"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
      placeholder={placeholder}
      required
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      rows={5}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-3 bg-gray-700 border ${error ? "border-red-500" : "border-gray-600"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300`}
      placeholder={placeholder}
      required
    ></textarea>
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const SubmitButton = ({
  disabled,
  loading,
}: {
  disabled?: boolean;
  loading?: boolean;
}) => (
  <div>
    <button
      type="submit"
      className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:from-blue-600 hover:to-purple-700"
        }`}
      disabled={disabled}
    >
      {loading ? "Sending..." : <>Send Message <i className="fas fa-paper-plane ml-2"></i></>}
    </button>
  </div>
);

export default Contact
