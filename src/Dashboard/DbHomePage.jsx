import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/fireBaseConfig";
import DbLayout from "@/layouts/DbLayout";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function () {
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ products:", products);
  useEffect(() => {
    const Kids = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));
        console.log("🚀 ~ fetchProducts ~ querySnapshot:", querySnapshot);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        console.log("🚀 ~ fetchProducts ~ productsData:", productsData);
      } catch (error) {
        console.log("🚀 ~ fetchProducts ~ error:", error);
      }
    };
    Kids();
  }, []);
  const handleDelete = async (id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(doc(db, "Products", id));
          setProducts((prevProducts) => 
          prevProducts.filter((products) => products.id !== id))
          Swal.fire ("Đã xóa!", "Sản phẩm đã được xóa") , "success" 
        } catch (error) {
          console.log("🚀 ~ handleDelete ~ error:", error)
          
        }
      }
    });
  }
  return (
    <DbLayout>
      <h2 className="text-[24px] font-bold mt-[41px] mb-[24px]">Dashboard</h2>
      <div className="grid grid-cols-4 gap-[32px]">
        <div className="flex items-center justify-center gap-[62px] px-[10px] py-[22px] bg-white shadow-lg  rounded-xl  ">
          <div>
            <p className="text-[#8E95A9] text-[14px]">Revenue</p>
            <p className="text-[24px] text-[#1C2A53] font-semibold">$7,825</p>
          </div>
          <div>
            <p className="text-[#FF8901]">+ 22%</p>
            <svg
              width="85"
              height="41"
              viewBox="0 0 85 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_43_466)">
                <path
                  d="M5 24.3152C7.01238 25.1501 12.3839 25.0894 17.7709 18.1671C24.5046 9.51427 30.774 11.7913 38.2043 21.5827C45.6347 31.3741 50.743 36.156 58.4056 22.7213C66.0681 9.2866 66.9969 4.73248 80 2"
                  stroke="#FF8901"
                  stroke-width="3"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_43_466"
                  x="0.425293"
                  y="0.531982"
                  width="83.8833"
                  height="39.9685"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.141176 0 0 0 0 0.278431 0 0 0 0 0.941176 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_43_466"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_43_466"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[62px] px-[10px] py-[22px] bg-white shadow-lg  rounded-xl ">
          <div>
            <p className="text-[#8E95A9] text-[14px]">Revenue</p>
            <p className="text-[24px] text-[#1C2A53] font-semibold">$7,825</p>
          </div>
          <div>
            <p className="text-[#FF8901]">+ 22%</p>
            <svg
              width="85"
              height="41"
              viewBox="0 0 85 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_43_466)">
                <path
                  d="M5 24.3152C7.01238 25.1501 12.3839 25.0894 17.7709 18.1671C24.5046 9.51427 30.774 11.7913 38.2043 21.5827C45.6347 31.3741 50.743 36.156 58.4056 22.7213C66.0681 9.2866 66.9969 4.73248 80 2"
                  stroke="#FF8901"
                  stroke-width="3"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_43_466"
                  x="0.425293"
                  y="0.531982"
                  width="83.8833"
                  height="39.9685"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.141176 0 0 0 0 0.278431 0 0 0 0 0.941176 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_43_466"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_43_466"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>{" "}
        <div className="flex items-center justify-center gap-[62px] px-[10px] py-[22px] bg-white shadow-lg  rounded-xl ">
          <div>
            <p className="text-[#8E95A9] text-[14px]">Revenue</p>
            <p className="text-[24px] text-[#1C2A53] font-semibold">$7,825</p>
          </div>
          <div>
            <p className="text-[#FF8901]">+ 22%</p>
            <svg
              width="85"
              height="41"
              viewBox="0 0 85 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_43_466)">
                <path
                  d="M5 24.3152C7.01238 25.1501 12.3839 25.0894 17.7709 18.1671C24.5046 9.51427 30.774 11.7913 38.2043 21.5827C45.6347 31.3741 50.743 36.156 58.4056 22.7213C66.0681 9.2866 66.9969 4.73248 80 2"
                  stroke="#FF8901"
                  stroke-width="3"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_43_466"
                  x="0.425293"
                  y="0.531982"
                  width="83.8833"
                  height="39.9685"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.141176 0 0 0 0 0.278431 0 0 0 0 0.941176 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_43_466"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_43_466"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>{" "}
        <div className="flex items-center justify-center gap-[62px] px-[10px] py-[22px] bg-white shadow-lg  rounded-xl ">
          <div>
            <p className="text-[#8E95A9] text-[14px]">Revenue</p>
            <p className="text-[24px] text-[#1C2A53] font-semibold">$7,825</p>
          </div>
          <div>
            <p className="text-[#FF8901]">+ 22%</p>
            <svg
              width="85"
              height="41"
              viewBox="0 0 85 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_43_466)">
                <path
                  d="M5 24.3152C7.01238 25.1501 12.3839 25.0894 17.7709 18.1671C24.5046 9.51427 30.774 11.7913 38.2043 21.5827C45.6347 31.3741 50.743 36.156 58.4056 22.7213C66.0681 9.2866 66.9969 4.73248 80 2"
                  stroke="#FF8901"
                  stroke-width="3"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_43_466"
                  x="0.425293"
                  y="0.531982"
                  width="83.8833"
                  height="39.9685"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.141176 0 0 0 0 0.278431 0 0 0 0 0.941176 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_43_466"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_43_466"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Products</TableHead>

              <TableHead>Date</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="">Quantity</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products &&
              products.map((item) => (
                <TableRow>
                  <TableCell className="font-medium flex items-center  gap-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-[#ccc] shadow-lg">
                      <img
                        className=" object-cover"
                        src={item?.anhsp}
                        alt=""
                      />
                    </div>
                    <p className="text-sm text-[#555F7E]">{item?.tensp}</p>
                  </TableCell>
                  <TableCell>10-3-2024</TableCell>
                  <TableCell className="">$250.00</TableCell>
                  <TableCell>78</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>
                    <div className="flex gap-5">
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 13.3335H14"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11 2.33316C11.2652 2.06794 11.6249 1.91895 12 1.91895C12.1857 1.91895 12.3696 1.95553 12.5412 2.0266C12.7128 2.09767 12.8687 2.20184 13 2.33316C13.1313 2.46448 13.2355 2.62038 13.3066 2.79196C13.3776 2.96354 13.4142 3.14744 13.4142 3.33316C13.4142 3.51888 13.3776 3.70277 13.3066 3.87435C13.2355 4.04593 13.1313 4.20184 13 4.33316L4.66667 12.6665L2 13.3332L2.66667 10.6665L11 2.33316Z"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div onClick={() => handleDelete(item.id)} className="cursor-pointer">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 4H3.33333H14"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.33325 4.00016V2.66683C5.33325 2.31321 5.47373 1.97407 5.72378 1.72402C5.97383 1.47397 6.31296 1.3335 6.66659 1.3335H9.33325C9.68687 1.3335 10.026 1.47397 10.2761 1.72402C10.5261 1.97407 10.6666 2.31321 10.6666 2.66683V4.00016M12.6666 4.00016V13.3335C12.6666 13.6871 12.5261 14.0263 12.2761 14.2763C12.026 14.5264 11.6869 14.6668 11.3333 14.6668H4.66659C4.31296 14.6668 3.97382 14.5264 3.72378 14.2763C3.47373 14.0263 3.33325 13.6871 3.33325 13.3335V4.00016H12.6666Z"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.66675 7.3335V11.3335"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.33325 7.3335V11.3335"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99992 8.66683C8.36811 8.66683 8.66659 8.36835 8.66659 8.00016C8.66659 7.63197 8.36811 7.3335 7.99992 7.3335C7.63173 7.3335 7.33325 7.63197 7.33325 8.00016C7.33325 8.36835 7.63173 8.66683 7.99992 8.66683Z"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.6667 8.66683C13.0349 8.66683 13.3333 8.36835 13.3333 8.00016C13.3333 7.63197 13.0349 7.3335 12.6667 7.3335C12.2985 7.3335 12 7.63197 12 8.00016C12 8.36835 12.2985 8.66683 12.6667 8.66683Z"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.33341 8.66683C3.7016 8.66683 4.00008 8.36835 4.00008 8.00016C4.00008 7.63197 3.7016 7.3335 3.33341 7.3335C2.96522 7.3335 2.66675 7.63197 2.66675 8.00016C2.66675 8.36835 2.96522 8.66683 3.33341 8.66683Z"
                            stroke="#000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </DbLayout>
  );
}
