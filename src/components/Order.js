import React from 'react'

const Order = () => {
    return (
        <div className='mt-10 p-4'>
            <table className='border w-full'>
                <tr>
                    <th className='border p-2 border-slate-400'>id</th>
                    <th className='border p-2 border-slate-400'>Name</th>
                    <th className='border p-2 border-slate-400'>Qty</th>
                    <th className='border p-2 border-slate-400'>Amount</th>
                    <th className='border p-2 border-slate-400'>Total</th>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
                <tr>
                    <td className='border p-2 border-slate-400'>1</td>
                    <td className='border p-2 border-slate-400'>Momos</td>
                    <td className='border p-2 border-slate-400'>3</td>
                    <td className='border p-2 border-slate-400'>500</td>
                    <td className='border p-2 border-slate-400'>1500</td>
                </tr>
            </table>


            <div className="absolute bottom-0  gap-3 p-4">
                <div className='flex flex-col mb-2'>
                    <h1 className='text-6xl font-black'>₹ 5600/- <span className="text-slate-500 text-lg"><del>₹7000/-</del></span></h1>
                </div>
                <div className='flex'>
                    <button className="bg-gray-600 hover:bg-gray-800 text-white  px-5 py-2 text-2xl font-bold uppercase">Reset</button>
                    <button className="bg-orange-600 hover:bg-orange-800 text-white  px-10 py-2 text-2xl font-bold uppercase">Order Now</button>
                    <button className="bg-teal-600 hover:bg-teal-800 text-white  px-10 py-2 text-2xl font-bold uppercase">Save</button>
                </div>

            </div>

        </div>
    )
}

export default Order