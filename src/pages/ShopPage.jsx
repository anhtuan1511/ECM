import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShopPage() {
  const [products, setProducts] = useState();
  console.log("🚀 ~ ShopPage ~ products:", products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=15"
        );
        setProducts(response?.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <MainLayout>
    <div className="max-w-[1202px] mx-auto flex gap-9">
      <div className="w-[300px] ">
        <p className="mb-8 mt-8 text-lg">Shop All Products</p>
        <div className="flex items-center justify-between mb-8">
          <p className=" text-base font-bold">Product Categories</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <p className=" text-base font-bold">Filter by Price</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <p className=" text-base font-bold">Filter by Color</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <p className=" text-base font-bold">Filter by Size</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-9 flex-1 mt-9">
        {products &&
          products.map((item) => (
            <Link to={`/detail/${item.id}`} className="border rounded-lg border-[#cccc] overflow-hidden">
              <div >
                <div className="bg-[#ffff]  flex items-center justify-center">
                  <img
                    className="py-[18x] px-4 w-[200px] h-[226px] object-fill py-2   "
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="mb-3 py-4 px-2 ">
                  {" "}
                  <p className="text-base font-bold line-clamp-1 ">{item.title}</p>
                  <p className="line-clamp-1">{item.description}</p>
                  <div className="flex gap-3">
                    <p>{item.price}</p>
                    <span className="line-through text-[#a6a5ad]">$100.00</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
    </MainLayout>
  );
}
