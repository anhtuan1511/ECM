import DbLayout from "@/layouts/DbLayout";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "@/fireBaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function AddProduct() {
  const [name, setName] = useState("");
  console.log("🚀 ~ AddProduct ~ name:", name);
  const [price, setPrice] = useState("");
  const [danhmuc, setDanhmuc] = useState("");
  const [thuonghieu, setThuonghieu] = useState("");
  const [mota, setMota] = useState("");
  const [img, setImg] = useState("");
  const [uploading, setUploading] = useState("");
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("🚀 ~ handleImageUpload ~ snapshot:", snapshot);
        // You can track progress here if needed
      },
      (error) => {
        toast.error("Lỗi khi tải ảnh!");
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
          toast.info("Tải ảnh thành công!");
          setUploading(false);
        });
      }
    );
  };
  const handleAddProduct = async () => {
    if (!name || !price || !danhmuc || !thuonghieu || !mota || !img) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "Products"), {
        tensp: name,
        gia: price,
        danhmuc: danhmuc,
        thuonghieu: thuonghieu,
        motasp: mota,
        anhsp: img,
      });
      toast.success("Thêm sản phẩm thành công!");
      setName("");
      setPrice("");
      setDanhmuc("");
      setMota("");
      setThuonghieu("");
      setImg("")
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

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

          <div class="grid grid-cols-2 w-full items-center gap-5 mt-5">
            <div>
              <p className="text-base font-medium mb-2">Hình ảnh</p>

              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={handleImageUpload}
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                  />
                </label>
              </div>
            </div>
            <div>
              {uploading ? (
                /* From Uiverse.io by mahendrameghwal */
                <div class="w-full gap-x-2 flex justify-center items-center">
                  <div class="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
                  <div class="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
                  <div class="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
                </div>
              ) : (
                img && <img src={img} alt="abc" className="mt-8 w-full h-[140px] object-cover rounded-md" />
              )}
            </div>
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
            <button
              onClick={handleAddProduct}
              className="w-[200px] border rounded-[10px] h-[60px] bg-[#28ffb0]  text-[16px] font-semibold text-white mt-6 mb-6 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </DbLayout>
  );
}
