import React from 'react';
import { Code, Palette, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12 text-indigo-600" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    price: 'From $5,000'
  },
  {
    icon: <Palette className="w-12 h-12 text-indigo-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive interfaces that users love to interact with.',
    price: 'From $3,000'
  },
  {
    icon: <Globe className="w-12 h-12 text-indigo-600" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence.',
    price: 'From $2,000'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    price: 'From $8,000'
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-indigo-600 font-semibold">{service.price}</p>
                <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to discuss your project requirements
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;