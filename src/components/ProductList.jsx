import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/fireBaseConfig";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        // console.log("🚀 ~ fetchProducts ~ querySnapshot:", querySnapshot)
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        console.log("🚀 ~ fetchProducts ~ productsData:", productsData);
      } catch (error) {
        console.log("🚀 ~ fetchProducts ~ error:", error);
      }
    };
    fetchProducts();
  }, []);

  return <div className="bg-white p-5 mt-5 rounded-lg ">  <div className="flex  justify-between border-b border-b-[#EDEDED] pb-4 mb-10  ">
  <h1 className="font-bold text-[#666666]  text-2xl  ">
   Sản phẩm

  
  </h1>
  <Link to={""} className="text-base flex items-center gap-2">
    View All
    <span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.375 3.75L11.625 9L6.375 14.25"
          stroke="#008ECC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </Link>
</div>
<div className="grid grid-cols-5 gap-4">
  {products &&
    products.map((item) => (
      <Link to={`/detail/${item.id}`}
        className="shadow-md border border-[#f9f9f9] rounded-2xl overflow-hidden "
        key={item.id}
      >
        <div className="bg-[#F5F5F5] flex items-center justify-center ">
          <img
            src={item.anhsp || "/image 3 (1).png" }
            className="w-full h-[212px] object-contain"
            alt={item.title || "Product Image"}
          />
        </div>
        <div className="p-3">
          <h1 className="text-base mb-3 font-semibold line-clamp-1">
            {item.tensp || "Galaxy S22 Ultra"}
          </h1>
          <div className="flex gap-3 border-b border-[#EDEDED] pb-3">
            <span className="font-bold">
              {item.gia || "32999"}  <sup>đ</sup>
            </span>
            <span className="line-through">
              {item.deal || "74999"} <sup>đ</sup>
            </span>
          </div>
          <div className="text-[#249B3E] font-semibold pt-3">
            <p>
              Save - 
              {item.originalPrice - item.discountedPrice || "32999"} <sup>đ</sup>
            </p>
          </div>
        </div>
      </Link>
    ))}
</div></div>;
}
