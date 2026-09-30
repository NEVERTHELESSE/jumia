import { FiArrowRight } from "react-icons/fi";
import Image from "~/components/Image";
import { sales } from "~/data/sales";
import FlashSalesInfo from "./FlashSalesInfo";
import { festivals } from "~/data/festival";
import { Link } from "react-router";

export default function Brand() {
  return (
    <main className="w-full rounded-2xl  bg-tertiary-500 mb-4  p-4">
      <div className="flex justify-between mb-2">
        <h3 className="text-2xl  text-white mr-3 font-bold  ">
          Brand Festival deals
        </h3>
        <button className="cursor-pointer bg-white rounded-full py-1 px-8 text-tertiary-500 flex items-center">
          <span className="mr-2 ">See All</span>
          <FiArrowRight />
        </button>
      </div>
      <p className="text-white mb-4">up to 70% off</p>
      <div className="flex flex-wrap ">
        {festivals.map(({ id, src, price, rate, title }) => (
          <Link
            to="product"
            key={id}
            className="my-2 w-[calc(100%/6-8px)] mr-2 cursor-pointer overflow-hidden  bg-cover rounded-2xl"
          >
            <div className="w-full h-50 hover:scale-105 duration-200 ">
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
