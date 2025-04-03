import  { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaRegUser,FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import { Data } from '../../Context/Context';
const  Header= () => {

   const {cart}=useContext(Data);
   const [open,setOpen]=useState(false);
  return (
     <header className='z-99  sticky  top-0 w-full flex  items-center justify-between  md:px-5   shadow-lg bg-white'>
            <div className='flex  md:gap-20  xl:gap-28 items-center'>
             <FiMenu onClick={()=>setOpen(true)} className='md:hidden ml-2 text-3xl cursor-pointer'/>
             <NavLink to="/" className='w-[150px] md:w-[170px] '><img className=" w-full h-full" src="/logo.jpg" alt="" /></NavLink>
                <nav className={`bg-white fixed md:static top-0 z-99 w-screen h-screen md:w-fit md:h-fit flex flex-col md:flex-row md:items-center  gap-10 transition duration-300 transform md:translate-x-0 ${open ?'translate-x-0':'-translate-x-full'}`}>
             <div className='flex justify-between items-center mr-4'>   <NavLink to="/" onClick={()=>setOpen(false)} className=' md:hidden w-[200px] '><img className=" w-full h-full" src="/logo.jpg" alt="" /></NavLink>   < FaRegTimesCircle onClick={()=>setOpen(false)} className="md:hidden text-2xl cursor-pointer"/></div>
                   <NavLink onClick={()=>setOpen(false)} className={({isActive})=>`${isActive ? "text-gray-500":"text-black"} text-2xl md:text-xl font-medium px-8 md:p-0 `} to='/'>Home</NavLink>
                   <NavLink onClick={()=>setOpen(false)} className={({isActive})=>`${isActive ? "text-gray-500":"text-black"} text-2xl md:text-xl font-medium px-8 md:p-0 `} to='about'>About Us</NavLink>
                   <NavLink onClick={()=>setOpen(false)} className={({isActive})=>`${isActive ? "text-gray-500":"text-black"} text-2xl  md:text-xl font-medium px-8 md:p-0 `} to='shop'>Shop</NavLink>
                </nav>
            </div>
            <div className='flex gap-5 md:gap-8 items-center pr-3'>
                  <NavLink to="/"><div className='w-fit relative '><FaShoppingCart className=' text-[26px] ' /><span className={`absolute bg-red-700 text-white text-sm rounded-2xl px-2  -top-2 left-5 ${cart.size===0?'hidden':'inline'}`} >{cart.size}</span></div></NavLink>
                    <NavLink to="/"><FaRegUser  className=' text-2xl ' /> </NavLink>
                    
            </div>
         
     </header>
  )
}

export default Header; 