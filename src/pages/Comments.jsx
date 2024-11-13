import React, { useEffect, useState } from 'react'
import UNbutton from '../components/UNbutton'
import UNComment from '../components/UNComment'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/firebaseConfig/Firebase'
import { getDocs , query , doc , deleteDoc , updateDoc ,collection } from 'firebase/firestore'

const Comments = () => {
   const navigate = useNavigate()
   const [commentsData,setCommentsData] = useState([])


   const getComments = async()=>{
    try {
      let arrComments = []
      const q = query(collection(db, "comments"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        arrComments.push({ ...doc.data(), id: doc.id })
      })
      setCommentsData(arrComments)
      // console.log(arrPosts)
    } catch (error) {
      console.log(error)
    }
   }

   const deleteComment = async(comId)=>{
    try {
      await deleteDoc(doc(db,"comments",comId))
      getComments()
    } catch (error) {
      console.log(error.message)
    }
   }

   const editComment = async(comId)=>{
    try {
      const newtext = prompt("enter new comment text")
      
      await updateDoc(doc(db, "comments",comId),{
         text: newtext 
      })
      
      getComments()
    } catch (error) {
      console.log(eror.message)
    }
   }

   useEffect(()=>{
       getComments()
   },[])
   
  

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Comments
      </h1>
      <UNbutton label={'Post Comment'} type={'primary'} size={'medium'} onClick={()=>navigate("/createComment")}/>


      {/* Comments */}
        <div className='flex py-5 justify-around gap-2 flex-wrap'>
          {commentsData.map((comment)=>(
            <UNComment key={comment.id} avatarUrl={comment.avatar} email={comment.owner} commentText={comment.text} onDelete={()=>deleteComment(comment.id)} onEdit={()=>editComment(comment.id)}/>
          ))}
        </div>

    </div>
  )
}

export default Comments
