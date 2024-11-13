import React, { useState } from 'react'
import { Input } from "antd";
import UNbutton from '../components/UNbutton';
import { auth } from '../config/firebaseConfig/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const userLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
      alert("Logged in successfully")
      navigate("/posts")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-3xl text-center font-bold mb-6">Login</h1>
        <div className="space-y-4">
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
        </div>
        <div className="mt-6 flex justify-center">
          <UNbutton label="Login" type="primary" onClick={userLogin} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
