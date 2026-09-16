import Image from "~/components/Image";
import FlashSalesInfo from "./FlashSalesInfo";
import Countdown from "~/components/Countdown";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { sales } from "~/data/sales";

export default function FlashSales() {
  return (
    <main className="h-125 my-4 rounded-2xl bg-tertiary-600 p-4">
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <h3 className="text-2xl  text-white mr-3 font-bold  ">Flash Sales</h3>
          <Countdown />
        </div>
        <button className="cursor-pointer bg-white rounded-full py-1 px-8 text-tertiary-600 flex items-center">
          <span className="mr-2">See All</span>
          <FiArrowRight />
        </button>
      </div>

      <div className="flex overflow-hidden">
        {sales.map(({ id, src, numberOfItem, price, rate, title }) => (
          <div
            key={id}
            className="min-w-55 mr-4 cursor-pointer overflow-hidden h-[calc(100%-2rem)] bg-white rounded-2xl"
          >
            <div className="w-60 h-60 hover:scale-105 duration-200 ">
              <Image src={src[0]} alt="bass" />
            </div>
            <FlashSalesInfo
              numberOfItem={numberOfItem}
              price={price}
              rate={rate}
              title={title}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
