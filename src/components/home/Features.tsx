import React from 'react';
import { Laptop, Shield, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Laptop className="w-12 h-12 text-indigo-600" />,
    title: 'Modern Technology',
    description: 'Built with the latest and most reliable technologies in the industry.'
  },
  {
    icon: <Shield className="w-12 h-12 text-indigo-600" />,
    title: 'Secure & Reliable',
    description: 'Your data is protected with enterprise-grade security measures.'
  },
  {
    icon: <Users className="w-12 h-12 text-indigo-600" />,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with your team members.'
  },
  {
    icon: <Zap className="w-12 h-12 text-indigo-600" />,
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency across all devices.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide cutting-edge solutions that help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;