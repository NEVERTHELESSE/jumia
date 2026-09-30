import Image from "~/components/Image";
import FlashSalesInfo from "./FlashSalesInfo";
import { sales } from "~/data/sales";
import { FiArrowRight } from "react-icons/fi";
import type { reuse } from "~/types/type";
import { Link } from "react-router";

export default function Light({ title }: reuse) {
  return (
    <main className="w-full rounded-2xl h-125 bg-tertiary-400 mb-4 p-4 shadow">
      <div className="flex justify-between mb-2">
        <h3 className="text-2xl mr-3 font-bold capitalize text-tertiary-500">
          {title}
        </h3>
        <button className="cursor-pointer bg-white rounded-full py-1 px-8 text-tertiary-500 flex items-center">
          <span className="mr-2 ">See All</span>
          <FiArrowRight />
        </button>
      </div>
      <p className="text-tertiary-500 mb-4">up to 50% off</p>
      <div className="flex overflow-hidden ">
        {sales.map(({ id, src, price, rate, title }) => (
          <Link
            to="product"
            key={id}
            className="min-w-55 mr-4 cursor-pointer overflow-hidden h-[calc(100%-2rem)] bg-white rounded-2xl"
          >
            <div className="w-60 h-60 hover:scale-105 duration-200 ">
              <Image src={src[0]} alt="bass" />
            </div>
            <FlashSalesInfo
              numberOfItem={0}
              price={price}
              rate={rate}
              title={title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
