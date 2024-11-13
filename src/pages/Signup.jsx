import React, { useState } from 'react'
import { Input } from "antd";
import UNbutton from '../components/UNbutton'
import { auth, db } from '../config/firebaseConfig/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [gender, setGender] = useState('')


  const navigate = useNavigate()

  const userSignup = async () => {
    try {
      const signup = await createUserWithEmailAndPassword(auth, email, password)
      const uid = signup.user.uid

      await setDoc(doc(db, "users", uid), {
        userName: userName,
        email: email,
        gender: gender
      })

      alert("User created successfully")
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-3xl text-center font-bold mb-6">Sign Up</h1>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your Gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <UNbutton label="Sign Up" type="primary" onClick={userSignup} />
        </div>
      </div>
    </div>
  )
}

export default Signup
