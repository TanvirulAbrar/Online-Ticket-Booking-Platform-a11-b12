import React, { useState } from 'react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const categories = [
    { id: 'all', name: 'All Posts', count: 24, icon: 'grid_view' },
    { id: 'travel-tips', name: 'Travel Tips', count: 8, icon: 'tips_and_updates' },
    { id: 'destinations', name: 'Destinations', count: 6, icon: 'location_on' },
    { id: 'culture', name: 'Culture', count: 4, icon: 'palette' },
    { id: 'food', name: 'Food & Dining', count: 3, icon: 'restaurant' },
    { id: 'adventure', name: 'Adventure', count: 3, icon: 'landscape' }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Sustainable Travel in 2024',
    excerpt: 'Discover how to explore the world responsibly while minimizing your environmental impact. From eco-friendly accommodations to carbon-neutral transportation options, we\'ve got you covered.',
    content: `
      <p>Sustainable travel has become more than just a trend—it's a necessity for preserving our planet's natural beauty for future generations. As travelers become increasingly conscious of their environmental impact, the tourism industry is evolving to meet these demands.</p>
      
      <h3>Why Sustainable Travel Matters</h3>
      <p>Tourism accounts for approximately 8% of global carbon emissions, making it crucial for travelers to adopt more sustainable practices. By making conscious choices, we can significantly reduce our environmental footprint while still enjoying incredible travel experiences.</p>
      
      <h3>Eco-Friendly Accommodation Options</h3>
      <p>Choose accommodations that prioritize sustainability through renewable energy, water conservation, and local sourcing. Look for certifications like LEED, Green Key, or EarthCheck when booking your stay.</p>
      
      <h3>Transportation Choices</h3>
      <p>Consider alternative transportation methods such as trains, buses, or electric vehicles. When flying is necessary, choose direct flights and consider purchasing carbon offsets to neutralize your impact.</p>
      
      <h3>Supporting Local Communities</h3>
      <p>Engage with local businesses, eat at family-owned restaurants, and purchase souvenirs from local artisans. This not only reduces your carbon footprint but also supports the local economy.</p>
    `,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'John Anderson',
    date: '1/15/2024',
    readTime: '8 min read',
    category: 'travel-tips',
    tags: ['sustainability', 'eco-travel', 'green-tourism']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Hidden Gems of Southeast Asia: 10 Destinations You Must Visit',
      excerpt: 'Explore breathtaking locations off the beaten path that offer authentic cultural experiences and stunning natural beauty.',
      content: `
        <p>Southeast Asia is home to some of the world's most incredible hidden gems, waiting to be discovered by adventurous travelers. Beyond the popular tourist destinations lie pristine beaches, ancient temples, and vibrant local cultures.</p>
        
        <h3>1. Koh Rong Sanloem, Cambodia</h3>
        <p>This pristine island offers crystal-clear waters and untouched beaches, perfect for those seeking tranquility away from the crowds.</p>
        
        <h3>2. Nusa Penida, Indonesia</h3>
        <p>A rugged island paradise with dramatic cliffs, hidden beaches, and incredible snorkeling opportunities.</p>
        
        <h3>3. Luang Prabang, Laos</h3>
        <p>A UNESCO World Heritage site featuring stunning Buddhist temples and French colonial architecture.</p>
        
        <p>Each destination offers unique experiences that showcase the authentic beauty and culture of Southeast Asia.</p>
      `,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Michael Chen',
      date: '1/12/2024',
      readTime: '6 min read',
      category: 'destinations',
      tags: ['southeast-asia', 'hidden-gems']
    },
    {
      id: 3,
      title: 'Budget Travel Hacks: How to See the World for Less',
      excerpt: 'Learn insider tips and tricks to stretch your travel budget further without compromising on experiences.',
      content: `
        <p>Traveling on a budget doesn't mean sacrificing quality experiences. With the right strategies, you can explore amazing destinations while keeping costs low.</p>
        
        <h3>Accommodation Savings</h3>
        <p>Consider hostels, house-sitting, or home exchanges. Book accommodations with kitchen facilities to save on dining costs.</p>
        
        <h3>Transportation Tips</h3>
        <p>Use budget airlines, travel during off-peak seasons, and consider overland travel options like buses and trains.</p>
        
        <h3>Food and Activities</h3>
        <p>Eat like a local at street food stalls and local markets. Look for free walking tours and public attractions.</p>
      `,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Carlos Rodriguez',
      date: '1/10/2024',
      readTime: '5 min read',
      category: 'travel-tips',
      tags: ['budget-travel', 'tips']
    },
    {
      id: 4,
      title: 'Street Food Adventures: A Culinary Journey Through Bangkok',
      excerpt: 'Dive into the vibrant street food scene of Bangkok and discover the flavors that make Thai cuisine extraordinary.',
      content: `
        <p>Bangkok's street food scene is legendary, offering an incredible variety of flavors, textures, and aromas that define Thai cuisine.</p>
        
        <h3>Must-Try Street Foods</h3>
        <p>From pad thai and som tam to mango sticky rice and Thai iced tea, Bangkok's streets offer culinary adventures at every corner.</p>
        
        <h3>Best Street Food Areas</h3>
        <p>Explore Chatuchak Weekend Market, Chinatown, and the floating markets for the most authentic street food experiences.</p>
        
        <h3>Safety Tips</h3>
        <p>Choose busy stalls with high turnover, observe local eating habits, and trust your instincts when selecting vendors.</p>
      `,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'David Kim',
      date: '1/8/2024',
      readTime: '7 min read',
      category: 'food',
      tags: ['bangkok', 'thai-cuisine']
    },
    {
      id: 5,
      title: 'Digital Nomad Paradise: Best Cities for Remote Work',
      excerpt: 'Discover the top destinations that combine excellent WiFi, affordable living, and inspiring environments for digital nomads.',
      content: `
        <p>The rise of remote work has opened up incredible opportunities for digital nomads to work from anywhere in the world.</p>
        
        <h3>Top Digital Nomad Destinations</h3>
        <p>Cities like Lisbon, Bali, Mexico City, and Tbilisi offer the perfect combination of infrastructure, affordability, and lifestyle.</p>
        
        <h3>Essential Considerations</h3>
        <p>Reliable internet, time zone compatibility, cost of living, and visa requirements are crucial factors to consider.</p>
        
        <h3>Building Community</h3>
        <p>Join co-working spaces and digital nomad communities to network and maintain social connections while working remotely.</p>
      `,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Marcus Wang',
      date: '1/5/2024',
      readTime: '9 min read',
      category: 'travel-tips',
      tags: ['digital-nomad', 'remote-work']
    },
    {
      id: 6,
      title: 'Adventure Photography: Capturing Epic Moments on the Road',
      excerpt: 'Master the art of travel photography with tips from professional photographers who specialize in adventure and landscape shots.',
      content: `
        <p>Adventure photography combines technical skill with creative vision to capture the essence of travel experiences.</p>
        
        <h3>Essential Equipment</h3>
        <p>A versatile camera system, sturdy tripod, and protective gear are essential for adventure photography.</p>
        
        <h3>Composition Techniques</h3>
        <p>Use the rule of thirds, leading lines, and natural framing to create compelling travel photographs.</p>
        
        <h3>Capturing the Moment</h3>
        <p>Be patient, observe light conditions, and always be ready for unexpected photographic opportunities.</p>
      `,
      image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Alex Thompson',
      date: '1/3/2024',
      readTime: '6 min read',
      category: 'adventure',
      tags: ['photography', 'adventure']
    }
  ];

  const trendingTopics = [
    { name: 'Sustainable Travel', posts: 12 },
    { name: 'Solo Travel', posts: 8 },
    { name: 'Budget Tips', posts: 15 },
    { name: 'Digital Nomad', posts: 6 },
    { name: 'Food Tourism', posts: 9 }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12 py-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-slate-900 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Travel Blog</h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Discover inspiring stories, practical tips, and hidden gems from fellow travelers around the world.
            </p>
            <div className="mt-8 max-w-md mx-auto relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary ring-1 ring-slate-200 dark:ring-slate-700" 
                placeholder="Search articles..." 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 space-y-10">
            <section>
              <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex justify-between items-center w-full text-left transition-colors group ${
                        selectedCategory === category.id
                          ? 'text-primary font-medium'
                          : 'text-slate-600 dark:text-slate-400 hover:text-primary'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">{category.icon}</span> 
                        {category.name}
                      </span> 
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 dark:bg-blue-900/40'
                          : 'bg-slate-100 dark:bg-slate-800'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Trending Topics</h3>
              <ul className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <li key={index}>
                    <button className="flex justify-between text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors w-full text-left">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">trending_up</span> 
                        {topic.name}
                      </span> 
                      <span>{topic.posts}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          <div className="flex-1">
            {/* Featured Article */}
            <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group mb-12">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                  <img 
                    alt="Camera and map on desk" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={featuredPost.image}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    FEATURED
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">person</span> 
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">calendar_today</span> 
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">schedule</span> 
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <button 
                    onClick={() => openModal(featuredPost)}
                    className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Read Full Story
                  </button>
                </div>
              </div>
            </article>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col group">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={post.image}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                      <span className="material-symbols-outlined text-sm">
                        {post.category === 'destinations' ? 'location_on' : 
                         post.category === 'food' ? 'restaurant' : 
                         post.category === 'adventure' ? 'landscape' : 'tips_and_updates'}
                      </span>
                      {post.category.replace('-', ' ')}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">person</span> 
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">schedule</span> 
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => openModal(post)}
                      className="w-full py-2.5 px-4 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Additional Featured Article */}
            <article className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden group">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[16/9] md:aspect-auto h-64 md:h-auto overflow-hidden">
                  <img 
                    alt="Adventure photography tools" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                    <span className="material-symbols-outlined text-sm">landscape</span>
                    Adventure
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    Adventure Photography: Capturing Epic Moments on the Road
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    Master the art of travel photography with tips from professional photographers who specialize in adventure and landscape shots.
                  </p>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-6">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">person</span> 
                      Alex Thompson
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">schedule</span> 
                      6 min read
                    </span>
                  </div>
                  <button 
                    onClick={() => openModal(blogPosts.find(post => post.id === 6))}
                    className="w-full py-2.5 px-4 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>

            {/* Load More Button */}
            {/* <div className="mt-16 text-center">
              <button className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm">
                Load More Articles
              </button>
            </div> */}
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex justify-between items-center">
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">
                    {selectedPost.category === 'destinations' ? 'location_on' : 
                     selectedPost.category === 'food' ? 'restaurant' : 
                     selectedPost.category === 'adventure' ? 'landscape' : 'tips_and_updates'}
                  </span>
                  {selectedPost.category.replace('-', ' ')}
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-slate-500">close</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Hero Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="p-8">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {selectedPost.title}
                  </h1>
                  
                  <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">person</span> 
                      {selectedPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">calendar_today</span> 
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">schedule</span> 
                      {selectedPost.readTime}
                    </span>
                  </div>

                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;