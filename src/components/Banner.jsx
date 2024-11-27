import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Banner() {
  return (
    <div className="pt-8">
    <Carousel className="w-full h-[240px] ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-[240px] overflow-hidden rounded-lg">
                <img className="ư-full object-cover" src="https://cdn-v2.kidsplaza.vn/media/mageplaza/bannerslider/banner/image/1/2/1204x250_hoppi_t11.png" alt="" />
             
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
