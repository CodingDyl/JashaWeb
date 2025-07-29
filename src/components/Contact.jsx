import { motion } from 'framer-motion';
import { textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles';
import { contactPeople } from '../constants';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import EmployeeCard from './EmployeeCard';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { HiMail, HiPhone, HiUser, HiDocumentText, HiLocationMarker, HiClock } from 'react-icons/hi';

const Contact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const formRef = useRef();

  const validate = {
    name: (value) => value.trim().length < 2,
    email: (value) => !/^\S+@\S+$/.test(value),
    subject: (value) => value.trim().length === 0,
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, title, message) => {
    setNotification({ type, title, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validate.name(form.name) ||
      validate.email(form.email) ||
      validate.subject(form.subject)
    ) {
      showNotification('error', 'Validation Error', 'Please fill out all the required fields correctly.');
      return;
    }

    setLoading(true);

    emailjs.send(
        'service_s34n27g',
        'template_m74jauw',
        {
          from_name: form.name,
          to_name: "Jasha Consulting",
          from_email: form.email,
          to_email: "shaun@jasha.co.za",
          message: form.message,
          subject: form.subject,
        },
        'EfmDX1DNlIAyMCXdr'
      )
      .then(
        () => {
          setLoading(false);
          showNotification('success', 'Success!', 'Thank you. We will get back to you as soon as possible.');

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showNotification('error', 'Error', 'Something went wrong. Please try again.');
        }
      );
  };

  return (
    <>
    <span id='contact'>
      &nbsp;  
    </span>

    {/* Hero Section */}
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900/80"></div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="heading-responsive font-display font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-responsive text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to start your next project? Contact our team for industrial fabrication, 
            engineering solutions, and sustainable energy inquiries.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-display font-bold mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiLocationMarker className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-white/70">South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HiClock className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                  <p className="text-white/70">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-white/70">Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Our Team</h3>
              <div className="space-y-4">
                {contactPeople.map((contact) => (
                  <EmployeeCard key={contact.name} {...contact}/>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      <HiUser className="inline w-4 h-4 mr-2" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">
                      <HiMail className="inline w-4 h-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    <HiDocumentText className="inline w-4 h-4 mr-2" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Notification */}
    {notification && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
          notification.type === 'success'
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }`}
      >
        <div className="font-semibold">{notification.title}</div>
        <div className="text-sm opacity-90">{notification.message}</div>
      </motion.div>
    )}
    </>
  )
}

export default Contact;