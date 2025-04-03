// import axios from "axios";

import axios from "axios";

//get all products..
const GetAllProducts = async() => {
          
    const apiUrl='https://api.escuelajs.co/api/v1/products';
    //const apiUrl='https://api.escuelajs.co/api/v1/categories'
  
     try{
            const response = await axios.get(apiUrl);
          //  console.log(response.data)
            return response.data;
     } 
     catch(error){
         console.log(error,"Error in fetch data");
     }
}

//Get products based on categories

 const GetCategoriesProducts =async(categories)=>{
     try{
     const apiUrl=`https://api.escuelajs.co/api/v1/products/?categorySlug=${categories}`;
    // console.log(categories);
     const  response =await axios.get(apiUrl); 
      // console.log(response.data);
      return response.data;
     }
     catch(error){
        console.log(error,"Error in fetch categories Products");
     }

 }

 //get Product based on id 

  const GetProductDetails= async({params})=>{
     try{
    console.log(params.id);

    const apiUrl=`https://api.escuelajs.co/api/v1/products/${params.id}`
     const response = await axios.get(apiUrl);
    //  console.log(response.data);
     return response.data;
     }
     catch(error){
       console.log("Error,product Details api")
     }
  }




export  {GetAllProducts,GetCategoriesProducts,GetProductDetails}