import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const categories = ["Technology", "Entertainment", "Sports", "Health", "Business", "Science", "General"];

const CreateBlog = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
    category: categories[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await toast.promise(
          axios.post(`${import.meta.env.REACT_APP_BASE_URL}/blog/create`, formData, { withCredentials: true }),
          {
            loading: "Posting...",
            success: "Blog created successfully!",
            error: "Failed to create Blog",
          }
        );
    
        // Close the modal if the blog post was successfully created
        onClose();
        
      } catch (error) {
        console.error("Error creating blog post:", error);
      }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Craft Your Next Masterpiece</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-custom-red text-white py-2 rounded-lg hover:bg-red-600">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
