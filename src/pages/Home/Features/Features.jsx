import React from 'react';
import { Shield, Clock, CreditCard, Headphones, Globe, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your personal and payment information is protected with bank-level security.",
      color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any travel concerns.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
    },
    {
      icon: CreditCard,
      title: "Easy Payment",
      description: "Multiple payment options including cards, mobile banking, and digital wallets.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400"
    },
    {
      icon: Headphones,
      title: "Customer Care",
      description: "Dedicated customer care team to ensure your journey is smooth and comfortable.",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400"
    },
    {
      icon: Globe,
      title: "Wide Network",
      description: "Extensive network covering major cities and popular destinations nationwide.",
      color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Book tickets on-the-go with our responsive design and mobile-optimized interface.",
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose TicketZone?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide the best travel booking experience with features designed for your convenience and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;