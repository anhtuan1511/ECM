import { Banner } from "@/components/Banner";
import { BannerShop } from "@/components/BannerShop";
import Categoreis from "@/components/Categoreis";
import { db } from "@/fireBaseConfig";
import MainLayout from "@/layouts/MainLayout";
import { data } from "autoprefixer";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let thuonghieu = [
  {
    link: "/Chicco-logo.jpg",
  },
  {
    link: "/huggies_1.png",
  },
  {
    link: "/logo-hoppi.jpg",
  },
  {
    link: "/logo-kidsplaza-doc.jpg",
  },
  {
    link: "/logo-megumi.jpg",
  },
  {
    link: "/logo-moony.png",
  },
  {
    link: "/merries_1.jpg",
  },
];
export default function AboutPage() {
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
  return (
    <MainLayout>
      <div className="max-w-[1202px] mx-auto">
        <BannerShop />
        <Categoreis />
        <div>
          <div className="my-3 py-3 rounded-lg bg-white p-4">
            <h2 className="text-[#1c4990] text-2xl font-bold">Thương hiệu</h2>
            <div className="grid grid-cols-7 gap-4 mt-3">
             {
              thuonghieu && thuonghieu.map((item)=>
                <div className=" overflow-hidden border rounded-lg border-[#0b8b8b] flex justify-center">
              {" "}
              <img
                className="mw-[64px] h-[64px]"
                src={item.link}
                alt=""
              />
            </div>
            )
             }
              
            
            </div>
          </div>
        </div>
        <div className="my-3 py-3 rounded-lg bg-white pl-4">
          <div>
            <div>
              {" "}
              <h1 className="text-2xl text-[#1c4990] font-bold">
                Bỉm tã vệ sinh
              </h1>{" "}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4 ">
            {products &&
              products.map((item) => (
                <Link
                  to={`/detail/${item.id}`}
                  className="shadow-lg border border-[#f9f9f9] rounded-2xl overflow-hidden "
                  key={item.id}
                >
                  <div className=" flex items-center justify-center ">
                    <img
                      src={item.anhsp || "/image 3 (1).png"}
                      className="w-full h-[212px] object-contain"
                      alt={item.title || "Product Image"}
                    />
                  </div>
                  <div className="p-3">
                    <h1 className="text-base mb-3 font-semibold line-clamp-1">
                      {item.tensp || "Galaxy S22 Ultra"}
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
                        Save -
                        {item.originalPrice - item.discountedPrice || "32999"}{" "}
                        <sup>đ</sup>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
