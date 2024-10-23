import MainLayout from "@/layouts/MainLayout";
import { Checkbox } from "@radix-ui/react-checkbox";
import React from "react";

export default function SignUpPage() {
  return (
    <MainLayout>
    <div className="flex items-center justify-center gap-8">
      <div className="">
        <img src="/Rectangle 3463272.png" alt="" />
      </div>
      <div className="">

        <h1 className="mb-2 text-4xl font-bold">Create New Account</h1>
        <p className="text-[16px] font-normal text-[#A4A1AA] mb-[30px]">
          Please enter details
        </p>
        <p className="text-[12px] font-normal mb-[5px]">First Name</p>
        <input
          className="border rounded-xl p-4 w-[413px] border-[#131118] mb-[16px]"
          type="text"
          placeholder="Pham"
        />
        <p className="text-[12px] font-normal mb-[5px]">Last Name</p>
        <input
          className="border rounded-xl p-4 w-[413px] border-[#131118] mb-[16px]"
          type="text"
          placeholder="Tuan"
        />{" "}
        <p className="text-[12px] font-normal mb-[5px]">Email Address</p>
        <input
          className="border rounded-xl p-4 w-[413px] border-[#131118] mb-[16px]"
          type="email"
          placeholder="Abc@gmail.com"
        />{" "}
        <p className="text-[12px] font-normal mb-[5px]">Password</p>
        <input
          className="border rounded-xl p-4 w-[413px] border-[#131118]"
          type="password"
          placeholder="***"
        />
        <div className="items-top flex space-x-2 mt-4">
      {/* <Checkbox id="terms1" /> */}
      <input type="checkbox" id="terms1"/>
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-1"
        >
         I agree to the in <p className="font-bold">Terms & Conditions</p>
        </label>
        
      </div>
    </div>
    <div className="mt-[30px]">
        <button className="border rounded-xl p-4 w-[413px] text-white bg-black ">Sign up</button>
        
        </div>

      </div>
    </div>
    </MainLayout>
  );
}
