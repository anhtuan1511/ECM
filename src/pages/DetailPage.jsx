import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  console.log("🚀 ~ DetailPage ~ data:", data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log("🚀 ~ useEffect(() ~ error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <MainLayout>
    

    <div className="max-w-[1202px] mx-auto">
      <div className="grid grid-cols-2 gap-[90px] mt-[96px] ">
        <div className="bg-[#F1F1F1]  flex items-center justify-center ">
          <img className="max-w-[400px]" src={data?.image} alt="" />
        </div>
        <div className="text-[#191919] ">
          <div className="text-lg ">
            <p className="font-bold mb-[13px]">
              Brand: <span className="font-medium">LG</span>{" "}
            </p>
            <p className="font-bold mb-[9px]">
              Model: <span className="font-medium">OLED42C2PSA</span>{" "}
            </p>
            <p className="font-bold mb-[24px]">
              Availability: <span className="font-medium">Only 2 in Stock</span>
            </p>
          </div>
          <h1 className="text-3xl font-medium mb-[20px]">
           {data?.title}
          </h1>
          <div className="flex gap-3">
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#E73C17"
              />
            </svg>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#E73C17"
              />
            </svg>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#E73C17"
              />
            </svg>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#E73C17"
              />
            </svg>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                fill="#F4F5F8"
              />
            </svg>
          </div>
          <ul className="	list-disc pl-5 mt-[20px] text-[18px] ">
            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
            <li>
              Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume
            </li>
            <li>Hands-free Voice Control, Always Ready</li>
            <li>
              Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode
            </li>
            <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
          </ul>
          <p className="h-[2px] bg-[#F0F0F0] mt-[34px] mb-8"></p>
          <div className="grid grid-cols-3 gap-[84px] max-w-[700px] text-[#6F6F6F]  ">
            <p className="flex justify-center items-center text-[#E73C17] border border-[#E73C17]  py-[19px] h-fit ">
              106 cm (42)
            </p>
            <p className="flex justify-center items-center">121 cm (48)</p>
            <p className="flex justify-center items-center">139 cm (55)</p>
            <p className="flex justify-center items-center">164 cm (65)</p>
            <p className="flex justify-center items-center">196 cm (77)</p>
            <p className="flex justify-center items-center">210 cm (83)</p>
          </div>
          <p className="h-[2px] bg-[#F0F0F0] mt-[34px] mb-8"></p>
          <p className="text-[16px]">USD(incl. of all taxes)</p>
          <div className="flex gap-[18px] items-center">
            <p className="text-[32px]">$600.72</p>
            <p class="line-through text-[#D9D9D9] text-[20px]">$800.00</p>
          </div>
          <div className="flex gap-8">
            <div className="flex h-[60px] items-center ">
              <div className="border border-[#F0F0F0] h-full px-[18px] flex items-center justify-center ">
                -
              </div>
              <div className="border border-[#F0F0F0] h-full px-[18px] flex items-center justify-center ">
                1
              </div>
              <div className="border border-[#F0F0F0] h-full px-[18px] flex items-center justify-center">
                +
              </div>
            </div>
            <p className="bg-[#E73C17] text-white text-[18px] flex justify-center items-center px-[63px] border rounded-xl ">
              Buy Now
            </p>
            <p className="text-[#E73C17] border border-[#E73C17] px-[63px] flex items-center justify-center rounded-xl">
              Add to Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[115px] items-center justify-center mt-[126px] text-[24px] font-medium">
        <p className="pb-[2px] "> Description</p>
        <p>Specification</p>
        <p>Reviews</p>
        <p className="h-[2px] bg-[#F0F0F0] mt-[34px] mb-8"></p>
      </div>
      <p className="max-w-[1002px] mx-auto mt-[61px]">
       {data?.description}
      </p>
    </div>
    </MainLayout>
  );
}
