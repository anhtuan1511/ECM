import { db } from '@/fireBaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Categoreis() {
    const [danhmuc, setDanhmuc] = useState([]);
    console.log("🚀 ~ Categoreis ~ danhmuc:", danhmuc)
    
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "danhmuc"));
            // console.log("🚀 ~ fetchProducts ~ querySnapshot:", querySnapshot)
            const productsData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setDanhmuc(productsData);
            console.log("🚀 ~ fetchProducts ~ productsData:", productsData);
          } catch (error) {
            console.log("🚀 ~ fetchProducts ~ error:", error);
          }
        };
        fetchProducts();
      }, []);
  return (
   <div className='bg-white p-[20px] mt-7 rounded-lg'>
    <div className="flex justify-between border-b border-b-[#EDEDED] pb-4 mb-10  ">
        <h1 className="font-bold text-[#666667] text-2xl   ">
          Danh mục
          
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
      <div className="grid grid-cols-7 gap-[46px]">
       
        {
            danhmuc && danhmuc.map((item)=> 
                <div className="flex flex-col items-center"key={item?.id} >
            <div className="w-[74px] h-[104px] bg-[#F5F5F5] rounded-full flex items-center justify-center border border-[#22c4f4]">
              <img className='w-[60px] h-[60px]' src={item?.anh} alt="" />
            </div>
            <p className=" text-center mt-5 font-medium">{item?.tendanhmuc}</p>
          </div>
            ) 
        }
       
      </div>
   </div>
  )

}
