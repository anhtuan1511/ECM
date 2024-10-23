import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "@/fireBaseConfig";


export default function ProductList() {
    const[products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Kids"));
        // console.log("🚀 ~ fetchProducts ~ querySnapshot:", querySnapshot)
        const productsData = querySnapshot.docs.map((doc)=>(

        {
            id: doc.id,
            ...doc.data(),
            
        }))
        setProducts(productsData)
        console.log("🚀 ~ fetchProducts ~ productsData:", productsData)
      } catch (error) {
        console.log("🚀 ~ fetchProducts ~ error:", error);

      }
    };
fetchProducts ();
},[]);

  return <div>
    {
        products &&
        products.map ((item) =>(
            <p>{item?.Name}</p>
        ))
    }
  </div>;
}
