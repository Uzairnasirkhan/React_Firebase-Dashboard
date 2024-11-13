import React from 'react'

const UNTable = ({id,name,email,gender}) => {
  return (
      <table className='border-2 bg-slate-200'>
        <thead>
            <th>
                <td className='p-2 border-2 border-blue-600'>User Id</td>
                <td className='p-2 border-2 border-blue-600'>User Name</td>
                <td className='p-2 border-2 border-blue-600'>Email</td>
                <td className='p-2 border-2 border-blue-600'>Gender</td>
            </th>
        </thead>

        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
          </tr>
            
        </tbody>
      </table>
  )
}

export default UNTable
