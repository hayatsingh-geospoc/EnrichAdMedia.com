import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  TrendingUp,
  Palette,
  Share2,
  BarChart3,
  Zap,
  ArrowRight,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Digital Advertising',
      description:
        'Comprehensive digital advertising campaigns across all major platforms including Google Ads, Facebook, Instagram, and more.',
      features: [
        'Multi-platform campaigns',
        'Audience targeting',
        'Real-time optimization',
        'Performance tracking',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description:
        'Data-driven performance marketing strategies that focus on measurable results and ROI optimization.',
      features: [
        'Conversion optimization',
        'A/B testing',
        'ROI tracking',
        'Budget management',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description:
        'Strategic brand development and positioning to create memorable brand experiences that resonate with your audience.',
      features: [
        'Brand positioning',
        'Visual identity',
        'Messaging strategy',
        'Brand guidelines',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description:
        'Engaging social media campaigns that build brand awareness, foster community, and drive engagement.',
      features: [
        'Content creation',
        'Community management',
        'Influencer partnerships',
        'Social analytics',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart3,
      title: 'Programmatic Advertising',
      description:
        'Advanced programmatic advertising solutions using AI and machine learning for optimal ad placement.',
      features: [
        'Real-time bidding',
        'Audience insights',
        'Cross-device targeting',
        'Brand safety',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Analytics & Optimization',
      description:
        'Comprehensive analytics and continuous optimization to maximize campaign performance and ROI.',
      features: [
        'Data analysis',
        'Performance reporting',
        'Continuous optimization',
        'Predictive insights',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section
      id='services'
      className='section-padding bg-gray-50 dark:bg-dark-800'
    >
      <div className='container-custom'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 mb-6'
          >
            <Zap className='w-4 h-4' />
            <span className='text-sm font-medium'>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6'
          >
            Comprehensive{' '}
            <span className='gradient-text'>Digital Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'
          >
            From strategy to execution, we provide end-to-end digital
            advertising solutions that drive results and grow your business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2'>
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className='w-8 h-8 text-white' />
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                {/* Features */}
                <ul className='space-y-3 mb-8'>
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + featureIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className='flex items-center space-x-3 text-gray-600 dark:text-gray-300'
                    >
                      <div className='w-2 h-2 bg-primary-500 rounded-full flex-shrink-0'></div>
                      <span className='text-sm'>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className='inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300'
                >
                  <span>Learn More</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-center text-white'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Need a Custom Solution?
            </h3>
            <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
              We specialize in creating tailored digital advertising strategies
              that perfectly align with your unique business needs and goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300'
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
