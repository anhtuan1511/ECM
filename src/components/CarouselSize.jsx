import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export function CarouselSize() {
  const [products, setProducts] = useState();
  console.log("🚀 ~ HomePage ~ products:", products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/electronics?limt=3"
        );

        setProducts(response?.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {" "}
        {products &&
          products.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 ">
                <div className="h-[208px] p-5 bg-white rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="px-5 py-[10px] rounded-xl bg-[#494949] text-sm text-white w-fit ">
                      IPHONE
                    </p>
                    <div>
                      <img className="my-5" src="/Group 48.png" alt="" />
                    </div>
                    <p className="text-xl text-[#222222] font-semibold">
                      UP to 80% OFF
                    </p>
                  </div>

                  <img className="h-[183px] w-[150px]" src={item.image} alt=""  />
                </div>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
