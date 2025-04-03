import React from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Applayout from './Components/Layout/Applayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';
import ProductDetail from './Components/UI/ProductDetail.jsx';
import './App.css';
import {GetAllProducts,GetProductDetails} from './api/GetAllProducts.js';

const router= createBrowserRouter([

  {path: "/" ,element: <Applayout/>,
     children: [
       {
         path:"/" ,element : <Home/>
       },
       {
         path:"/shop" ,element : <Shop/>,loader: GetAllProducts,
       },
       {
        path:"/shop/:id" ,element : <ProductDetail/>,loader: GetProductDetails
      },
       {
         path:"/about" ,element : <About/>
       }
     ]

  }
]);


const App = () => {
   
   
  

  
  return  <RouterProvider router={router}/>
     
  
}

export default App;