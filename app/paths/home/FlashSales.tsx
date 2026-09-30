import Image from "~/components/Image";
import FlashSalesInfo from "./FlashSalesInfo";
import Countdown from "~/components/Countdown";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { supabase } from "~/lib/supabase";
import CartLoading from "~/loading/CartLoading";

export default function FlashSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  type d = { data: any; error: any };
  async function getProduct() {
    const { data, error }: d = await supabase.from("product").select("*");
    if (error) {
      console.error(error);
      return;
    } else {
      setProducts(data);
    }
  }

  return (
    <main className="sm:h-125 w-full my-4 rounded-2xl bg-tertiary-600 p-4">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <h3 className="text-2xl  text-white mr-3 font-bold  ">Flash Sales</h3>
          <Countdown />
        </div>
        <button className="cursor-pointer bg-white rounded-full py-1 px-2 sm:px-8 text-tertiary-600 flex items-center">
          <span className="mr-2 hidden sm:block">See All</span>
          <FiArrowRight />
        </button>
      </div>

      {products.length > 1 ? (
        <div className="flex overflow-hidden">
          {products.map(({ id, src, numberOfItem, price, rate, title }) => (
            <Link
              // to={title}
              to={title}
              key={id}
              className="w-50 sm:min-w-55 mr-2 sm:mr-4 cursor-pointer overflow-hidden h-[calc(100%-2rem)] bg-white rounded-2xl"
            >
              <div className="size-50  sm:size-60 hover:scale-105 duration-200 ">
                <Image src={src[0]} alt="bass" />
              </div>
              <FlashSalesInfo
                numberOfItem={numberOfItem}
                price={price}
                rate={rate}
                title={title}
              />
            </Link>
          ))}
        </div>
      ) : (
        <CartLoading />
      )}
    </main>
  );
}
