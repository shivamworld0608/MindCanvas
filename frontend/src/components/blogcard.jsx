import React from 'react';
import { CalendarDays, UserCircle } from 'lucide-react';

const BlogCard = ({ blog }) => {
  const { title, description, author_mail, link, date } = blog;
  console.log(date);

  return (
    <div className="  relative bg-white shadow-lg rounded-lg p-6 w-full h-[300px] min-w-[320px] max-w-xs mx-auto mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4 text-ellipsis overflow-hidden">{description}</p>

      <div className='absolute bottom-4'>
      <div className="border-t-2 border-orange-500 my-4 w-full min-w-[270px]"></div>
      <div className="  flex justify-between items-center text-sm text-gray-500 space-y-4">
        <div className="flex flex-col ">
          <div className="flex mb-2 ">
            <UserCircle className="mr-1  text-custom-red" /> 
            <span className="text-gray-500">{author_mail}</span>
          </div>
          <div className="flex ">
          <CalendarDays className="mr-1 text-custom-red" />
          <span className="text-gray-500">
    {new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })}
  </span>

          </div>
        </div>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 font-semibold hover:text-blue-600"
        >
          Read
        </a>
      </div>
      </div>
    </div>
  );
};

export default BlogCard;
