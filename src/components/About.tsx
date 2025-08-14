import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Award, TrendingUp, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven strategies that align with your business goals and target audience."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of delivering exceptional ROI and measurable business growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Cutting-edge technology and creative solutions that set you apart."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals passionate about digital marketing excellence."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              We're a{' '}
              <span className="gradient-text">Digital-First</span>{' '}
              Advertising Agency
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              At EnrichAdMedia, we believe in the power of data-driven creativity. Our mission is to help 
              businesses thrive in the digital landscape by delivering innovative advertising solutions that 
              not only capture attention but drive meaningful results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              With years of experience working with leading brands like Amazon, Flipkart, KFC, Dominos, 
              Paytm, and PhonePe, we understand what it takes to create campaigns that resonate with 
              audiences and deliver exceptional ROI.
            </motion.p>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg mb-8"
            >
              <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Our Office</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  139/9 B Rahul Kunj, New Delhi 110096
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Team Members</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower businesses with innovative digital advertising solutions that drive growth, 
              enhance brand visibility, and deliver measurable results in an ever-evolving digital landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
