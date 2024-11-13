import React, { useEffect, useState } from 'react'
import { db } from '../config/firebaseConfig/Firebase'
import { getDocs, collection, query } from 'firebase/firestore'

export default function Users() {
  const [userData, setUserData] = useState([])

  const getUsers = async () => {
    try {
      let userArr = []
      const q = query(collection(db, "users"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        userArr.push({ ...doc.data(), id: doc.id })
      })
      setUserData(userArr)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Users
      </h1>

      {/* Table */}
      <div className="flex justify-center">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-sm uppercase font-semibold tracking-wider">
                <th className="p-4 border">User Id</th>
                <th className="p-4 border">Username</th>
                <th className="p-4 border">Email</th>
                <th className="p-4 border">Gender</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="p-4 border text-gray-700">{user.id}</td>
                  <td className="p-4 border text-gray-700">{user.userName}</td>
                  <td className="p-4 border text-gray-700">{user.email}</td>
                  <td className="p-4 border text-gray-700">{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
