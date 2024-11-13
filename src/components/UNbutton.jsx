import React from 'react'
import { Button } from "antd";

const UNbutton = ({type,label,onClick,size}) => {
  return (
    <Button type={type} size={size} className='my-2' onClick={onClick}>{label}</Button>
  )
}

export default UNbutton
