import React, { useEffect, useState } from "react";
import { CarouselSize } from "@/components/CarouselSize";
import axios from "axios";

import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import ProductList from "@/components/ProductList";
import { Banner } from "@/components/Banner";
import FlashSale from "@/components/FlashSale";
import Categoreis from "@/components/Categoreis";

function HomePage() {
  const [products, setProducts] = useState();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
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
    <div className="max-w-[1202px] mx-auto">
      <Banner/>
      <Categoreis/>
      <FlashSale/>
      <div className="my-3 py-3 rounded-lg bg-white">
        <img src="/sg-11134252-7rfgh-m31m3bt2qd660e.png" alt="" />
      </div>

    
      
      
      {/* <CarouselSize /> */}
    
      
      
    <ProductList/>
    </div>
    </MainLayout>
  );
}

export default HomePage;
