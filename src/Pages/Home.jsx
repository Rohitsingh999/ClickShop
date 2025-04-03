import React from 'react'
import {Link } from 'react-router-dom'
const Home = () => {
  return (
    //  <>
    // <div className='relative hidden sm:block  w-full h-[630px]'>
    // <img className='w-full h-full' src="/eCommerce.jpg" alt="" />

    // <NavLink className='absolute right-50 top-75' to="shop"><button className=' border-4 border-black   text-3xl font-medium px-10 py-2 rounded-4xl hover:bg-black hover:text-white  cursor-pointer transition duration-300'>Shop Now</button></NavLink>
    // </div>
    // <div className='sm:hidden w-full h-screen'> <img className='w-full h-full' src="phone.webp" alt="" /></div>
    // </>
    <>
    <div className="min-h-screen w-full bg-[url('/HomeImage.jpg')] bg-cover bg-center flex items-center justify-center text-white text-center px-6">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to ClikShop</h1>
      <p className="text-lg md:text-xl mb-6">
        Discover the latest trends and shop from a wide range of products at the best prices.
      </p>
      <Link to="/shop" className="bg-white text-black font-semibold py-3 px-6 rounded-full text-lg hover:bg-gray-200 transition duration-300">
        Shop Now
      </Link>
    </div>
  </div>
  <div className="min-h-screen w-full bg-[url('/Home.jpg')] bg-cover bg-center flex justify-center  items-center">
            <div className="max-w-3xl text-center flex flex-col gap-5 items-center text-gray-200">
          <h2 className="text-3xl md:text-5xl font-bold ">Why Choose ClikShop?</h2>
          <p className="text-lg md:text-xl mb-4">
            ClikShop offers a seamless shopping experience with a vast collection of high-quality products. 
            Our platform is user-friendly.
          </p>
          <p className="text-lg md:text-xl mb-4">
            We integrate with the Platzi Fake Store API to bring you real-time product listings and 
            keep our catalog fresh and up-to-date.
          </p>
          <p className="text-lg md:text-xl ">
            Start shopping today and enjoy a hassle-free eCommerce experience like never before!
          </p>
        </div>
  </div>
  </>
  )
}

export default Home