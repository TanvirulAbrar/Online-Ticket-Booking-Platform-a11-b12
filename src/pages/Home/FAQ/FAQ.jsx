import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a ticket on TicketZone?",
      answer: "Booking is simple! Search for your destination, select your preferred ticket, choose your seats, and complete the payment. You'll receive a confirmation email with your e-ticket."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify your booking up to 2 hours before departure. Cancellation charges may apply depending on the ticket type and timing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, mobile banking (bKash, Nagad, Rocket), and bank transfers. All payments are secured with SSL encryption."
    },
    {
      question: "How will I receive my ticket?",
      answer: "After successful payment, you'll receive an e-ticket via email and SMS. You can also download it from your dashboard. Show the e-ticket on your mobile or print it out."
    },
    {
      question: "What if I miss my bus/train?",
      answer: "If you miss your scheduled departure, please contact our customer support immediately. We'll try to accommodate you on the next available service, subject to availability."
    },
    {
      question: "Is my personal information safe?",
      answer: "Absolutely! We use bank-level security measures to protect your personal and payment information. Your data is encrypted and never shared with third parties."
    },
    {
      question: "Can I choose my seat?",
      answer: "Yes, for most services you can select your preferred seat during the booking process. Seat selection may have additional charges for premium seats."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special discounts for group bookings of 10 or more passengers. Contact our customer support for group booking assistance and discount details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about booking, payments, and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;