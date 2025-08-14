import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface ClientLogo {
  name: string;
  logo: string;
  fallback: string;
  color: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "Amazon India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "EnrichAdMedia transformed our digital advertising strategy completely. Their data-driven approach and innovative campaigns helped us achieve a 450% ROI during our festive season campaign. The team's expertise and dedication are unmatched.",
      rating: 5,
      metrics: {
        roi: "450%",
        conversions: "150K+",
        impressions: "50M+"
      }
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "Head of Marketing",
      company: "Flipkart",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Working with EnrichAdMedia for our Big Billion Days campaign was exceptional. They delivered beyond our expectations with creative strategies that drove unprecedented traffic and conversions. Their attention to detail and results-driven approach is commendable.",
      rating: 5,
      metrics: {
        roi: "380%",
        conversions: "200K+",
        impressions: "75M+"
      }
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Brand Manager",
      company: "KFC India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "EnrichAdMedia's social media marketing expertise helped us increase our brand engagement significantly. Their creative content and strategic approach resulted in a 320% ROI and substantial foot traffic growth across our outlets.",
      rating: 5,
      metrics: {
        roi: "320%",
        conversions: "80K+",
        impressions: "30M+"
      }
    },
    {
      id: 4,
      name: "Amit Patel",
      position: "Digital Marketing Head",
      company: "Paytm",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The team at EnrichAdMedia understands the fintech landscape perfectly. Their programmatic advertising solutions helped us achieve remarkable user acquisition with a 360% ROI. Their expertise in digital payments marketing is outstanding.",
      rating: 5,
      metrics: {
        roi: "360%",
        conversions: "120K+",
        impressions: "40M+"
      }
    }
  ];

  const clientLogos: ClientLogo[] = [
    { 
      name: "Amazon", 
      logo: "",
      fallback: "Amazon",
      color: "text-orange-600"
    },
    { 
      name: "Flipkart", 
      logo: "",
      fallback: "Flipkart",
      color: "text-blue-600"
    },
    { 
      name: "KFC", 
      logo: "",
      fallback: "KFC",
      color: "text-red-600"
    },
    { 
      name: "Domino's", 
      logo: "",
      fallback: "Domino's",
      color: "text-blue-800"
    },
    { 
      name: "Paytm", 
      logo: "",
      fallback: "Paytm",
      color: "text-blue-500"
    },
    { 
      name: "PhonePe", 
      logo: "",
      fallback: "PhonePe",
      color: "text-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 mb-6"
          >
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with EnrichAdMedia.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-900 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="lg:w-48 space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">
                        {testimonials[currentTestimonial].metrics.roi}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">ROI</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">
                        {testimonials[currentTestimonial].metrics.conversions}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Conversions</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                      <div className="text-2xl font-bold gradient-text">
                        {testimonials[currentTestimonial].metrics.impressions}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Impressions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-dark-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Trusted by Leading Brands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white dark:bg-dark-700 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative w-full h-12 flex items-center justify-center">
                  <div className={`text-center font-bold text-sm md:text-base ${client.color} group-hover:scale-110 transition-transform duration-300`}>
                    {client.fallback}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Our Success Metrics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-white/90">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                <div className="text-white/90">Campaigns Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">300%</div>
                <div className="text-white/90">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50M+</div>
                <div className="text-white/90">Impressions Generated</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
