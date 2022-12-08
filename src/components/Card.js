import React, { useState } from 'react'

const Card = ({data}) => {
    const [counter, setCounter] = useState(0)
  return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <img alt="ecommerce" className="object-cover object-center w-full block h-32" src={data.img}/>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{data.title}</h3>
          <p className="mt-1">₹{data.price}.00</p>

        <div className='flex justify-center items-center gap-2'>
            <button type='button' onClick={() => counter > 0 && setCounter(counter - 1)} className='bg-red-600 hover:bg-red-800 text-white px-4 text-2xl rounded ring-2 ring-teal-400 py-2 mt-3'>-</button>
            <span className='text-2xl font-semibold font-sans mt-3'>{counter}</span>
             <button type='button' onClick={() => setCounter(counter + 1)} className='bg-green-600 hover:bg-green-800 text-white px-4 text-2xl rounded ring-2 ring-teal-400 py-2 mt-3'>+</button>
           </div>
        </div>
      </div>
  )
}

export default Card