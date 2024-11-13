import React, { useEffect, useState } from 'react'
import UNPost from '../components/UNPost'
import UNbutton from '../components/UNbutton'
import { useNavigate } from 'react-router-dom'
import { getDocs,query,collection, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import {db} from '../config/firebaseConfig/Firebase' 

const Posts = () => {

  const [postsData,setPostsData] = useState([])
  const navigate = useNavigate()

  const getPosts = async()=>{
    try {
      let arrPosts = []
      const q = query(collection(db, "posts"))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        arrPosts.push({ ...doc.data(), id: doc.id })
      })
      setPostsData(arrPosts)
      // console.log(arrPosts)
    } catch (error) {
      console.log(error)
    }
  }


  const deletePost = async(postId)=>{
      try {
        await deleteDoc(doc(db,"posts",postId))
        getPosts()
      } catch (error) {
        console.log(error.message)
      }
  }


  const editPost = async(postId)=>{
    try {
      const newdesc = prompt("enter new description")
      
      await updateDoc(doc(db, "posts",postId),{
         description: newdesc 
      })
      
      getPosts()
    } catch (error) {
      console.log(eror.message)
    }
  }

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div>

      <div className='px-5 py-2 flex justify-between shadow-md mb-4 border-2'>
        <h1 className='text-3xl font-bold text-center text-blue-600'>Posts</h1>
        <UNbutton label={'Create Post'} type={'primary'} size={'medium'} onClick={()=>navigate("/createPost")}/>
      </div>

      <div className='flex flex-col gap-6 pt-5 pb-5'>
      
       {
        postsData.map((post)=>(
          <UNPost key={post.id} title={post.title} description={post.description} imageUrl={post.imageUrl} onDelete={()=>deletePost(post.id)} onEdit={()=>editPost(post.id)}/>
        ))
       }
      </div>
       
    </div>
  )
}

export default Posts

