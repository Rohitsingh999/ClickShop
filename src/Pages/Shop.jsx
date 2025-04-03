import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { NavLink, useLoaderData,} from "react-router-dom";
import ProductCard from "../Components/UI/ProductCard.jsx";
import { useState,useEffect,useRef } from "react";
import { GetCategoriesProducts } from "../api/GetAllProducts.js";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegTimesCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import ProductNotFound from "../Components/UI/ProductNotFound.jsx";
import { use } from "react";
const Shop = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState("All");
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [productnotfound,setProductNotFound]=useState(false);
  const All = useLoaderData();
  const InputRef= useRef(null);

   
  const SearchProducts = () => {
    const searchTerm =search.toLowerCase();
    console.log(search);
     let SearchProducts = All.filter((product) => {
      let titleArray = product.title.toLowerCase().split(" ");
    

      return titleArray.some((word) => word.includes(searchTerm));
    });
    
      if(SearchProducts.length>0){setProducts(SearchProducts);}
      else{ setProductNotFound(true);}
       InputRef.current.value='';
  };

  useEffect(() => {
    if (categories === "All") setProducts(All);
    else GetCategoriesProducts(categories).then((res) => setProducts(res));
    setFilter(false);
     setProductNotFound(false);
  }, [categories]);

  return (
     productnotfound? <ProductNotFound  setProductNotFound={setProductNotFound}/>:
    <div className=" flex  flex-col px-3 md:px-6 lg:px-25  ">
      <span
        onClick={() => setFilter(true)}
        className=" md:hidden mt-3  bg-white text-[16px] font-medium flex items-center gap-1 border-2 rounded-3xl px-3  w-fit cursor-pointer"
      >
        Filter <IoIosArrowDown />
      </span>
      <div className="hidden lg:block w-full h-[400px]">
        <img className="w-full h-full" src="/sale.jpg" alt="" />
      </div>
      <div className="w-full  flex gap-8 py-[20px] lg:py-[50px] ">
        <div
          className={`fixed bottom-0 left-0   md:static z-99 md:z-0  bg-white  flex w-full md:w-[20%]  flex-col gap-6   md:gap-4  pr-3 h-screen md:h-fit transition duration-300 md:translate-y-0 ${
            filter ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="w-full flex justify-between items-center">
            <h1 className="text-3xl md:text-2xl font-semibold flex items-center gap-2">
              <TbAdjustmentsHorizontal /> Filter
            </h1>
            <FaRegTimesCircle
              onClick={() => setFilter(false)}
              className=" md:hidden text-2xl cursor-pointer"
            />
          </div>
          <ul className="flex flex-col gap-3 md:gap-2 text-xl md:text-lg font-semibold text-gray-600 ">
            <li
              className={`cursor-pointer ${
                categories === "All" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setCategories("All")}
            >
              All
            </li>
            <li
              className={`cursor-pointer ${
                categories === "clothes" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setCategories("clothes")}
            >
              Clothes
            </li>
            <li
              className={`cursor-pointer ${
                categories === "electronics" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setCategories("electronics")}
            >
              Electronics
            </li>
            <li
              className={`cursor-pointer ${
                categories === "furniture" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setCategories("furniture")}
            >
              Furniture
            </li>
            <li
              className={`cursor-pointer ${
                categories === "shoes" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setCategories("shoes")}
            >
              Shoes
            </li>
            <li
              className={`cursor-pointer ${
                categories === "miscellaneous" ? "text-black" : "text-gray-600"
              }`}
              onClick={() => setCategories("miscellaneous")}
            >
              Miscellaneous
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[82%] flex flex-col  gap-8  items-center">
          <div className="flex w-full justify-center items-center gap-5">
            <div className="flex gap-1 border-2 border-gray-400   rounded-lg items-center p-1  w-[70%]">
              <CiSearch className="text-2xl text-gray-500 " />
              <input
                type="text"
                onChange={(event) => setSearch(event.target.value)}
                className="outline-none text-xl text-gray-500 w-full"
                ref={InputRef}
              />
            </div>{" "}
            <button
              onClick={SearchProducts}
              className="border-2 border-gray-400 rounded-lg px-3 h-full bg-gray-100 text-gray-500 text-lg font-medium cursor-pointer"
            >
              Search
            </button>
          </div>
          <div
            className={`w-full grid  grid-cols-2 lg:grid-cols-3 auto-rows-max gap-4 lg:gap-8   ${
              show
                ? "overflow-y-scroll h-[1050px]"
                : " h-[950px] overflow-hidden"
            }`}
          >
            {products &&
              products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    images={product.images}
                    price={product.price}
                    description={product.description}
                    title={product.title}
                    id={product.id}
                  />
                );
              })}
          </div>
          <button
            className="w-fit border-2 border-black px-3 py-1 text-lg font-medium rounded-3xl hover:text-white hover:bg-black cursor-pointer"
            onClick={() => setShow(true)}
          >
            Show more
          </button>
        </div>
      </div>
    </div>    
  );
};

export default Shop;
