import DbLayout from "@/layouts/DbLayout";
import React from "react";

export default function AddProduct() {
  return (
    <DbLayout>
      <div>
        <h1 className="text-[55px] font-bold ">AddProduct</h1>
        <div className="max-w-3xl overflow-hidden border rounded-md mx-auto mt-6 px-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4 ">
              <p className="text-base font-medium mb-2">Tên sản phẩm</p>
              <input
                className="border rounded-xl p-4 w-full border-[#131118] mb-[16px]"
                type="text"
                placeholder="Quần áo"
              />
            </div>
            <div className="mt-4 ">
              <p className="text-base font-medium mb-2">Giá</p>
              <input
                className="border rounded-xl p-4 w-full border-[#131118] mb-[16px]"
                type="number"
                placeholder="Giá"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4 ">
              <p className="text-base font-medium mb-2">Danh mục</p>
              <input
                className="border rounded-xl p-4 w-full border-[#131118] mb-[16px]"
                type="text"
                placeholder="Danh mục"
              />
            </div>
            <div className="mt-4 ">
              <p className="text-base font-medium mb-2">Thương hiệu</p>
              <input
                className="border rounded-xl p-4 w-full border-[#131118] mb-[16px]"
                type="text"
                placeholder="Thương hiệu"
              />
            </div>
          </div>

          <div class="grid grid-col w-full items-center gap-1.5">
            <p className="text-base font-medium mb-2">Hình ảnh</p>

            <input
              id="picture"
              type="file"
              class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
            />
          </div>
          <div>
            <p className="text-base font-medium mb-2 mt-3">Mô tả sp</p>
          <input
                className="border rounded-xl p-4 w-full border-[#131118] mb-[16px]"
                type="text"
                placeholder="Mô tả"
              />
          </div>
          <div className="flex justify-center items-center"><button className="w-[200px] border rounded-[10px] h-[60px] bg-[#84C7AE]  text-[16px] font-semibold text-white mt-6 mb-6 ">Submit</button></div>
        </div>
      </div>
    </DbLayout>
  );
}
