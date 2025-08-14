import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  X
} from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'food', name: 'Food & Beverage' },
    { id: 'fintech', name: 'Fintech' },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Amazon India",
      category: "ecommerce",
      description: "Comprehensive digital advertising campaign for Amazon India's festive season sales.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      client: "Amazon",
      duration: "3 months",
      results: {
        impressions: "50M+",
        clicks: "2.5M+",
        conversions: "150K+",
        roi: "450%"
      },
      services: ["Digital Advertising", "Performance Marketing", "Social Media Marketing"],
      challenge: "Drive massive traffic and conversions during the competitive festive season while maintaining high ROI.",
      solution: "Implemented a multi-channel approach combining search, display, and social media advertising with advanced audience targeting and real-time optimization."
    },
    {
      id: 2,
      title: "Flipkart Big Billion Days",
      category: "ecommerce",
      description: "Strategic campaign for Flipkart's biggest annual sale event.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      client: "Flipkart",
      duration: "2 months",
      results: {
        impressions: "75M+",
        clicks: "3.2M+",
        conversions: "200K+",
        roi: "380%"
      },
      services: ["Digital Advertising", "Brand Strategy", "Analytics & Optimization"],
      challenge: "Create buzz and drive unprecedented traffic for the annual Big Billion Days sale.",
      solution: "Developed an integrated campaign strategy with influencer partnerships, creative storytelling, and performance-driven advertising."
    },
    {
      id: 3,
      title: "KFC India",
      category: "food",
      description: "Brand awareness and engagement campaign for KFC India.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      client: "KFC",
      duration: "6 months",
      results: {
        impressions: "30M+",
        clicks: "1.8M+",
        conversions: "80K+",
        roi: "320%"
      },
      services: ["Social Media Marketing", "Brand Strategy", "Digital Advertising"],
      challenge: "Increase brand engagement and drive foot traffic to KFC outlets across India.",
      solution: "Created engaging social media content, influencer collaborations, and location-based advertising campaigns."
    },
    {
      id: 4,
      title: "Domino's Pizza",
      category: "food",
      description: "Performance marketing campaign for Domino's online ordering platform.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      client: "Domino's",
      duration: "4 months",
      results: {
        impressions: "25M+",
        clicks: "1.5M+",
        conversions: "90K+",
        roi: "410%"
      },
      services: ["Performance Marketing", "Digital Advertising", "Analytics & Optimization"],
      challenge: "Increase online orders and improve customer acquisition cost for the pizza delivery service.",
      solution: "Implemented targeted performance marketing campaigns with advanced conversion tracking and optimization."
    },
    {
      id: 5,
      title: "Paytm",
      category: "fintech",
      description: "Digital advertising campaign for Paytm's payment services.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      client: "Paytm",
      duration: "5 months",
      results: {
        impressions: "40M+",
        clicks: "2.1M+",
        conversions: "120K+",
        roi: "360%"
      },
      services: ["Digital Advertising", "Programmatic Advertising", "Analytics & Optimization"],
      challenge: "Drive user acquisition and increase app downloads for the digital payment platform.",
      solution: "Executed programmatic advertising campaigns with precise audience targeting and creative optimization."
    },
    {
      id: 6,
      title: "PhonePe",
      category: "fintech",
      description: "Brand awareness and user acquisition campaign for PhonePe.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      client: "PhonePe",
      duration: "4 months",
      results: {
        impressions: "35M+",
        clicks: "1.9M+",
        conversions: "110K+",
        roi: "340%"
      },
      services: ["Digital Advertising", "Social Media Marketing", "Brand Strategy"],
      challenge: "Establish PhonePe as a leading digital payment solution in a competitive market.",
      solution: "Developed comprehensive brand awareness campaigns with engaging content and strategic media placement."
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-white dark:bg-dark-900">
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
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured{' '}
            <span className="gradient-text">Case Studies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover how we've helped leading brands achieve remarkable results through 
            innovative digital advertising strategies.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(item)}
              >
                <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{item.client}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                        <div className="text-lg font-bold gradient-text">{item.results.roi}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">ROI</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                        <div className="text-lg font-bold gradient-text">{item.results.conversions}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">Conversions</div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2">
                      {item.services.slice(0, 2).map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {item.services.length > 2 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{item.services.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedProject.title}
                      </h2>
                      <span className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                        {selectedProject.client}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                      {selectedProject.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Challenge</h3>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProject.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Solution</h3>
                        <p className="text-gray-600 dark:text-gray-300">{selectedProject.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">{selectedProject.results.impressions}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Impressions</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">{selectedProject.results.clicks}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Clicks</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">{selectedProject.results.conversions}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Conversions</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                        <div className="text-2xl font-bold gradient-text">{selectedProject.results.roi}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">ROI</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service) => (
                        <span
                          key={service}
                          className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  duration: string;
  results: {
    impressions: string;
    clicks: string;
    conversions: string;
    roi: string;
  };
  services: string[];
  challenge: string;
  solution: string;
}

export default Portfolio;
