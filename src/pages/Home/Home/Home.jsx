import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Banner from "../Banner/Banner";
import NavItems from "../Banner/NavItems";
import Adds from "../Ads/Adds";
import LatestTickets from "../LatestTickets/LatestTickets";
import PopularRoutes from "../PopularRoutes/PopularRoutes";
import Features from "../Features/Features";
import Stats from "../Stats/Stats";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../Newsletter/Newsletter";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const popularDestinations = [
    {
      id: 1,
      name: "Dhaka",
      hotels: "2,847",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Cox's Bazar",
      hotels: "1,234",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Chittagong",
      hotels: "1,497",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Sylhet",
      hotels: "892",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Rajshahi",
      hotels: "654",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Khulna",
      hotels: "743",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const faqData = [
    {
      id: 1,
      question: "How do I book a ticket?",
      answer: "Simply search for your desired route using our search form at the top of the page. Select your departure and arrival locations, choose your travel date, and browse through available tickets. Once you find the perfect ticket, click 'Book Now', fill in your passenger details, and complete the payment process. You'll receive your ticket confirmation via email and SMS immediately after successful payment."
    },
    {
      id: 2,
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify your booking through your dashboard. Log into your account, go to 'My Bookings', and select the ticket you want to modify or cancel. Cancellation policies vary by operator and ticket type. Generally, you can cancel up to 2-24 hours before departure depending on the service provider. Refund amounts depend on the cancellation policy and timing. Some tickets may be non-refundable or have cancellation fees."
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer: "We accept a wide variety of payment methods for your convenience: All major credit cards (Visa, MasterCard, American Express), debit cards, mobile banking (bKash, Nagad, Rocket), digital wallets (PayPal, Stripe), and bank transfers. All payments are processed through secure, encrypted channels with bank-level security. We also support international payment methods for overseas customers."
    },
    {
      id: 4,
      question: "Is my personal information secure?",
      answer: "Absolutely! We take your privacy and security very seriously. We use bank-level encryption (SSL 256-bit) and security protocols to protect all your personal and payment information. Your data is stored on secure servers with multiple layers of protection. We comply with international data protection standards and never share your personal information with third parties without your explicit consent. Our payment processing is PCI DSS compliant."
    },
    {
      id: 5,
      question: "How do I get my ticket after booking?",
      answer: "After successful payment, you'll receive your e-ticket via email and SMS within minutes. The e-ticket contains a QR code and booking reference number. You can also download your ticket from your dashboard anytime. For travel, you can either print the e-ticket or show it on your mobile device. Make sure to carry a valid ID that matches the passenger name on the ticket."
    },
    {
      id: 6,
      question: "What if I miss my scheduled departure?",
      answer: "If you miss your scheduled departure, contact our customer support immediately. Depending on the operator's policy and ticket type, you may be able to reschedule to the next available service for a small fee. Some operators offer flexible tickets that allow changes without additional charges. However, this varies by service provider, so we recommend checking the specific terms and conditions of your ticket."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <div className="font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Components */}
      <Banner />
      <NavItems />
      <Adds />
      <LatestTickets />

      {/* Sections */}
      
      {/* Routes */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <PopularRoutes />
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 overflow-hidden">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Most Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations with TicketZone.
          </p>
        </div>
        
        <div className="relative w-full py-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="popular-destinations-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {popularDestinations.map((destination) => (
              <SwiperSlide key={destination.id} className="!w-64 md:!w-80 rounded-[2rem] overflow-hidden">
                <div className="destination-card relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
                  <img 
                    alt={`${destination.name} Destination`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={destination.image}
                  />
                  
                  <div className="absolute bottom-8 left-8 z-10 text-left">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-white/90 text-sm md:text-base font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">hotel</span>
                      {destination.hotels} Hotels Available
                    </p>
                  </div>
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
                      <span className="material-symbols-outlined text-white text-xl">favorite_border</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button className="swiper-button-prev-custom p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="swiper-button-next-custom p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Award */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl bg-[#001B61] dark:bg-slate-900 aspect-[4/1] md:aspect-[5/1] flex items-center shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-blue-400 blur-[120px] rounded-full"></div>
            </div>
            <div className="relative w-full h-full flex items-center justify-between px-8 md:px-16">
              <div className="flex items-center gap-6">
                <div className="text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-3xl md:text-5xl">flight_takeoff</span>
                  <span className="text-xl md:text-3xl font-bold tracking-tight">TicketZone</span>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-12">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-center">
                    <span className="text-4xl md:text-6xl font-black italic gold-text block leading-none">1ST</span>
                    <span className="text-white text-xs uppercase tracking-[0.2em] font-bold">Position</span>
                  </div>
                  <div className="h-12 md:h-16 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
                  <div className="text-left">
                    <h3 className="text-lg md:text-2xl font-bold text-amber-400 leading-tight">SUPERBRAND</h3>
                    <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">IN THE TRAVEL SECTOR</p>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-amber-600 to-yellow-300 rounded-full flex items-center justify-center p-1 shadow-2xl animate-pulse">
                    <div className="w-full h-full border-2 border-white/30 rounded-full flex flex-col items-center justify-center text-center p-2 bg-[#001B61]">
                      <span className="text-[6px] md:text-[8px] font-bold text-white leading-tight uppercase">Awarded</span>
                      <span className="text-[8px] md:text-[10px] font-black text-amber-400 uppercase">Superbrands</span>
                      <span className="text-[5px] md:text-[7px] text-white/70 italic">Industry Choice</span>
                      <div className="h-[1px] w-6 md:w-8 bg-white/30 my-1"></div>
                      <span className="text-[6px] md:text-[8px] font-bold text-white">2024-25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
            </button>
            <div className="absolute top-4 right-4 md:right-8 text-[8px] md:text-[10px] font-bold text-white/50 bg-white/10 px-2 py-0.5 rounded tracking-widest">AD</div>
          </div>
        </div>

        {/* Business */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A192F] min-h-[400px] md:min-h-[500px] flex items-center shadow-2xl border border-slate-200/10">
          <div className="absolute inset-y-0 left-0 w-full md:w-[60%] overflow-hidden">
            <img 
              alt="Business class luxury cabin" 
              className="w-full h-full object-cover object-left opacity-80 md:opacity-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8atBmCwxStOk255U8oU8h32ddwLFWfmp1aK10-q9OzyHl-tRFQ1J9tIzEtd4i5jSXEeOn0qbEDeec7Inj2xGtMynT83Roi64uNS7Pc1vTmDpuy10Abba6yqp6rHNr1l-J1FtoN8Uq14dBZzSCmo9-bNalXH1UxyZcqR89WCHRRLZraZNBvyvN1XXE32MSpnJDLHXqg5vq8bXvlAdc97cXNET77rDyfUemtUzGOuschiBnCg58FIL_sa2d5UND4z8fMubxtzNrI-D"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A192F]/40 to-[#0A192F]"></div>
          </div>
          <div className="relative z-10 w-full flex justify-end px-6 md:px-20 py-12 md:py-16">
            <div className="max-w-xl text-center md:text-right space-y-6">
              <div className="space-y-2">
                <span className="font-serif italic text-2xl md:text-4xl text-amber-400 block tracking-wide">Experience Premium Service</span>
                <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">on Your Business <br className="hidden md:block"/> Class Trips</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 pt-6">
                <div className="flex items-center justify-center md:justify-end gap-2 text-white/90">
                  <span className="material-symbols-outlined text-amber-400 text-lg">check_circle</span>
                  <span className="text-sm font-medium">Dedicated Travel Manager</span>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-2 text-white/90">
                  <span className="material-symbols-outlined text-amber-400 text-lg">check_circle</span>
                  <span className="text-sm font-medium">EMI Facility with Credit Card</span>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-2 text-white/90">
                  <span className="material-symbols-outlined text-amber-400 text-lg">check_circle</span>
                  <span className="text-sm font-medium">Ancillary Services</span>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-2 text-white/90">
                  <span className="material-symbols-outlined text-amber-400 text-lg">check_circle</span>
                  <span className="text-sm font-medium">Home Service</span>
                </div>
              </div>
              <div className="pt-8 flex flex-col sm:flex-row justify-center md:justify-end gap-4">
                <button className="px-8 md:px-10 py-3 md:py-4 bg-amber-500 hover:bg-amber-600 text-[#0A192F] font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20">
                  Book Now
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/20">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-4 md:p-8 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] md:text-[180px] text-white">flight</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose TicketZone?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We provide the best travel booking experience with features designed for your convenience and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Booking</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Your personal and payment information is protected with bank-level security protocols.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Round-the-clock customer support to help you with any travel concerns or bookings.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">payments</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Payment</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Multiple payment options including cards, mobile banking, and digital wallets.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Care</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated customer care team to ensure your journey is smooth and comfortable.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">public</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Wide Network</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Extensive network covering major cities and popular destinations nationwide.
              </p>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">smartphone</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Friendly</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Book tickets on-the-go with our responsive design and mobile-optimized interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with old system styling */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Success in Numbers</h2>
            <p className="text-blue-100">Join thousands of satisfied customers who trust TicketZone for their travel needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="material-symbols-outlined text-white">groups</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">50,000+</div>
              <div className="text-blue-100 text-sm font-medium">Happy Customers</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="material-symbols-outlined text-white">confirmation_number</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">125,000+</div>
              <div className="text-blue-100 text-sm font-medium">Tickets Sold</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="material-symbols-outlined text-white">explore</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-blue-100 text-sm font-medium">Destinations</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <span className="material-symbols-outlined text-white">military_tech</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-blue-100 text-sm font-medium">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with old system styling */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl opacity-20">format_quote</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">
                "TicketZone made my travel planning so much easier! The booking process is seamless and I always find great deals for my family trips."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  alt="User" 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                />
                <div>
                  <h4 className="font-bold">John Anderson</h4>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl opacity-20">format_quote</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">
                "I've been using TicketZone for all my business trips. Reliable, fast, and excellent customer service every single time."
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  alt="User" 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                />
                <div>
                  <h4 className="font-bold">Ahmed Rahman</h4>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl opacity-20">format_quote</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">
                "As someone who travels frequently, I appreciate the variety of options and competitive prices on TicketZone. Highly recommended!"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  alt="User" 
                  className="w-12 h-12 rounded-full object-cover" 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                />
                <div>
                  <h4 className="font-bold">Michael Garcia</h4>
                  <div className="flex text-yellow-400 text-sm">
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px] fill-[1]">star</span>
                    <span className="material-symbols-outlined text-[16px]">star_outline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter with old system styling */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 text-center">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-white text-3xl">mail</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Deals</h2>
            <p className="text-indigo-100 max-w-xl mx-auto mb-10">
              Subscribe to our newsletter and be the first to know about exclusive offers, new destinations, and travel tips.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                className="flex-1 px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-white/50 text-slate-800" 
                placeholder="Enter your email address" 
                required 
                type="email"
              />
              <button 
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2" 
                type="submit"
              >
                Subscribe <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
            <p className="text-indigo-200 text-xs mt-6">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* FAQ with old system styling */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full text-primary mb-6">
              <span className="material-symbols-outlined">help</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Find answers to common questions about booking tickets and using our platform.
            </p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{faq.question}</h3>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-200 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
