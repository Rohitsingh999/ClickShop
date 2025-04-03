import React, { useContext } from 'react'
import { NavLink  } from 'react-router-dom';
import { Data } from '../../Context/Context.jsx';
const ProductCard = ({images,description,price,title,id}) => {

   const {addItems}= useContext(Data);
  return (
    <NavLink to={`/shop/${id}`}>
    <div className='w-full h-full  flex flex-col gap-2  justify-between rounded-lg bg-white cursor-pointer '>
        <div className='w-full rounded-lg'><img className='rounded-xl h-full w-full' src={images[0]} alt="" /></div>
        <h1 className='text-[15px]  md:text-lg font-semibold'>{title}</h1>
        <h1 className='text-[12px] md:text-sm font-normal text-gray-800 '>{description.length>80? description.slice(0,80): description}...</h1>
        <div className='flex justify-between items-center pr-1'><h1 className='text-lg  md:text-2xl font-semibold'>${price}</h1> <button onClick={()=>addItems(id)} className='border-2 border-black px-3 py-1 text-[10px] md:text-sm rounded-3xl hover:text-white hover:bg-black cursor-pointer'>Add to Cart</button></div>
    </div>
    </NavLink>
  )
}

export default ProductCard