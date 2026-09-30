import { useState } from "react";
import AdminAddProduct from "./AdminAddProduct";

export default function AdminProduct() {
  const lists = ["Add Product", "All Product", "Out of Stock", ""];
  const [selected, setSelected] = useState("All Product");
  return (
    <div className="py-6 w-full ">
      <div className="flex mb-6">
        {lists.map((list) => (
          <button
            onClick={() => setSelected(list)}
            key={list}
            className={` mr-4 cursor-pointer  py-1 ${list === selected ? "border-b-primary border-b-4" : " text-soft"}`}
          >
            {list}
          </button>
        ))}
      </div>
      <AdminAddProduct />
    </div>
  );
}
