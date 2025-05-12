"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order product");
    router.push("/");
    //router.replace instead of router.push if you don't want to keep the order product page in the history stack
  };
  return (
    <>
        <h1>Order Product</h1>
        <p>Order product page</p>
        <br />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Order Product
        </button>
    </>
  );
}
