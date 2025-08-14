import React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-dark-900 text-white'>
      <div className='container-custom'>
        {/* Main Footer Content */}
        <div className='py-16'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Company Info */}
            <div className='lg:col-span-2'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='mb-6'
              >
                <div className='flex items-center space-x-2 mb-4'>
                  <div className='w-10 h-10 gradient-bg rounded-lg flex items-center justify-center'>
                    <span className='text-white font-bold text-lg'>EA</span>
                  </div>
                  <span className='text-2xl font-bold gradient-text'>
                    EnrichAdMedia
                  </span>
                </div>
                <p className='text-gray-300 leading-relaxed mb-6 max-w-md'>
                  We're a digital-first advertising agency helping businesses
                  achieve remarkable growth through innovative digital marketing
                  strategies and measurable results.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='space-y-3'
              >
                <div className='flex items-center space-x-3'>
                  <MapPin className='w-5 h-5 text-primary-400' />
                  <span className='text-gray-300'>
                    139/9 B Rahul Kunj, New Delhi 110096
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Phone className='w-5 h-5 text-primary-400' />
                  <span className='text-gray-300'>+91 98765 43210</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <Mail className='w-5 h-5 text-primary-400' />
                  <span className='text-gray-300'>hello@enrichadmedia.com</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className='text-lg font-semibold mb-6'>Quick Links</h3>
              <ul className='space-y-3'>
                <li>
                  <button
                    onClick={() => scrollToSection('#home')}
                    className='text-gray-300 hover:text-primary-400 transition-colors duration-200'
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#about')}
                    className='text-gray-300 hover:text-primary-400 transition-colors duration-200'
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className='text-gray-300 hover:text-primary-400 transition-colors duration-200'
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#portfolio')}
                    className='text-gray-300 hover:text-primary-400 transition-colors duration-200'
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className='text-gray-300 hover:text-primary-400 transition-colors duration-200'
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className='text-lg font-semibold mb-6'>Services</h3>
              <ul className='space-y-3'>
                <li>
                  <span className='text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer'>
                    Digital Advertising
                  </span>
                </li>
                <li>
                  <span className='text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer'>
                    Performance Marketing
                  </span>
                </li>
                <li>
                  <span className='text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer'>
                    Brand Strategy
                  </span>
                </li>
                <li>
                  <span className='text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer'>
                    Social Media Marketing
                  </span>
                </li>
                <li>
                  <span className='text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer'>
                    Analytics & Optimization
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className='border-t border-gray-800 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-gray-400 text-sm'
            >
              © {currentYear} EnrichAdMedia. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex items-center space-x-4'
            >
              <a
                href='https://www.linkedin.com/in/ashish-rawat-5bb00ba3'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
              >
                <Linkedin className='w-5 h-5' />
              </a>
              <a
                href='https://twitter.com/enrichadmedia'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
              >
                <Twitter className='w-5 h-5' />
              </a>
              <a
                href='https://facebook.com/enrichadmedia'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='https://instagram.com/enrichadmedia'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
              >
                <Instagram className='w-5 h-5' />
              </a>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className='w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
            >
              <ArrowUp className='w-5 h-5' />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
