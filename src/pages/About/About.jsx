import React from 'react';

const About = () => {
  const stats = [
    { icon: 'groups', label: 'Happy Customers', value: '50,000+' },
    { icon: 'place', label: 'Destinations', value: '200+' },
    { icon: 'event_available', label: 'Years Experience', value: '8+' },
    { icon: 'trending_up', label: 'Growth Rate', value: '150%' }
  ];

  const values = [
    {
      icon: 'favorite_border',
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above everything else.'
    },
    {
      icon: 'verified_user',
      title: 'Trust & Security',
      description: 'Your safety and security are our top priorities in every transaction.'
    },
    {
      icon: 'language',
      title: 'Global Reach',
      description: 'Connecting travelers worldwide with seamless booking experiences.'
    },
    {
      icon: 'star_outline',
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.'
    }
  ];

  const team = [
    {
      name: 'John Anderson',
      role: 'CEO & Founder',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByuSV0ZJjNkCXtgyYbjTEx9T-ht6qVxSDBnipRE45iqP8MWkqV4Bqo1ImFKrlFNh8mkK6RyZJKABr3FSXjdb3WfM1-_5ojk0d3Mkt2hMMyFG9HzjQgV7zCHae6dBUYD0aT9hyxr5u1XVazfTmeP7jss8umdhbfAKGqCXNFYQKQpQ0gler6ECXaWQUSxySRbriZdB1eO5QHqEjnDUxYi3gvINhApJB6-WlP_QOyWsM6dD4nJmdowDsAeTHvT64k-Nm5Ms_6sz_Kigat',
      bio: 'Passionate about revolutionizing travel experiences with 15+ years in the industry.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrIDm-c5qo9DYM-7JAldaPD3oChJxC893_dbxSUix9XIymF1aQdo3kSLH7ilwFuGwxlO5FIElYt2ekYYFgFmfrAgCGP3jrvXdQqzpVzAdGQAJSvUqidAzadVgDobjiaoMT1NFJd5pPdheidSi2MUKbaxIMrMmm-F2QYefo2tzf5U8S6vtMxN-jXvvvIWaRctX_EwVyq1eSaeQuDTGHhDnMfK3QdKScRleEGxziRu-fzLuNwZVX0EbCtDN8WO9cbUuYcO0gnyKtJBC8',
      bio: 'Tech visionary leading our platform innovation and digital transformation.'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Head of Operations',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2yZVhRXOgHaUYr_Hilue3-rn_WvnpfbftAW10khF9W_V0HxAd92CAS0Wv9SHXeKRZluho3N7ql0u7GieTASfjpyPovTBDOPjUyuCCZejzaPG8Jlit-ZkOuEgZ4vI6R-1gR7yGmX-UxlEbCsxnXtd-FscXoLBcuZ_qM8Pm8Wp_wbfjEYPSv5-XMP4iDr4rbB0ncD_hj4WZjTC0FmvzdjfK8yuCwEDW4_sZUet5TLL2O16gH0yeRrpWg9ZjmMoSAiB4PhvvW8hJ_PNQ',
      bio: 'Operations expert ensuring smooth and efficient travel booking processes.'
    },
    {
      name: 'David Kim',
      role: 'Head of Customer Success',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYJul_O76QTTE0VH3nXFAJEpo1iZV_A2uKNnZ0R-2X7WcH6tOie00YtF9zqa8ZTAhLzUeLyNwBRgTGOiGvwxvBKdSWkrb2Rcm0u5QKXwfwn2-f60EoAhfHoe5nYiUBnHIqnTRqHhSRjn1Oel-lVb-fqFEyLrqGXnCfnHKoSwZwIgtqzJLrwVqzdfM9iuCopMISzFBSV6rTufzjt2-sJC3oqTVczNi1OtBqLhFehTFYtTnSSjowrEoYwHF6HspkKIsIJ0Ib9PqfgstJ',
      bio: 'Dedicated to creating exceptional customer experiences and building lasting relationships.'
    }
  ];

  const timeline = [
    { year: '2016', event: 'TicketZone Founded', description: 'Started with a vision to simplify travel booking' },
    { year: '2018', event: 'Mobile App Launch', description: 'Expanded to mobile platforms for better accessibility' },
    { year: '2020', event: '1M+ Users', description: 'Reached our first million registered users milestone' },
    { year: '2022', event: 'Global Expansion', description: 'Extended services to 50+ countries worldwide' },
    { year: '2024', event: 'AI Integration', description: 'Launched AI-powered travel recommendations' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            alt="Travel background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvCkvTmyqraH-TOEUbTTNfeoCwpoq_hcA5FsQTA8Ctc-UDZHfGcVzqq5KcN7-wuPrYIGSMx0xPkzpz9M0OuzPPq5lxFD4i0Hlw4kLFoxcTSDYSKV0l_zZIQ0crQW6Rekhk5kok-ls3_L07D4MeOiluqQGL_Egc8a8m_jE9sK4L6xjr-hDZgheK40Md7WS-Yiq3nubOm3hxC5PYHiv2GSeNppS70brYbeBP1MQ7BZtgso3szBbfuaSSjlBgnbjm-rSP7ZX0kR4-jiT"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl font-bold mb-6 tracking-tight text-slate-900 dark:text-slate-100">About TicketZone</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            We're passionate about making travel accessible, affordable, and unforgettable. Since 2016, we've been connecting travelers with their dream destinations through innovative technology and exceptional service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-1">8+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-slate-500">Years of Excellence</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-slate-500">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-slate-500">Destinations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined">target</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To democratize travel by providing a seamless, secure, and user-friendly platform that connects travelers with the best transportation options worldwide. We believe everyone deserves to explore the world without barriers.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become the world's most trusted travel booking platform, fostering global connections and creating memorable experiences that bring people and cultures together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white dark:bg-slate-800/50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Impact in Numbers</h2>
          <p className="text-slate-500">These numbers reflect our commitment to excellence and customer satisfaction</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="material-symbols-outlined text-4xl text-blue-600 mb-4">{stat.icon}</span>
              <div className="text-4xl font-bold mb-2 text-slate-900 dark:text-slate-100">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Core Values</h2>
            <p className="text-slate-500">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-3xl text-blue-600 mb-4">{value.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">{value.title}</h3>
                <p className="text-slate-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Our Journey</h2>
            <p className="text-slate-500">Key milestones in our growth story</p>
          </div>
          <div className="relative max-w-4xl mx-auto timeline-line">
            {timeline.map((item, index) => (
              <div key={index} className={`mb-12 relative flex items-center justify-between w-full ${index === timeline.length - 1 ? 'mb-4' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 pr-8 text-right hidden md:block">
                      <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900 z-10"></div>
                    <div className="md:w-1/2 md:pl-8 w-full">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <span className="md:hidden text-blue-600 font-bold block mb-2">{item.year}</span>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{item.event}</h4>
                        <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 pr-8 w-full md:text-right">
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <span className="md:hidden text-blue-600 font-bold block mb-2">{item.year}</span>
                        <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{item.event}</h4>
                        <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900 z-10"></div>
                    <div className="w-1/2 pl-8 hidden md:block">
                      <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">Meet Our Team</h2>
            <p className="text-slate-500">The passionate people behind TicketZone's success</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                  <img 
                    alt={`${member.name} ${member.role}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={member.image}
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{member.name}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;