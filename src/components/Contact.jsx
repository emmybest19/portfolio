import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook this up to your email API or backend
    console.log("Form Submitted", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-[#0e0e0e] text-gray-900 dark:text-white">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        className="max-w-3xl mx-auto bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-lg space-y-6"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-bold shadow-md hover:shadow-lg transition duration-300 hover:bg-yellow-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
