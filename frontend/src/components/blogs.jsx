import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import BlogCard from './blogcard';
import { toast } from 'react-hot-toast';
import { Ambulance, Clapperboard, Component, CpuIcon, FlaskConical, Handshake, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';

const BlogPage = () => {
  const categories = [
    { name: "Technology", icon: CpuIcon },
    { name: "Entertainment", icon: Clapperboard },
    { name: "Sports", icon: Trophy },
    { name: "Health", icon: Ambulance },
    { name: "Business", icon: Handshake },
    { name: "Science", icon: FlaskConical },
    { name: "General", icon: Component },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [blogs, setBlogs] = useState([]);
  const categoriesRef = useRef(null);

  useEffect(() => {
    axios.get(`${import.meta.env.REACT_APP_BASE_URL}/blog/get/${activeCategory}`, { withCredentials: true })
      .then(response => setBlogs(response.data))
      .catch(error =>{
        toast.error(`Failed to ${activeCategory} blogs!`);
        console.error("Error fetching blogs:", error)
      });
  }, [activeCategory]);

  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      categoriesRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative  ">
    <div className="relative mt-2 mb-6 sticky top-[60px] w-screen md:top-[74px] z-40">
        <button
          onClick={() => scrollCategories('left')}
          className="absolute left-2   md:left-8 top-1/2 transform -translate-y-1/2 bg-white border-2 border-black text-black p-2 rounded-full z-30 shadow-md"
        >
          <ChevronLeft size={20} />
        </button>
        <div
          className=" z-20 bg-white flex space-x-6 overflow-x-auto  justify-start md:justify-center items-center mt-2 mb-6 shadow-md scrollbar-hide py-2 px-8"
          ref={categoriesRef}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 text-sm font-medium focus:outline-none ${activeCategory === category.name
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-600'
              }`}
            >
              <category.icon className="mx-auto mb-2" size={20} />
              {category.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollCategories('right')}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-white border-2 border-black text-black p-2 rounded-full z-30 shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
