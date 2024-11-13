import React from 'react'

const UNheader = ({title,actionButtons}) => {
  return (
      <div className='w-full py-2 shadow-md flex justify-between px-10'>
          <h1 className='p-2 text-3xl font-bold text-blue-600'>{title}</h1>

          {actionButtons.map((x) => x.display())}
      </div>
  )
}

export default UNheader
