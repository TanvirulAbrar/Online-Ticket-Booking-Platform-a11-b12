import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'mail_outline',
      title: 'Email Us',
      details: 'support@ticketzone.com',
      description: 'Send us an email anytime'
    },
    {
      icon: 'phone_in_talk',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: '24/7 customer support'
    },
    {
      icon: 'location_on',
      title: 'Visit Us',
      details: '123 Travel Street, City, State 12345',
      description: 'Our headquarters'
    },
    {
      icon: 'schedule',
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      description: 'Weekend support available'
    }
  ];

  const supportOptions = [
    {
      icon: 'chat_bubble_outline',
      title: 'Live Chat',
      description: 'Get instant help',
      action: 'Start Chat'
    },
    {
      icon: 'headphones',
      title: 'Phone Support',
      description: 'Speak with experts',
      action: 'Call Now'
    },
    {
      icon: 'mail',
      title: 'Email Support',
      description: 'Send detailed inquiries',
      action: 'Send Email'
    },
    {
      icon: 'language',
      title: 'Help Center',
      description: 'Browse FAQs',
      action: 'Visit Help Center'
    }
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Travel Street, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@ticketzone.com'
    },
    {
      city: 'London',
      address: '456 Journey Lane, London SW1A 1AA',
      phone: '+44 20 7123 4567',
      email: 'london@ticketzone.com'
    },
    {
      city: 'Tokyo',
      address: '789 Adventure Ave, Tokyo 100-0001',
      phone: '+81 3-1234-5678',
      email: 'tokyo@ticketzone.com'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              
              {success && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-6">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" 
                      placeholder="Enter your full name" 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" 
                      placeholder="Enter your email" 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="flight">Flight Booking</option>
                    <option value="hotel">Hotel Reservation</option>
                    <option value="refunds">Refunds & Cancellations</option>
                    <option value="partnership">Business Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <input 
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" 
                    placeholder="What's this about?" 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all" 
                    placeholder="Tell us more about your inquiry..." 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button 
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg">
                      <span className="material-symbols-outlined text-primary">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{info.title}</h3>
                      <p className="text-primary font-medium">{info.details}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-400">{option.icon}</span>
                      <div>
                        <p className="font-semibold text-sm">{option.title}</p>
                        <p className="text-xs text-slate-500">{option.description}</p>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      {option.action}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Global Offices */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Visit us at any of our worldwide locations</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="inline-flex p-3 bg-blue-50 dark:bg-slate-700 rounded-full mb-6">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p className="text-primary font-medium">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default Contact;