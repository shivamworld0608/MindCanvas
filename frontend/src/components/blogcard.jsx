
import React from 'react';
import { CalendarDays, UserCircle } from 'lucide-react';

const BlogCard = ({ blog }) => {
  const { title, description, author_mail, link, date } = blog;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full min-w-[320px] max-w-xs mx-auto mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4 text-ellipsis overflow-hidden">{description}</p>
      <p className="text-gray-500 text-sm flex"><UserCircle className="mr-2" /> {author_mail}</p>
      <p className="text-gray-500 text-sm mb-4 flex"><CalendarDays className="mr-2" /> {new Date(date.$date).toLocaleDateString()}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block text-blue-500 font-semibold hover:text-blue-600"
      >
        Open Link
      </a>
    </div>
  );
};

export default BlogCard;