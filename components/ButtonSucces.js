import React from 'react'

export default function ButtonSucces({name, handler}) {
  return (
    <div className="md:flex md:items-center">
    <div className="md:w-1/2"></div>
    <div className="md:w-2/3">
      <button
        className="bg-teal-500  hover:bg-teal-700 border-teal-500 hover:border-teal-700  flex-shrink-0 text-sm border-4 text-white py-1 px-2 rounded"
        type='submit'
      >
      {name}
      </button>
    </div>
  </div>
  )
}