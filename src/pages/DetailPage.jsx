import DrawerDemo from "@/components/DrawerDemo";
import { db } from "@/fireBaseConfig";
import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  console.log("🚀 ~ DetailPage ~ data:", data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setData(docSnap.data())
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log("🚀 ~ useEffect(() ~ error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <MainLayout>
      <div className="max-w-[1202px] mx-auto">
        <div className="grid grid-cols-2 gap-[90px] pt-[36px] ">
          <div className="bg-[#fff] rounded-lg flex items-center justify-center ">
            <img className="max-w-[400px]" src={data?.anhsp} alt="" />
          </div>
          <div className="text-[#191919] ">
            <div className="text-lg ">
              <p className="font-bold mb-[13px]">
                Thương hiệu: <span className="font-medium">{data?.thuonghieu}</span>{" "}
              </p>
              <p className="font-bold mb-[9px]">
                Model: <span className="font-medium">OLED42C2PSA</span>{" "}
              </p>
              <p className="font-bold mb-[24px]">
                Availability:{" "}
                <span className="font-medium">Only 2 in Stock</span>
              </p>
            </div>
            <h1 className="text-3xl font-medium mb-[20px]">{data?.tensp}</h1>
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
            
            

            <div className="flex gap-[18px] items-center">
              <p className="text-[32px] my-4">{data?.gia}</p>
              <p class="line-through text-[#D9D9D9] text-[20px]">$800.00</p>
            </div>
            <div className="flex gap-6">
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

              <Link to='' type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
<path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
</svg>
Liên hệ Facebook
</Link>
           
              <DrawerDemo/>
           
            </div>
          </div>
        </div>
        <div className="flex gap-[115px] items-center justify-center mt-[126px] text-[24px] font-medium">
          <p className="pb-[2px] "> Description</p>
          <p>Specification</p>
          <p>Reviews</p>
          <p className="h-[2px] bg-[#F0F0F0] mt-[34px] mb-8"></p>
        </div>
        <p className="max-w-[1002px] mx-auto mt-[61px]">{data?.description}</p>
      </div>
    </MainLayout>
  );
}
