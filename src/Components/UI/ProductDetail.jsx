import { useCallback, useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { Data } from "../../Context/Context.jsx";

const ProductDetail = () => {
  const { images,title,category,price,description,id} = useLoaderData();
  const [image, setImage] = useState(images[0]);
  const {addItems}=useContext(Data);
   const navigate=useNavigate();
  return (
    <div className="relative bg-[#f0f8ffa1] w-full px-4 py-4  xl:px-32 xl:py-9  flex flex-col md:flex-row  ">
            <FaRegTimesCircle onClick={()=>navigate(-1)} className="absolute top-3 right-2 text-2xl cursor-pointer hidden xl:block "/>
      <div className="flex flex-col-reverse md:flex-row w-full md:w-[50%]  gap-4 ">
        <div className=" flex md:flex-col  gap-3 ">
          {images.map((ele,i) => {
            return (
              <div key={i}
                onClick={() => setImage(ele)}
                className="w-[18%] md:w-[80px]  xl:w-[100px]  cursor-pointer rounded-sm"
              >
                <img className="w-full h-full rounded-sm" src={ele} alt="" />
              </div>
            );
          })}
        </div>
        <div className="w-full h-[350px] md:h-[500px]  rounded-sm overflow-hidden">
          <img  className="w-full h-full rounded-sm transform hover:scale-105 duration-300 ease-in " src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full  md:w-[50%]  md:px-8  gap-3 ">
         <h1 className=" text-3xl md:text-3xl xl:text-[46px]/12  font-semibold ">{title}</h1>
         <h1 className="text-gray-600 text-xl font-medium">{category.name}</h1>
         <h1 className="text-5xl font-semibold">${price}</h1>
         <h1 className="text-sm font-medium">{description}</h1>
         <div className="flex gap-3 py-2">
          <button onClick={()=>addItems(id)} className="text-lg font-semibold border-2 border-black text-white  bg-black rounded-sm px-4 py-2 cursor-pointer hover:text-black hover:bg-white duration-300">Add to Cart</button>
          <button className="text-lg font-semibold border-2 border-black text-black  bg-white rounded-sm px-4 py-2 cursor-pointer hover:text-white hover:bg-black duration-300">Buy Now</button>
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;
