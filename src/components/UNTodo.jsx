import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";

const UNTodo = ({todo,onDelete,onEdit}) => {
  return (
    <li className='flex justify-between items-center p-3 my-2 bg-slate-200 capitalize'>
        <p className='text-md cursor-pointer'>{todo.text}</p>
        <div className='flex items-center gap-2'>
        <button className='cursor-pointer flex items-center' onClick={onDelete}><FaRegTrashCan/></button>
        <button className='cursor-pointer flex items-center' onClick={onEdit}><AiFillEdit/></button>
        </div>
      
    </li>
  )
}

export default UNTodo