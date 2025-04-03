
export default function ProductNotFound({setProductNotFound}) {

    
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-red-500">Product Not Found</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! We couldn't find the product you're looking for.</p>
      <p className="text-gray-500 mt-2">It may have been removed or is out of stock.</p>
      
      <h1  onClick={()=>setProductNotFound(false)} className=" cursor-pointer mt-6 px-6 py-3 bg-red-500 text-white text-lg rounded-lg shadow-md hover:bg-red-600 transition" >
        Browse Products
      </h1>
    </div>
  );
}
