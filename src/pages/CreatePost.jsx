import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {db} from '../config/firebaseConfig/Firebase'


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl,setImageUrl] = useState('')

   const postData = {
    title: title,
    description: description,
    imageUrl: imageUrl
   }

  const createPost = async () =>{
    try {
      await addDoc(collection(db,"posts"),postData)
      alert('post created successfully')
       setImageUrl("")
      setTitle("")
      setDescription("")
    } catch (error) {
      console.log(error.message)    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-2 space-y-5 border-2">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center">Create a New Post</h1>

      {/* Title Input */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Enter your post title"
        />
      </div>

      {/* Description Textarea */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Write something about your post"
          rows="5"
        ></textarea>
      </div>

      {/* image Input */}
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">Image url</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Enter post's image url here"
        />
      </div>

      <div >
        <p className='text-sm text-red-500'>*You can only update the post's description after creating it</p>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-600 text-white px-2 py-2 rounded-lg text-md font-semibold hover:bg-blue-700 transition duration-300"  onClick={createPost}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
