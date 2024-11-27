import { db } from "@/fireBaseConfig";
import { collection, getDocs, limit, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FlashSale() {
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ FlashSale ~ products:", products)
  useEffect(() => {
    const handleProducts = async () => {
      try {
        const productsQuery = query(collection(db, "Products"), limit(5)); // Corrected the query syntax
        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.log("🚀 ~ handleProducts ~ error:", error);
      }
    };
    handleProducts();
  }, []); // The empty dependency array ensures this runs only once on mount

  return <div className="bg-white p-5 rounded mb-5 mt-5">
    
    
    <div>
        <img className="w-[160px]" src="http://www.pngall.com/wp-content/uploads/2/Flash-Sale-PNG-Download-Image.png" alt="" />
    </div>
    
     <div className="grid grid-cols-5 gap-4 mt-4">
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
            {item.tensp|| "Galaxy S22 Ultra"}
          </h1>
          <div className="flex gap-3 border-b border-[#EDEDED] pb-3">
            <span className="font-bold text-[#ff7532]">
              {item.gia || "32999"} đ
            </span>
            <span className="line-through ">
              {item.deal || "74999"}đ
            </span>
          </div>
          <div className="text-[#249B3E] font-semibold pt-3">
            <p>
              Save - ₹
              {item.originalPrice - item.discountedPrice || "32999"}
            </p>
          </div>
        </div>
      </Link>
    ))}
</div></div>;
}
