import DbLayout from "@/layouts/DbLayout";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "@/fireBaseConfig";

export default function AddProduct() {
  const [name, setName] = useState("");
  console.log("🚀 ~ AddProduct ~ name:", name);
  const [price, setPrice] = useState("");
  const [danhmuc, setDanhmuc] = useState("");
  const [thuonghieu, setThuonghieu] = useState("");
  const [mota, setMota] = useState("");
  const [img, setImg] = useState('https://cdn-v2.kidsplaza.vn/media/catalog/product/c/o/combo-4-bich-bim-ta-dan-bobby-size-l-68-mieng-cho-be-9-13kg.jpg')
  const handleAddProduct = async () =>{
    
    if (!name || !price || !danhmuc || !thuonghieu || !mota || !img)  {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
      
    }
    try {
      const docRef = await addDoc(collection(db, "Products"), {
       tensp:name,
       gia:price,
       danhmuc:danhmuc,
       thuonghieu:thuonghieu,
       motasp:mota,
       anhsp:img


      });
      toast.success("Thêm sản phẩm thành công!")
      setName("")
      setPrice("")
      setDanhmuc("")
      setMota("")
      setThuonghieu("")
      
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4 ">
              <p className="text-base font-medium mb-2">Danh mục</p>
              <form class="max-w-sm mx-auto">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={danhmuc}
                  onChange={(e) => setDanhmuc(e.target.value)}
                >
                  <option selected>Danh mục</option>
                  <option value="US">Tả-Bỉm Moony</option>
                  <option value="CA">Tả-bỉm Merries</option>
                  <option value="FR">Tả-bỉm Megumi</option>
                  <option value="DE">Tả-bỉm Poppy</option>
                </select>
              </form>
            </div>
            <div className="mt-4 ">
              <p className="text-base font-medium mb-2">Thương hiệu</p>
              <form class="max-w-sm mx-auto">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={thuonghieu}
                  onChange={(e) => setThuonghieu(e.target.value)}
                >
                  <option selected>Thương hiệu</option>
                  <option value="US">Merices</option>
                  <option value="CA">Moony</option>
                  <option value="FR">Bobby</option>
                  <option value="DE">Goo.n</option>
                </select>
              </form>
            </div>
          </div>

          <div class="grid grid-col w-full items-center gap-1.5 mt-5">
            <p className="text-base font-medium mb-2">Hình ảnh</p>

            <input
              id="picture"
              type="text"
              class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
              value={img}
            />
          </div>
          <div>
            <p className="text-base font-medium mb-2 mt-3">Mô tả sp</p>
            <input
              className="border rounded-xl p-4 w-full border-[#131118] mb-[16px]"
              type="text"
              placeholder="Mô tả"
              value={mota}
              onChange={(e) => setMota(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handleAddProduct} className="w-[200px] border rounded-[10px] h-[60px] bg-[#28ffb0]  text-[16px] font-semibold text-white mt-6 mb-6 ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </DbLayout>
  );
}
