import { useState } from "react";
import Image from "~/components/Image";
import { supabase } from "~/lib/supabase";

export default function AdminAddProduct() {
  const [src, setSrc] = useState("");

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  async function addProduct(e: any) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("product")
      .insert({
        title,
        price,
        productImage: [src],
      })
      .select();
    if (error) {
      console.log(error);
      return;
    }
    console.log("insertId:", data);
  }

  return (
    <form
      className="w-[60vw] border-t py-4 flex justify-between"
      onSubmit={addProduct}
    >
      <div className="w-[50%]">
        <div className="w-full mb-2">
          <p>Title</p>
          <input
            type="text"
            className="p-6 w-full rounded-2xl  border  "
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full mb-2">
          <p>Price</p>
          <input
            type="number"
            className="p-6 w-full rounded-2xl  border  "
            onChange={(e: any) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-full mb-2">
          <p>Description</p>
          <textarea
            className="p-6 w-full rounded-2xl  border  "
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </div>
        <div className="w-full mb-2">
          <p>Discount</p>
          <input
            placeholder="30% (Optional)"
            className="p-6 w-full rounded-2xl  border  "
            type="number"
            onChange={(e: any) => setDiscount(e.target.value)}
          />
        </div>
      </div>
      <div>
        <input
          onChange={(e: any) => setSrc(e.target.value)}
          type="text"
          className="p-4 rounded-lg border w-full "
          placeholder="Paste image url here"
        />
        <p className="text-center my-3">or</p>
        <div className="size-80 rounded-2xl border flex items-center justify-center flex-col relative">
          <h3 className="absolute">Choose or Drop File here</h3>
          {src != "" && <Image src={src} alt="image" />}
          <input
            type="file"
            className="size-full absolute cursor-pointer opacity-0"
          />
        </div>
        <div className="flex mt-3">
          <div className="border size-15">
            <input
              type="file"
              className="size-30 border absolute cursor-pointer opacity-0"
            />
          </div>
        </div>
        <button className="w-full bg-primary text-white p-3 rounded-2xl my-5 cursor-pointer">
          Add Product
        </button>
      </div>
    </form>
  );
}
