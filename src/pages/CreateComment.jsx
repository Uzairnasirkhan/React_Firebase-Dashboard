
import React, { useState,useEffect } from 'react'
import {auth, db} from '../config/firebaseConfig/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

const CreateComment = ({}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [userComment,setUserComment] = useState("")
    const [avatar, setAvatar] = useState("")
  
    const getCurrentUser = ()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user)
        } else {
          setCurrentUser(null)
        }
      })
  
      return () => unsubscribe()  // Cleanup subscription on unmount
    }


    const createComment = async()=>{
        try {
            await addDoc(collection(db,"comments"),{
                text: userComment,
                avatar: avatar,
                owner: currentUser.email
            })
            alert("comment posted")
            setAvatar("")
            setUserComment("")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCurrentUser()  
    }, [])


  return (
    <div>
        {/* comment input div */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 space-y-5 border-2">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">Create A Comment</h1>

        <label className="block text-lg font-medium text-gray-700 mb-2">Post A Comment</label>
        <textarea
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Write a Comment"
          rows="5"
        ></textarea>

        <label className="block text-lg font-medium text-gray-700 mb-2">Image url</label>
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Enter avatar image url"
        />

        <div className="flex justify-end mt-2">
          <button
            className="bg-blue-600 text-white px-2 py-2 rounded-lg text-md font-semibold hover:bg-blue-700 transition duration-300" onClick={createComment}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateComment
