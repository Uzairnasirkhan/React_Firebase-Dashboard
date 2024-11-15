import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';


const UNComment = ({ avatarUrl, email, commentText , onEdit ,onDelete}) => {
  return (
    <div className=" bg-white rounded-lg shadow-md w-80 p-4 my-3">

     <div className='bg-gray-100 flex p-2 justify-between rounded-md'>
         {/* Avatar */}
      <img
        src={avatarUrl}
        alt="User Avatar"
        className="w-12 h-12 rounded-full object-cover border-2"
      />



              {/* Top Icon Buttons */}
              <div className="flex justify-end space-x-2 ">
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

     </div>
     
      {/* Comment Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-gray-900 font-semibold text-sm">posted by: {email}</div>
        </div>

        {/* Comment Text */}
        <p className="text-gray-700 mt-2">{commentText}</p>

        {/* Actions */}
        <div className="mt-3 flex items-center gap-4 text-gray-500">
          <button
            
            className="flex items-center gap-1 text-sm hover:text-red-500"
          >
            <FaHeart className="text-red-400" /> Like
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default UNComment
