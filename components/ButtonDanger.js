import React from 'react'

export default function ButtonDanger({name, handler, id=null}) {
  return (
    <div className="md:flex md:items-center">
    <div className="md:w-1/2"></div>
    <div className="md:w-2/3">
      <button
        className="bg-red-500  hover:bg-red-700 border-red-500 hover:border-red-700  flex-shrink-0 text-sm border-4 text-white py-1 px-2 rounded"
        onClick={handler}
        id={id}
      >
      {name}
      </button>
    </div>
  </div>
  )
}