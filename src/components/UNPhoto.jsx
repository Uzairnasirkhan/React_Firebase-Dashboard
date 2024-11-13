import React from 'react'
import { FaHeart, FaComment, FaShare } from 'react-icons/fa'

const UNPhoto = ({ imageUrl, title }) => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hiddenw-1/3">
      {/* Photo */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Photo Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>

        {/* Actions */}
        <div className="flex justify-between items-center text-gray-500">
          <button className="flex items-center gap-1 hover:text-red-500 transition">
            <FaHeart className="text-red-400" /> Like
          </button>
          <button className="flex items-center gap-1 hover:text-blue-500 transition">
            <FaComment className="text-blue-400" /> Comment
          </button>
          <button className="flex items-center gap-1 hover:text-green-500 transition">
            <FaShare className="text-green-400" /> Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default UNPhoto
