import React from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiFillHeart, AiOutlineComment } from 'react-icons/ai';

const UNPost = ({ title, description, onEdit, onDelete, imageUrl }) => {
  return (
    <div className="w-full md:w-3/5 mx-auto bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-104 hover:shadow-xl border border-gray-200">
      
      {/* Top Icon Buttons */}
      <div className="flex justify-end space-x-2 p-4 bg-gray-100">
        <button
          onClick={onEdit}
          className="text-gray-500 hover:text-blue-600 transition"
          aria-label="Edit"
        >
          <AiOutlineEdit size={20} />
        </button>
        <button
          onClick={onDelete}
          className="text-gray-500 hover:text-red-600 transition"
          aria-label="Delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>

       {/* Post Image */}
       {
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
      }

      {/* Post Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-3">{description}</p>
      </div>

      

      {/* Bottom Bar with Like and Comment Icons */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200 bg-gray-50">
        <button className="flex items-center text-red-500 hover:text-red-600 transition">
          <AiFillHeart className="mr-1" size={18} />
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
          <AiOutlineComment className="mr-1" size={18} />
          <span className="text-sm">Comment</span>
        </button>
      </div>
    </div>
  );
};

export default UNPost;
