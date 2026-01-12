import React, { useState } from 'react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'dashboard' },
    { id: 'booking', name: 'Booking & Reservations', icon: 'event_available' },
    { id: 'payment', name: 'Payment & Billing', icon: 'credit_card' },
    { id: 'account', name: 'Account Management', icon: 'person_outline' },
    { id: 'technical', name: 'Technical Support', icon: 'settings' },
    { id: 'safety', name: 'Safety & Security', icon: 'verified_user' }
  ];

  const quickHelp = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using the TicketZone platform.',
      icon: 'play_circle',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/30',
      type: 'Video',
      duration: '5 min'
    },
    {
      title: 'First Booking',
      description: 'Step-by-step guide to your first flight or hotel reservation.',
      icon: 'confirmation_number',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/30',
      type: 'Guide',
      duration: '3 min'
    },
    {
      title: 'Payments',
      description: 'Accepted payment methods and security protocols.',
      icon: 'payments',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/30',
      type: 'Article',
      duration: '2 min'
    },
    {
      title: 'Cancellations',
      description: 'Understanding our refund policies and how to cancel.',
      icon: 'history',
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/30',
      type: 'Policy',
      duration: '4 min'
    }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How do I book a ticket on TicketZone?',
      answer: 'To book a ticket, simply search for your destination, select your preferred option, choose your travel date, and proceed to checkout. You\'ll need to create an account or log in to complete your booking.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes, you can modify or cancel your booking up to 24 hours before departure. Go to "My Bookings" in your dashboard to make changes. Cancellation fees may apply depending on the ticket type.'
    },
    {
      id: 3,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted connections.'
    },
    {
      id: 4,
      category: 'payment',
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use industry-standard SSL encryption and comply with PCI DSS standards. Your payment information is never stored on our servers and is processed through secure payment gateways.'
    },
    {
      id: 5,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" in the top right corner, enter your email and create a password. You can also sign up using your Google or Facebook account for faster registration.'
    },
    {
      id: 6,
      category: 'account',
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.'
    },
    {
      id: 7,
      category: 'technical',
      question: 'The website is loading slowly. What should I do?',
      answer: 'Try clearing your browser cache and cookies, disable browser extensions, or try using a different browser. If the problem persists, check your internet connection or contact our technical support.'
    },
    {
      id: 8,
      category: 'technical',
      question: 'I\'m having trouble with the mobile app.',
      answer: 'Make sure you have the latest version of the app installed. Try closing and reopening the app, or restart your device. If issues continue, uninstall and reinstall the app.'
    },
    {
      id: 9,
      category: 'safety',
      question: 'How do you protect my personal information?',
      answer: 'We follow strict data protection protocols, use encryption for all data transmission, and comply with GDPR and other privacy regulations. Your data is never shared with third parties without your consent.'
    },
    {
      id: 10,
      category: 'safety',
      question: 'What should I do if I suspect fraudulent activity?',
      answer: 'Contact our security team immediately at security@ticketzone.com or call our emergency hotline. We\'ll investigate the issue and take appropriate action to protect your account.'
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Available 24/7. Instant responses.',
      icon: 'forum',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      title: 'Phone Support',
      description: 'Mon-Fri 9AM - 6PM',
      icon: 'call',
      availability: 'Mon-Fri 9AM-6PM',
      action: 'Call Now'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-slate-900 dark:bg-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            alt="Aerial travel background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTIrmX4UoChhUqle_qMfXnI9meo82tRfThBg2odQqdcQc32QC-OGP0If7m1GOjXGILoWhe5ONK0OCSAzmaAASwQtK0oG9O2JxeXSIEs7zC4NI9q6LZXUBg9ROkb00yDiv1_0cu3Jn1ZtLMZqxILfBNKYrObVpfrY9uXb4lsY7ATScH9LWqyrEGvWaGNSmakCbL3e3obHskev9HxUH-wMdMF6EW_MotcCiuriKy4rAUTW6yHIU0-qkOeYX8KsfkRqysCZJEqfP_8Vru"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-6">How can we help you?</h1>
          <div className="relative max-w-2xl mx-auto">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-slate-400">search</span>
            </span>
            <input 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none shadow-2xl focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white text-lg" 
              placeholder="Search for articles, topics, or FAQs..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <p className="mt-4 text-slate-300">
            Popular topics: 
            <span className="underline cursor-pointer hover:text-white transition-colors"> Refund Policy</span>, 
            <span className="underline cursor-pointer hover:text-white transition-colors"> Seat Selection</span>, 
            <span className="underline cursor-pointer hover:text-white transition-colors"> Baggage Allowance</span>
          </p>
        </div>
      </section>

      {/* Quick Help Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left text-slate-900 dark:text-slate-100">Quick Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="material-icons-outlined">{item.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <span className="material-icons-outlined text-[14px] mr-1">
                    {item.type === 'Video' ? 'timer' : item.type === 'Guide' ? 'menu_book' : item.type === 'Article' ? 'article' : 'policy'}
                  </span> 
                  {item.type} • {item.duration}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Categories Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Browse by Category</h3>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium w-full text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="material-icons-outlined text-lg">{category.icon}</span> 
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Support */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Still Need Help?</h3>
              <div className="space-y-6">
                {contactOptions.map((option, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="material-icons-outlined text-blue-600 mt-1">{option.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">{option.title}</h4>
                      <p className="text-xs text-slate-500 mb-3">{option.description}</p>
                      <button className="w-full py-2 px-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-900 dark:text-slate-100">
                        {option.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* FAQ Section */}
          <div className="lg:col-span-9">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">Frequently Asked Questions</h2>
            
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <span className="material-icons-outlined text-slate-400 text-5xl mb-4">help_outline</span>
                <p className="text-slate-600 dark:text-slate-400">
                  No FAQs found matching your search criteria.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="group">
                    <details className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                      <summary 
                        className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFaq(faq.id);
                        }}
                      >
                        <span className="font-semibold text-lg pr-4 text-slate-900 dark:text-slate-100">{faq.question}</span>
                        <span className={`material-icons-outlined text-slate-400 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </summary>
                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </details>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-100">
                View All Questions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Help;