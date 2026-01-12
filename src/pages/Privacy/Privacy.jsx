import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText, Calendar } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = '2024-01-15';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FileText,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support. This includes your name, email address, phone number, payment information, and travel preferences.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you use our services, including your IP address, browser type, device information, pages visited, and the time and date of your visits.'
        },
        {
          subtitle: 'Location Information',
          text: 'With your permission, we may collect location information from your device to provide location-based services and improve your experience.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, process transactions, send booking confirmations, and provide customer support.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your information to send you service-related communications, marketing materials (with your consent), and important updates about our services.'
        },
        {
          subtitle: 'Personalization',
          text: 'We use your information to personalize your experience, recommend relevant travel options, and improve our services based on your preferences.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Users,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with trusted third-party service providers who help us operate our business, such as payment processors, booking partners, and customer support providers.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights or the safety of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to appropriate confidentiality protections.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Encryption',
          text: 'All sensitive data is encrypted in transit and at rest using industry-standard encryption protocols. Payment information is processed through PCI DSS compliant systems.'
        },
        {
          subtitle: 'Access Controls',
          text: 'Access to personal information is restricted to authorized personnel who need the information to perform their job functions and are bound by confidentiality obligations.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You have the right to request a copy of your personal information in a structured, machine-readable format and to transfer this information to another service provider.'
        },
        {
          subtitle: 'Deletion',
          text: 'You have the right to request deletion of your personal information, subject to certain legal and business requirements. We will retain information as necessary to comply with legal obligations.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or updating your preferences in your account settings.'
        }
      ]
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        {
          subtitle: 'Global Operations',
          text: 'As a global service, we may transfer your information to countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.'
        },
        {
          subtitle: 'Adequacy Decisions',
          text: 'We transfer data to countries with adequacy decisions from relevant authorities or implement appropriate safeguards such as Standard Contractual Clauses.'
        }
      ]
    }
  ];

  const principles = [
    {
      title: 'Transparency',
      description: 'We are clear about what information we collect and how we use it.',
      icon: Eye
    },
    {
      title: 'Security',
      description: 'We protect your information with industry-leading security measures.',
      icon: Lock
    },
    {
      title: 'Control',
      description: 'You have control over your personal information and privacy settings.',
      icon: Shield
    },
    {
      title: 'Compliance',
      description: 'We comply with applicable privacy laws and regulations worldwide.',
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-standard">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-12 w-12" />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl leading-relaxed mb-6">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Calendar className="h-5 w-5" />
              <span>Last updated: {new Date(lastUpdated).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding">
        <div className="container-standard">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              These principles guide how we handle your personal information
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="card-standard bg-white dark:bg-neutral-800 p-6 text-center">
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white dark:bg-neutral-800 section-padding">
        <div className="container-standard">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={section.id} className="scroll-mt-20" id={section.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary-100 dark:bg-primary-900 rounded-lg p-2">
                      <section.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                          {item.subtitle}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Contact Us About Privacy
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <p><strong>Email:</strong> privacy@ticketzone.com</p>
                <p><strong>Address:</strong> 123 Travel Street, Privacy Department, City, State 12345</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>

            {/* Changes */}
            <div className="mt-8 p-6 bg-accent-50 dark:bg-accent-900 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Changes to This Policy
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="card-standard bg-white dark:bg-neutral-800 p-4 w-64">
          <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            Table of Contents
          </h4>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Privacy;