import React, { useEffect, useState } from 'react'
import UNbutton from '../components/UNbutton'
import UNPhoto from '../components/UNPhoto'
import {db} from '../config/firebaseConfig/Firebase'
import { addDoc , collection ,query ,getDocs} from 'firebase/firestore'

const Photos = () => {
  const [photo,setPhoto] = useState("")
  const [title,setTitle] = useState("")
  const [photoData,setPhotoData] = useState([])

  const addPhoto = async()=>{
    try {
      await addDoc(collection(db,"photos"),{
        title: title,
        url: photo
      })
      setPhoto("")
      setTitle("")
    } catch (error) {
      console.log(error)
    }
  }

  const getPhotos = async()=>{
    try {
      let arrPhotos = []
      const q = query(collection(db, "photos"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        arrPhotos.push({ ...doc.data(), id: doc.id })
      })
      setPhotoData(arrPhotos)
    } catch (error) {
      console.log(error)
    }
   }

   useEffect(()=>{
    getPhotos()
   },[])
  return (

    <div className="bg-gray-100 min-h-screen p-8">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Photos
      </h1>
 
      <div className='max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-2 space-y-5 border-2'>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Enter image url"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          placeholder="Enter a title for image"
        />

        <UNbutton label={'Add Photo'} size="medium" type={"primary"} onClick={addPhoto}/>

      </div>
        
        <div className='flex py-5 justify-between gap-5'>
          {photoData.map((data)=>(
           <UNPhoto key={data.id} title={data.title} imageUrl={data.url}/>
          ))}
        </div>
    </div>
  )
}

export default Photos
