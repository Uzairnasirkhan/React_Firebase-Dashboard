import React, { useState,useEffect } from 'react'
import UNTodo from '../components/UNTodo'
import {db} from '../config/firebaseConfig/Firebase'
import { addDoc,collection,query,onSnapshot, deleteDoc, doc, updateDoc } from 'firebase/firestore'

const Todos = () => {
   const [input,setInput] = useState('')
   const [todos,setTodos] = useState([])

  
  const getTodos = async()=>{
    const q = query(collection(db,"todos"))  
    const unsub = onSnapshot(q , (querySnapshot)=>{
      let todoArr = []
      querySnapshot.forEach((doc)=>{
        todoArr.push({...doc.data(),id:doc.id})
      })
      setTodos(todoArr)
    });

    return ()=> unsub()
  }
  


   const createTodo = async()=>{
    if(input === ''){
      alert('Please enter a valid value')
      return
     }

     await addDoc(collection(db,"todos"),{
      text: input
     })
     setInput("")
   }

   const deleteTodo = async(todoId)=>{
      try {
        await deleteDoc(doc(db,"todos",todoId))
        getTodos()

      } catch (error) {
          console.log(error.message)        
      }
   }

   const editTodo = async(todoId)=>{
      try {
        const uptodo = prompt("update todo")
        await updateDoc(doc(db,"todos",todoId),{
          text: uptodo
        })
      } catch (error) {
        console.log(error.message)
      }
   }



   useEffect(()=>{
    getTodos()
},[])


  return (
    <div className='h-screen mt-5'>
      <div className='max-w-[600px] w-full m-auto bg-slate-100 rounded-md shadow-xl border p-4'>
           <h1 className="text-gray-800 text-3xl font-bold text-center p-2">Todos</h1>
           <div className="flex justify-between my-2">
             <input type="text" className="p-2 w-full border-2 rounded-sm" placeholder="Add Todos"
             value={input} onChange={(e)=>setInput(e.target.value)}/>
             <button className="p-4 ml-2 bg-violet-500 text-slate-100 border rounded-sm" onClick={createTodo}>Add</button>
           </div>
           <div>
           <ul>
                {todos.map((todo , index)=>(
                    <UNTodo key={index} todo={todo} onDelete={()=>deleteTodo(todo.id)} onEdit={()=>editTodo(todo.id)}/>
                ))}

             </ul>
           </div>
         </div>
    </div>
  )
}

export default Todos
