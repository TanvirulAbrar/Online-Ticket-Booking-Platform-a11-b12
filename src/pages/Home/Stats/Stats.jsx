import React, { useState, useEffect } from 'react';
import { Users, Ticket, MapPin, Award } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    tickets: 0,
    destinations: 0,
    awards: 0
  });

  const finalStats = {
    customers: 50000,
    tickets: 125000,
    destinations: 150,
    awards: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalStats).map(key => {
      const increment = finalStats[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalStats[key]) {
          currentValue = finalStats[key];
          clearInterval(intervals[Object.keys(finalStats).indexOf(key)]);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.customers,
      label: "Happy Customers",
      suffix: "+",
      color: "text-blue-500"
    },
    {
      icon: Ticket,
      value: counters.tickets,
      label: "Tickets Sold",
      suffix: "+",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      value: counters.destinations,
      label: "Destinations",
      suffix: "+",
      color: "text-purple-500"
    },
    {
      icon: Award,
      value: counters.awards,
      label: "Awards Won",
      suffix: "+",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-blue-600 dark:bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust TicketZone for their travel needs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;