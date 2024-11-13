import React from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import { FaUser, FaRegStickyNote, FaRegCommentDots, FaRegImage, FaPhotoVideo, FaCheckSquare, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import Users from './Users'
import Posts from './Posts'
import Photos from './Photos'
import Comments from './Comments'
import Albums from './Albums'
import Todos from './Todos'
import LoginPage from './LoginPage'
import Signup from './Signup'
import PostForm from './PostForm'
import CreatePost from './CreatePost'
import CreateComment from './CreateComment'

const Home = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2 bg-gray-900 h-full fixed top-0 left-0 shadow-lg px-4">
          <h1 className="text-2xl text-white py-5 font-bold text-center border-b border-gray-700">
            Dashboard
          </h1>
          <nav className="mt-5 space-y-2">
            <Link to="/users">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaUser className="mr-3" /> Users
              </div>
            </Link>
            <Link to="/posts">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaRegStickyNote className="mr-3" /> Posts
              </div>
            </Link>
            <Link to="/comments">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaRegCommentDots className="mr-3" /> Comments
              </div>
            </Link>
            <Link to="/photos">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaRegImage className="mr-3" /> Photos
              </div>
            </Link>
            <Link to="/albums">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaPhotoVideo className="mr-3" /> Albums
              </div>
            </Link>
            <Link to="/todos">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaCheckSquare className="mr-3" /> Todos
              </div>
            </Link>
            <Link to="/login">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaSignInAlt className="mr-3" /> Login
              </div>
            </Link>
            <Link to="/signupPage">
              <div className="flex items-center text-white hover:bg-blue-700 py-3 px-4 rounded-l-full cursor-pointer transition-all duration-300 ease-in-out">
                <FaUserPlus className="mr-3" /> Sign Up
              </div>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-span-10 ml-auto overflow-y-auto h-screen pl-[16.66%] w-screen">
          <Routes>
            {/* Redirect to SignUp page on default load */}
            <Route path="/" element={<Navigate to="/signupPage" />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signupPage" element={<Signup />} />
            <Route path="/postForm" element={<PostForm />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path='/createComment' element={<CreateComment/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Home
