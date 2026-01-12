import React, { useState } from 'react';

const Terms = () => {
  const [showTOC, setShowTOC] = useState(false);
  const lastUpdated = 'January 15, 2024';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: 'check_circle',
      content: 'By accessing and using TicketZone services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: 'article',
      content: [
        '"Service" refers to the TicketZone platform, website, mobile applications, and related services.',
        '"User" refers to any individual who accesses or uses our Service.',
        '"Content" refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials.',
        '"Booking" refers to a reservation made through our platform for transportation services.'
      ]
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      icon: 'person_outline',
      content: [
        'You must provide accurate and complete information when creating an account.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You must notify us immediately of any unauthorized use of your account.',
        'We reserve the right to suspend or terminate accounts that violate these terms.'
      ]
    },
    {
      id: 'booking-terms',
      title: 'Booking and Payment Terms',
      icon: 'payments',
      content: [
        'All bookings are subject to availability and confirmation by the service provider.',
        'Prices are displayed in the currency specified and may include applicable taxes and fees.',
        'Payment must be made at the time of booking using accepted payment methods.',
        'Cancellation and refund policies vary by service provider and are clearly displayed during booking.'
      ]
    },
    {
      id: 'user-conduct',
      title: 'User Conduct',
      icon: 'report_problem',
      content: [
        'You agree not to use the Service for any unlawful purpose or in any way that could damage our reputation.',
        'You will not attempt to gain unauthorized access to any portion of the Service.',
        'You will not transmit any viruses, malware, or other harmful code.',
        'You will not engage in any activity that interferes with or disrupts the Service.'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: 'copyright',
      content: [
        'All content and materials on the Service are protected by intellectual property laws.',
        'You may not reproduce, distribute, or create derivative works without our written permission.',
        'User-generated content remains your property, but you grant us a license to use it in connection with the Service.',
        'We respect the intellectual property rights of others and expect users to do the same.'
      ]
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Limitations',
      icon: 'warning_amber',
      content: [
        'The Service is provided "as is" without warranties of any kind.',
        'We do not guarantee the accuracy, completeness, or reliability of any content.',
        'We are not liable for any indirect, incidental, or consequential damages.',
        'Our total liability shall not exceed the amount paid by you for the specific service.'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: 'exit_to_app',
      content: [
        'Either party may terminate this agreement at any time with or without notice.',
        'Upon termination, your right to use the Service will cease immediately.',
        'We may retain certain information as required by law or for legitimate business purposes.',
        'Provisions that by their nature should survive termination will remain in effect.'
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: 'policy',
      content: [
        'These terms are governed by the laws of the jurisdiction where TicketZone is incorporated.',
        'Any disputes will be resolved through binding arbitration or in the courts of our jurisdiction.',
        'If any provision is found unenforceable, the remaining provisions will remain in effect.',
        'These terms constitute the entire agreement between you and TicketZone.'
      ]
    }
  ];

  const highlights = [
    {
      title: 'Fair Usage',
      description: 'Use our service responsibly and respect other users',
      icon: 'verified_user'
    },
    {
      title: 'Secure Payments',
      description: 'All transactions are processed securely with industry standards',
      icon: 'shield'
    },
    {
      title: 'Clear Policies',
      description: 'Transparent cancellation and refund policies for all bookings',
      icon: 'description'
    },
    {
      title: 'Legal Compliance',
      description: 'We operate in compliance with applicable laws and regulations',
      icon: 'balance'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Nav */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        

        {/* Card */}
        <div className="bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
          {/* Hero */}
          <div className="bg-slate-50 dark:bg-slate-800/50 py-16 px-8 text-center relative border-b border-slate-200 dark:border-slate-800">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              These terms govern your use of TicketZone services. Please read them carefully before using our platform.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-sm">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              <span>Last updated: {lastUpdated}</span>
            </div>
            <button 
              onClick={() => setShowTOC(!showTOC)}
              className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold py-2 px-4 rounded shadow-lg uppercase tracking-wider"
            >
              Show TOC
            </button>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Highlights */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Key Highlights</h2>
              <p className="text-slate-500 dark:text-slate-400">Important points about using our service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((highlight, index) => (
                <div key={index} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-primary mb-4 text-3xl">{highlight.icon}</span>
                  <h3 className="font-bold mb-2">{highlight.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-12 max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <section key={section.id} className="flex gap-4" id={section.id}>
                  <span className="material-symbols-outlined text-slate-400 flex-shrink-0 mt-1">{section.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{index + 1}. {section.title}</h3>
                    {Array.isArray(section.content) ? (
                      <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {section.content.map((item, itemIndex) => (
                          <p key={itemIndex}>{item}</p>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm list-disc pl-5">
                        {section.content.split('\n').map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}

              {/* Contact */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-8 rounded-xl border border-slate-200 dark:border-slate-700 mt-12">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">contact_support</span>
                  Questions About These Terms?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">If you have any questions about these Terms of Service, please contact us:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <span className="block font-bold mb-1">Email:</span>
                    <a className="text-primary hover:underline" href="mailto:legal@ticketzone.com">legal@ticketzone.com</a>
                  </div>
                  <div>
                    <span className="block font-bold mb-1">Address:</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed">123 Travel Street, Legal Department,<br/>City, State 12345</span>
                  </div>
                  <div>
                    <span className="block font-bold mb-1">Phone:</span>
                    <span className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="p-6 border-2 border-slate-100 dark:border-slate-800 rounded-xl flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">fact_check</span>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Agreement Acknowledgment</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    By continuing to use TicketZone, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-slate-500 dark:text-slate-400 text-xs pb-10">
          <p>© 2024 TicketZone. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Cookies Policy</a>
            <a className="hover:text-primary" href="#">Accessibility</a>
          </div>
        </footer>

        {/* Modal */}
        {showTOC && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Table of Contents</h3>
                <button 
                  onClick={() => setShowTOC(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setShowTOC(false)}
                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    {index + 1}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Terms;